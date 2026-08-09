---
name: Warm Modernism (Dark)
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#343535'
  on-surface: '#e4e2e2'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e4e2e2'
  inverse-on-surface: '#303030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c8c6c5'
  primary: '#c8c6c5'
  on-primary: '#313030'
  primary-container: '#1a1a1a'
  on-primary-container: '#848282'
  inverse-primary: '#5f5e5e'
  secondary: '#f0bd8b'
  on-secondary: '#482904'
  secondary-container: '#65411a'
  on-secondary-container: '#e1af7e'
  tertiary: '#c8c6c2'
  on-tertiary: '#30312e'
  tertiary-container: '#191a18'
  on-tertiary-container: '#83837f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffdcbd'
  secondary-fixed-dim: '#f0bd8b'
  on-secondary-fixed: '#2c1600'
  on-secondary-fixed-variant: '#623f18'
  tertiary-fixed: '#e4e2dd'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1b1c19'
  on-tertiary-fixed-variant: '#474744'
  background: '#131314'
  on-background: '#e4e2e2'
  surface-variant: '#343535'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  button:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: '8'
  container-max: '1200'
  gutter: '24'
  margin-mobile: '16'
  margin-desktop: '40'
---

## Brand & Style

The design system is built on a "Warm Modernism" aesthetic, now shifted into a "Dark Mode" focus. It bridges the gap between a cozy, evening bistro experience and a sophisticated, contemporary digital interface. It targets an urban audience that appreciates artisanal quality and the intentional atmosphere of a dimly lit lounge.

The personality is sophisticated and intimate, emphasizing the "Soul" in the brand name through rich, dark textures and a palette inspired by espresso, roasted beans, and low-light interiors. The UI leverages a high-end editorial feel with ample dark space, allowing vibrant food and interior photography to glow against the deep background. The style blends **Minimalism** with **Tactile** elements—specifically using subtle grain and soft, tinted shadows to mimic the physical surfaces of a premium evening establishment.

## Colors

The palette has transitioned to "Dark Sophistication," moving away from a cream base to a deep, nocturnal foundation that evokes the atmosphere of a specialty coffee bar at night.

- **Primary (Obsidian):** A deep, near-black charcoal (#1a1a1a) that serves as the core foundation for surfaces and structural elements.
- **Secondary (Toasted Amber):** A warm, golden-brown (#d4a373) used for highlights, active states, and call-to-action accents. It provides a warm glow against the dark background.
- **Tertiary (Silk Parchment):** A very light, warm off-white (#f9f7f2). In this dark theme, it is used sparingly for high-contrast text and key functional elements.
- **Neutral (Iron):** A mid-toned charcoal (#4a4a4a) used for secondary text and subtle borders to maintain depth without breaking the dark aesthetic.

## Typography

The typography strategy remains balanced between structural strength and approachable warmth, but with increased attention to legibility on dark backgrounds.

- **Manrope** is used for headlines to provide a bold, geometric foundation that echoes the "ROCK SOUL" lettering. In the dark theme, these are primarily rendered in Silk Parchment to cut through the dark background.
- **Be Vietnam Pro** handles all body copy. Its open proportions ensure high readability even in low-contrast scenarios.
- **Space Grotesk** is used for labels, prices, and buttons. Its technical character adds a "craft" feel, reminiscent of the industrial equipment found in artisanal roasteries.

Vertical rhythm is strictly maintained with a 4px baseline grid. Large display type should use tighter tracking for a more "designed" editorial appearance.

## Layout & Spacing

The layout follows a **Fluid Grid** model. In this dark iteration, generous spacing is even more critical to prevent the UI from feeling cramped or heavy.

- **Desktop:** A 12-column grid with a 1200px max-width container. Content is often offset or centered to create asymmetrical interest that feels less corporate and more like a curated menu.
- **Mobile:** A 4-column grid with 16px side margins. 
- **Rhythm:** Spacing follows an 8px incremental scale (8, 16, 24, 32, 48, 64, 80). Use larger 64px+ gaps between major sections to emphasize the minimal, airy aesthetic.

Photography should often break the grid or use "full-bleed" sections, with subtle vignettes to immerse the user in the cafe's physical atmosphere.

## Elevation & Depth

In this dark mode system, depth is achieved through **Tonal Layers** and **Luminous Accents** rather than traditional drop shadows.

- **Surface Levels:** The Obsidian (Primary) color is the base. Elevated components like cards use a slightly lighter surface container tone (such as 'surface-container') to appear closer to the user.
- **Shadows:** Shadows are subtle but use a deeper black with higher blur (20-40px) and low opacity to create a soft "glow" of darkness, making elements feel like they are floating.
- **Glass Effects:** For mobile navigation or overlaying text on food photography, use a 15px backdrop blur with a 60% opacity Obsidian tint to maintain legibility without hiding the imagery.

## Shapes

The shape language is inspired by architectural modernism—primarily structural, but with "softened" corners to remain approachable.

- **UI Elements:** Use a consistent 4px (Soft) radius for buttons and input fields to maintain a crisp, professional look.
- **Cards & Imagery:** Standard containers use 8px (rounded-lg) to frame photography comfortably.
- **Shield Accents:** Occasionally utilize the 45-degree corner cut (clipped corners) seen in the logo for specific display elements like price tags or category chips to reinforce brand identity.

## Components

- **Buttons:** Primary buttons are solid Toasted Amber (Secondary) with Obsidian (Primary) text for high visibility. Secondary buttons use an outline style with a 2px weight in Silk Parchment. All buttons use the uppercase Space Grotesk label.
- **Cards:** Product cards for the menu should have no visible border, using only whitespace and the Toasted Amber (Secondary) color for price labels to create hierarchy.
- **Input Fields:** Minimalist design with only a bottom border in Iron (Neutral), which thickens to 2px on focus and changes to Toasted Amber.
- **Chips:** Used for dietary tags (e.g., Vegan, Gluten-Free). These should be small, pill-shaped, and use the Secondary color at 15% opacity with a lighter text label.
- **Lists:** Menu lists should use a "dotted-leader" style for a classic bistro feel, connecting the item name (Manrope) to the price (Space Grotesk).
- **Interactive Accents:** Hover states on images should trigger a subtle zoom-in effect (1.05 scale), mimicking the "taking a closer look" at the food.