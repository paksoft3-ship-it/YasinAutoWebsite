import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import LegalLayout from '@/components/shared/LegalLayout';

export const metadata: Metadata = {
  title: 'Kullanım Şartları | Yenice Oto',
  description: 'Yenice Otomotiv web sitesinin kullanım şartları ve koşullarına ilişkin bilgilendirme.',
  alternates: {
    canonical: 'https://www.yeniceotohasarli.com/kullanim-sartlari',
  },
  openGraph: { url: 'https://www.yeniceotohasarli.com/kullanim-sartlari' },
};

export default function TermsOfUsePage() {
  return (
    <LegalLayout title="Kullanım Şartları">
          <div className="prose prose-emerald max-w-none text-gray-600 leading-relaxed space-y-6">
            <p>
              Son güncellenme tarihi: {new Date().toLocaleDateString('tr-TR')}
            </p>
            
            <p>
              Bu web sitesini (yeniceotomotiv.com) ziyaret ederek ya da hizmetlerimizden faydalanarak aşağıdaki kullanım şartlarını kabul etmiş sayılırsınız. Lütfen hizmetlerimizden yararlanmadan önce bu şartları dikkatlice inceleyiniz.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Hizmet Kapsamı</h2>
            <p>
              {siteConfig.name}, kazalı, hasarlı, pert ve hurda araçların alımını yürüten bir platformdur. Web sitemiz aracılığıyla verilen teklifler, tarafınızca iletilen beyan ve fotoğraflara dayanır ve ön değerlendirme niteliğindedir. Kesin fiyat, aracın yerinde incelenmesinin ardından belirlenir.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Kullanıcı Yükümlülükleri</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Aracınıza ilişkin (hasar durumu, kilometre, tramer kaydı, rehin/haciz durumu vb.) doğru ve eksiksiz bilgi vermekle yükümlüsünüz.</li>
              <li>Hatalı ya da eksik bilgi verilmesi halinde {siteConfig.name}, sunduğu teklifi geri çekme veya güncelleme hakkını saklı tutar.</li>
              <li>Aracın yasal sahibi olduğunuzu ya da yasal sahibini temsile yetkili olduğunuzu beyan edersiniz.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Fiyat Teklifleri ve Geçerlilik</h2>
            <p>
              Sitemiz, WhatsApp hattımız ya da telefon yoluyla iletilen fiyat teklifleri aksi belirtilmediği sürece yalnızca o gün için geçerlidir. Piyasa koşullarındaki değişiklikler sebebiyle teklifler güncellenebilir. {siteConfig.name}, herhangi bir aracı satın alma yükümlülüğü taşımaz.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Fikri Mülkiyet Hakları</h2>
            <p>
              Bu web sitesindeki tüm içerik, logo, tasarım, grafik ve yazılımlar {siteConfig.name}'a ait olup ya da lisanslı biçimde kullanılmaktadır. Bunların izinsiz kopyalanması, çoğaltılması veya dağıtılması yasaktır.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Sorumluluğun Sınırlandırılması</h2>
            <p>
              {siteConfig.name}, web sitesinin kesintisiz ya da hatasız çalışacağını garanti etmez. Sitenin kullanımından kaynaklanabilecek doğrudan veya dolaylı zararlardan {siteConfig.name} sorumlu tutulamaz. Dış bağlantılar (diğer web sitelerine verilen linkler) üzerindeki içeriklere yönelik sorumluluk kabul edilmez.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Şartlarda Değişiklik</h2>
            <p>
              {siteConfig.name}, önceden bildirim yapmaksızın bu Kullanım Şartları'nda değişikliğe gitme hakkını saklı tutar. Güncel şartlar sitede yayımlandığı anda yürürlüğe girer.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. İletişim</h2>
            <p>
              Kullanım şartlarına dair sorularınızı bizimle paylaşabilirsiniz:
            </p>
            <div className="bg-gray-100 p-6 rounded-xl mt-4">
              <p className="mb-2"><strong>E-posta:</strong> {siteConfig.email}</p>
              <p className="mb-2"><strong>Telefon:</strong> {siteConfig.phoneDisplay}</p>
            </div>
          </div>
    </LegalLayout>
  );
}
