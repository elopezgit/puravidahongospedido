import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Search, MapPin, Plus, Minus, ChevronRight, Sparkles, MessageCircle, SlidersHorizontal, ArrowDownUp, Check, X, ShieldCheck, Droplets, Leaf } from 'lucide-react';
import { useCart } from '../lib/CartContext';
import { normalizeText, matchesSearchQuery } from '../utils/searchUtils';
import CartModal from '../components/client/CartModal';
import ProductModal from '../components/client/ProductModal';
import OrderTrackerModal from '../components/client/OrderTrackerModal';
import { motion, AnimatePresence } from 'framer-motion';
import { getEmpresaData } from '../lib/getEmpresa';
import {
  filterTenantCategories,
  filterTenantProducts,
  DEFAULT_PURAVIDA_PRODUCTS,
  DEFAULT_PURAVIDA_CATEGORIES
} from '../lib/defaultCatalog';
import { getTenantTheme } from '../lib/tenantTheme';
import ErrorRetry from '../components/ui/ErrorRetry';

/* ─── Constantes de marca ─── */
const SLUG_DEFAULT = 'puravidahongos';

/* ─── Interfaces ─── */
interface Empresa {
  id: string;
  name: string;
  phone: string;
  instagram_url?: string;
  maps_url?: string;
  logo_url?: string;
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
  badge?: string;
  benefits?: string[];
}

interface Banner {
  id: string;
  image_url: string;
  title?: string;
  subtitle?: string;
}

type SortOption = 'featured' | 'price_asc' | 'price_desc' | 'name_asc' | 'name_desc';

const SORT_OPTIONS: { id: SortOption; label: string; icon: string }[] = [
  { id: 'featured', label: 'Recomendados / Más pedidos', icon: '✨' },
  { id: 'price_asc', label: 'Menor precio primero', icon: '💲' },
  { id: 'price_desc', label: 'Mayor precio primero', icon: '💎' },
  { id: 'name_asc', label: 'Nombre: A a la Z', icon: '🔤' },
  { id: 'name_desc', label: 'Nombre: Z a la A', icon: '🔠' },
];

const DEFAULT_BANNERS: Banner[] = [
  {
    id: 'b1',
    image_url: '/img/puravidahongos/banner-melena.jpg',
    title: 'MELENA DE LEÓN · NEUROGÉNESIS',
    subtitle: 'Claridad mental, memoria y regeneración neuronal · Extracto triple',
  },
  {
    id: 'b2',
    image_url: '/img/puravidahongos/banner-reishi.jpg',
    title: 'REISHI · PAZ & LONGEVIDAD',
    subtitle: 'Calma adaptógena, modulación inmune y sueño zen reparador',
  },
  {
    id: 'b3',
    image_url: '/img/puravidahongos/banner-cordyceps.jpg',
    title: 'CORDYCEPS · ENERGÍA & VITALIDAD',
    subtitle: 'Oxigenación celular y bio-síntesis de energía ATP sin estimulantes',
  },
  {
    id: 'b4',
    image_url: '/img/puravidahongos/banner-adaptogenos.jpg',
    title: 'SINERGIA ADAPTÓGENA PURA',
    subtitle: 'Extractos botánicos puros del bosque con máxima biodisponibilidad',
  },
];

const TARGET_GOALS = [
  { id: 'all_targets', label: 'Todos los objetivos', value: 'todas' },
  { id: 'g_foco', label: '🧠 Enfoque & Memoria', value: 'Memoria' },
  { id: 'g_calma', label: '🌙 Calma & Sueño', value: 'Descanso' },
  { id: 'g_inmuno', label: '🛡️ Inmunidad Total', value: 'Inmunidad' },
  { id: 'g_energia', label: '⚡ Energía ATP', value: 'Energía' },
  { id: 'g_estres', label: '🌿 Antiestrés', value: 'Estrés' },
  { id: 'g_longevidad', label: '❤️ Longevidad', value: 'Longevidad' },
];

const normalizeKey = (value: string) => normalizeText(value).trim();

export default function ClientHome() {
  const { empresaSlug } = useParams<{ empresaSlug?: string }>();
  const activeSlug = empresaSlug || SLUG_DEFAULT;

  /* ─── Data State ─── */
  const [empresa, setEmpresa] = useState<Empresa | null>(null);
  const [categories, setCategories] = useState<Category[]>(DEFAULT_PURAVIDA_CATEGORIES);
  const [products, setProducts] = useState<Product[]>(DEFAULT_PURAVIDA_PRODUCTS as Product[]);
  const [banners, setBanners] = useState<Banner[]>(DEFAULT_BANNERS);

  /* ─── UI State ─── */
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showSplash, setShowSplash] = useState(true);
  const [activeOrderId, setActiveOrderId] = useState<string | null>(null);
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  /* ─── Filtros & Ordenamiento Profesional ─── */
  const [activeCategory, setActiveCategory] = useState<string | 'todas'>('todas');
  const [selectedKeyword, setSelectedKeyword] = useState<string>('todas');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [isSortModalOpen, setIsSortModalOpen] = useState(false);
  const [bannerIndex, setBannerIndex] = useState(0);

  /* ─── Carousel Auto-scroll ─── */
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoScroll = useCallback(() => {
    if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
    scrollIntervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const firstChild = scrollRef.current.children[0] as HTMLElement;
        const cardWidth = firstChild ? firstChild.offsetWidth + 12 : 300;

        if (scrollLeft >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 4800);
  }, []);

  const stopAutoScroll = useCallback(() => {
    if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll <= 0) return;
      const ratio = scrollLeft / maxScroll;
      const totalSlides = banners.length - 1;
      setBannerIndex(Math.round(ratio * totalSlides));
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [banners.length]);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [startAutoScroll, stopAutoScroll]);

  /* ─── Cart ─── */
  const { items, setIsCartOpen, addToCart, removeFromCart, updateQuantity, itemCount, setCartScope } = useCart();

  /* ─── Aislamiento del carrito por tenant ─── */
  useEffect(() => { setCartScope(activeSlug); }, [activeSlug, setCartScope]);

  /* ─── Tema del tenant ─── */
  const theme = getTenantTheme(activeSlug, empresa?.name);

  /* ─── WhatsApp ─── */
  const rawPhone = empresa?.phone ? empresa.phone.replace(/\D/g, '') : '5493815102886';
  const whatsappNumber = rawPhone.startsWith('54') ? rawPhone : `549${rawPhone}`;
  const whatsappMessage = `¡Hola Hongos Pura Vida! 🌿 Quisiera asesoramiento sobre los elixires medicinales.`;

  /* ─── Data Fetching ─── */
  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      let empData: Empresa | null = null;
      try {
        empData = await getEmpresaData(activeSlug);
      } catch (e) {
        console.warn('Cargando datos locales de Pura Vida Hongos:', e);
      }

      if (empData) {
        setEmpresa(empData);

        const activeOrder = localStorage.getItem(`activeOrder_${empData.id}`);
        if (activeOrder) setActiveOrderId(activeOrder);

        const [cats, prods, bans] = await Promise.all([
          supabase.from('categories').select('*').eq('empresa_id', empData.id),
          supabase.from('products').select('*').eq('empresa_id', empData.id).eq('is_active', true),
          supabase.from('banners').select('*').eq('empresa_id', empData.id).eq('is_active', true),
        ]);

        const cleanCategories = filterTenantCategories(activeSlug, cats.data || []);
        const cleanProducts = filterTenantProducts(activeSlug, prods.data || []);

        setCategories(cleanCategories);
        setProducts(cleanProducts as unknown as Product[]);
        if (bans.data && bans.data.length > 0) {
          setBanners(bans.data.sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0)));
        }
      } else {
        setEmpresa({
          id: 'puravida-flagship',
          name: 'Hongos Pura Vida',
          phone: '5493815102886',
          instagram_url: 'https://instagram.com/puravidahongos',
          logo_url: '/img/logo/puravidahongos_logo.svg'
        });
        setCategories(DEFAULT_PURAVIDA_CATEGORIES);
        setProducts(DEFAULT_PURAVIDA_PRODUCTS as Product[]);
        setBanners(DEFAULT_BANNERS);
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
      setTimeout(() => setShowSplash(false), 2000);
    }
  }, [activeSlug]);

  useEffect(() => { loadData(); }, [loadData]);

  /* ─── Filtrado & Ordenamiento Memoizado ─── */
  const processedProducts = useMemo(() => {
    const kw = normalizeKey(selectedKeyword);

    const filtered = products.filter(p => {
      const pName = normalizeKey(p.name);
      const pDesc = p.description ? normalizeKey(p.description) : '';
      const catName = normalizeKey(categories.find(c => c.id === p.category_id)?.name || '');

      const matchesSearch = matchesSearchQuery(searchQuery, [
        p.name, 
        p.description, 
        p.code || '', 
        catName
      ]);
      
      const matchesCategory = searchQuery 
        ? true 
        : activeCategory === 'todas' || p.category_id === activeCategory;
        
      const matchesKeyword = searchQuery 
        ? true 
        : selectedKeyword === 'todas' ||
          pName.includes(kw) ||
          pDesc.includes(kw) ||
          catName.includes(kw);

      return matchesSearch && matchesCategory && matchesKeyword;
    });

    return [...filtered].sort((a, b) => {
      if (sortBy === 'price_asc') return a.price - b.price;
      if (sortBy === 'price_desc') return b.price - a.price;
      if (sortBy === 'name_asc') return a.name.localeCompare(b.name, 'es');
      if (sortBy === 'name_desc') return b.name.localeCompare(a.name, 'es');
      return (a.sort_order || 0) - (b.sort_order || 0);
    });
  }, [products, categories, searchQuery, activeCategory, selectedKeyword, sortBy]);

  const getProductQuantity = (productId: string) => {
    return items.filter(i => i.id === productId).reduce((acc, curr) => acc + curr.quantity, 0);
  };

  const currentSortLabel = SORT_OPTIONS.find(s => s.id === sortBy)?.label || 'Recomendados';
  const hasActiveFilters = activeCategory !== 'todas' || selectedKeyword !== 'todas' || sortBy !== 'featured' || searchQuery !== '';

  const clearAllFilters = () => {
    setActiveCategory('todas');
    setSelectedKeyword('todas');
    setSortBy('featured');
    setSearchQuery('');
  };

  /* ─── SPLASH SCREEN CINEMÁTICO ZEN ─── */
  if (loading || showSplash) {
    return (
      <AnimatePresence>
        <motion.div
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => setShowSplash(false)}
          className="min-h-screen bg-[#161C11] text-[#F8F6F1] flex flex-col items-center justify-center relative overflow-hidden cursor-pointer select-none px-6 py-10"
        >
          {/* Glowing Aurora Orbs */}
          <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#52633E]/35 blur-3xl animate-aurora-glow pointer-events-none" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-[#8E5238]/30 blur-3xl animate-aurora-glow pointer-events-none" style={{ animationDelay: '3s' }} />

          {/* Micro-esporas Zen */}
          <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-[#D3DECA]/30 animate-spore-slow pointer-events-none" />
          <div className="absolute bottom-1/3 right-1/3 w-2.5 h-2.5 rounded-full bg-[#C49A68]/30 animate-spore-slow pointer-events-none" style={{ animationDelay: '4s' }} />

          <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-lg mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#334026]/70 border border-[#7D8F63]/40 px-4 py-1.5 rounded-full mb-7 backdrop-blur-xl shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-[#D3DECA] animate-ping" aria-hidden="true" />
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-[#D3DECA]">
                MEDICINA ANCESTRAL · BOTICA NATURAL
              </span>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
              className="relative mb-7 animate-zen-breathe"
            >
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-3xl border border-[#D3DECA]/40 shadow-2xl overflow-hidden bg-[#242D1C] flex items-center justify-center p-3 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#161C11] via-[#334026]/60 to-[#52633E]/40" />
                <img
                  src="/img/logo/puravidahongos_logo.svg"
                  alt="Hongos Pura Vida"
                  className="w-full h-full object-contain relative z-10 ultra-crisp-img"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-3xl sm:text-5xl font-light tracking-wider font-display text-white">
                HONGOS PURA VIDA
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-[#D3DECA]/85 uppercase tracking-[0.3em] mt-2 font-sans">
                ELIXIRES DE HONGOS MEDICINALES & ADAPTÓGENOS
              </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 flex flex-col items-center gap-2"
            >
              <span className="bg-gradient-to-r from-[#52633E] via-[#7D8F63] to-[#52633E] text-white font-bold text-xs sm:text-sm uppercase tracking-[0.2em] px-9 py-3.5 rounded-2xl shadow-2xl shadow-[#161C11] hover:brightness-110 active:scale-95 transition-all border border-[#D3DECA]/30 flex items-center gap-2">
                <Sparkles size={16} className="text-[#D3DECA]" />
                INGRESAR AL CATÁLOGO
              </span>
              <span className="text-[11px] text-[#B8C4AC]/70 font-medium">
                Toca en cualquier parte para continuar
              </span>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  if (error && !empresa) {
    return <ErrorRetry message={error} onRetry={loadData} fullScreen />;
  }

  return (
    <div className="min-h-screen bg-[#1D2417] text-[#F8F6F1] pb-32 selection:bg-[#7D8F63]/40">
      
      {/* ═══════ 1. HEADER CON GLASSMORPHISM BOTÁNICO ═══════ */}
      <header className="sticky top-0 z-40 glass-header px-4 pt-3.5 pb-3">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-11 h-11 bg-[#2E3823]/90 rounded-2xl border border-[#7D8F63]/40 flex items-center justify-center shadow-lg overflow-hidden shrink-0 p-1">
                <img 
                  src="/img/logo/puravidahongos_logo.svg" 
                  alt="Hongos Pura Vida" 
                  className="w-full h-full object-contain ultra-crisp-img" 
                />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-light tracking-wider font-display text-white uppercase leading-none">
                  HONGOS PURA VIDA
                </h1>
                <div className="flex items-center gap-1.5 text-[11px] text-[#B8C4AC] mt-1">
                  <span className="text-[#C49A68] font-bold text-[10px] uppercase tracking-wider">
                    Medicina Ancestral
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-0.5">
                    <MapPin size={10} className="text-[#7D8F63]" /> Envíos país
                  </span>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Consultar por WhatsApp"
              className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-xl bg-[#334026]/80 border border-[#7D8F63]/40 text-[#D3DECA] hover:bg-[#52633E] hover:text-white transition-all shadow-md focus-ring font-bold text-xs backdrop-blur-md"
            >
              <MessageCircle size={15} />
              <span>Asesoría</span>
            </a>
          </div>

          {/* ═══════ 2. BUSCADOR GLASSMORPHIC ═══════ */}
          <div className="relative group">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#B8C4AC] group-focus-within:text-[#D3DECA] transition-colors" size={16} />
            <input
              type="text"
              placeholder="Buscar por hongo o beneficio (ej: Melena de León, Reishi, Inmuno)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Buscar elixires"
              className="w-full bg-[#161C11]/75 border border-[#7D8F63]/35 text-[#F8F6F1] rounded-xl py-2.5 pl-10 pr-3 shadow-inner outline-none focus:border-[#7D8F63] focus:ring-2 focus:ring-[#7D8F63]/30 transition-all text-xs sm:text-sm placeholder:text-[#8D9B7C] backdrop-blur-md"
            />
          </div>

          {activeOrderId && !searchQuery && (
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => setIsTrackerOpen(true)}
              aria-label="Seguir pedido en vivo"
              className="w-full mt-2.5 bg-[#8E5238]/35 border border-[#8E5238]/60 text-[#F4E2D7] py-2 px-3 rounded-xl flex items-center justify-between font-semibold text-xs shadow-sm focus-ring backdrop-blur-md"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2 mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C49A68] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C49A68]"></span>
                </span>
                Pedido en preparación · Ver estado
              </div>
              <ChevronRight size={14} />
            </motion.button>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto w-full px-3.5 sm:px-4 mt-4">

        {/* ═══════ 3. BANNER PUBLICITARIO EN CAROUSEL CON CRISTAL TRANSLÚCIDO ═══════ */}
        {!searchQuery && (
          <section className="mb-4 overflow-hidden relative" aria-label="Banners informativos">
            <div
              ref={scrollRef}
              onTouchStart={stopAutoScroll}
              onTouchEnd={() => setTimeout(startAutoScroll, 5000)}
              onMouseEnter={stopAutoScroll}
              onMouseLeave={() => setTimeout(startAutoScroll, 5000)}
              className="flex gap-3 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-1"
              style={{ scrollBehavior: 'smooth' }}
            >
              {banners.map((banner) => (
                <div
                  key={banner.id}
                  className="shrink-0 w-[88vw] max-w-[340px] sm:w-96 h-40 rounded-2xl overflow-hidden relative border border-[#7D8F63]/30 shadow-2xl block bg-[#161C11] snap-center group/banner cursor-pointer"
                >
                  <img
                    src={banner.image_url}
                    alt={banner.title || 'Hongos Pura Vida'}
                    className="w-full h-full object-cover opacity-85 group-hover/banner:scale-105 transition-transform duration-700 ultra-crisp-img"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161C11]/95 via-[#161C11]/30 to-transparent backdrop-blur-[1px]"></div>

                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-left">
                    <span className="inline-block bg-[#52633E]/90 backdrop-blur-md text-[#F8F6F1] font-bold text-[9px] px-2 py-0.5 rounded uppercase tracking-[0.18em] mb-1 shadow-sm border border-[#D3DECA]/25">
                      PURA VIDA
                    </span>
                    {banner.title && (
                      <h3 className="text-white font-normal font-display text-base sm:text-lg leading-tight tracking-wide drop-shadow-sm">
                        {banner.title}
                      </h3>
                    )}
                    {banner.subtitle && (
                      <p className="text-[#D3DECA] text-[11px] font-medium mt-0.5 line-clamp-1 leading-normal">
                        {banner.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Dot Indicators */}
            {banners.length > 1 && (
              <div className="flex justify-center gap-1.5 mt-2" role="tablist" aria-label="Navegación de banners">
                {banners.map((banner, idx) => (
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
                    aria-label={`Banner ${idx + 1}`}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === bannerIndex
                        ? 'bg-[#7D8F63] w-5 shadow-sm'
                        : 'bg-[#52633E]/40 hover:bg-[#7D8F63]'
                    }`}
                  />
                ))}
              </div>
            )}
          </section>
        )}

        {/* ═══════ SECCIÓN ZEN: SELLO DE PAZ & PUREZA ═══════ */}
        {!searchQuery && (
          <div className="mb-4 py-2 px-3 rounded-xl bg-[#252E1C]/60 border border-[#7D8F63]/25 backdrop-blur-md flex items-center justify-around text-[10px] sm:text-[11px] text-[#D3DECA] font-medium overflow-x-auto hide-scrollbar">
            <span className="flex items-center gap-1 shrink-0"><Leaf size={12} className="text-[#7D8F63]" /> 100% Extracto Puro</span>
            <span className="text-[#7D8F63]/40">&bull;</span>
            <span className="flex items-center gap-1 shrink-0"><Droplets size={12} className="text-[#C49A68]" /> Sin Alcohol Residual</span>
            <span className="text-[#7D8F63]/40">&bull;</span>
            <span className="flex items-center gap-1 shrink-0"><ShieldCheck size={12} className="text-[#8E5238]" /> Cavitación Acústica</span>
          </div>
        )}

        {/* ═══════ 4. BARRA DE FILTROS & ORDENAMIENTO PROFESIONAL ═══════ */}
        <section className="mb-4 space-y-2.5">
          
          {/* Fila 1: Pestañas de Categorías Principales */}
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-1 -mx-3.5 px-3.5 sm:mx-0 sm:px-0">
            <button
              onClick={() => setActiveCategory('todas')}
              className={`shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
                activeCategory === 'todas'
                  ? 'glass-pill-active text-white scale-[1.02]'
                  : 'glass-pill text-[#D3DECA] hover:border-[#7D8F63]'
              }`}
            >
              <span>Todas las Líneas</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${activeCategory === 'todas' ? 'bg-white/20 text-white' : 'bg-[#182012]/60 text-[#B8C4AC]'}`}>
                {products.length}
              </span>
            </button>

            {categories.map(cat => {
              const count = products.filter(p => p.category_id === cat.id).length;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
                    isActive
                      ? 'glass-pill-active text-white scale-[1.02]'
                      : 'glass-pill text-[#D3DECA] hover:border-[#7D8F63]'
                  }`}
                >
                  <span>{cat.icon} {cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${isActive ? 'bg-white/20 text-white' : 'bg-[#182012]/60 text-[#B8C4AC]'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Fila 2: Barra de Control: Botón Ordenar + Filtros por Objetivo */}
          <div className="flex items-center gap-2 justify-between flex-wrap">
            
            {/* Botón de Ordenar Profesional */}
            <button
              onClick={() => setIsSortModalOpen(true)}
              className="inline-flex items-center gap-1.5 h-8 px-3 rounded-xl glass-pill text-xs font-bold text-[#EBF2E5] hover:bg-[#334026] transition-all shadow-sm focus-ring"
            >
              <ArrowDownUp size={13} className="text-[#C49A68]" />
              <span className="text-[#B8C4AC]">Ordenar:</span>
              <span className="text-white truncate max-w-[140px]">{currentSortLabel}</span>
            </button>

            {/* Contador de resultados & Botón limpiar */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#B8C4AC] font-medium">
                {processedProducts.length} {processedProducts.length === 1 ? 'producto' : 'productos'}
              </span>

              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#C49A68] bg-[#C49A68]/15 px-2.5 py-1 rounded-lg border border-[#C49A68]/35 hover:bg-[#C49A68]/25 transition-all"
                >
                  <X size={12} /> Limpiar
                </button>
              )}
            </div>
          </div>

          {/* Fila 3: Chips de Objetivos de Salud / Beneficio */}
          <div className="flex gap-1.5 overflow-x-auto hide-scrollbar pb-1 -mx-3.5 px-3.5 sm:mx-0 sm:px-0">
            {TARGET_GOALS.map((goal) => {
              const isActive = selectedKeyword === goal.value;
              return (
                <button
                  key={goal.id}
                  onClick={() => setSelectedKeyword(goal.value)}
                  className={`shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all border ${
                    isActive
                      ? 'bg-[#8E5238] text-white border-white/30 shadow-md'
                      : 'bg-[#182012]/60 text-[#B8C4AC] border-[#7D8F63]/20 hover:border-[#7D8F63]'
                  }`}
                >
                  {goal.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* ═══════ 5. LISTA DE PRODUCTOS CON GLASSMORPHISM (COMPACTO PEDIDOS YA) ═══════ */}
        <section>
          {sortBy === 'featured' && activeCategory === 'todas' && selectedKeyword === 'todas' && !searchQuery ? (
            categories.map(category => {
              const categoryProducts = processedProducts.filter(p => p.category_id === category.id);
              if (categoryProducts.length === 0) return null;

              return (
                <div key={category.id} className="mb-7">
                  <div className="flex items-center gap-2 mb-2.5 border-b border-[#7D8F63]/20 pb-1.5">
                    <span className="text-base">{category.icon}</span>
                    <h2 className="text-base sm:text-lg font-light font-display text-white uppercase tracking-wide">
                      {category.name}
                    </h2>
                    <span className="text-[11px] text-[#B8C4AC] ml-auto">
                      {categoryProducts.length} elixires
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {categoryProducts.map((product, idx) => renderProductCard(product, idx))}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {processedProducts.map((product, idx) => renderProductCard(product, idx))}
            </div>
          )}

          {processedProducts.length === 0 && (
            <div className="text-center py-14 glass-olive-card px-4">
              <Search size={36} className="mx-auto text-[#7D8F63] mb-2.5" />
              <p className="text-sm sm:text-base font-bold text-white">No encontramos ningún elixir con esos filtros</p>
              <p className="text-[#B8C4AC] text-xs mt-1">Prueba cambiando el objetivo o restableciendo los filtros.</p>
              <button
                onClick={clearAllFilters}
                className="mt-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#7D8F63] px-4 py-2 rounded-xl shadow-md hover:bg-[#52633E]"
              >
                Ver todos los productos
              </button>
            </div>
          )}
        </section>

      </main>

      {/* ═══════ MODAL BOTTOM SHEET DE ORDENAMIENTO GLASSMORPHIC ═══════ */}
      <AnimatePresence>
        {isSortModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSortModalOpen(false)}
              className="fixed inset-0 bg-black/70 z-[100] backdrop-blur-md"
              aria-hidden="true"
            />

            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 240 }}
              role="dialog"
              aria-modal="true"
              className="fixed bottom-0 left-0 right-0 z-[101] glass-olive-card rounded-t-3xl border-t border-[#7D8F63]/40 p-5 max-w-lg mx-auto shadow-2xl"
            >
              <div className="flex justify-between items-center mb-4 pb-2 border-b border-[#7D8F63]/20">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal size={16} className="text-[#C49A68]" />
                  <h3 className="font-display text-lg text-white">Ordenar Productos</h3>
                </div>
                <button
                  onClick={() => setIsSortModalOpen(false)}
                  className="p-1 text-[#B8C4AC] hover:text-white rounded-lg"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-1.5">
                {SORT_OPTIONS.map((opt) => {
                  const isSelected = sortBy === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setSortBy(opt.id);
                        setIsSortModalOpen(false);
                      }}
                      className={`w-full p-3 rounded-xl flex items-center justify-between transition-all text-sm font-medium ${
                        isSelected
                          ? 'bg-[#52633E] text-white border border-[#D3DECA]/40 shadow-md'
                          : 'hover:bg-[#2E3823]/60 text-[#D3DECA]'
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="text-base">{opt.icon}</span>
                        <span>{opt.label}</span>
                      </span>
                      {isSelected && <Check size={16} className="text-[#C49A68]" />}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ═══════ BOTÓN FLOTANTE GLASSMORPHIC PARA PEDIDOS ═══════ */}
      <AnimatePresence>
        {itemCount > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-5 left-3.5 right-3.5 max-w-lg mx-auto z-40"
          >
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label={`Abrir carrito con ${itemCount} elixires`}
              className="w-full bg-gradient-to-r from-[#7D8F63] via-[#52633E] to-[#334026] text-white p-3.5 rounded-2xl shadow-2xl shadow-black/70 flex items-center justify-between transition-all hover:brightness-110 active:scale-95 border border-[#D3DECA]/50 focus-ring backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="bg-white/25 text-white w-9 h-9 rounded-xl flex items-center justify-center font-bold text-base border border-white/35 shadow-inner">
                  {itemCount}
                </div>
                <div className="text-left">
                  <span className="block text-[10px] font-bold text-[#D3DECA] uppercase tracking-widest leading-none mb-0.5">Botica Ancestral</span>
                  <span className="font-bold text-sm">Ver Mi Pedido</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 font-bold text-sm">
                <span>Finalizar</span>
                <ChevronRight size={17} />
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
        eyebrow={theme.modalEyebrow}
        fallbackImage={theme.fallbackProductImage}
        emptyDescription={theme.modalEmptyDescription}
      />

      <CartModal
        empresaId={empresa?.id || 'puravida-flagship'}
        empresaName={empresa?.name || theme.brand}
        empresaPhone={empresa?.phone || '5493815102886'}
        empresaAlias={empresa?.alias || activeSlug}
        emptyText={theme.cartEmptyText}
        ctaHint={theme.cartCtaHint}
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

  /* ─── Renderizado de tarjeta compacta con Glassmorphism ─── */
  function renderProductCard(product: Product, idx: number) {
    const qty = getProductQuantity(product.id);

    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.015 }}
        key={product.id}
        onClick={() => setSelectedProduct(product)}
        className="glass-product-card p-3.5 sm:p-4 flex gap-3.5 relative cursor-pointer group focus-ring items-stretch justify-between"
        role="button"
        tabIndex={0}
        aria-label={`${product.name} - $${product.price.toLocaleString('es-AR')}`}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedProduct(product); }}
      >
        {/* Info Column */}
        <div className="flex-1 min-w-0 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              {product.badge && (
                <span className="text-[9px] font-bold text-[#8E5238] bg-[#F4E2D7] px-2 py-0.5 rounded uppercase tracking-wider">
                  {product.badge}
                </span>
              )}
              <span className="text-[10px] font-semibold text-[#8A9380]">
                {product.code || '50ml'}
              </span>
            </div>

            <h3 className="text-sm sm:text-base font-bold font-display text-[#182012] group-hover:text-[#52633E] transition-colors leading-snug line-clamp-2">
              {product.name}
            </h3>

            <p className="text-[11px] text-[#52633E] line-clamp-2 leading-relaxed mt-1 font-normal">
              {product.description}
            </p>
          </div>

          <div className="flex items-center gap-2 mt-2 pt-1">
            <span className="text-base font-extrabold text-[#182012] font-sans">
              ${product.price.toLocaleString('es-AR')}
            </span>
            {qty > 0 && (
              <span className="text-[10px] font-bold text-[#52633E] bg-[#D3DECA] px-2 py-0.5 rounded-md">
                {qty} en pedido
              </span>
            )}
          </div>
        </div>

        {/* Thumbnail + Button Column */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 bg-[#EFECE4]/70 rounded-xl overflow-hidden relative border border-[#D3DECA]/60 p-1.5 flex items-center justify-center backdrop-blur-sm">
          <img
            src={product.image_url || '/img/logo/puravidahongos_logo.svg'}
            alt={product.name}
            className="max-h-full max-w-full object-contain ultra-crisp-img"
            loading="lazy"
          />

          {qty === 0 ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product, 1);
              }}
              aria-label={`Agregar ${product.name} al pedido`}
              className="absolute bottom-1.5 right-1.5 w-7 h-7 bg-[#334026] hover:bg-[#52633E] text-white rounded-lg flex items-center justify-center shadow-md active:scale-90 transition-all"
            >
              <Plus size={14} strokeWidth={2.5} />
            </button>
          ) : (
            <div 
              className="absolute bottom-1.5 right-1.5 flex items-center bg-[#161C11]/90 text-white rounded-lg overflow-hidden shadow-lg border border-white/20 scale-90"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => {
                  const cartItem = items.find(i => i.id === product.id);
                  if (!cartItem) return;
                  if (cartItem.quantity <= 1) removeFromCart(product.id, cartItem.notes);
                  else updateQuantity(product.id, cartItem.quantity - 1, cartItem.notes);
                }}
                className="w-6 h-6 flex items-center justify-center hover:bg-white/20 text-white active:scale-90"
              >
                <Minus size={11} />
              </button>
              <span className="font-bold text-[11px] w-5 text-center">{qty}</span>
              <button
                onClick={() => addToCart(product, 1)}
                className="w-6 h-6 flex items-center justify-center bg-[#52633E] hover:bg-[#7D8F63] text-white active:scale-90"
              >
                <Plus size={11} />
              </button>
            </div>
          )}
        </div>
      </motion.div>
    );
  }
}