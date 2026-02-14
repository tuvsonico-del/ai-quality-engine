

# 🤖 NeuroQual AI — Implementation Plan

## Phase 1: Design System & Foundation

**Brand System Setup**
- Custom dark theme with Deep Neural Black (#060A1A) as default background
- AI gradient system: Deep Space Blue → Electric Indigo primary gradient
- Neon Cyan → Digital Purple accent gradient
- Glowing focus states, hover effects, and gradient borders throughout
- Custom color tokens for Success (#00F5A0), Danger (#FF4D6D), Warning (#FBBF24)
- Glassmorphism utility classes (frosted glass cards with backdrop blur)

**AI Bot Mascot**
- Minimal geometric robot head SVG component with glowing cyan eyes
- Used across: dashboard greeting, empty states, AI analysis cards, loading states
- "Thinking" animation variant (pulsing glow) for loading states

**Background System**
- Landing & Auth pages: Animated neural network grid (canvas-based, subtle)
- App pages: CSS gradient mesh + subtle floating particles (CSS-only for performance)
- Subtle noise texture overlay across all pages

## Phase 2: App Shell & Navigation

**Sidebar Navigation**
- Dark glassmorphism sidebar with glow-on-hover menu items
- Sections: Dashboard, Pipelines, Cycles, Staff, Analytics, Settings
- Notification bell with slide-in AI alerts panel (purple glow for AI alerts)
- Collapsible with mini icon mode
- User avatar + role badge at bottom

## Phase 3: Dashboard Page

**AI Greeting Bar**
- "Good Morning, Ahmed. AI is monitoring 3 active cycles." with Bot icon

**Stat Cards (4 cards with gradient numbers)**
- Compliance Rate, Active Pipelines, AI Alerts, Efficiency Score
- Gradient text numbers, subtle glow borders

**AI Insight Card**
- Bot icon + analysis summary text in a glowing panel

**Charts Section**
- Compliance trend line chart with gradient fill and soft glow
- Worker performance bar chart
- Using Recharts with custom dark theme styling

## Phase 4: Pipelines Page

**Pipeline Table**
- Dark surface table with hover glow rows
- Columns: Name, Status, Forms Count, Last Updated, Actions
- Expandable rows revealing nested forms table with slide animation
- Add Pipeline button with gradient background

## Phase 5: Form Builder Page

**Three-Panel Layout**
- Left: Field type palette (Text, Number, Image, Checkbox, etc.) with icons
- Center: Live form builder canvas — drag fields to build forms
- Right: AI Suggestions panel — "AI suggests adding Quantity Validation Field"
- Preview / Save / Publish action buttons
- Preview mode shows worker-facing form view

## Phase 6: Cycles Page

**Cycles Table**
- AI Score column with color-coded scores
- Status badges: Running (cyan glow), Completed (green), Risk (red glow)
- Expandable rows showing submission table
- Click into submission for detail view

**Submission Details Page**
- Left column: Form answers with uploaded images
- Right column: AI Analysis glowing panel with Bot icon
  - Compliance: 87%, Risk Level: Medium, AI Confidence: 94%
  - Suggested Action text

## Phase 7: Staff Page

**Card Grid Layout**
- Avatar, name, role badge (CEO/Supervisor/Worker), status dot (online/offline)
- Hover elevation effect with subtle glow
- Search/filter bar at top

## Phase 8: Analytics Page

**Full AI Analytics Dashboard**
- Compliance trend (gradient line chart)
- Worker performance comparison (bar chart)
- AI flagged issues over time (area chart)
- Risk distribution (donut chart)
- All charts with gradient fills and glow styling

## Phase 9: Settings Page

**In-Page Sidebar with Tabs**
- Company settings, Notifications, Security
- Clean modern form inputs with glow focus states

## Phase 10: Auth Pages & Landing Page

**Auth UI**
- Dark mode glass card centered on screen
- Animated neural network background
- Login / Sign Up forms with glowing input focus states

**Landing Page**
- Hero: Animated neural grid background, headline "Meet Your AI Quality Engineer", gradient CTA buttons, floating dashboard mockup + AI Bot
- AI Capabilities: 5 glowing-edge cards (Image Inspection, Quantity Verification, Compliance Detection, Risk Analysis, Performance Prediction)
- How It Works: Futuristic 3-step timeline with glowing dots
- Roles Section: Glass cards for CEO, Supervisor, Worker

## Micro-Interactions Throughout
- Glow on hover for all interactive elements
- Smooth page transitions
- Card entrance animations (fade-in + scale)
- Loading states with Bot "thinking" animation
- Gradient border animations on focus

## Responsive Design
- Mobile-optimized with collapsible sidebar → bottom nav
- Tablet layout with condensed sidebar
- Reduced glow intensity on mobile for performance

