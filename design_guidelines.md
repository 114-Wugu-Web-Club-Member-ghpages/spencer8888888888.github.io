# Design Guidelines: Anime Flat Style Personal Blog

## Design Approach

**Primary Direction:** Anime-inspired flat design aesthetic
Drawing inspiration from Japanese web design trends, platforms like Pixiv, and modern anime UI aesthetics. The design emphasizes playful simplicity, soft visual hierarchy, and personality-driven elements.

**Core Design Principles:**
- Flat design with subtle depth through shadows and layering
- Soft, friendly user experience with rounded elements
- Card-based content organization
- Generous whitespace for breathing room
- Playful yet organized information architecture

## Typography

**Font Selection:**
- Primary: Noto Sans TC (Google Fonts) - Clean, modern sans-serif perfect for Chinese content
- Accent: Poppins (Google Fonts) - For English text and decorative headers
- Display: Use bold weights (700) for section headers, medium (500) for navigation, regular (400) for body text

**Hierarchy:**
- Hero/Page Titles: text-4xl to text-5xl, font-bold
- Section Headers: text-2xl to text-3xl, font-semibold
- Card Titles: text-xl, font-medium
- Body Text: text-base, leading-relaxed for comfortable reading
- Captions: text-sm, text-opacity-70

## Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, 12, and 16
- Component padding: p-6 to p-8
- Section spacing: py-12 to py-16
- Card gaps: gap-6 to gap-8
- Element margins: mb-4, mb-6, mb-8

**Container Structure:**
- Max width: max-w-6xl for main content
- Responsive padding: px-4 (mobile), px-6 (tablet), px-8 (desktop)
- Grid layouts: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 for diary cards and photo galleries

## Component Library

### Navigation Bar
- Sticky top navigation with subtle shadow
- Logo/name on left, navigation links on right
- Rounded pill-style active state indicators
- Mobile: hamburger menu with slide-in drawer

### Hero Section
- Personal introduction area with large circular avatar image (profile photo)
- Name as large display text
- Short tagline or greeting
- Floating decorative elements (stars, sparkles) using absolute positioning
- Use a soft gradient or illustration background image

### Diary Card Components
- Rounded corners (rounded-2xl)
- Subtle shadow (shadow-md with hover:shadow-lg)
- Thumbnail image at top (aspect-ratio-video or aspect-square)
- Date badge with pill styling
- Title and excerpt preview
- Tags with rounded-full badges
- Smooth hover lift effect (transform transition)

### Photo Gallery Grid
- Masonry-style or equal-height grid layout
- Lightbox functionality for full-size viewing
- Rounded corners on all images (rounded-xl)
- Subtle overlay on hover with view icon

### Profile Section
- Large circular avatar with decorative border or shadow
- Bio text in card format
- Social links as rounded icon buttons
- Stats display (total posts, photos, etc.) in pill badges

### Footer
- Simple, centered layout
- Copyright and links
- Soft background differentiation

## Visual Elements

### Decorative Touches
- Use Heroicons for interface icons (outline style for most, solid for active states)
- Add subtle decorative SVG shapes (circles, stars) as background elements
- Emoji or small icon accents in headers (✨, 📝, 📸)

### Card Styling
- All cards use consistent rounded-2xl corners
- Subtle shadow-md for depth without being heavy
- White/light backgrounds with soft borders
- Hover states with slight scale (scale-105) and deeper shadow

### Buttons & Interactive Elements
- Rounded-full for primary buttons
- Generous padding: px-6 py-3
- Shadow on buttons for dimension
- Smooth transitions on all interactive states

## Images

**Hero Section:**
- Background: Soft gradient or anime-style illustration (clouds, stars, abstract shapes)
- Profile Photo: Large circular avatar (w-32 h-32 to w-48 h-48), centered

**Diary Entries:**
- Featured image per diary post (16:9 aspect ratio recommended)
- Placeholder: Soft pastel gradients or anime-style patterns

**Photo Gallery:**
- Daily life photos in grid layout
- Square or landscape orientations
- Consistent aspect ratios within gallery

**Overall:** Hero uses decorative background image with profile photo overlay. Diary and gallery sections rely on user-uploaded content photos.

## Accessibility
- Maintain WCAG AA contrast ratios for all text
- Focus states with visible outlines (ring-2 ring-offset-2)
- Semantic HTML structure throughout
- Alt text requirements for all images
- Consistent form input styling with labels

## Animation Guidelines
Use minimal, purposeful animations:
- Smooth transitions on hover states (transition-all duration-300)
- Gentle fade-ins for content loading
- Card hover lift effect only
- No autoplay animations or distracting movements
- Focus on polish, not flashiness