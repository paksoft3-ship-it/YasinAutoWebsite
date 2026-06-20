import { BanknotesIcon, DocumentIcon, ShieldCheckIcon, TruckIcon, ZapIcon } from '@/components/ui/Icons';

const proofItems = [
  {
    title: 'Noterde güvenli devir',
    description: 'Satış işlemi resmi noter sürecinden geçerek tamamlanır.',
    icon: DocumentIcon,
  },
  {
    title: 'Dekontlu anında ödeme',
    description: 'Nakit ya da EFT ödemesi işlem anında belirlenir.',
    icon: BanknotesIcon,
  },
  {
    title: 'Ücretsiz çekici',
    description: 'Çalışmayan araçlar için bulunduğu yerden teslim ayarlanır.',
    icon: TruckIcon,
  },
  {
    title: '30 dakikada ön teklif',
    description: 'Fotoğraf ve araç bilgisine göre hızlı bir fiyat aralığı paylaşılır.',
    icon: ZapIcon,
  },
];

export default function TrustProofSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.6fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
                <ShieldCheckIcon className="h-5 w-5" strokeWidth={2} />
                Güvence Kontrolü
              </div>
              <h2 className="mb-3 text-3xl font-black leading-tight text-gray-900 md:text-4xl">
                Satış öncesi her adım açık ve net.
              </h2>
              <p className="text-gray-600">
                Araç alımında güven, en az fiyat kadar değerlidir. Bu nedenle teklif, çekici,
                noter ve ödeme adımlarını en baştan şeffaf biçimde planlıyoruz.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {proofItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="rounded-xl border border-emerald-100 bg-white p-5 shadow-sm">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
