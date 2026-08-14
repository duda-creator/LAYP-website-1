# Project: Executive Presence & Lead at Your Peak Training Website

## Project Overview

Lead At Your Peak is a premium marketing and lead-generation website for a
leadership development training and executive coaching company. The audience
includes senior managers, leaders, executives, and organisations across both
B2B and B2C contexts.

The primary goal is to encourage individual executives and corporate L&D buyers
to book a discovery call or get in touch. This is a lean, conversion-focused
site, not a blog-first or e-commerce build.

## Brand Information

| Attribute | Details |
| --- | --- |
| Company | Lead At Your Peak |
| Mission | Helping leaders and teams elevate how they show up, communicate, and perform under pressure. |
| Brand promise | Lead with presence. Influence with impact. Perform at your peak. |
| Brand personality | Professional, energising, confident, intelligent, witty, premium, and executive-ready |

### Services

1. Leadership Development Training
2. Executive Coaching
3. High-performance Simulation
4. Bespoke Learning Journeys

### Key Differentiators

- **Human performance science:** Training and coaching programmes draw on
  insights into how people learn, adapt, make decisions, and perform under
  pressure. These insights become practical tools and strategies that help
  leaders and teams shift behaviours, build effective habits, and sustain high
  performance.
- **The P.E.A.K.S.™ framework:** A proven approach to transform leaders from
  feeling overwhelmed or running on fumes to performing at their peak. It helps
  leaders build the energy, focus, resilience, and sustainable rhythm they need
  to perform consistently over the long term.
- **The A.L.I.G.N.™ framework:** A proven approach to help leaders elevate their
  visibility, gravitas, credibility, and impact. It enables leaders to align who
  they are with how they show up, communicate, and lead under pressure.

## Audience and Tone

- **Primary audience:** Mid-to-senior corporate leaders, plus HR/L&D
  decision-makers evaluating a coach or trainer for their organisation.
- **Tone:** The website must convey authority, energy, and sophistication while
  incorporating a subtle peak metaphor throughout.
- **Conversion:** Every page should make the next step, such as booking a call
  or getting in touch, obvious.

## Tech Stack

- **Framework:** Astro with static output. No Node.js server is needed at
  runtime, which keeps the site compatible with Hostinger shared and cloud
  hosting plans, not just Business+.
- **Styling:** Tailwind CSS
- **Hosting:** Hostinger. The plan tier affects the deployment method; check
  `hPanel > Websites > [site] > Plan`.
- **Deployment:** Build locally with `npm run build`, then automate a GitHub
  Action that builds and FTPs on push. If the plan is Business Web Hosting or a
  Cloud tier, check hPanel's **Deploy Web App** GitHub flow before setting up an
  Action.
- **Forms:** A PHP mail script (Hostinger supports PHP natively on all plans),
  or Formspree/Web3Forms if a hosted form handler is preferred.
- **Booking:** zcal embed on the Services and Contact pages. It must remain
  client-side and host-agnostic.
- **Analytics:** Plausible or GA4 script tag; either works on a static host.
- **Development server:** `npm run dev`

## Design Reference

See [design-reference.md](design-reference.md) for the layout and format
reference site and the specific patterns to borrow once the reference is
chosen.

## Site Structure

### Homepage

#### 1. Hero Section

- Full-screen layout
- **Headline:** "Lead At Your Peak When The Stakes Are High"
- **Subheadline:** "We help leaders and teams in high-pressure environments
  elevate presence and performance to lead with greater influence and impact."
- **Primary CTA:** "Explore Our Solutions"
- **Background:** One of Karolina's photos showing a room full of leaders
  during a facilitated session

#### 2. Problem/Solution Section

- **Headline:** "Crushing it at work, but..."
- **Brief copy:** Address leadership challenges in high-pressure environments:

  > You've built a strong track record. You're capable, ambitious, and trusted
  > to deliver. But success at this level can bring a different set of
  > challenges.
  >
  > Which of these feels most familiar?

  1. You're delivering on the outside, but running on empty inside.
  2. You have strong ideas, but they don't always land when the stakes are high.
  3. You're valued as an expert, but not yet seen as a strategic leader.

- Include a transition statement explaining how Lead At Your Peak provides the
  solution.
- Use a two-column layout with text and a supporting image.

#### 3. Services Section

- **Section headline:** "How We Partner With You"
- Use four service cards in a 2x2 grid on desktop and a single-column layout on
  mobile:
  1. **Leadership Development Training:** Icon, brief description, and
     "Learn More" link
  2. **Executive Coaching:** Icon, brief description, and "Learn More" link
  3. **High-performance Simulation:** Icon, brief description, and "Learn More"
     link
  4. **Bespoke Learning Journeys:** Icon, brief description, and "Learn More"
     link
- Give each card a subtle elevation hover effect.
- Use icons that represent each service.

#### 4. Testimonials Section

- **Section headline:** "Trusted By Leaders Committed To Excellence"
- **Subheadline:** "Discover what the clients think about our services"
- Include two testimonial cards with:
  - Quote text
  - Name, title, and company
  - Professional headshot placeholder
  - Clean, premium card design

#### 5. About Section

- **Headline:** "Leadership Development That Elevates Leaders"
- Brief paragraph about expertise and approach
- Professional founder photo placeholder
- **CTA:** "About Us"
- Use a two-column layout with the image on the left and text on the right.

#### 6. Newsletter Signup

- **Headline:** "The Edge Every Leader Needs"
- **Subheadline:** "Get weekly leadership insights to help you grow, stay sharp,
  and perform at your peak when the stakes are high"
- Signup form fields: First Name, Second Name, and Email address
- Protect the form against spam with reCAPTCHA.
- **CTA:** "Subscribe"
- Use a subtle gradient background.

#### 7. Footer

- Company logo
- Navigation links: Home, About, Services, and Contact
- CTAs: "Send us a message" and "Book A Call"
- Social media icons: LinkedIn, YouTube, and Instagram
- Copyright notice

#### 8. Navigation Header

- Logo on the left
- Menu items: Services with dropdown, About, and Contact
- **CTA:** "Book A Call"
- Sticky header that remains visible on scroll
- Mobile-responsive hamburger menu

### Additional Pages

#### Services Page

- **Hero headline:** "Elevate Your Leadership"
- Include a detailed section for each of the four services with:
  - Service name and description
  - Who it is for
  - What's included
  - Expected outcomes
  - **CTA:** "Contact us"
- Use an alternating left/right image-and-text layout.

#### About Page

- **Hero headline:** "Guiding Leaders To Leading At Their Peak"
- Founder/team story section with professional photo
- Mission and values section
- Why this work matters
- Credentials and experience highlights
- **CTA:** "Work With Us"

#### Contact Page

- **Hero headline:** "Let's Start Your Ascent"
- Contact form fields: Name, Email, Company, Role, and Message
- Alternative contact method with phone placeholder
- Calendar booking integration placeholder

## Design Conventions

### Colour Scheme

- **Primary:** Dark blue (`#1a4578`)
- **Accent:** Vibrant orange (`#ff6b35`)
- **Metallic accent:** Gold (`#d4af37`) for premium touches
- **Neutrals:** Cream (`#f6f5f2`) and beige (`#e3e1dc`)
- Use generous white space throughout.

### Typography

- **Headings:** Bold, modern sans-serif font such as Montserrat Bold, Inter
  Bold, or similar
- **Body:** Clean, readable sans-serif font such as Inter, Open Sans, or similar;
  minimum 16px
- **Style:** Strong hierarchy with clear size differences between H1, H2, and H3
- Ensure high contrast and readability.

### Visual Style

- **Photography:** High-quality images of executive environments, authentic
  leadership moments, and the founder
- **Graphics:** Abstract peak shapes, upward-pointing triangular elements,
  ascending lines, and energy-flow visualisations
- **Icons:** Modern, minimal line icons for services and framework elements
- **Overall feel:** Premium, sophisticated, energising, modern, and clean

### Working Conventions

- The deployment target is Hostinger, not Vercel or Netlify. Avoid SSR-only or
  serverless-function features unless the plan has been confirmed to support
  them.
- Build the design system and component library first, then assemble pages from
  it.
- Keep commits small and descriptive.
- Ask before adding dependencies, changing the tech stack, or restructuring
  routes.
- Never invent testimonials, credentials, client names, or statistics. If
  content is missing, leave a `TODO:` comment instead of making something up.
- Preview every change in the browser before considering it finished.

## Design Specifications

### Responsive Design

- Mobile-first approach
- Breakpoints: Mobile (320px-768px), Tablet (768px-1024px), Desktop (1024px+)
- All sections must stack beautifully on mobile.
- Touch-friendly buttons and navigation on mobile.

### Interactions and Animations

- Smooth scroll behaviour
- Fade-in animations as sections come into view
- Subtle hover effects on buttons, including slight elevation and colour shift
- Smooth transitions (`0.3s ease`)
- Loading animations should be minimal and professional.

### Buttons and CTAs

- **Primary button:** Accent-colour background, white text, rounded corners,
  and subtle shadow
- **Secondary button:** Outline style with accent-colour border
- **Hover state:** Slight elevation and brightness increase
- Minimum height: 48px for accessibility

### Spacing and Layout

- Generous padding and margins throughout
- Section padding: 80px top and bottom on desktop, 40px on mobile
- Container max-width: 1200px
- 12-column grid system

## Content Placeholders

Use the following placeholder content where needed.

### Headlines

- "Peak Performance. Grounded Presence. Strategic Influence."
- "Lead with Presence. Influence with Impact. Perform at Your Peak."
- "Transform Pressure Into Performance"
- "The Summit Is Optional, The Climb Is Not"

### Body Copy Examples

- "We partner with purpose-driven and ambitious organisations to develop
  high-performing leaders who lead with presence, influence, and clarity, even
  in complex, high-pressure environments."
- "Through leadership development training, executive coaching, bespoke learning
  journeys, and powerful keynotes, we turn insight into action and intention
  into sustained impact."

### CTA Button Text

- "Discover Your Peak Performance"
- "Book A Discovery Call"
- "Download Our Framework"
- "Start Your Ascent"
- "Learn More"

## Technical Requirements

- Clean, semantic HTML5
- Modern CSS using Flexbox and Grid
- Fully responsive across all devices
- Fast loading times with optimised images
- Accessibility compliant with WCAG 2.1 AA
- Cross-browser compatible
- SEO-friendly structure with proper heading hierarchy

## Brand Tone in Copy

When generating text content:

- Be confident but not arrogant.
- Use energising language without being overwhelming.
- Incorporate intelligence and wit subtly.
- Keep sentences punchy and action-oriented.
- Speak directly to senior executives using "you" language.
- Reference the mountain and climb metaphor sparingly and sophisticatedly.

## Key Success Criteria

### Deliverables

1. Complete homepage with all sections listed above
2. Services page
3. About page
4. Contact page
5. Responsive design for mobile, tablet, and desktop
6. Consistent navigation and footer across all pages

### The Website Should

- Feel premium and executive-level, like a first-class business lounge
- Convey energy and transformation without chaos
- Have clear calls to action throughout
- Use the mountain metaphor subtly and sophisticatedly, not literally
- Load fast and work flawlessly on all devices
- Make senior leaders think: "This is exactly what I need"
