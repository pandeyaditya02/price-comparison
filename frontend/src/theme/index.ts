/**
 * QuickCompare Design System — Theme Tokens
 */

export const COLORS = {
  // Base palette (Blank Canvas)
  background: '#FFFFFF',
  backgroundAlt: '#F9F9F9',
  surface: '#FFFFFF',
  
  // Text
  textPrimary: '#1A1A1A',
  textSecondary: '#8E8E93',
  textTertiary: '#AEAEB2',
  
  // Platform brand colors
  zepto: '#E23744',       // Zepto Red
  instamart: '#FC8019',   // Swiggy Orange
  blinkit: '#F5C700',     // Blinkit Yellow
  bigbasket: '#84C225',   // BigBasket Green
  
  // Platform backgrounds (soft tints)
  zeptoBg: '#FEF2F3',
  instamartBg: '#FFF5ED',
  blinkitBg: '#FFFBEB',
  bigbasketBg: '#F4FAEB',
  
  // UI accents
  bestPrice: '#00C853',
  bestPriceGlow: 'rgba(0, 200, 83, 0.3)',
  outOfStock: '#D1D1D6',
  shadow: 'rgba(0, 0, 0, 0.04)',
  shadowMedium: 'rgba(0, 0, 0, 0.08)',
  
  // Search accent
  searchAccent: '#5856D6',
  searchAccentBg: '#EEF0FF',
  
  // Skeleton
  skeletonBase: '#E8E8ED',
  skeletonHighlight: '#F5F5FA',
  
  // Glassmorphism
  glassBackground: 'rgba(255, 255, 255, 0.85)',
  glassBorder: 'rgba(255, 255, 255, 0.5)',
} as const;

export const TYPOGRAPHY = {
  // Headers — Clash Display / SF Pro Display Bold style
  heroTitle: {
    fontSize: 32,
    fontWeight: '800' as const,
    letterSpacing: -1,
    lineHeight: 38,
    color: COLORS.textPrimary,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700' as const,
    letterSpacing: -0.5,
    lineHeight: 30,
    color: COLORS.textPrimary,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600' as const,
    letterSpacing: -0.2,
    lineHeight: 22,
    color: COLORS.textPrimary,
  },
  
  // Body — Inter / Roboto
  body: {
    fontSize: 14,
    fontWeight: '400' as const,
    lineHeight: 20,
    color: COLORS.textPrimary,
  },
  bodySmall: {
    fontSize: 12,
    fontWeight: '400' as const,
    lineHeight: 16,
    color: COLORS.textSecondary,
  },
  
  // Prices — boldest on screen
  priceHero: {
    fontSize: 22,
    fontWeight: '800' as const,
    letterSpacing: -0.5,
    lineHeight: 28,
    color: COLORS.textPrimary,
  },
  priceSmall: {
    fontSize: 16,
    fontWeight: '700' as const,
    letterSpacing: -0.3,
    lineHeight: 22,
    color: COLORS.textPrimary,
  },
  priceMrp: {
    fontSize: 12,
    fontWeight: '400' as const,
    lineHeight: 16,
    color: COLORS.textTertiary,
    textDecorationLine: 'line-through' as const,
  },
  
  // ETA badge
  eta: {
    fontSize: 11,
    fontWeight: '600' as const,
    lineHeight: 14,
  },
  
  // Labels
  label: {
    fontSize: 11,
    fontWeight: '500' as const,
    letterSpacing: 0.5,
    lineHeight: 14,
    color: COLORS.textSecondary,
    textTransform: 'uppercase' as const,
  },
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
} as const;

export const RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  pill: 100,
} as const;

export const SHADOWS = {
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 2,
  },
  cardHover: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 4,
  },
  glass: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 1,
  },
} as const;

// Platform display config
export const PLATFORMS: Record<string, { color: string; bg: string; label: string }> = {
  Zepto: { color: COLORS.zepto, bg: COLORS.zeptoBg, label: 'Zepto' },
  Instamart: { color: COLORS.instamart, bg: COLORS.instamartBg, label: 'Instamart' },
  Blinkit: { color: COLORS.blinkit, bg: COLORS.blinkitBg, label: 'Blinkit' },
  BigBasket: { color: COLORS.bigbasket, bg: COLORS.bigbasketBg, label: 'BigBasket' },
};
