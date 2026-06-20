import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import LegalLayout from '@/components/shared/LegalLayout';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  description: 'Yenice Otomotiv gizlilik politikası ve kişisel verilerin işlenmesine ilişkin bilgilendirme.',
  alternates: {
    canonical: '/gizlilik-politikasi',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Gizlilik Politikası">
          <div className="prose prose-emerald max-w-none text-gray-600 leading-relaxed space-y-6">
            <p>
              Son güncellenme tarihi: {new Date().toLocaleDateString('tr-TR')}
            </p>
            
            <p>
              {siteConfig.name} ("biz", "bizim" veya "şirketimiz") olarak, müşterilerimizin ve web sitemizi ziyaret eden kullanıcıların gizliliğine ve kişisel verilerinin korunmasına büyük önem atfediyoruz. Bu Gizlilik Politikası; web sitemizi (yeniceotomotiv.com) kullandığınızda veya hizmetlerimizden faydalandığınızda kişisel verilerinizin nasıl toplandığını, kullanıldığını, paylaşıldığını ve korunduğunu anlatır.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Toplanan Bilgiler</h2>
            <p>
              Hizmetlerimizden yararlandığınızda aşağıdaki türde bilgileri toplayabiliriz:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Kimlik ve İletişim Bilgileri:</strong> Adınız, soyadınız, telefon numaranız ve e-posta adresiniz.</li>
              <li><strong>Araç Bilgileri:</strong> Marka, model, yıl, hasar durumu, plaka, ruhsat bilgileri ve araç fotoğraflarınız.</li>
              <li><strong>Teknik Bilgiler:</strong> IP adresiniz, tarayıcı türünüz, işletim sisteminiz ile web sitemizi ziyaret ettiğiniz tarih ve saat.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Bilgilerin Kullanım Amacı</h2>
            <p>
              Topladığımız kişisel verileri aşağıdaki amaçlar doğrultusunda kullanıyoruz:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Aracınız için en doğru fiyat teklifini hazırlayıp sunmak,</li>
              <li>Sizinle iletişim kurmak ve taleplerinizi karşılamak,</li>
              <li>Noter, devir ve çekici işlemlerini düzenlemek,</li>
              <li>Hizmet kalitemizi yükseltmek ve müşteri memnuniyetini sağlamak,</li>
              <li>Yasal yükümlülüklerimizi yerine getirmek.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Bilgilerin Paylaşımı</h2>
            <p>
              Kişisel verileriniz, sadece size hizmet verebilmek amacıyla ve yasal zorunluluklar kapsamında aşağıdaki kişi veya kurumlarla paylaşılabilir:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Çekici ve lojistik iş ortaklarımız (aracınızın taşınması için),</li>
              <li>Noterlikler ve ilgili resmi kurumlar (devir işlemleri için),</li>
              <li>Yasal bir zorunluluğun bulunması durumunda yetkili kamu kurum ve kuruluşları.</li>
            </ul>
            <p>Verileriniz hiçbir koşulda reklam ya da pazarlama amacıyla üçüncü kişilere satılmaz.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Veri Güvenliği</h2>
            <p>
              Kişisel verilerinizi yetkisiz erişime, kaybolmaya, değiştirilmeye ya da ifşa edilmeye karşı korumak için gerekli tüm teknik ve idari önlemleri alıyoruz. Sitemiz 256-bit SSL sertifikasıyla şifrelenmektedir.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Haklarınız</h2>
            <p>
              KVKK gereğince kişisel verilerinize ilişkin olarak; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna dair bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, eksik veya hatalı işlenmişse düzeltilmesini isteme haklarına sahipsiniz.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. İletişim</h2>
            <p>
              Gizlilik politikamıza dair soru ve taleplerinizi bizimle paylaşabilirsiniz:
            </p>
            <div className="bg-gray-100 p-6 rounded-xl mt-4">
              <p className="mb-2"><strong>E-posta:</strong> {siteConfig.email}</p>
              <p className="mb-2"><strong>Telefon:</strong> {siteConfig.phoneDisplay}</p>
              <p><strong>Çalışma Saatleri:</strong> 7/24 Hizmet</p>
            </div>
          </div>
    </LegalLayout>
  );
}
