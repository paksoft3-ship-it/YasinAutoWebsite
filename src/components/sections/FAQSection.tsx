'use client';

import { useState } from 'react';
import SectionLabel from '@/components/ui/SectionLabel';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Kazalı araç alımında süreç nasıl ilerliyor?',
      answer: 'İlk olarak bizi arayıp aracınızla ilgili bilgi paylaşıyorsunuz. Ardından fotoğrafları WhatsApp üzerinden iletiyorsunuz. 30 dakika içinde size en yüksek fiyat teklifini veriyoruz. Teklifi onaylarsanız, ücretsiz çekici ile aracınızı alıyor ve noter işlemleri bittikten sonra anında ödeme yapıyoruz.',
    },
    {
      question: 'Ücretsiz çekici hizmeti hangi şehirleri kapsıyor?',
      answer: 'Türkiye\'nin bütün illerinde ücretsiz çekici hizmeti sağlıyoruz. Başta İstanbul, Ankara, İzmir olmak üzere her şehirden araçları teslim alabiliyoruz.',
    },
    {
      question: 'Ödeme ne şekilde yapılıyor?',
      answer: 'Noter işlemleri bittikten hemen sonra nakit veya EFT yoluyla anında ödeme yapıyoruz. Ödemede herhangi bir ek masraf ya da gecikme söz konusu değildir.',
    },
    {
      question: 'Ne tür araçları satın alıyorsunuz?',
      answer: 'Kazalı, hasarlı, pert ve hurda dahil tüm araç türlerini alıyoruz. Marka, model ve yıl ayrımı yapmadan değerlendirme yapıyoruz.',
    },
    {
      question: 'Ekspertiz için ücret alıyor musunuz?',
      answer: 'Hayır, ekspertiz hizmetimiz tümüyle ücretsizdir. Aracınızı bulunduğu yerde değerlendirip size en iyi teklifi sunuyoruz.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <SectionLabel>Sıkça Sorulan Sorular</SectionLabel>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Sıkça Sorulanlar
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 font-medium text-gray-900 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <span className="text-base">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </button>

              {openIndex === index && (
                <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}