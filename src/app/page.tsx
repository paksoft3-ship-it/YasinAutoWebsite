import { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import StatsStrip from '@/components/home/StatsStrip';
import TrustBenefitsSection from '@/components/home/TrustBenefitsSection';
import VehicleServicesSection from '@/components/home/VehicleServicesSection';
import ProcessSection from '@/components/home/ProcessSection';
import QuoteFormSection from '@/components/home/QuoteFormSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FAQSection from '@/components/home/FAQSection';
import FinalCTASection from '@/components/home/FinalCTASection';

export const metadata: Metadata = {
  title: 'Hasarlı, Kazalı, Pert ve Hurda Araç Alımı | Yenice Oto',
  description:
    'Yenice Oto ile kazalı, hasarlı, pert ve hurda aracınız için 30 dakikada teklif alın. Ücretsiz çekici, noterde güvenli devir, anında nakit ödeme.',
  alternates: { canonical: 'https://www.yeniceotohasarli.com/' },
  openGraph: {
    title: 'Hasarlı, Kazalı, Pert ve Hurda Araç Alan Firma | Yenice Otomotiv',
    description:
      'Kazalı, hasarlı, pert ve hurda araçlarınıza 30 dakikada teklif. Ücretsiz çekici, noterde güvenli devir ve anında ödeme.',
    url: 'https://www.yeniceotohasarli.com/',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <TrustBenefitsSection />
      <VehicleServicesSection />
      <ProcessSection />
      <QuoteFormSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
