import { createContext, useContext, useState, useRef, ReactNode, useEffect, useCallback } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  notes?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: { id: string; name: string; price: number }, quantity?: number, notes?: string) => void;
  removeFromCart: (id: string, notes?: string) => void;
  updateQuantity: (id: string, quantity: number, notes?: string) => void;
  updateItemNotes: (id: string, oldNotes: string | undefined, newNotes: string) => void;
  clearCart: () => void;
  total: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  itemCount: number;
  /**
   * Aísla el carrito por tenant. Cada empresa usa su propia clave en
   * localStorage, así los pedidos de un cliente nunca se mezclan con otro.
   */
  setCartScope: (scope: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

/* ─── Persistencia en localStorage (aislada por tenant) ─── */
const DEFAULT_SCOPE = 'puravidahongos';

const storageKey = (scope: string) => `cart_${scope || DEFAULT_SCOPE}`;

function saveCart(scope: string, items: CartItem[]) {
  try {
    localStorage.setItem(storageKey(scope), JSON.stringify(items));
  } catch { /* quota exceeded, silently fail */ }
}

function loadCart(scope: string): CartItem[] {
  const key = storageKey(scope);
  try {
    const saved = localStorage.getItem(key);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch { /* invalid JSON, ignore */ }
  return [];
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => loadCart(DEFAULT_SCOPE));
  const [isCartOpen, setIsCartOpen] = useState(false);
  const scopeRef = useRef<string>(DEFAULT_SCOPE);

  // Persistir cambios automáticamente (siempre en la clave del tenant activo)
  useEffect(() => {
    saveCart(scopeRef.current, items);
  }, [items]);

  /** Cambia de tenant: guarda el carrito actual y carga el del nuevo. */
  const setCartScope = useCallback((scope: string) => {
    const next = (scope || DEFAULT_SCOPE).trim().toLowerCase() || DEFAULT_SCOPE;
    if (next === scopeRef.current) return;
    saveCart(scopeRef.current, items);
    scopeRef.current = next;
    setItems(loadCart(next));
    setIsCartOpen(false);
  }, [items]);

  const addToCart = useCallback((product: { id: string; name: string; price: number }, quantity = 1, notes = '') => {
    setItems(current => {
      const cartKey = notes ? `${product.id}-${notes}` : product.id;
      
      const existing = current.find(item => (item.notes ? `${item.id}-${item.notes}` : item.id) === cartKey);
      if (existing) {
        return current.map(item => 
          (item.notes ? `${item.id}-${item.notes}` : item.id) === cartKey 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      }
      return [...current, { ...product, quantity, notes }];
    });
  }, []);

  const removeFromCart = useCallback((id: string, notes?: string) => {
    setItems(current => current.filter(item => {
      const itemKey = item.notes ? `${item.id}-${item.notes}` : item.id;
      const removeKey = notes ? `${id}-${notes}` : id;
      return itemKey !== removeKey;
    }));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number, notes?: string) => {
    if (quantity <= 0) {
      removeFromCart(id, notes);
      return;
    }
    setItems(prev => prev.map(item => {
      const itemKey = item.notes ? `${item.id}-${item.notes}` : item.id;
      const targetKey = notes ? `${id}-${notes}` : id;
      return itemKey === targetKey ? { ...item, quantity } : item;
    }));
  }, [removeFromCart]);

  const updateItemNotes = useCallback((id: string, oldNotes: string | undefined, newNotes: string) => {
    setItems(prev => prev.map(item => {
      const itemKey = item.notes ? `${item.id}-${item.notes}` : item.id;
      const targetKey = oldNotes ? `${id}-${oldNotes}` : id;
      return itemKey === targetKey ? { ...item, notes: newNotes } : item;
    }));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    try { localStorage.removeItem(storageKey(scopeRef.current)); } catch { /* ignore */ }
  }, []);

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      updateItemNotes,
      clearCart,
      total,
      isCartOpen,
      setIsCartOpen,
      itemCount,
      setCartScope,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
