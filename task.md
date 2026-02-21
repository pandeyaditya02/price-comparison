# QuickCompare — Project Todo List

## 1. Project Setup & Configuration
- [x] Initialize React Native project with TypeScript template (Expo SDK 54)
- [x] Configure project structure (src/components, src/screens, src/store, src/api, src/theme, src/data, src/utils)
- [x] Install & configure core dependencies:
  - [x] `react-native-reanimated` v4
  - [x] `react-native-gesture-handler`
  - [x] `@react-navigation/native` + native-stack navigator
  - [x] `zustand` (state management)
  - [x] `expo-haptics`, `expo-linking`
- [x] Initialize FastAPI backend project (`backend/`) with Python dependencies
- [x] Install backend dependencies: `fastapi`, `uvicorn`, `pydantic`, `httpx`

---

## 2. Design System & Theming
- [x] Create `theme/index.ts` with design tokens:
  - [x] Colors: Background (#FFFFFF, #F9F9F9), Text (#1A1A1A, #8E8E93), Card shadows
  - [x] Platform brand colors: Zepto Red, Swiggy Orange, Blinkit Yellow, BigBasket Green
  - [x] Typography scale (heroes, body, prices - boldest, ETA badges)
  - [x] Spacing, border-radius, shadow tokens
- [x] Platform display config (color, bg, label per platform)

---

## 3. Core Components — Frontend

### 3.1 Dynamic Header
- [x] Build `DynamicHeader` with two animated states (idle → sticky glassmorphic)
- [x] Implement smooth header morph via Reanimated interpolation on scroll offset
- [x] Location display with pill badge

### 3.2 Search Bar
- [x] Build `SearchBar` with text input, search icon, clear button
- [x] Wire to Zustand store, trigger API call

### 3.3 Bento Comparison Card
- [x] Build `BentoCard` with hero image (left) + 2×2 platform pill grid (right)
- [x] Sorted results (in-stock first, then by price)
- [x] Savings badge calculation
- [x] Staggered entrance animation (FadeInDown)

### 3.4 Platform Pill
- [x] Platform icon circle + price (bold) + ETA badge
- [x] Glowing border for lowest price
- [x] Grayscale for out-of-stock
- [x] Spring press animation + haptic feedback
- [x] Deep link trigger on tap

### 3.5 Skeleton Loader
- [x] Build `SkeletonCard` matching BentoCard layout
- [x] Shimmering gradient animation

### 3.6 Variant Switcher
- [x] Build `VariantSwitcher` with pill toggles
- [x] Haptic feedback on selection

### 3.7 ETA Badge
- [x] Pill-shaped badge with platform color tint

---

## 4. Screens / Navigation
- [x] Home screen with DynamicHeader + SearchBar + Trending + Results
- [x] Loading/error/empty states
- [x] Scroll-triggered staggered entrance for trending cards
- [x] AppNavigator with React Navigation stack

---

## 5. State Management (Zustand)
- [x] `useSearchStore`: query, results, isLoading, error, hasSearched, actions
- [x] `useLocationStore`: pincode, displayAddress

---

## 6. API Integration Layer
- [x] `api/client.ts` with platform-aware base URL
- [x] `api/search.ts` — searchProducts + getVariant

---

## 7. Animations & Interactions
- [x] Spring physics on card press (Gesture Handler + Reanimated)
- [x] Haptic feedback on taps
- [x] Scroll-triggered staggered entrance (FadeInDown)
- [x] Header morph interpolation
- [x] Skeleton shimmer animation

---

## 8. Deep Linking (Handoff)
- [x] Deep link handler with URL scheme per platform
- [x] Fallback to App Store / Play Store if app not installed

---

## 9. Backend — FastAPI

### 9.1 Project Structure
- [x] FastAPI app entry point (`main.py`) with CORS middleware
- [x] Router: `/api/v1/search` + `/api/v1/product/{key}/variant/{variant}`
- [x] Pydantic models for request/response

### 9.2 Dummy Scraping Layer
- [x] 4 async mock scrapers (Zepto, Instamart, Blinkit, BigBasket)
- [x] Concurrent execution via `asyncio.gather()`

### 9.3 Dummy Data
- [x] 8-product catalog with multiple variants, varied pricing/stock/ETAs

### 9.4 Redis Cache
- [x] In-memory cache stub with 15-min TTL interface

---

## 10. Testing & Validation
- [x] TypeScript compilation — no errors
- [x] Backend API test — correct JSON response
- [x] Expo Android bundle export — successful
- [x] Concurrency test script written (`tests/test_concurrency.py`)
- [ ] Deep link verification on real devices
- [ ] 60 FPS profiling on mid-tier Android
