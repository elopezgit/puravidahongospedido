import { useEffect, useState, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Search, MapPin, Plus, Minus, Star, ChevronRight, RotateCcw } from 'lucide-react';
import { useCart } from '../lib/CartContext';
import { normalizeText, matchesSearchQuery } from '../utils/searchUtils';
import CartModal from '../components/client/CartModal';
import ProductModal from '../components/client/ProductModal';
import OrderTrackerModal from '../components/client/OrderTrackerModal';
import { motion, AnimatePresence } from 'framer-motion';
import { getEmpresaData } from '../lib/getEmpresa';
import {
  DEFAULT_AVENTUS_CATEGORIES,
  DEFAULT_AVENTUS_PRODUCTS,
  filterAventusCategories,
  filterAventusProducts
} from '../lib/defaultCatalog';
import { ProductCardSkeleton } from '../components/ui/Skeleton';
import ErrorRetry from '../components/ui/ErrorRetry';
import Badge from '../components/ui/Badge';

/* ─── Constantes de marca ─── */
const BRAND = 'AVENTUS';
const WHATSAPP_NUMBER = '5493815102886';
const WHATSAPP_MESSAGE = `¡Hola ${BRAND}! Quisiera consultar por un perfume.`;
const SLUG_DEFAULT = 'aventus';

/* ─── Interfaces ─── */
interface Empresa {
  id: string;
  name: string;
  phone: string;
  instagram_url: string;
  maps_url: string;
  alias?: string;
  cbu?: string;
}

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category_id: string;
  image_url?: string;
  is_active: boolean;
  sort_order?: number;
  code?: string;
}

interface Banner {
  id: string;
  image_url: string;
  link?: string;
  title?: string;
  subtitle?: string;
}

/* ─── Constants ─── */
const CATEGORY_IMAGES: Record<string, string> = {
  'perfumes arabes': '/img/Categories/arabes.jpg',
  'inspiraciones & extractos': '/img/Categories/extractos.jpg',
  'miniaturas & decants': '/img/Categories/miniaturas.jpg',
  'desodorantes & splash': '/img/Categories/desodorantes.jpg',
  'cuidado capilar': '/img/Categories/pelo.jpg',
};

// Normaliza un nombre de categoría para lookup estable (minúsculas, sin tildes)
const normalizeKey = normalizeText;

const getCategoryImage = (name: string) => CATEGORY_IMAGES[normalizeKey(name)] || '/img/Perfumes/generico.svg';


const CATEGORY_KEYWORDS_MAP: Record<string, string[]> = {
  'perfumes arabes': ['Lattafa', 'Armaf', 'Afnan', 'Oud', 'Premium'],
  'inspiraciones & extractos': ['Extracto', 'Midoré', 'Only You', 'Plata', 'Intense'],
  'miniaturas & decants': ['Miniatura', 'Decant', 'Tubito', 'Viaje', 'Bolsillo'],
  'desodorantes & splash': ['Desodorante', 'Roll-on', 'Body spray', 'Árabe'],
  'cuidado capilar': ['Pelo', 'Aceite', 'Bruma', 'Cabello'],
  'todas': ['Árabe', 'Extracto', 'Midoré', 'Decant', 'Oud', 'Premium'],
};

const FALLBACK_BANNERS: Banner[] = [
  { id: '1', image_url: '/img/Banner/banner1.jpg', title: 'EL PARAÍSO DE LOS PERFUMES', subtitle: '8 años junto a vos 🤍' },
  { id: '2', image_url: '/img/Banner/banner2.jpg', title: 'PERFUMES ÁRABES PREMIUM', subtitle: 'Lattafa · Armaf · Afnan · Al Haramain' },
  { id: '3', image_url: '/img/Banner/banner3.jpg', title: 'ENVÍOS A TODO EL PAÍS', subtitle: 'Ventas por mayor y menor · WhatsApp' },
];

export default function ClientHome() {
  const { empresaSlug } = useParams<{ empresaSlug?: string }>();
  const activeSlug = empresaSlug || SLUG_DEFAULT;

  /* ─── Data State ─── */
  const [empresa, setEmpresa] = useState<Empresa | null>(null);
  const [categories, setCategories] = useState<Category[]>(DEFAULT_AVENTUS_CATEGORIES);
  const [products, setProducts] = useState<Product[]>(DEFAULT_AVENTUS_PRODUCTS as unknown as Product[]);
  const [banners, setBanners] = useState<Banner[]>([]);

  /* ─── UI State ─── */
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showSplash, setShowSplash] = useState(true);
  const [lastOrder, setLastOrder] = useState<any[]>([]);
  const [activeOrderId, setActiveOrderId] = useState<string | null>(null);
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | 'todas'>('todas');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedKeyword, setSelectedKeyword] = useState<string>('todas');
  const [selectedGender, setSelectedGender] = useState<string>('todos'); // 'todos', 'Hombre', 'Mujer', 'Unisex'
  const [selectedBrand, setSelectedBrand] = useState<string>('todas');
  const [bannerIndex, setBannerIndex] = useState(0);

  /* ─── Cart ─── */
  const { items, setIsCartOpen, addToCart, removeFromCart, updateQuantity, clearCart, itemCount } = useCart();

  /* ─── Derived constants ─── */
  const displayBanners = banners.length > 0 ? banners : FALLBACK_BANNERS;

  /* ─── Banner Auto-scroll ─── */
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoScroll = useCallback(() => {
    if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
    scrollIntervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const firstChild = scrollRef.current.children[0] as HTMLElement;
        const cardWidth = firstChild ? firstChild.offsetWidth + 16 : 320;

        if (scrollLeft >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 4000);
  }, []);

  const stopAutoScroll = useCallback(() => {
    if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
  }, []);

  // Track banner scroll position for dot indicators
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll <= 0) return;
      const ratio = scrollLeft / maxScroll;
      const totalSlides = displayBanners.length - 1;
      setBannerIndex(Math.round(ratio * totalSlides));
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [banners, displayBanners.length]);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [startAutoScroll, stopAutoScroll]);

  /* ─── Data Fetching ─── */
  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const empData = await getEmpresaData(activeSlug);
      if (empData) {
        setEmpresa(empData);

        const savedOrder = localStorage.getItem(`lastOrder_${empData.id}`);
        if (savedOrder) {
          try { setLastOrder(JSON.parse(savedOrder)); } catch {}
        }

        const activeOrder = localStorage.getItem(`activeOrder_${empData.id}`);
        if (activeOrder) setActiveOrderId(activeOrder);

        const [cats, prods, bans] = await Promise.all([
          supabase.from('categories').select('*').eq('empresa_id', empData.id),
          supabase.from('products').select('*').eq('empresa_id', empData.id).eq('is_active', true),
          supabase.from('banners').select('*').eq('empresa_id', empData.id).eq('is_active', true),
        ]);

        const cleanCategories = filterAventusCategories(cats.data || []);
        const cleanProducts = filterAventusProducts(prods.data || []);

        if (cleanCategories.length > 0) setCategories(cleanCategories);
        if (cleanProducts.length > 0) setProducts(cleanProducts as unknown as Product[]);
        if (bans.data && bans.data.length > 0) {
          setBanners(bans.data.sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0)));
        }
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
      setTimeout(() => setShowSplash(false), 2600);
    }
  }, [activeSlug]);

  useEffect(() => { loadData(); }, [loadData]);

  /* ─── Derived State ─── */
  const activeCategoryName = activeCategory === 'todas'
    ? 'todas'
    : categories.find(c => c.id === activeCategory)?.name || 'todas';

  const availableKeywords = CATEGORY_KEYWORDS_MAP[activeCategoryName === 'todas' ? 'todas' : normalizeKey(activeCategoryName)] || CATEGORY_KEYWORDS_MAP['todas'];

  const filteredProducts = products.filter(p => {
    const kw = normalizeKey(selectedKeyword);
    const pName = normalizeKey(p.name);
    const pDesc = p.description ? normalizeKey(p.description) : '';
    const catName = normalizeKey(categories.find(c => c.id === p.category_id)?.name || '');

    // Gender inference
    const productGender = (p as any).gender || (
      (pName.includes('femme') || pName.includes('women') || pName.includes('mujer') || pName.includes('yara') || pName.includes('miss')) ? 'Mujer' :
      (pName.includes('homme') || pName.includes('men ') || pName.includes('hombre') || pName.includes('club de nuit intense man') || pName.includes('asad') || pName.includes('hawas')) ? 'Hombre' : 'Unisex'
    );

    // Brand inference
    let productBrand = 'Otras';
    if (p.name.includes('—')) productBrand = p.name.split('—')[0].trim();
    else if (p.name.includes('-')) productBrand = p.name.split('-')[0].trim();

    const matchesSearch = matchesSearchQuery(searchQuery, [
      p.name, 
      p.description, 
      p.code, 
      catName, 
      productBrand, 
      productGender
    ]);
    
    // When searching manually, ignore category and keyword filters to perform a global search
    const matchesCategory = searchQuery 
      ? true 
      : activeCategory === 'todas' || p.category_id === activeCategory;
      
    const matchesKeyword = searchQuery 
      ? true 
      : selectedKeyword === 'todas' ||
        pName.includes(kw) ||
        pDesc.includes(kw) ||
        catName.includes(kw);

    const matchesGender = selectedGender === 'todos' || productGender === selectedGender;
    const matchesBrand = selectedBrand === 'todas' || productBrand === selectedBrand;
                          
    return matchesSearch && matchesCategory && matchesKeyword && matchesGender && matchesBrand;
  });

  const availableBrands = Array.from(new Set(products.map(p => {
    if (p.name.includes('—')) return p.name.split('—')[0].trim();
    if (p.name.includes('-')) return p.name.split('-')[0].trim();
    return 'Otras';
  }))).filter(b => b !== 'Otras').sort();

  const getProductQuantity = (productId: string) => {
    return items.filter(i => i.id === productId).reduce((acc, curr) => acc + curr.quantity, 0);
  };

  const handleSelectCategory = (catId: string) => {
    setActiveCategory(catId);
    setSelectedKeyword('todas');
  };

  const handleReorder = () => {
    clearCart();
    lastOrder.forEach(item => {
      addToCart({ id: item.id, name: item.name, price: item.price }, item.quantity, item.notes);
    });
    setIsCartOpen(true);
  };

  /* ─── Splash Screen ─── */
  if (loading || showSplash) {
    return (
      <AnimatePresence>
        <motion.div
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          onClick={() => setShowSplash(false)}
          className="min-h-screen bg-[#FBF8F3] flex flex-col items-center justify-center relative overflow-hidden cursor-pointer select-none"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,98,0.14)_0%,_rgba(251,248,243,1)_70%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-lg mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#C9A962]/15 border border-[#C9A962]/30 px-4 py-1.5 rounded-full mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#C9A962] animate-ping" aria-hidden="true" />
              <span className="text-[11px] font-black uppercase tracking-widest text-[#A8863B]">
                EL PARAÍSO DE LOS PERFUMES 👑
              </span>
            </motion.div>

            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              className="relative mb-6"
            >
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-[#C9A962] shadow-xl overflow-hidden bg-white flex items-center justify-center relative z-10">
                <img
                  src="/img/logo/aventus_perfumeria.jpg"
                  alt="AVENTUS Perfumería"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl font-black text-stone-900 tracking-tight font-display drop-shadow-sm">
                AVENTUS
              </h1>
              <p className="text-xs sm:text-sm font-extrabold text-[#A8863B] uppercase tracking-widest mt-2">
                PERFUMERÍA PREMIUM &bull; 8 AÑOS JUNTO A VOS 🤍
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-2 mt-6"
            >
              <span className="bg-white border border-stone-200 text-stone-700 text-[10px] font-bold px-3 py-1.5 rounded-xl uppercase shadow-sm">
                Perfumes Árabes
              </span>
              <span className="bg-white border border-stone-200 text-stone-700 text-[10px] font-bold px-3 py-1.5 rounded-xl uppercase shadow-sm">
                Diseñador Original
              </span>
              <span className="bg-white border border-stone-200 text-stone-700 text-[10px] font-bold px-3 py-1.5 rounded-xl uppercase shadow-sm">
                Nacionales & Esencia
              </span>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
              className="mt-8 flex flex-col items-center gap-2"
            >
              <span className="bg-gradient-to-r from-[#A8863B] to-[#C9A962] text-white font-black text-base uppercase tracking-wider px-8 py-3.5 rounded-2xl shadow-lg shadow-[#C9A962]/30 active:scale-95 transition-transform">
                ENTRAR AL CATÁLOGO
              </span>
              <span className="text-[11px] text-stone-500 font-medium">
                Toca en cualquier lugar para ingresar
              </span>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  /* ─── Error State ─── */
  if (error && !empresa) {
    return <ErrorRetry message={error} onRetry={loadData} fullScreen />;
  }

  if (!empresa) {
    return <ErrorRetry message="No se pudo cargar la empresa. Verificá la conexión." onRetry={loadData} fullScreen />;
  }

  /* ─── Loading Skeleton ─── */
  if (loading) {
    return (
      <div className="min-h-screen bg-[#FBF8F3] pb-28">
        <header className="bg-white/95 pt-6 pb-5 px-4 border-b border-stone-200">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-[52px] h-[52px] rounded-2xl bg-stone-200 animate-pulse" />
              <div className="space-y-2">
                <div className="h-5 w-32 bg-stone-200 rounded animate-pulse" />
                <div className="h-3 w-48 bg-stone-200 rounded animate-pulse" />
              </div>
            </div>
            <div className="h-12 bg-stone-200 rounded-2xl animate-pulse" />
          </div>
        </header>
        <main className="max-w-6xl mx-auto mt-4 px-4">
          <div className="flex gap-4 mb-8 overflow-hidden">
            {[1, 2, 3].map(i => (
              <div key={i} className="shrink-0 w-[85vw] max-w-[340px] h-44 rounded-3xl bg-stone-200 animate-pulse" />
            ))}
          </div>
          <div className="flex gap-3 mb-8 overflow-hidden">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="shrink-0 w-36 h-28 rounded-2xl bg-stone-200 animate-pulse" />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map(i => <ProductCardSkeleton key={i} />)}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBF8F3] pb-28 font-sans text-stone-800">
      {/* ═══════ HEADER ═══════ */}
      <header className="bg-white/95 pt-6 pb-5 px-4 sticky top-0 z-40 border-b border-stone-200 backdrop-blur-xl shadow-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3.5">
               <div className="w-[52px] h-[52px] bg-white rounded-2xl border-2 border-[#C9A962] flex items-center justify-center shadow-sm overflow-hidden shrink-0 transition-transform hover:scale-105">
                  <img src="/img/logo/aventus_perfumeria.jpg" alt="AVENTUS Perfumería Logo" className="w-full h-full object-cover" />
               </div>
               <div>
                 <h1 className="text-xl md:text-2xl font-black tracking-tight text-stone-900 font-display uppercase">
                   AVENTUS
                 </h1>
                 <div className="flex items-center gap-2 text-xs font-semibold text-stone-600 mt-0.5">
                   <span className="flex items-center gap-1 font-extrabold text-[#A8863B] uppercase tracking-wider">
                     Perfumería Premium
                   </span>
                   <span className="text-stone-300">&bull;</span>
                   <span className="flex items-center gap-1 text-stone-500">
                     <MapPin size={11} className="text-[#A8863B]" aria-hidden="true" /> Envíos a todo el país
                   </span>
                 </div>
               </div>
            </div>

            <div className="flex items-center gap-2.5">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Consultar por WhatsApp"
                className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all shadow-sm focus-ring"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
              </a>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-[#A8863B] transition-colors" size={18} aria-hidden="true" />
            <input
              type="text"
              placeholder="Buscar perfumes, marcas, árabes, tester..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Buscar productos"
              className="w-full bg-stone-100 border border-stone-200 text-stone-900 rounded-2xl py-3.5 pl-12 pr-4 shadow-inner outline-none focus:bg-white focus:border-[#C9A962] focus:ring-2 focus:ring-[#C9A962]/20 transition-all text-sm placeholder:text-stone-400"
            />
          </div>

          {activeOrderId && !searchQuery && (
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => setIsTrackerOpen(true)}
              aria-label="Seguir pedido en vivo"
              className="w-full mt-4 bg-amber-50 border border-amber-300 text-amber-800 py-3 px-4 rounded-xl flex items-center justify-between font-bold text-sm shadow-sm focus-ring"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3 mr-1" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                </span>
                Sigue tu pedido en vivo
              </div>
              <ChevronRight size={18} aria-hidden="true" />
            </motion.button>
          )}
        </div>
      </header>

      <main className="mt-2 max-w-6xl mx-auto w-full">
        {/* ═══════ REORDER ═══════ */}
        {lastOrder.length > 0 && !searchQuery && (
          <section className="px-4 py-2 mt-2">
            <button
              onClick={handleReorder}
              aria-label="Repetir último pedido"
              className="w-full bg-white border border-stone-200 p-4 rounded-2xl flex items-center justify-between shadow-sm hover:shadow-md transition-all focus-ring"
            >
              <div className="flex items-center gap-3 text-left">
                <div className="bg-[#C9A962]/15 p-2.5 rounded-full text-[#A8863B]">
                  <RotateCcw size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-sm">Pedir lo mismo de nuevo</h3>
                  <p className="text-xs text-stone-500">Tu último pedido fue increíble.</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-stone-400" aria-hidden="true" />
            </button>
          </section>
        )}

        {/* ═══════ BANNERS CAROUSEL ═══════ */}
        {!searchQuery && (
          <section className="py-4 overflow-hidden relative group" aria-label="Banners promocionales">
            <div
              ref={scrollRef}
              onTouchStart={stopAutoScroll}
              onTouchEnd={() => setTimeout(startAutoScroll, 5000)}
              onMouseEnter={stopAutoScroll}
              onMouseLeave={() => setTimeout(startAutoScroll, 5000)}
              className="flex gap-4 px-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-2"
              style={{ scrollBehavior: 'smooth' }}
            >
              {displayBanners.map((banner) => (
                <div
                  key={banner.id}
                  className="shrink-0 w-[85vw] max-w-[340px] md:w-96 h-44 rounded-3xl overflow-hidden relative border border-stone-200 shadow-md block bg-stone-900 snap-center group/banner cursor-pointer"
                >
                  <img
                    src={banner.image_url}
                    alt={banner.title || `Promoción ${BRAND}`}
                    className="w-full h-full object-cover opacity-80 group-hover/banner:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/35 to-transparent"></div>

                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="inline-block bg-[#C9A962] text-stone-950 font-extrabold text-[10px] px-2.5 py-0.5 rounded-md uppercase tracking-widest mb-1.5 shadow-sm">
                      AVENTUS
                    </span>
                    {banner.title && (
                      <h3 className="text-white font-black text-lg leading-tight uppercase tracking-tight drop-shadow-sm">
                        {banner.title}
                      </h3>
                    )}
                    {banner.subtitle && (
                      <p className="text-stone-200 text-xs font-medium mt-0.5 line-clamp-1">
                        {banner.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Dot Indicators */}
            {displayBanners.length > 1 && (
              <div className="flex justify-center gap-1.5 mt-3" role="tablist" aria-label="Navegación de banners">
                {displayBanners.map((banner, idx) => (
                  <button
                    key={banner.id}
                    onClick={() => {
                      const el = scrollRef.current;
                      if (!el) return;
                      const child = el.children[idx] as HTMLElement;
                      if (child) child.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                    }}
                    role="tab"
                    aria-selected={idx === bannerIndex}
                    aria-label={`Banner ${idx + 1} de ${displayBanners.length}`}
                    className={`w-2 h-2 rounded-full transition-all duration-300 focus-ring ${
                      idx === bannerIndex
                        ? 'bg-[#A8863B] w-5'
                        : 'bg-stone-300 hover:bg-stone-400'
                    }`}
                  />
                ))}
              </div>
            )}
          </section>
        )}

        {/* ═══════ CATEGORY SELECTOR — Mosaico Premium ═══════ */}
        {!searchQuery && (
          <section className="px-4 mb-8">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-black text-stone-900 tracking-tight uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C9A962]" aria-hidden="true"></span>
                Categorías Oficiales
              </h2>
              <button
                onClick={() => handleSelectCategory('todas')}
                aria-label="Ver todos los productos"
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-black uppercase tracking-wider border transition-all focus-ring ${
                  activeCategory === 'todas'
                    ? 'bg-gradient-to-r from-[#A8863B] to-[#C9A962] text-white border-[#C9A962] shadow-sm'
                    : 'bg-white text-stone-600 border-stone-200 hover:border-[#A8863B] hover:text-[#A8863B] shadow-sm'
                }`}
              >
                <Star size={12} aria-hidden="true" />
                Ver todas
              </button>
            </div>

            <div className="flex gap-5 md:gap-8 overflow-x-auto hide-scrollbar pb-2 pt-2 -mx-4 px-4 md:mx-0 md:px-0">
              {categories.map((cat, i) => {
                const isActive = activeCategory === cat.id;
                
                return (
                  <motion.button
                    key={cat.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * (i + 1) }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSelectCategory(cat.id)}
                    aria-label={`Categoría ${cat.name}`}
                    className="flex flex-col items-center gap-2.5 shrink-0 group focus-ring"
                  >
                    <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden transition-all duration-500 flex items-center justify-center bg-white ${
                      isActive 
                        ? 'border-[1.5px] border-[#C9A962] shadow-luxury ring-4 ring-[#C9A962]/10 scale-105' 
                        : 'border border-stone-200/60 group-hover:border-[#C9A962]/40 shadow-sm group-hover:shadow-luxury-hover group-hover:-translate-y-1'
                    }`}>
                      <img
                        src={getCategoryImage(cat.name)}
                        alt={cat.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <span className={`text-[12px] md:text-[13px] font-bold text-center w-20 md:w-24 leading-tight transition-colors ${
                      isActive ? 'text-[#A8863B]' : 'text-stone-800 group-hover:text-stone-900'
                    }`}>
                      {cat.name}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </section>
        )}

        {/* ═══════ ADVANCED FILTERS ═══════ */}
        <section className="px-4 mb-8 space-y-4">
          
          {/* Brand Filter */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                Filtrar por Marca
              </span>
              {selectedBrand !== 'todas' && (
                <button
                  onClick={() => setSelectedBrand('todas')}
                  className="text-[11px] font-bold text-[#A8863B] hover:underline focus-ring"
                >
                  Limpiar marca
                </button>
              )}
            </div>
            <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-1 -mx-4 px-4">
              <button
                onClick={() => setSelectedBrand('todas')}
                className={`shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all border focus-ring ${
                  selectedBrand === 'todas'
                    ? 'bg-[#A8863B] text-white border-[#A8863B] shadow-sm'
                    : 'bg-white text-stone-600 border-stone-200 hover:border-[#A8863B] hover:text-[#A8863B] shadow-sm'
                }`}
              >
                Todas las Marcas
              </button>
              {availableBrands.map(brand => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(selectedBrand === brand ? 'todas' : brand)}
                  className={`shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all border focus-ring ${
                    selectedBrand === brand
                      ? 'bg-[#A8863B] text-white border-[#A8863B] shadow-sm scale-105'
                      : 'bg-white text-stone-700 border-stone-200 hover:border-[#A8863B] hover:text-[#A8863B] shadow-sm'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          {/* Gender & Keyword Filters Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Gender Filter */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                  Género
                </span>
                {selectedGender !== 'todos' && (
                  <button
                    onClick={() => setSelectedGender('todos')}
                    className="text-[11px] font-bold text-[#A8863B] hover:underline focus-ring"
                  >
                    Limpiar género
                  </button>
                )}
              </div>
              <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-1 -mx-4 px-4 md:mx-0 md:px-0">
                <button
                  onClick={() => setSelectedGender('todos')}
                  className={`shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all border focus-ring ${
                    selectedGender === 'todos'
                      ? 'bg-[#A8863B] text-white border-[#A8863B] shadow-sm'
                      : 'bg-white text-stone-600 border-stone-200 hover:border-[#A8863B] hover:text-[#A8863B] shadow-sm'
                  }`}
                >
                  Todos
                </button>
                {['Hombre', 'Mujer', 'Unisex'].map(gender => (
                  <button
                    key={gender}
                    onClick={() => setSelectedGender(selectedGender === gender ? 'todos' : gender)}
                    className={`shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all border focus-ring ${
                      selectedGender === gender
                        ? 'bg-[#A8863B] text-white border-[#A8863B] shadow-sm scale-105'
                        : 'bg-white text-stone-700 border-stone-200 hover:border-[#A8863B] hover:text-[#A8863B] shadow-sm'
                    }`}
                  >
                    {gender}
                  </button>
                ))}
              </div>
            </div>

            {/* Keyword Filter */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                  Tags Populares
                </span>
                {selectedKeyword !== 'todas' && (
                  <button
                    onClick={() => setSelectedKeyword('todas')}
                    className="text-[11px] font-bold text-[#A8863B] hover:underline focus-ring"
                  >
                    Limpiar tag
                  </button>
                )}
              </div>
              <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-1 -mx-4 px-4 md:mx-0 md:px-0">
                <button
                  onClick={() => setSelectedKeyword('todas')}
                  className={`shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all border focus-ring ${
                    selectedKeyword === 'todas'
                      ? 'bg-[#A8863B] text-white border-[#A8863B] shadow-sm'
                      : 'bg-white text-stone-600 border-stone-200 hover:border-[#A8863B] hover:text-[#A8863B] shadow-sm'
                  }`}
                >
                  # Todos
                </button>
                {availableKeywords.map(kw => (
                  <button
                    key={kw}
                    onClick={() => setSelectedKeyword(selectedKeyword === kw ? 'todas' : kw)}
                    className={`shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all border focus-ring ${
                      selectedKeyword === kw
                        ? 'bg-[#A8863B] text-white border-[#A8863B] shadow-sm scale-105'
                        : 'bg-white text-stone-700 border-stone-200 hover:border-[#A8863B] hover:text-[#A8863B] shadow-sm'
                    }`}
                  >
                    #{kw}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ PRODUCT LIST ═══════ */}
        <section className="px-4">
          {categories.map(category => {
            const categoryProducts = filteredProducts.filter(p => p.category_id === category.id).sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));
            if (categoryProducts.length === 0) return null;

            return (
              <div key={category.id} className="mb-10">
                <h2 className="text-lg font-black text-stone-900 mb-3.5 flex items-center gap-2.5 uppercase tracking-wide">
                  <img
                    src={getCategoryImage(category.name)}
                    alt={category.name}
                    className="w-9 h-9 rounded-xl object-cover border border-stone-200 shadow-sm"
                    loading="lazy"
                  />
                  <span>{category.name}</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoryProducts.map((product, idx) => {
                    const qty = getProductQuantity(product.id);

                    return (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.03 }}
                        key={product.id}
                        onClick={() => setSelectedProduct(product)}
                        className="glass-card rounded-3xl p-4 flex gap-5 relative cursor-pointer active:scale-[0.98] transition-all duration-500 hover:-translate-y-1 hover:shadow-luxury-hover hover:border-[#C9A962]/30 group focus-ring animate-fade-in"
                        role="button"
                        tabIndex={0}
                        aria-label={`${product.name} - $${product.price.toLocaleString('es-AR')}`}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedProduct(product); }}
                      >
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="font-bold text-stone-900 group-hover:text-[#A8863B] text-[15px] leading-tight mb-1 pr-2 transition-colors">{product.name}</h3>
                            <p className="text-xs text-stone-500 line-clamp-2 mb-2 leading-relaxed">{product.description}</p>
                          </div>

                          <div className="flex items-center gap-3 mt-1">
                            <span className="font-black text-stone-900 text-lg tracking-tight">${product.price.toLocaleString('es-AR')}</span>
                            {/* Quantity badge in cart */}
                            {qty > 0 && (
                              <Badge variant="primary" size="sm">
                                {qty} en pedido
                              </Badge>
                            )}
                          </div>

                          {/* Quantity selector on card (when qty > 0) */}
                          {qty > 0 && (
                            <div className="flex items-center gap-1 mt-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const cartItem = items.find(i => i.id === product.id);
                                  if (!cartItem) return;
                                  if (cartItem.quantity <= 1) {
                                    removeFromCart(product.id, cartItem.notes);
                                  } else {
                                    updateQuantity(product.id, cartItem.quantity - 1, cartItem.notes);
                                  }
                                }}
                                aria-label={`Reducir cantidad de ${product.name}`}
                                className="w-7 h-7 flex items-center justify-center bg-stone-100 hover:bg-stone-200 rounded-lg text-stone-700 transition-colors border border-stone-200"
                              >
                                <Minus size={12} aria-hidden="true" />
                              </button>
                              <span className="font-bold text-sm w-5 text-center text-stone-900">{qty}</span>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  addToCart(product, 1);
                                }}
                                aria-label={`Aumentar cantidad de ${product.name}`}
                                className="w-7 h-7 flex items-center justify-center bg-[#A8863B] hover:bg-[#8F6F2F] rounded-lg text-white transition-colors"
                              >
                                <Plus size={12} aria-hidden="true" />
                              </button>
                            </div>
                          )}
                        </div>

                        <div className="w-28 h-28 sm:w-32 sm:h-32 shrink-0 bg-stone-50 rounded-2xl relative overflow-hidden border border-stone-200/50 group-hover:border-[#C9A962]/30 transition-all flex flex-col justify-between p-2 shadow-sm">
                          <img
                            src={product.image_url || '/img/Perfumes/generico.svg'}
                            alt={product.name}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />

                          {/* Plus button only when not in cart (otherwise quantity selector is shown) */}
                          {qty === 0 && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                addToCart(product, 1);
                              }}
                              aria-label={`Agregar ${product.name} al carrito`}
                              className="absolute bottom-1.5 right-1.5 z-20 w-8 h-8 flex items-center justify-center bg-gradient-to-r from-[#A8863B] to-[#C9A962] rounded-lg text-white shadow-md shadow-[#C9A962]/30 active:scale-90 hover:brightness-110 transition-all"
                            >
                              <Plus size={16} strokeWidth={3} aria-hidden="true" />
                            </button>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {filteredProducts.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 shadow-sm">
              <Search size={48} className="mx-auto text-stone-300 mb-4" aria-hidden="true" />
              <p className="text-base font-bold text-stone-800">No encontramos ningún producto</p>
              <p className="text-stone-500 text-sm">Prueba buscando con otras palabras o seleccionando otra categoría.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('todas'); setSelectedKeyword('todas'); }}
                className="mt-4 text-sm font-bold text-[#A8863B] hover:underline focus-ring"
              >
                Ver todos los productos
              </button>
            </div>
          )}
        </section>
      </main>

      {/* ═══════ FLOATING CART BUTTON ═══════ */}
      <AnimatePresence>
        {itemCount > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 left-4 right-4 md:max-w-md md:mx-auto z-40"
          >
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label={`Abrir carrito con ${itemCount} productos`}
              className="w-full bg-gradient-to-r from-[#A8863B] to-[#C9A962] text-white p-4 rounded-2xl shadow-xl shadow-[#C9A962]/35 flex items-center justify-between transition-all hover:brightness-110 active:scale-95 border border-white/20 focus-ring"
            >
              <div className="flex items-center gap-3">
                <div className="bg-black/25 text-white w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg border border-white/20 shadow-inner">
                  {itemCount}
                </div>
                <div className="text-left">
                  <span className="block text-xs font-semibold text-amber-100 uppercase tracking-wider">Tu Pedido</span>
                  <span className="font-black text-base">Ver Carrito</span>
                </div>
              </div>
              <div className="flex items-center gap-2 font-black text-lg">
                <span>Ir a Pagar</span>
                <ChevronRight size={20} aria-hidden="true" />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════ MODALS ═══════ */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(prod, qty, notes) => addToCart(prod, qty, notes)}
      />

      <CartModal
        empresaId={empresa.id}
        empresaName={empresa.name}
        empresaPhone={empresa.phone}
        empresaAlias={empresa.alias || ''}
        onOrderPlaced={(orderId) => {
          setActiveOrderId(orderId);
          setIsTrackerOpen(true);
        }}
      />

      <OrderTrackerModal
        isOpen={isTrackerOpen}
        onClose={() => setIsTrackerOpen(false)}
        orderId={activeOrderId}
        onClearActiveOrder={() => setActiveOrderId(null)}
      />
    </div>
  );
}