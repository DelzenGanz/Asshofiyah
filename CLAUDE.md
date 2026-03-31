# Project: Asshofiyah — Vehicle Rental Website
## Built by Synthesis Lab

## About Synthesis Lab (the agency building this)
Synthesis Lab is a two-person digital studio based in Semarang, Indonesia. Tagline: "Built by makers, not managers." We design and build premium digital products — no bureaucracy, no outsourced teams. Clients work directly with the people who design and code.

- Website: https://synthesis-lab.vercel.app
- GitHub: github.com/DelzenGanz/Synthesis-Lab
- Email: shynthesislab@gmail.com
- WhatsApp: +62 8139 3091 751
- Instagram: @shyntesislab.id
- Location: Kota Semarang, Jawa Tengah, Indonesia

### Synthesis Lab Tech Stack
- React 19 + Vite
- Tailwind CSS v4
- Framer Motion (animations)
- Syne as primary heading font
- Dark-themed premium minimalist aesthetic with green (#4ADE80) and off-white tones
- Deployed on Vercel

### Synthesis Lab Pricing Tiers
- **Nexus** (Rp 500-800rb) — Student organizations (OSIS), 1-2 page landing, .my.id domain
- **Origin** (Rp 1.5-2.5jt) — New businesses going online, 1-3 pages, WhatsApp CTA, basic SEO
- **Catalyst** (Rp 3-6jt) — Running businesses, full multi-page site, CMS, booking forms, analytics, 14-21 days, 3 months maintenance — THIS IS THE PACKAGE FOR THIS PROJECT
- **Vertex** (Rp 7-12jt) — Full scale, e-commerce, payment gateway, custom admin dashboard

### Services Offered
Web Development, UI/UX Design, E-commerce, API Integration, Company Profile

---

## Client Project: Asshofiyah

### Client Info
- **Company:** Asshofiyah
- **Industry:** Vehicle rental (Hiace/travel focus)
- **Location:** Semarang, Jawa Tengah
- **Current website:** None — this is a brand new build
- **Package:** Catalyst (Rp 3-6jt, 14-21 days, 3 months maintenance)
- **Parent group:** Same parent company as PO Galatama (bus pariwisata) and Galatama Tour (umroh/haji travel)

### Reference Site
Use **https://takatrans.co.id** as the primary design & feature reference. Takatrans (PT Tangan Kanan Trans) is a premium Hiace rental in Jakarta with:
- Hero section with premium branding and CTA
- Fleet catalog: Hiace Premio Grand Luxury, Premio Luxury, Premio Standard, Commuter Luxury, Commuter Standard — each with photos, seat capacity, facilities
- Price list page with rates per vehicle type
- Terms & conditions (per calendar day, driver included, overtime fees, cancellation policy)
- FAQ section and Blog
- WhatsApp booking integration
- Navigation: Tentang Kami, Armada, Hubungi Kami, Harga Sewa, FAQ, Blog
- 230K Instagram followers — established premium brand

### Pages to Build
1. **Home** — Hero section with tagline, CTA to WhatsApp, fleet highlights, trust indicators (years of experience, fleet count, satisfied customers)
2. **Tentang Kami** — Company profile, why choose Asshofiyah, safety standards, relationship with parent group
3. **Armada** — Fleet catalog with card layout: photo, vehicle name, seat capacity, facilities list (AC, reclining seats, WiFi, karaoke, TV, cooler box, USB charger, etc.), and "Pesan Sekarang" CTA per vehicle
4. **Harga Sewa** — Price list table per vehicle type, terms & conditions (rental per calendar day, driver included, overtime rates Rp 200.000/jam, cancellation policy H-3, payment via bank transfer)
5. **Kalkulator Trip** — Interactive trip cost calculator where users can:
   - Select vehicle type (dropdown)
   - Input number of days
   - Select destination area/route (e.g., Dalam Kota Semarang, Jogja, Surabaya, Malang, Jakarta, Bali, etc.)
   - Auto-calculate estimated total cost (base rental + estimated fuel/toll if applicable)
   - Show a summary card with breakdown: vehicle price/day × days + extras
   - CTA button "Booking via WhatsApp" that auto-fills a WhatsApp message with the trip details (vehicle, dates, destination, estimated cost)
   - Reference: Takatrans has a similar trip calculator on their site — follow that UX pattern
6. **Kontak** — WhatsApp CTA (floating + inline), Google Maps embed, simple booking form (name, phone, date, vehicle type)

### Key Features
- Mobile-first responsive design (most customers browse from phone)
- WhatsApp floating button on all pages (wa.me link)
- **Trip calculator** — interactive cost estimator with WhatsApp integration (see page 5 above)
- Google Maps embed for office/garage location
- SEO on-page: meta title, meta description, heading hierarchy (H1-H3), alt text on images, sitemap
- Core Web Vitals optimized: lazy load images, compress assets, optimal font loading
- Clean, premium aesthetic — take inspiration from Takatrans's polished look
- Framer Motion for scroll animations and hover effects

### Content Placeholders
Use realistic placeholder data until client provides actual content:
- Company name: Asshofiyah
- Location: Semarang, Jawa Tengah
- WhatsApp: 08xxxxxxxxxx (placeholder)
- Fleet types: Hiace Premio Luxury (8-10 seats), Hiace Commuter Luxury (12-14 seats), Hiace Commuter Standard (14-16 seats), Elf Long (17-19 seats)
- Facilities per vehicle: Full AC, Reclining seats, Karaoke, TV/Android head unit, USB charger, Cooler box, WiFi, Hand sanitizer, P3K, Safety tools
- Prices: Rp 1.2jt - 2.5jt/day depending on vehicle type
- Terms: Sewa per hari kalender, harga termasuk driver, overtime Rp 200.000/jam, pembatalan H-3, pelunasan H-1

### Tech Stack (same as Synthesis Lab)
- React 19 + Vite
- Tailwind CSS v4
- Framer Motion
- Deploy on Vercel

### File Structure

src/
components/    # Navbar, Hero, Fleet, Pricing, Contact, Footer, WhatsAppButton
data/          # fleet.js, pricing.js, company.js (placeholder content)
assets/        # images, icons
index.css      # Tailwind imports + custom styles
App.jsx        # Main layout
main.jsx       # Entry point

### Design Direction
- Premium, clean, and modern — similar to Takatrans but adapted for Asshofiyah's brand
- Mobile-first: design for phone screens first, then scale up to desktop
- Prominent WhatsApp CTAs everywhere — this is the primary booking channel for rental companies
- Vehicle cards should show key info at a glance: photo placeholder, vehicle name, capacity, price range, facilities badges, book button
- Trust indicators on homepage: years in business, fleet count, satisfied customers, safety certifications

### Important Notes
- This is a **separate project/repo** from the Synthesis Lab website — create a new repo
- Keep code quality high and professional — this is a paying client project
- No CMS integration for now — static content, CMS will be added later if client needs it
- Prioritize speed: the Catalyst package timeline is 14-21 working days
- The client specifically referenced Takatrans, so they expect similar polish and professionalism
- Client will provide actual photos, prices, and company info later — build with clean placeholders that are easy to swap out