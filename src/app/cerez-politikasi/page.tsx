import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import LegalLayout from '@/components/shared/LegalLayout';

export const metadata: Metadata = {
  title: 'Çerez Politikası',
  description: 'Yenice Otomotiv web sitesinde kullanılan çerezler ve bunların yönetimine ilişkin bilgilendirme.',
  alternates: {
    canonical: '/cerez-politikasi',
  },
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Çerez Politikası">
          <div className="prose prose-emerald max-w-none text-gray-600 leading-relaxed space-y-6">
            <p>
              Son güncellenme tarihi: {new Date().toLocaleDateString('tr-TR')}
            </p>
            
            <p>
              {siteConfig.name} olarak, web sitemizden (yeniceotomotiv.com) en verimli biçimde yararlanabilmeniz ve kullanıcı deneyiminizi iyileştirebilmek amacıyla Çerezler (Cookies) kullanıyoruz. Çerez kullanımını istemiyorsanız tarayıcınızın ayarları üzerinden çerezleri silebilir veya engelleyebilirsiniz.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Çerez (Cookie) Nedir?</h2>
            <p>
              Çerezler, ziyaret ettiğiniz internet sitelerinin tarayıcılar üzerinden bilgisayarınıza ya da akıllı telefonunuza kaydettiği küçük metin dosyalarıdır. Çerezler sayesinde web siteleri daha kullanıcı dostu bir deneyim sunabilir.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Hangi Çerezleri Kullanıyoruz?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Zorunlu Çerezler:</strong> Web sitesinin sorunsuz çalışabilmesi ve temel işlevlerini yerine getirebilmesi için mutlaka gereken çerezlerdir.</li>
              <li><strong>Performans ve Analiz Çerezleri:</strong> Sitemizi nasıl kullandığınızı (hangi sayfalara girdiğiniz, ne kadar süre kaldığınız vb.) çözümlemek ve site performansını geliştirmek amacıyla kullanılır (örn: Google Analytics).</li>
              <li><strong>Reklam ve Hedefleme Çerezleri:</strong> İlgi alanlarınıza uygun reklamlar göstermek ve reklam kampanyalarının verimliliğini ölçmek için kullanılır (örn: Google Ads, Meta Pixel).</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Çerezlerin Kullanım Amaçları</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Web sitesinin çalışması için gereken temel fonksiyonları yerine getirmek.</li>
              <li>Web sitesini çözümlemek ve performansını yükseltmek.</li>
              <li>İşlevselliği geliştirmek ve kullanım kolaylığı sunmak.</li>
              <li>Pazarlama ve reklam çalışmalarını yürütmek.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Çerezleri Nasıl Yönetebilirsiniz?</h2>
            <p>
              Kullandığınız internet tarayıcısının ayarları üzerinden çerezlerle ilgili tercihlerinizi özelleştirebilirsiniz. Çerezleri tümüyle devre dışı bırakırsanız web sitemizin bazı özellikleri beklendiği gibi çalışmayabilir.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Chrome:</strong> Ayarlar &gt; Gizlilik ve güvenlik &gt; Çerezler ve diğer site verileri</li>
              <li><strong>Safari:</strong> Tercihler &gt; Gizlilik &gt; Çerezleri Engelle</li>
              <li><strong>Firefox:</strong> Seçenekler &gt; Gizlilik ve Güvenlik &gt; Çerezler ve Site Verileri</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. İletişim</h2>
            <p>
              Çerez politikamıza dair soru ve görüşlerinizi bizimle paylaşabilirsiniz:
            </p>
            <div className="bg-gray-100 p-6 rounded-xl mt-4">
              <p className="mb-2"><strong>E-posta:</strong> {siteConfig.email}</p>
              <p className="mb-2"><strong>Telefon:</strong> {siteConfig.phoneDisplay}</p>
            </div>
          </div>
    </LegalLayout>
  );
}
