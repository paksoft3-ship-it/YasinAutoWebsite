import { Metadata } from 'next';
import Container from '@/components/shared/Container';
import SectionHeader from '@/components/shared/SectionHeader';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/shared/CTABanner';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import { ModernIcon } from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: "Hakkımızda | Türkiye'nin Güvenilir Araç Alım Merkezi",
  description:
    "5+ yıl tecrübe, 10.000+ memnun müşteri. Yenice Oto olarak kazalı, hasarlı, pert ve hurda araç alımında Türkiye genelinde güvenilir hizmet.",
  alternates: { canonical: 'https://www.yeniceotohasarli.com/hakkimizda' },
  openGraph: { url: 'https://www.yeniceotohasarli.com/hakkimizda' },
};

const values = [
  { icon: 'garanti', title: 'Güven', text: 'Açık ve dürüst fiyatlandırmamızla müşterilerimizin güvenini kazanıyoruz.' },
  { icon: 'anında', title: 'Hız', text: '30 dakikada değerlendirme ve aynı gün ödeme ile vaktinizden tasarruf ettiriyoruz.' },
  { icon: 'tecrübe', title: 'Profesyonellik', text: '5+ yıllık birikimimiz ve uzman kadromuzla profesyonel bir hizmet veriyoruz.' },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <PageHero
        breadcrumbs={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Hakkımızda' }]}
        eyebrow="Hakkımızda"
        title="Türkiye'nin"
        highlight="En Güvenilir Adresi"
        subtitle="5+ yıldır kazalı, hasarlı, pert ve hurda araç alımında öncülük eden firma. 10.000+ memnun müşteriyle Türkiye'nin lideriyiz."
        showStats
      />

      {/* Story */}
      <section className="section bg-surface">
        <Container className="max-w-3xl">
          <SectionHeader eyebrow="Hikayemiz" title="Bizim" highlight="Hikayemiz" />
          <div className="space-y-5 text-[16px] leading-relaxed text-ink-soft">
            <p>
              <strong className="text-ink">Yenice Otomotiv</strong>, 2021 yılından itibaren Türkiye'nin her köşesinde
              kazalı, hasarlı, pert ve hurda araç alım-satım hizmeti sunmaktadır. 5 yılı aşan deneyimimiz ve
              10.000'i geçen memnun müşterimizle sektörün önde gelen firmalarından biriyiz.
            </p>
            <p>
              Müşteri memnuniyetini her şeyin önünde tutan anlayışımız, şeffaf fiyatlandırma ilkemiz ve
              profesyonel kadromuzla <strong className="text-ink">Türkiye'nin en güvenilir araç alım merkezi</strong>{' '}
              olmayı başardık.
            </p>
            <p>
              Başta İstanbul, Ankara ve İzmir olmak üzere Türkiye'nin 81 ilinde hizmet veriyoruz. Uzman kadromuz,
              7/24 müşteri hizmetleri, ücretsiz çekici hizmetimiz ve aynı gün ödeme garantimizle yanınızda.
            </p>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="section bg-surface-alt">
        <Container>
          <SectionHeader eyebrow="Değerlerimiz" title="Temel" highlight="Değerlerimiz" />
          <div className="grid gap-4 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-line bg-white p-6 shadow-soft">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green-soft text-brand-green-dark">
                  <ModernIcon name={v.icon} label={v.title} className="h-7 w-7" strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-[18px] font-bold text-ink">{v.title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <WhyChooseUsSection />

      <CTABanner
        title="Bizimle Çalışın,"
        highlight="En Yüksek Fiyatı Alın"
        subtitle="5+ yıllık deneyimimizden yararlanın."
        source="hakkimizda-cta"
      />
    </div>
  );
}
