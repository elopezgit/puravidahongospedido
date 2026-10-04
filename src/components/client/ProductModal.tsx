import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Sparkles, Droplets } from 'lucide-react';
import Badge from '../ui/Badge';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url?: string;
  stock?: number;
  benefits?: string[];
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, notes: string) => void;
  eyebrow?: string;
  fallbackImage?: string;
  emptyDescription?: string;
}

export default function ProductModal({
  product,
  isOpen,
  onClose,
  onAddToCart,
  eyebrow = 'HONGOS PURA VIDA · EXTRACTOS PUROS',
  fallbackImage = '/img/logo/puravidahongos_logo.svg',
  emptyDescription = 'Elixir de hongos medicinales y adaptógenos de alta pureza. Gotero de 50 ml con triple extracción cíclica.',
}: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (isOpen) {
      setQuantity(1);
      setNotes('');
    }
  }, [isOpen, product]);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity, notes);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-[100] backdrop-blur-sm"
            aria-hidden="true"
          />

          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Detalle de ${product.name}`}
            className="fixed bottom-0 left-0 right-0 z-[101] bg-white text-[#1D2218] rounded-t-3xl overflow-hidden flex flex-col max-h-[90vh] md:top-1/2 md:bottom-auto md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-lg md:rounded-3xl shadow-2xl border border-[#E1E6DA]"
          >
            {/* Header Image with Botanical Gradient */}
            <div className="relative h-64 bg-[#141810] shrink-0">
              <img
                src={product.image_url || fallbackImage}
                alt={product.name}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141810] via-[#141810]/30 to-transparent"></div>

              <div className="absolute bottom-4 left-6 z-10 flex flex-col items-start gap-1">
                <Badge variant="primary" size="sm">
                  {eyebrow}
                </Badge>
              </div>

              <button
                onClick={onClose}
                aria-label="Cerrar detalle del elixir"
                className="absolute top-4 right-4 p-2.5 bg-white/90 text-[#1D2218] rounded-full border border-[#E1E6DA] shadow-md hover:bg-[#525B38] hover:text-white transition-colors z-20 focus-ring"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            {/* Content Details */}
            <div className="flex-1 overflow-y-auto hide-scrollbar p-6 bg-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#8E5238] bg-[#F4E3D8] px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                  <Droplets size={12} />
                  Gotero 50ml · Triple Extracción
                </span>
              </div>

              <h2 className="text-2xl font-normal text-[#1D2218] mb-2 leading-tight font-display">
                {product.name}
              </h2>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-extrabold text-2xl text-[#525B38]">
                  ${product.price.toLocaleString('es-AR')}
                </span>
              </div>

              <p className="text-[#545D4B] leading-relaxed mb-6 text-sm">
                {product.description || emptyDescription}
              </p>

              {/* Botanical Benefits highlight */}
              <div className="bg-[#F8F6F1] rounded-2xl p-4 border border-[#E1E6DA] mb-5">
                <h4 className="text-xs font-bold text-[#525B38] uppercase tracking-wider flex items-center gap-1.5 mb-2">
                  <Sparkles size={14} className="text-[#8E5238]" />
                  Propiedades & Modo de Uso
                </h4>
                <ul className="text-xs text-[#545D4B] space-y-1.5 leading-relaxed">
                  <li>• Tomar 1 a 2 goteros diarios bajo la lengua o disuelto en agua tibia o infusión.</li>
                  <li>• Sin alcohol residual irritante, 100% extracto botánico activo.</li>
                  <li>• Conservar en lugar fresco y seco alejado de la luz solar directa.</li>
                </ul>
              </div>

              <div className="mb-2">
                <label htmlFor="product-notes" className="block text-xs font-extrabold uppercase tracking-wider text-[#525B38] mb-1.5">
                  Aclaraciones o indicaciones especiales
                </label>
                <textarea
                  id="product-notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ej: Aclaraciones sobre envío, notas para regalo o preferencia de entrega..."
                  aria-label="Instrucciones para el pedido"
                  className="w-full bg-[#F8F6F1] border border-[#E1E6DA] rounded-xl p-3 text-sm text-[#1D2218] focus:ring-2 focus:ring-[#525B38]/25 focus:border-[#525B38] outline-none transition-all resize-none h-20 placeholder:text-[#8A9380]"
                />
              </div>
            </div>

            {/* Bottom Sticky Action Bar */}
            <div className="p-5 border-t border-[#E1E6DA] bg-[#F8F6F1]/90 shrink-0">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="flex items-center bg-white rounded-2xl p-1 border border-[#E1E6DA] shadow-sm">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      aria-label={`Reducir cantidad a ${Math.max(1, quantity - 1)}`}
                      className="w-9 h-9 flex items-center justify-center bg-[#F4F6F0] hover:bg-[#DCE5D0] rounded-xl text-[#1D2218] active:scale-95 transition-all focus-ring"
                    >
                      <Minus size={16} aria-hidden="true" />
                    </button>
                    <span className="font-bold w-8 text-center text-[#1D2218] text-base" aria-live="polite">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      aria-label={`Aumentar cantidad a ${quantity + 1}`}
                      className="w-9 h-9 flex items-center justify-center bg-[#525B38] hover:bg-[#41492C] rounded-xl text-white active:scale-95 transition-all focus-ring"
                    >
                      <Plus size={16} aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="text-2xl font-extrabold text-[#1D2218]" aria-live="polite">
                  ${(product.price * quantity).toLocaleString('es-AR')}
                </div>
              </div>

              <button
                onClick={handleAdd}
                aria-label={`Agregar ${quantity} ${product.name} al pedido`}
                className="w-full bg-gradient-to-r from-[#525B38] to-[#41492C] hover:brightness-110 text-white py-3.5 rounded-2xl font-bold uppercase tracking-wider text-sm shadow-lg shadow-[#525B38]/25 transition-all active:scale-[0.98] focus-ring"
              >
                Agregar al pedido
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}