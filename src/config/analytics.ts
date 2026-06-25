// src/config/analytics.ts
export const analyticsConfig = {
  gtm: {
    // Yenice Otomotiv GTM container. Real ID lives in NEXT_PUBLIC_GTM_ID (.env.local).
    id: process.env.NEXT_PUBLIC_GTM_ID || '',
    enabled: !!process.env.NEXT_PUBLIC_GTM_ID,
  },
  ga: {
    // GA4 fires via GTM — leave NEXT_PUBLIC_GA_ID blank to avoid double-counting.
    id: process.env.NEXT_PUBLIC_GA_ID || '',
    enabled: !!process.env.NEXT_PUBLIC_GA_ID,
  },
  googleAds: {
    // Set NEXT_PUBLIC_ADS_CONVERSION_ID (AW-XXXXXXXXX) to enable gtag conversions.
    // If left empty, GTM remains the single source of truth and nothing double-fires.
    conversionId: process.env.NEXT_PUBLIC_ADS_CONVERSION_ID || '',
    conversionLabels: {
      phone: process.env.NEXT_PUBLIC_ADS_PHONE_CONVERSION_LABEL || '',
      whatsapp: process.env.NEXT_PUBLIC_ADS_WHATSAPP_CONVERSION_LABEL || '',
      form: process.env.NEXT_PUBLIC_ADS_FORM_CONVERSION_LABEL || '',
    },
    enabled: !!process.env.NEXT_PUBLIC_ADS_CONVERSION_ID,
  },
  facebook: {
    pixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID || '',
    enabled: !!process.env.NEXT_PUBLIC_FB_PIXEL_ID,
  },
};

export type AnalyticsConfig = typeof analyticsConfig;