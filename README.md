# 🚗 Hasar Park - Complete Setup Guide

## 📋 Project Overview

Hasar Park is a conversion-focused website for buying damaged, crashed, and salvage vehicles in Turkey. Built with Next.js 14, TypeScript, and Tailwind CSS with aggressive CTAs and comprehensive analytics tracking.

### Key Features
- ✅ Dynamic service pages (kazalı, hasarlı, pert, hurda)
- ✅ Dynamic city pages (İstanbul, Ankara, İzmir, etc.)
- ✅ Aggressive call-to-action strategy (20+ conversion points)
- ✅ Complete analytics tracking (GTM, GA4, Google Ads, Facebook Pixel)
- ✅ Phone & WhatsApp conversion tracking
- ✅ SEO optimized with LLM-friendly structured data
- ✅ Mobile-first responsive design
- ✅ Floating conversion buttons
- ✅ Sharp, modern design system (Purple + Lime)

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Create Environment File
```bash
cp .env.example .env.local
```

### 3. Configure Environment Variables

Open `.env.local` and replace ALL placeholder values:

```bash
# Site URL
NEXT_PUBLIC_SITE_URL=https://yeniceotohasarli.com

# Contact (CRITICAL - These drive conversions!)
NEXT_PUBLIC_PHONE=+905303444097
NEXT_PUBLIC_WHATSAPP=905303444097
NEXT_PUBLIC_EMAIL=soydasotomotiv29@gmail.com

# Analytics IDs (Get from respective platforms)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ADS_CONVERSION_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_ADS_PHONE_CONVERSION_LABEL=AbCdEfGhIj
NEXT_PUBLIC_ADS_WHATSAPP_CONVERSION_LABEL=XyZaBcDeFg
NEXT_PUBLIC_ADS_FORM_CONVERSION_LABEL=QwErTyUiOp
NEXT_PUBLIC_FB_PIXEL_ID=123456789012345
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
yenice-otomotiv/
├── src/
│   ├── app/
│   │   ├── [service]/page.tsx          # Dynamic service pages
│   │   ├── sehirler/[city]/page.tsx    # Dynamic city pages
│   │   ├── layout.tsx                  # Root layout with analytics
│   │   ├── page.tsx                    # Homepage
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx              # Navigation with CTAs
│   │   │   ├── Footer.tsx              # Footer with links
│   │   │   └── FloatingButtons.tsx     # Sticky phone/WhatsApp
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx         # Hero with mega CTAs
│   │   │   ├── ServicesGrid.tsx        # Service cards
│   │   │   ├── ProcessSteps.tsx        # How it works
│   │   │   ├── CTASection.tsx          # Conversion sections
│   │   │   ├── StatsSection.tsx        # Trust indicators
│   │   │   ├── TestimonialsSection.tsx # Social proof
│   │   │   └── FAQSection.tsx          # FAQs
│   │   ├── ui/
│   │   │   ├── CallButton.tsx
│   │   │   ├── WhatsAppButton.tsx
│   │   │   └── ContactForm.tsx
│   │   └── analytics/
│   │       ├── GoogleTagManager.tsx
│   │       ├── GoogleAnalytics.tsx
│   │       └── ConversionTracking.tsx
│   ├── data/
│   │   ├── services.ts                 # Service data (4 services)
│   │   └── cities.ts                   # City data (3+ cities)
│   ├── config/
│   │   ├── site.ts                     # Site configuration
│   │   └── analytics.ts                # Analytics config
│   ├── lib/
│   │   └── analytics.ts                # Tracking functions
│   └── styles/
│       ├── variables.css               # Design tokens
│       ├── components.css              # Component styles
│       └── layout.css
├── public/
│   ├── images/                         # Service & hero images
│   ├── favicon/                        # Favicon files
│   ├── robots.txt
│   └── sitemap.xml
└── .env.local                          # Your credentials (gitignored)
```

---

## 🎨 Design System

### Colors
- **Primary Purple**: `#9333EA`
- **Accent Lime**: `#A3E635`
- **Secondary Fuchsia**: `#C026D3`
- **Dark Gray**: `#111827`

### Design Philosophy
- Sharp corners (no border radius)
- High contrast
- Bold typography (Inter Black 900)
- Conversion-first layout
- Minimal shadows

### Key Differences from Ankara PERT
| Feature | Ankara PERT | Hasar Park |
|---------|-------------|--------------|
| Colors | Orange + Blue | Purple + Lime |
| Corners | Rounded | Sharp |
| Typography | Medium 600 | Black 900 |
| Layout | Symmetric | Asymmetric |
| CTAs | Balanced | Aggressive |

---

## 📊 Analytics Setup

### 1. Google Tag Manager
1. Create GTM account: https://tagmanager.google.com
2. Create container for "yeniceotohasarli.com"
3. Copy GTM ID (GTM-XXXXXXX)
4. Add to `.env.local`

### 2. Google Analytics 4
1. Create GA4 property: https://analytics.google.com
2. Copy Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local`
4. Mark events as conversions:
   - `phone_click`
   - `whatsapp_click`
   - `form_submit`

### 3. Google Ads
1. Create Google Ads account
2. Set up conversion actions:
   - **Phone Call**: Value ₺150
   - **WhatsApp**: Value ₺120
   - **Form Submit**: Value ₺200
3. Copy Conversion ID and Labels
4. Add to `.env.local`

### 4. Facebook Pixel
1. Create Facebook Pixel: https://business.facebook.com
2. Copy Pixel ID
3. Add to `.env.local`
4. Events tracked automatically:
   - PageView
   - Lead (form submit)
   - Contact (phone/WhatsApp click)

---

## 🔄 Adding More Cities

### Step 1: Add City Data

Edit `src/data/cities.ts`:

```typescript
'bursa': {
  id: 'bursa',
  slug: 'bursa',
  name: 'Bursa',
  region: 'Marmara',
  
  metaTitle: 'Bursa Kazalı, Hasarlı, Pert, Hurda Araç Alımı | Hasar Park',
  metaDescription: 'Bursa\'da kazalı araç alımı...',
  keywords: ['bursa kazalı araç alan', 'bursa araç alım', ...],
  
  hero: {
    badge: '🏔️ BURSA ARAÇ ALIM',
    title: 'BURSA\'DA ARACINIZ',
    titleHighlight: 'EN YÜKSEK FİYATA',
    subtitle: '...',
  },
  
  services: {
    kazali: true,
    hasarli: true,
    pert: true,
    hurda: true,
  },
  
  cityInfo: {
    population: '3.1 Milyon',
    coverage: ['Osmangazi', 'Nilüfer', 'Yıldırım', ...],
    responseTime: '1 saat içinde',
    localOffice: 'Osmangazi Ofis',
  },
  
  features: [...],
  testimonials: [...],
  faqs: [...],
},
```

### Step 2: That's It!

The dynamic routing will automatically create the page at `/sehirler/bursa`

---

## 🔄 Adding More Services

### Step 1: Add Service Data

Edit `src/data/services.ts`:

```typescript
'eskpertis': {
  id: 'eskpertis',
  slug: 'eski-pert-arac-alim',
  title: 'Eski Pert Araç Alımı',
  shortTitle: 'Eski Pert Araç',
  icon: '🔄',
  color: 'purple',
  
  metaTitle: '...',
  metaDescription: '...',
  keywords: [...],
  
  hero: {...},
  features: [...],
  faqs: [...],
  content: {...},
},
```

### Step 2: That's It!

The dynamic routing will automatically create the page at `/eski-pert-arac-alim`

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

2. **Connect to Vercel**
- Go to https://vercel.com
- Import your GitHub repository
- Configure environment variables (copy from `.env.local`)
- Deploy!

3. **Configure Domain**
- Add custom domain in Vercel settings
- Update DNS records at your domain registrar
- Wait for SSL certificate (automatic)

### Environment Variables in Vercel

Add all variables from `.env.local` in Vercel dashboard:
- Project Settings → Environment Variables
- Add each variable one by one
- Redeploy after adding all variables

---

## 📈 Conversion Optimization

### Primary Conversion Points (20+)
1. **Header**: Top banner + 2 CTA buttons
2. **Hero Section**: 2 mega CTAs + phone display
3. **Floating Buttons**: Sticky phone + WhatsApp (desktop)
4. **Mobile Bottom Bar**: Always visible phone + WhatsApp
5. **Service Cards**: CTA on each card (4 services)
6. **Process Steps**: CTA after steps
7. **CTA Sections**: 3 dedicated conversion zones per page
8. **Footer**: Contact CTAs
9. **Service Pages**: Multiple CTAs throughout
10. **City Pages**: Localized CTAs

### Tracking
All conversions are tracked across:
- Google Tag Manager
- Google Analytics 4
- Google Ads (with conversion values)
- Facebook Pixel

---

## 🎯 Testing Checklist

### Before Launch
- [ ] Test all service pages (kazalı, hasarlı, pert, hurda)
- [ ] Test all city pages (istanbul, ankara, izmir)
- [ ] Click all phone buttons → Check GTM Debug
- [ ] Click all WhatsApp buttons → Check GTM Debug
- [ ] Submit contact form → Verify tracking
- [ ] Test on mobile devices
- [ ] Verify floating buttons work
- [ ] Check mobile bottom bar
- [ ] Test 404 page
- [ ] Verify meta tags (View Source)
- [ ] Check structured data (Google Rich Results Test)
- [ ] Test page speed (PageSpeed Insights)
- [ ] Verify all images load
- [ ] Check responsive design on all breakpoints

### After Launch
- [ ] Submit sitemap to Google Search Console
- [ ] Verify Google Analytics is receiving data
- [ ] Check Google Ads conversion tracking
- [ ] Verify Facebook Pixel events
- [ ] Monitor GTM in Debug mode for 24 hours
- [ ] Test from actual mobile devices
- [ ] Check actual phone calls are tracked
- [ ] Verify WhatsApp redirects work

---
x
## 🛠️ Common Issues & Solutions

### Issue: "npm run dev" fails
**Solution**: Delete `node_modules` and `.next`, then:
```bash
rm -rf node_modules .next
npm install
npm run dev
```

### Issue: Analytics not tracking
**Solution**: 
1. Check `.env.local` has correct IDs
2. Verify IDs don't have quotes or spaces
3. Open browser DevTools → Console
4. Look for GTM/GA errors
5. Use GTM Preview Mode

### Issue: Images not loading
**Solution**:
1. Add images to `public/images/`
2. Use correct paths (e.g., `/images/hero-bg.webp`)
3. Ensure filenames match exactly (case-sensitive)

### Issue: Dynamic pages return 404
**Solution**:
1. Check slug in URL matches data slug exactly
2. Verify data file exports correctly
3. Restart dev server

---

## 📝 Content Updates

### Update Phone Number
1. Edit `.env.local`
2. Change `NEXT_PUBLIC_PHONE` and `NEXT_PUBLIC_WHATSAPP`
3. Edit `src/config/site.ts` → `phoneDisplay`
4. Restart dev server

### Update Services
Edit `src/data/services.ts` → Change titles, descriptions, FAQs, etc.

### Update City Content
Edit `src/data/cities.ts` → Change city-specific content

### Update Site Config
Edit `src/config/site.ts` → Change company info, stats, features

---

## 🎨 Customization

### Change Colors
Edit `src/styles/variables.css`:
```css
--primary-purple: #9333EA;  /* Your new purple */
--accent-lime: #A3E635;      /* Your new lime */
```

### Change Fonts
Edit `src/app/layout.tsx`:
```typescript
import { Inter } from 'next/font/google';
// Replace Inter with your font
```

### Add New Components
1. Create file in `src/components/`
2. Export component
3. Import in page files

---

## 📞 Support

For questions or issues:
- Email: khan@paksoft.com.tr
- Check documentation
- Review code comments

---

## 🏆 Success Metrics

### Target KPIs (Monthly)
- **Phone Calls**: 100+
- **WhatsApp Messages**: 150+
- **Form Submissions**: 50+
- **Page Views**: 10,000+
- **Avg Session Duration**: >2 minutes
- **Bounce Rate**: <50%
- **Mobile Traffic**: >60%

### Cost Metrics
- **Cost Per Lead (CPL)**: <₺50
- **Cost Per Acquisition (CPA)**: <₺200
- **Return on Ad Spend (ROAS)**: >5x

---

## 🎉 You're Ready!

Your Hasar Park website is now fully configured and ready to generate leads!

**Next Steps:**
1. ✅ Complete `.env.local` configuration
2. ✅ Test all conversions locally
3. ✅ Deploy to Vercel
4. ✅ Set up Google Ads campaigns
5. ✅ Launch and monitor analytics!

**Good luck! 🚀**# YasinAutoWebsite
