import {
  ShieldCheck,
  Users,
  Truck,
  Clock,
  FileText,
  Wallet,
  BadgeCheck,
  Phone,
  Camera,
  HandCoins,
  type LucideIcon,
} from 'lucide-react';

/* ---- Safe & easy selling benefits ---- */
export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  { icon: ShieldCheck, title: 'Noter Güvencesiyle Devir', description: 'Tüm satış, baştan sona resmi noter işlemiyle güvence altına alınır.' },
  { icon: Users, title: 'Alanında Uzman Ekip', description: '5+ yıllık birikimimizle aracınıza adil ve doğru bir değer biçeriz.' },
  { icon: Truck, title: 'Ücretsiz Çekici Hizmeti', description: 'Çalışmayan araçlar dahil, bulunduğunuz adresten ücretsiz alıyoruz.' },
  { icon: Clock, title: '30 Dakikada Fiyat', description: 'Araç bilgisi ve fotoğraflarla en geç 30 dakikada fiyat aralığını paylaşırız.' },
  { icon: FileText, title: 'Evrak İşleri Bizde', description: 'Noter ve tescil dahil tüm resmi işlemleri sizin yerinize tamamlarız.' },
];

/* ---- Four-step process ---- */
export interface ProcessStep {
  icon: LucideIcon;
  number: number;
  title: string;
  description: string;
  time: string;
}

export const processSteps: ProcessStep[] = [
  { icon: Phone, number: 1, title: 'Bize Ulaşın', description: 'Telefon ya da WhatsApp üzerinden aracınızı birkaç cümleyle aktarın.', time: '5 dk. · İlk Görüşme' },
  { icon: Camera, number: 2, title: 'Fotoğraf Paylaşın', description: 'Aracın fotoğraflarını WhatsApp üzerinden bize iletin.', time: '30 dk. · Değerlendirme' },
  { icon: BadgeCheck, number: 3, title: 'Teklifinizi Alın', description: 'Size en yüksek fiyat teklifini sunup noter adımlarını netleştirelim.', time: '2 saat · Noter İşlemi' },
  { icon: HandCoins, number: 4, title: 'Satışı Tamamlayın', description: 'Devrin ardından ödemenizi aynı anda nakit veya EFT olarak alın.', time: 'Aynı Gün · Ödeme' },
];

/* ---- Why choose us ---- */
export interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const reasons: Reason[] = [
  { icon: Clock, title: 'Hızlı Değerleme', description: '30 dakika içinde net bir fiyat teklifi.' },
  { icon: Wallet, title: 'Piyasanın Üstünde Fiyat', description: 'En iyi piyasa teklifini vermeyi taahhüt ediyoruz.' },
  { icon: Truck, title: 'Ücretsiz Çekici', description: 'Aracınızı olduğu yerden ücretsiz çekiyoruz.' },
  { icon: FileText, title: 'Evraklar Bizden', description: 'Noter ve tescil işlemleri tarafımızdan.' },
  { icon: HandCoins, title: 'Anında Ödeme', description: 'Nakit ya da EFT ile hızlı ödeme.' },
  { icon: BadgeCheck, title: '5+ Yıl Deneyim', description: '10.000+ memnun müşteri.' },
];

/* ---- Service images (real damage photos in /public/images/cars) ---- */
export const serviceImages: Record<string, string> = {
  kazali: '/images/cars/kazali-arac-on-darbe-beyaz-bmw.jpeg',
  hasarli: '/images/cars/hasarli-arac-yan-darbe-yesil-suv.jpeg',
  pert: '/images/cars/pert-arac-agir-hasarli-beyaz-sedan.jpeg',
  hurda: '/images/cars/hurda-arac-su-baskini-motor.jpeg',
};

/* ---- Hero + CTA images (real damage photos) ---- */
export const heroImage = '/images/cars/kazali-suv-cekici-uzerinde.jpeg';
export const ctaImage = '/images/cars/hasarli-arac-yol-kenari-gumus-station-wagon.jpeg';

/* ---- Homepage testimonials (real, on-site) ---- */
export interface Testimonial {
  name: string;
  city: string;
  category: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  { name: 'Ahmet Y.', city: 'İstanbul', category: 'Kazalı Araç', rating: 5, text: 'Kazalı aracıma yarım saatte değer biçtiler ve piyasadaki en iyi fiyatı önerdiler. Gönül rahatlığıyla tavsiye ederim!' },
  { name: 'Zeynep K.', city: 'Ankara', category: 'Hasarlı Araç', rating: 5, text: 'Ücretsiz çekici tam ihtiyacım olan şeydi; evrak işlerini de anında bitirdiler. Son derece profesyonel bir ekip.' },
  { name: 'Mehmet D.', city: 'İzmir', category: 'Pert Araç', rating: 5, text: 'Pert aracımı satarken epey tedirgindim; her adımı tek tek anlattılar ve ödememi aynı gün aldım.' },
];

/* ---- FAQ ---- */
export const faqs = [
  { question: 'Kaza geçirmiş araçları satın alıyor musunuz?', answer: 'Evet. Ön, yan ve arka darbe, takla, yangın ile şasi hasarı dahil her tür kazalı aracı alıyoruz. Aracın çalışır durumda olması gerekmez; ücretsiz çekiciyle bulunduğu yerden teslim alıyoruz.' },
  { question: 'Hasarlı araçlar için ön fiyatı nasıl belirliyorsunuz?', answer: 'Bizi arayıp aracınızı tarif ediyor, fotoğrafları WhatsApp üzerinden iletiyorsunuz. En geç 30 dakikada en yüksek fiyat teklifimizi paylaşıyoruz.' },
  { question: 'Ödemeyi ne şekilde yapıyorsunuz?', answer: 'Noter işlemleri biter bitmez nakit ya da EFT ile ödemenizi gerçekleştiriyoruz. Hiçbir ek masraf veya bekleme söz konusu değildir.' },
  { question: 'Hangi şehir ve bölgelere hizmet götürüyorsunuz?', answer: 'Türkiye genelinde 81 ilde hizmetinizdeyiz. Başta İstanbul, Ankara ve İzmir olmak üzere her ilden araç alıyor, ücretsiz çekici yönlendiriyoruz.' },
  { question: 'Ekspertiz için ücret alıyor musunuz?', answer: 'Hayır; ekspertiz ve değerleme tamamen ücretsizdir. Aracınızı bulunduğu yerde inceleyip en iyi teklifimizi veriyoruz.' },
  { question: 'Çekici hizmeti sunuyor musunuz?', answer: 'Evet. Çalışmayan ve yola çıkamayacak araçlar için Türkiye’nin her yerinde ücretsiz çekici sağlıyoruz.' },
];
