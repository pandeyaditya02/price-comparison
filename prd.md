Product Requirements Document (PRD)
Product Name: QuickCompare (Placeholder)
Document Status: Draft / V1.0 (Demo Phase)
Platform: iOS & Android (React Native) + FastAPI Backend

1. Executive Summary & Product Vision
Urban consumers experience "app fatigue" and price blindness when shopping across multiple 10-minute delivery platforms. QuickCompare aggregates real-time pricing, stock availability, and delivery ETAs from Zepto, Swiggy Instamart, Blinkit, and BigBasket into a single search interface.

Demo Scope: This phase focuses on building the complete production-ready frontend (React Native) and the core backend routing architecture (FastAPI). However, the actual web-scraping layer will be bypassed. Instead, the backend will simulate network latency and return realistic dummy data to validate the UI flow, state management, and deep-linking logic.

2. Target Audience & User Persona
The Power Shopper: Gen-Z/Millennial urban professional. High disposable income but highly sensitive to delivery fees and surge pricing. Values speed and UX above all else.

The Planner: Users buying weekly groceries who want to optimize their cart value across platforms to hit free delivery thresholds.

3. User Flow (Demo Scope)
The demo focuses on the primary "Search to Checkout" funnel.

Launch & Location: User opens the app. App requests location permission or manual pin code entry.

Search: User types a product name (e.g., "Amul Butter 100g") into the global search bar.

Loading State: App displays high-fidelity skeleton loaders to simulate the data-fetching process.

Comparison View: Results render in a consolidated view. A single product image is shown, accompanied by dynamic cards for each platform displaying Price, Discount, and ETA.

Handoff: User taps the winning platform card. The app uses native Deep Linking to redirect the user to that specific product page inside the target platform's app.

4. UI/UX & Interaction Design Requirements
Given that this app replaces native, highly optimized e-commerce experiences, the UI must feel incredibly fluid, premium, and fast. Standard static screens are insufficient.

Animations & State Transitions: Use react-native-reanimated (v4) to handle all layout changes. When a user switches a product variant (e.g., 100g to 500g), the platform cards must use layout animations to smoothly resize, and the price numbers should elegantly tick up/down rather than snapping abruptly.

Micro-interactions: Implement the React Native Gesture Handler to add subtle scale-down spring animations when a user presses a platform card before the deep link fires. This provides immediate, satisfying tactile feedback.

Loading States: Strictly no spinning wheels. Use pulsing, animated skeleton layouts that mimic the exact shape of the incoming product cards to make the app feel perceptually faster.

Color Coding: Use the distinct brand colors of the platforms (Zepto Red, Swiggy Orange, Blinkit Yellow, BigBasket Green) to make scanning effortless.

5. Functional Requirements (Backend & Dummy API)
The backend must be built exactly as it would for production, utilizing asynchronous requests, with the only difference being the final data source.

Endpoint: GET /api/v1/search
Input: query (string), pincode (string).

Logic (Demo Environment):

Receive the request.

Check Redis cache (optional for demo, but good for structural readiness).

Trigger the asynchronous scraping functions via asyncio.gather().

The Dummy Step: Instead of calling ScrapingBee/Zyte, the mock functions will use await asyncio.sleep(1.5) to simulate realistic network latency.

Return a hardcoded JSON array containing variant data.

Sample Dummy Output Payload:

JSON
{
  "status": "success",
  "product_name": "Amul Butter - Pasteurized",
  "variant": "100g",
  "image_url": "https://dummyimage.com/amul_butter.jpg",
  "results": [
    {
      "platform": "Zepto",
      "price": 54.00,
      "in_stock": true,
      "eta_mins": 8,
      "deep_link": "zepto://product/demo123"
    },
    {
      "platform": "Instamart",
      "price": 56.00,
      "in_stock": true,
      "eta_mins": 14,
      "deep_link": "swiggy://instamart/item/demo456"
    },
    {
      "platform": "Blinkit",
      "price": 54.00,
      "in_stock": false,
      "eta_mins": null,
      "deep_link": null
    }
  ]
}
6. Technical Architecture & Stack
Frontend Mobile: React Native (TypeScript).

State Management: Zustand (lightweight, highly performant).

Animations: React Native Reanimated v4 + React Native Gesture Handler.

Routing: React Navigation (with Deep Linking config for the handoff).

Backend API: Python (FastAPI).

Chosen for native async support to handle concurrent platform requests.

Database (Prepared for V1): PostgreSQL (Location/Store mapping) + Redis (15-minute TTL caching).

7. Success Metrics (Demo Phase Validation)
Before moving to real API integrations, the demo must pass the following checks:

Frontend Performance: The app maintains a steady 60 FPS during layout transitions and skeleton loading on mid-tier Android devices.

Concurrency Testing: The FastAPI backend successfully handles 50 simultaneous search requests, utilizing the asyncio.sleep() dummy functions without blocking the main thread.

Deep Link Routing: Tapping a platform card successfully triggers the OS-level prompt to open the respective native application.