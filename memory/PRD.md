# Cleanaction Network - Static Website PRD

## Original Problem Statement
Build a static website for Cleanaction Network (Indonesian environmental organization) to be hosted on GitHub Pages with domain cleanaction.id, connected to Instagram instagram.com/cleanaction.

## User Choices
- **Language**: Indonesian only
- **Pages**: Homepage, About Us, Programs, Contact (single-page with smooth scroll)
- **Branding**: Following Cleanaction branding - red (#D32F2F), white, green (#2E7D32)
- **Social Media**: Instagram only (@cleanaction)
- **Type**: Static website for GitHub Pages

## Architecture
- **Frontend**: React (single-page application)
- **Styling**: Tailwind CSS with custom brutalist design
- **Typography**: Barlow Condensed (headings) + DM Sans (body)
- **No backend required** - pure static site

## User Personas
1. **General Public**: Indonesians interested in environmental issues
2. **Potential Volunteers**: People wanting to join clean-up activities
3. **Corporate Partners**: Companies looking for CSR partnerships
4. **Environmental Activists**: Advocates seeking collaboration

## Core Requirements (Static)
- [x] Responsive navigation with Instagram link
- [x] Hero section with mission statement
- [x] Scrolling marquee with slogans
- [x] Stats section (500K+ kg waste, 50K+ volunteers, 100+ events, 17 years)
- [x] About section with Leuwigajah tragedy origin story
- [x] Values section (Gotong Royong, Keberlanjutan, Pemberdayaan)
- [x] Programs bento grid (GPS, Good Festival, Gerakan 1000 Tumbler, GPS Pelajar, Pilah Sampah, Event Kolaborasi)
- [x] Contact section with Instagram feed placeholder
- [x] Footer with links and social media

## What's Been Implemented
**Date: 2026-02-06**
- [x] Single-page static website with 4 sections
- [x] Sticky glass-morphism navigation
- [x] Mobile responsive design with hamburger menu
- [x] Brutalist card design with hard shadows
- [x] Smooth scroll navigation
- [x] SnapWidget placeholder for live Instagram feed
- [x] All content in Indonesian
- [x] Cleanaction branding (red/white/green)
- [x] Micro-animations and hover effects

## Instagram Feed Integration (Manual Step)
To display live Instagram feed:
1. Create account at https://snapwidget.com
2. Connect Instagram @cleanaction
3. Copy iframe code
4. Replace placeholder in `#snapwidget-placeholder` div

## Prioritized Backlog

### P0 (Completed)
- [x] Hero section
- [x] Navigation
- [x] About section
- [x] Programs section
- [x] Contact section
- [x] Mobile responsiveness

### P1 (Future)
- [ ] Integrate SnapWidget for live Instagram feed
- [ ] Add actual photos from Cleanaction events
- [ ] SEO optimization (meta tags, Open Graph)

### P2 (Nice to Have)
- [ ] Multi-language support (English)
- [ ] Volunteer signup form
- [ ] Event calendar
- [ ] Blog/news section

## Next Tasks
1. **Export for GitHub Pages**: Build static files with `yarn build`
2. **Integrate SnapWidget**: Follow instructions for live Instagram feed
3. **Custom domain setup**: Configure cleanaction.id DNS
