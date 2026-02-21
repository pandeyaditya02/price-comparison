Frontend Design Document: QuickCompare
1. Design Vision & Aesthetic
The goal is to move away from the cluttered, banner-heavy look of traditional Indian grocery apps. The app will utilize a Bento Box Grid system, characterized by generous whitespace, soft rounded corners, and a heavy reliance on animations and interactive elements to guide the user's eye. It should feel less like a utility tool and more like a high-end editorial product catalog.

2. Visual Identity & Theming
Typography
Framer templates rely heavily on stark, beautiful typography to establish hierarchy without needing dividing lines.

Headers: A geometric sans-serif (e.g., Clash Display or SF Pro Display Bold). Large, tight tracking.

Body/Data: A highly legible, neutral sans-serif (e.g., Inter or Roboto).

Styling: Prices are always the boldest element on the screen. ETAs (e.g., "9 mins") are displayed in a medium weight but wrapped in a subtle pill-shaped badge.

Color Palette (The "Blank Canvas" Approach)
Because you have to display four distinct, clashing brand colors (Zepto Red, Swiggy Orange, Blinkit Yellow, BigBasket Green), your app's base UI must be completely neutral.

Background: True White (#FFFFFF) or an ultra-light, warm off-white (#F9F9F9) to reduce eye strain.

Cards/Containers: Pure white with a very subtle, diffuse drop shadow (e.g., rgba(0,0,0,0.04) with a large blur radius) to create a floating "glass" effect.

Text: Primary text in deep charcoal (#1A1A1A), secondary text in slate gray (#8E8E93).

Accent: The only time bright colors are used is for the platform logos, their specific price tags, and the primary "Search" action.

3. Core Component Architecture
The "Dynamic Header" (Location & Search)
State 1 (Idle): Large typography at the top greeting the user and showing their current zone (e.g., Delivering to: Sector 43, Gurugram).

State 2 (Scrolling): As the user scrolls down through search results, the header shrinks and morphs into a sticky, glassmorphic search bar at the top of the screen (using a background blur effect).

The "Bento Comparison Card"
Instead of a standard vertical list, search results are presented in modular, self-contained blocks.

Hero Section: The left side of the block features a large, high-res image of the product on a light gray, rounded-rectangle background.

Data Grid: The right side is a 2x2 grid of smaller, pill-shaped buttons.

Each pill contains the platform icon, the price, and the ETA.

The platform with the absolute lowest price gets a subtle glowing border.

If a platform is out of stock, its pill is desaturated to grayscale and pushed to the bottom of the grid.

4. Animation & Interactive Elements
To truly capture that premium Framer feel, the app's interactive elements must be meticulously crafted. The UI shouldn't just change states; it should flow from one state to the next.

Shared Element Transitions: When a user taps a product from the "Trending" list, the product image shouldn't just disappear and reappear on the next screen. It should smoothly scale and glide from its position on the home screen to its new position on the detailed comparison screen.

Fluid Variant Switching: When swapping between "500g" and "1kg" variants of a product, the price numbers inside the platform pills will use a "ticker" animation—rolling up or down to the new number rather than instantly flashing.

Haptic Feedback & Spring Physics: Buttons and platform cards will utilize spring physics (via React Native Reanimated). When pressed, they will slightly shrink and bounce back, accompanied by a light haptic tap from the device's vibration motor, giving the digital interface a tactile, physical weight.

Scroll-Triggered Micro-animations: As the user scrolls through search results, the bento cards will subtly fade and slide up into view (a staggered entrance), rather than just being statically present on the page.

5. State Management & Loading
The "Skeleton-to-Data" Reveal: Avoid standard loading spinners. The UI will render the exact layout of the Bento Cards using a shimmering silver gradient. As the asynchronous data from the FastAPI backend arrives, the skeleton smoothly cross-fades into the actual product images and price data.