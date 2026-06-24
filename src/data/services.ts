export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  color: 'lime' | 'purple' | 'fuchsia';

  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonical: string;
  ogUrl: string;



  // Hero Section
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    image: string;
  };

  // Features
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  // Process (optional override)
  customProcess?: Array<{
    number: number;
    icon: string;
    title: string;
    description: string;
  }>;

  // FAQ
  faqs: Array<{
    question: string;
    answer: string;
  }>;

  // Common mistakes section
  commonMistakes: Array<{
    mistake: string;
    tip: string;
  }>;

  // Customer stories
  customerStories: Array<{
    name: string;
    city: string;
    vehicleType: string;
    story: string;
    result: string;
  }>;

  // Content sections
  content: {
    whatWeAccept: string[];
    pricing: {
      title: string;
      description: string;
      factors: string[];
      byVehicleType: Array<{ type: string; priceRange: string }>;
    };
    whyChooseUs: string[];
    relatedServices: Array<{ title: string; slug: string; description: string }>;
  };
}

export const servicesData: Record<string, ServiceData> = {
  'kazali-arac-alim': {
    id: 'kazali',
    slug: 'kazali-arac-alim',
    title: 'Kazalı Araç Alımı',
    shortTitle: 'Kazalı Araç',
    icon: '🚗',
    color: 'lime',

    metaTitle: 'Kazalı Araç Alımı | 30 Dakikada Teklif - Yenice Oto',
    metaDescription: 'Kaza geçirmiş aracınızı 30 dakikada değerlendiriyoruz. En yüksek fiyat, ücretsiz çekici, aynı gün nakit ödeme. 5+ yıl tecrübe, hemen teklif alın.',
    keywords: [
      'kazalı araç alan',
      'kazalı araç alımı',
      'kazalı araba alan',
      'kaza yapmış araç alan',
      'kazalı oto alan',
    ],
    canonical: 'https://www.yeniceotohasarli.com/kazali-arac-alim',
    ogUrl: 'https://www.yeniceotohasarli.com/kazali-arac-alim',

    hero: {
      badge: '🚗 KAZALI ARAÇ ALIMI',
      title: 'Kazalı Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Kaza geçirmiş her marka araç için hemen değer biçiyoruz. 30 dakikada teklif, ücretsiz çekici, anında ödeme.',
      image: '/images/cars/kazali-arac-on-darbe-beyaz-bmw.jpeg',
    },

    features: [
      {
        icon: '⚡',
        title: '30 Dakikada Teklif',
        description: 'Aracınızın fotoğraflarını iletin, 30 dakika içinde en yüksek teklife ulaşın.',
      },
      {
        icon: '💰',
        title: 'En Yüksek Fiyat',
        description: 'Piyasayı tarayarak kazalı aracınıza verilebilecek en iyi fiyatı garanti ediyoruz.',
      },
      {
        icon: '🚚',
        title: 'Ücretsiz Çekici',
        description: 'Kazalı aracınızı bulunduğu noktadan hiçbir ücret almadan teslim alıyoruz.',
      },
      {
        icon: '📄',
        title: 'Tüm Evraklar Bizden',
        description: 'Noter ve tescil işlemlerinin tamamını biz üstleniyoruz.',
      },
      {
        icon: '💳',
        title: 'Anında Ödeme',
        description: 'İşlem sonuçlanır sonuçlanmaz nakit ya da EFT ile ödemenizi yapıyoruz.',
      },
      {
        icon: '🏆',
        title: 'Tecrübeli Ekip',
        description: '5+ yıllık kazalı araç alım satım deneyimi.',
      },
    ],

    faqs: [
      {
        question: 'Kazalı araç alımı süreci nasıl ilerliyor?',
        answer: 'Kazalı araç alım sürecimiz 4 aşamadan oluşur. Önce telefonla ya da WhatsApp üzerinden bize ulaşıp aracınızla ilgili temel bilgileri aktarıyorsunuz. İkinci aşamada birkaç fotoğraf paylaşıyorsunuz; ön, arka, yan ve hasarlı bölgeleri açıkça gösteren kareler yeterli oluyor. Üçüncü aşamada uzman ekibimiz 30 dakika içinde size en yüksek fiyat teklifini iletiyor. Teklifi onaylamanız durumunda dördüncü aşamada ücretsiz çekiciyle aracınızı dilediğiniz adresten alıyor, noter işlemlerini sonuçlandırıyor ve anında ödemeyi gerçekleştiriyoruz. İşlemin tamamı genellikle aynı gün içinde biter; sizi bekletmiyoruz.',
      },
      {
        question: 'Ne tür kazalı araçlar alıyorsunuz?',
        answer: 'Hasarın türüne veya büyüklüğüne bakmaksızın her kazalı aracı alıyoruz. Önden, yandan, arkadan darbe almış, devrilmiş ve takla atmış araçların hepsi alım kapsamımıza giriyor. Motor, şanzıman, diferansiyel ya da kaporta hasarı bulunan, hava yastığı açılmış ve şasi hasarı olan araçları da değerlendiriyoruz. Sürülemeyen, hareket edemeyen veya yangın görmüş araçlar için de ücretsiz çekiciyle yerinden alım yapıyoruz. 5+ yıllık deneyimimizle daha önce karşılaşmadığımız hasar neredeyse kalmadı.',
      },
      {
        question: 'Kazalı araca ne kadar ödeme yapıyorsunuz?',
        answer: 'Kazalı araç fiyatı pek çok etkene göre şekillenir: aracın markası, modeli, üretim yılı, kilometresi, hasarın türü ve büyüklüğü, tamir edilebilir parçaların değeri ve o günkü piyasa talebi bunların başında gelir. Kural olarak kazalı araçlar sağlam piyasa değerinin %50-80\'i aralığında fiyatlanır; ancak bu oran hasarın ağırlığına göre değişebilir. Piyasayı araştırarak rakiplerimizin üzerinde teklif vermeyi taahhüt ediyoruz. Size dürüst ve şeffaf bir fiyat sunuyoruz; gizli kesinti ya da beklenmedik düşüşle karşılaşmazsınız.',
      },
      {
        question: 'Trafik kazası raporu şart mı?',
        answer: 'Kaza raporu satış işlemini kolaylaştırır ve bazı durumlarda daha yüksek fiyat almanıza yardımcı olabilir; fakat zorunlu değildir. Trafik kazası tutanağı, alkol raporu veya bilirkişi raporu olmasa bile aracınızı yerinde inceleyip size teklif sunabiliriz. Raporunuz varsa mutlaka iletin, çünkü belgeli hasar bilgisi işlemi hızlandırır. Rapor yoksa ekibimiz yerinde inceleyerek bağımsız bir değerlendirme yapar. Tüm evrak süreçlerinde de size yol gösteriyoruz.',
      },
      {
        question: 'Ağır hasarlı araçları da alıyor musunuz?',
        answer: 'Evet, hasarı ne kadar büyük olursa olsun tüm kazalı araçları alıyoruz. Tamamen ezilmiş, motor bloğu çökmüş, şasi hasarlı veya yangın görmüş araçlar dahil her durumdaki aracı değerlendiriyoruz. Ağır hasarlı araçlarda dahi kullanılabilir parçalar, metal değeri ve sigorta tazminatları fiyatı belirlemede etkili olur. Ayrıca sürülemeyen ya da hareket edemeyen araçlar için tüm Türkiye\'ye ücretsiz çekici hizmeti veriyoruz. "Aracım çok hasarlı, almazlar" diye düşünüp vazgeçmeyin; bizi arayın ve gerçek teklifi öğrenin.',
      },
    ],

    commonMistakes: [
      {
        mistake: 'Yalnızca tek bir alıcıdan teklif almak',
        tip: 'En az 2-3 alıcıdan teklif isteyin. Yenice Otomotiv olarak piyasanın en yüksek teklifini verdiğimizi garanti ediyoruz, yine de karşılaştırma yapmanız son derece yerinde bir tercih.',
      },
      {
        mistake: 'Kaza anının fotoğrafını çekmemek',
        tip: 'Kazanın hemen ardından bol bol fotoğraf çekin. Hasarlı bölgeleri, plakayı ve aracın genel halini belgeleyen kareler değerlendirmeyi hızlandırır ve daha adil fiyat almanızı sağlar.',
      },
      {
        mistake: 'Sigortaya başvurmadan aracı satmak',
        tip: 'Önce sigorta şirketinizle iletişime geçin ve kasko/zorunlu trafik sigortası kapsamınızı öğrenin. Sigorta tazminatını aldıktan sonra satış yapmanız sizin için daha kazançlı olabilir.',
      },
      {
        mistake: 'Aracı tamire verdikten sonra satmaya kalkışmak',
        tip: 'Kazalı aracı onartıp satmak çoğunlukla ekonomik değildir. Tamir gideri düşüldüğünde elinizde çok az kazanç kalabilir. Doğrudan Yenice Otomotiv\'a satarak tamir masrafından kurtulun.',
      },
    ],

    customerStories: [
      {
        name: 'Mehmet K.',
        city: 'İstanbul',
        vehicleType: 'Kazalı Volkswagen Golf',
        story: 'Araç kaza yaptıktan sonra nasıl bir yol izleyeceğimi şaşırdım. Sigorta şirketi düşük teklif verdi, galericiler ise aracı görmeye bile yanaşmadı.',
        result: 'Yenice Otomotiv\'ı aradım, 25 dakika içinde teklif geldi; aynı gün aracımı teslim ettim ve param hesabıma geçti.',
      },
      {
        name: 'Ayşe D.',
        city: 'Ankara',
        vehicleType: 'Ön Hasar Honda Civic',
        story: 'Ön tampon ve kaput tamamen göçmüştü. Aldığım tamir teklifi oldukça yüksekti. Aracı satmayı düşündüm ama alacağım fiyattan endişeliydim.',
        result: 'Yenice Otomotiv\'ın sunduğu fiyat beklentimi aştı. Ücretsiz çekici geldi, evrakları onlar hallettiler, 3 saatte her şey tamamlandı.',
      },
    ],

    content: {
      whatWeAccept: [
        'Önden darbe almış araçlar',
        'Yandan darbe almış araçlar',
        'Arkadan darbe almış araçlar',
        'Devrilmiş araçlar',
        'Motoru hasar görmüş araçlar',
        'Şanzımanı hasarlı araçlar',
        'Kaportası hasarlı araçlar',
        'Hava yastığı açılmış araçlar',
      ],
      pricing: {
        title: 'Kazalı Araç Fiyatlandırması',
        description: 'Fiyatı belirlerken göz önünde bulundurduğumuz etkenler:',
        factors: [
          'Aracın markası ve modeli',
          'Üretim yılı ve kilometresi',
          'Hasarın türü ve büyüklüğü',
          'Tamir edilebilir parçaların değeri',
          'Piyasadaki talep',
          'Yedek parça değeri',
        ],
        byVehicleType: [
          { type: 'Ekonomik Sınıf Otomobil (Fiat, Hyundai, Renault)', priceRange: '30.000 - 150.000 ₺' },
          { type: 'Orta Sınıf (Toyota, Honda, VW)', priceRange: '80.000 - 300.000 ₺' },
          { type: 'Üst Sınıf (BMW, Mercedes, Audi)', priceRange: '150.000 - 600.000 ₺' },
          { type: 'SUV & Crossover', priceRange: '100.000 - 500.000 ₺' },
          { type: 'Ticari Araç (Minibüs, Kamyonet)', priceRange: '50.000 - 250.000 ₺' },
        ],
      },
      whyChooseUs: [
        'Türkiye\'de kazalı araca en yüksek fiyatı veren firmayız',
        '5+ yıl kazalı araç alım satım deneyimi',
        'Her marka ve model için profesyonel değer biçme',
        'Şeffaf ve güvenilir bir işlem akışı',
        'Tüm Türkiye genelinde ücretsiz çekici hizmeti',
        'Noter işlemleri ve evraklar bizim sorumluluğumuzda',
      ],
      relatedServices: [
        { title: 'Hasarlı Araç Alımı', slug: 'hasarli-arac-alim', description: 'Mekanik ya da kaporta hasarı olan araçlarınız için' },
        { title: 'Pert Araç Alımı', slug: 'pert-arac-alim', description: 'Sigorta pert raporu düzenlenmiş araçlarınız için' },
        { title: 'Hurda Araç Alımı', slug: 'hurda-arac-alim', description: 'Ömrünü doldurmuş araçlarınız için' },
      ],
    },
  },

  'hasarli-arac-alim': {
    id: 'hasarli',
    slug: 'hasarli-arac-alim',
    title: 'Hasarlı Araç Alımı',
    shortTitle: 'Hasarlı Araç',
    icon: '🔧',
    color: 'purple',

    metaTitle: 'Hasarlı Araç Alımı | En Yüksek Fiyat - Yenice Oto',
    metaDescription: 'Hasarlı aracınızı marka model fark etmeksizin alıyoruz. Ücretsiz ekspertiz, aynı gün nakit ödeme, ücretsiz çekici. Hemen ücretsiz teklif alın.',
    keywords: [
      'hasarlı araç alan',
      'hasarlı araç alımı',
      'hasarlı araba alan',
      'hasarlı oto alan',
      'ağır hasarlı araç alan',
    ],
    canonical: 'https://www.yeniceotohasarli.com/hasarli-arac-alim',
    ogUrl: 'https://www.yeniceotohasarli.com/hasarli-arac-alim',

    hero: {
      badge: '🔧 HASARLI ARAÇ ALIMI',
      title: 'Hasarlı Aracınız',
      titleHighlight: 'Anında Nakde',
      subtitle: 'Mekanik, kaporta ya da motor hasarı olan tüm araçlar için profesyonel değerlendirme ve en yüksek fiyat.',
      image: '/images/cars/hasarli-arac-yan-darbe-yesil-suv.jpeg',
    },

    features: [
      {
        icon: '🔍',
        title: 'Detaylı Ekspertiz',
        description: 'Uzman ekibimiz aracınızı ince ayrıntısına kadar değerlendirir.',
      },
      {
        icon: '💰',
        title: 'Adil Fiyat',
        description: 'Hasarın durumuna göre en adil fiyatı veriyoruz.',
      },
      {
        icon: '⚙️',
        title: 'Tüm Hasar Türleri',
        description: 'Motor, şanzıman, kaporta; her tür hasarı kabul ediyoruz.',
      },
      {
        icon: '🚚',
        title: 'Ücretsiz Taşıma',
        description: 'Hasarlı aracınızı ücret almadan çekiyoruz.',
      },
      {
        icon: '📋',
        title: 'Kolay İşlem',
        description: 'Tüm evrak ve işlemleri biz yürütüyoruz.',
      },
      {
        icon: '💳',
        title: 'Hızlı Ödeme',
        description: 'Anında nakit ya da EFT ile ödeme.',
      },
    ],

    faqs: [
      {
        question: 'Ne tür hasarlı araçlar alıyorsunuz?',
        answer: 'Motoru, şanzımanı, kaportası veya elektrik sistemi hasarlı; fren sistemi arızalı, süspansiyonu hasarlı, diferansiyeli hasarlı ve her türlü mekanik arızası olan araçları alıyoruz. Tek bir parçası bozuk bir araçtan çoklu ve kapsamlı hasara kadar her durumu değerlendiriyoruz. Aracın çalışıp çalışmaması da önemli değil; hareket edemeyen araçlarınızı ücretsiz çekiciyle dilediğiniz noktadan teslim alıyoruz. 5 yılı aşan deneyimimizle hasar türü ne olursa olsun size adil ve en yüksek fiyatı veriyoruz.',
      },
      {
        question: 'Motor arızalı araçları da alıyor musunuz?',
        answer: 'Evet, motoru arızalı ya da hasarlı tüm araçları alıyoruz. Motor hasarı; silindir kapağı çatlağı, motor bloğu çatlağı, turbo arızası, yakıt pompası sorunu veya komple motor değişimi gerektiren bir durum olabilir — hepsini değerlendiriyoruz. Motor hasarının büyüklüğü fiyatı etkiler; ancak aracın geri kalan parçalarının durumu, marka ve model değeri de hesaba dahil edilir. Çalışmayan ve çekici gerektiren araçlarınızı bulunduğu yerden ücretsiz alıyoruz. Motoru hasarlı araçlar için de piyasanın en yüksek teklifini vermeyi taahhüt ediyoruz.',
      },
      {
        question: 'Hasarlı araç fiyatı neye göre belirleniyor?',
        answer: 'Hasarlı araç fiyatı; aracın genel durumu, hasarın türü ve büyüklüğü, tamir maliyeti, yedek parça değeri, aracın yaşı ve kilometresi ile o anki piyasa talebine göre belirlenir. Örneğin kaportası hasarlı ama motoru sağlam bir araç, motoru hasarlı bir araca kıyasla daha yüksek değer taşıyabilir. Değerlendirmemizde bu etkenlerin tamamını göz önünde bulunduruyoruz. Bunun yanında değiştirilebilir parçalar, hurda metal değeri ve orijinal aksam fiyatları da hesaba katılır. Size şeffaf ve gerekçeli bir fiyat veriyoruz; pazarlık ya da beklenmedik düşüşle karşılaşmazsınız.',
      },
      {
        question: 'Araç çalışmasa da alıyor musunuz?',
        answer: 'Evet, kesinlikle alıyoruz. Çalışmayan, hareket edemeyen, kendi gücüyle sürülemeyen araçlar tam da bizim uzmanlık alanımız. Aracınız garajda, sokakta ya da serviste olabilir — fark etmez. Tüm Türkiye\'ye ücretsiz çekici hizmetimizle aracınızı bulunduğunuz noktadan teslim alıyoruz. Çekici için bir gün önceden randevu almanız yeterli; çoğu zaman aynı gün hizmet verebiliyoruz. Araç çalışmıyor diye kaygılanmayın; bu durum ne değerlendirmemizi ne de ödeme yapma kararlılığımızı etkiler.',
      },
      {
        question: 'Ekspertiz için ücret alıyor musunuz?',
        answer: 'Hayır, ekspertiz hizmetimiz baştan sona ücretsizdir. Uzman ekibimiz aracınızı yerinde inceleyip ayrıntılı bir değerlendirme yapar; bunun karşılığında herhangi bir ücret istemiyoruz. Araç teslim edilmeden önce size tüm değerlendirme sonuçlarını ve gerekçeli fiyat teklifini iletiyoruz. Teklifi beğenmediğiniz takdirde hiçbir yükümlülüğünüz olmaz. Ücretsiz ekspertiz hizmetimiz Türkiye genelinde geçerlidir ve randevuyla kısa sürede ayarlanabilir.',
      },
    ],

    commonMistakes: [
      {
        mistake: 'Mekanik arızayı kendi imkanlarınızla tamir ettirmeye çalışmak',
        tip: 'Hasarlı araç tamiri çoğu zaman aracın piyasa değerini geçer. Tamire vermeden önce Yenice Otomotiv\'tan ücretsiz değerlendirme alın; tamir giderini satış fiyatıyla kıyaslayın.',
      },
      {
        mistake: 'Hasarı saklamaya çalışmak',
        tip: 'Alıcılar hasarı eninde sonunda fark eder ve bu güveni zedeler. Yenice Otomotiv olarak her tür hasarı kabul ediyoruz; bilgiyi dürüstçe paylaşmanız süreci hızlandırır.',
      },
      {
        mistake: 'Aracı uzun süre bekletmek',
        tip: 'Hasarlı araçlar bekledikçe değerinden kaybeder; pas, nem ve eklenen arızalar fiyatı aşağı çeker. En kısa sürede değerlendirme yaptırmanız daha yüksek fiyat almanızı sağlar.',
      },
    ],

    customerStories: [
      {
        name: 'Kadir S.',
        city: 'İzmir',
        vehicleType: 'Motor Hasarlı Ford Focus',
        story: 'Motor tamamen yanmıştı, tamir teklifi aracın değerini aşıyordu. Kimse ilgilenmek istemedi.',
        result: 'Yenice Otomotiv motor hasarına karşın beklentimin üzerinde fiyat verdi. Çekici geldi, evraklar halloldu, param aynı gün elime geçti.',
      },
      {
        name: 'Fatma Y.',
        city: 'Bursa',
        vehicleType: 'Şanzıman Hasarlı Renault Megane',
        story: 'Otomatik vites arızası nedeniyle araç hareket etmiyordu. Serviste 3 ay bekledi, tamir masrafı oldukça yüksekti.',
        result: 'Yenice Otomotiv\'ı aradım, fotoğraf attım. 20 dakikada teklif geldi, ertesi gün aracım alındı ve param hesabıma yattı.',
      },
    ],

    content: {
      whatWeAccept: [
        'Motoru hasarlı araçlar',
        'Şanzımanı hasarlı araçlar',
        'Kaportası hasarlı araçlar',
        'Elektrik sistemi arızalı araçlar',
        'Fren sistemi arızalı araçlar',
        'Süspansiyonu hasarlı araçlar',
        'Diferansiyeli hasarlı araçlar',
        'Çalışmayan araçlar',
      ],
      pricing: {
        title: 'Hasarlı Araç Değerlendirmesi',
        description: 'Değerlendirme yaparken göz önünde tuttuğumuz noktalar:',
        factors: [
          'Hasarın türü (motor, şanzıman, kaporta)',
          'Tamir edilebilir olup olmadığı',
          'Yedek parça değeri',
          'Aracın yaşı ve kilometresi',
          'Piyasadaki talep',
          'Kullanılabilir parça sayısı',
        ],
        byVehicleType: [
          { type: 'Kaportası Hasarlı Araç', priceRange: 'Piyasa değerinin %60-80\'i' },
          { type: 'Motoru Hasarlı Araç', priceRange: 'Piyasa değerinin %40-65\'i' },
          { type: 'Şanzımanı Hasarlı Araç', priceRange: 'Piyasa değerinin %45-70\'i' },
          { type: 'Elektriği Arızalı Araç', priceRange: 'Piyasa değerinin %50-75\'i' },
          { type: 'Çalışmayan Araç', priceRange: 'Hasar türüne göre özel değerlendirme' },
        ],
      },
      whyChooseUs: [
        'Her hasar türü için profesyonel değerlendirme',
        'En yüksek fiyat güvencesi',
        'Ücretsiz ekspertiz ve çekici hizmeti',
        'Hızlı ve güvenli işlem',
        'Şeffaf fiyatlandırma',
        'Anında ödeme',
      ],
      relatedServices: [
        { title: 'Kazalı Araç Alımı', slug: 'kazali-arac-alim', description: 'Kaza yapmış araçlarınız için' },
        { title: 'Pert Araç Alımı', slug: 'pert-arac-alim', description: 'Sigorta pert raporu düzenlenmiş araçlarınız için' },
        { title: 'Hurda Araç Alımı', slug: 'hurda-arac-alim', description: 'Ömrünü doldurmuş araçlarınız için' },
      ],
    },
  },

  'pert-arac-alim': {
    id: 'pert',
    slug: 'pert-arac-alim',
    title: 'Pert Araç Alımı',
    shortTitle: 'Pert Araç',
    icon: '⚠️',
    color: 'fuchsia',

    metaTitle: 'Pert Araç Alımı | Sigorta Pertli Araç Alan - Yenice Oto',
    metaDescription: 'Sigorta pert raporlu araçlar için özel değerlendirme. 5+ yıl tecrübe, en yüksek fiyat, hızlı işlem, ücretsiz çekici, anında ödeme. Teklif alın.',
    keywords: [
      'pert araç alan',
      'pert araç alımı',
      'pert kayıtlı araç alan',
      'sigorta pertli araç',
      'pert oto alan',
    ],
    canonical: 'https://www.yeniceotohasarli.com/pert-arac-alim',
    ogUrl: 'https://www.yeniceotohasarli.com/pert-arac-alim',

    hero: {
      badge: '⚠️ PERT ARAÇ ALIMI',
      title: 'Pert Aracınız',
      titleHighlight: 'Değerinde Satın',
      subtitle: 'Sigorta pert raporu düzenlenmiş araçlara özel değerlendirme. En yüksek fiyat ve güvenli işlem güvencesi.',
      image: '/images/cars/pert-arac-agir-hasarli-beyaz-sedan.jpeg',
    },

    features: [
      {
        icon: '📋',
        title: 'Pert Raporu Uzmanı',
        description: 'Pert raporlu araçlarda 5+ yıllık deneyim.',
      },
      {
        icon: '💰',
        title: 'Özel Değerlendirme',
        description: 'Pert araçlara özel bir fiyatlandırma sistemimiz mevcut.',
      },
      {
        icon: '🔒',
        title: 'Yasal Süreç',
        description: 'Tüm yasal işlemleri ve evrakları biz hallediyoruz.',
      },
      {
        icon: '🚚',
        title: 'Ücretsiz Çekici',
        description: 'Pert aracınızı ücret almadan çekiyoruz.',
      },
      {
        icon: '⚡',
        title: 'Hızlı İşlem',
        description: 'Pert işlemleri 24 saat içinde sonuçlanır.',
      },
      {
        icon: '💳',
        title: 'Anında Ödeme',
        description: 'Noter işleminin ardından ödemenizi hemen alırsınız.',
      },
    ],

    faqs: [
      {
        question: 'Pert araç ne demektir?',
        answer: 'Pert araç, sigorta şirketinin ekonomik olarak onarılamaz şeklinde değerlendirdiği ve hakkında "pert raporu" düzenlediği araçtır. Türk sigorta mevzuatına göre bir aracın tamir maliyeti rayiç değerinin belirli bir oranını (genellikle %60-70\'ini) geçtiğinde sigorta şirketi pert kararı alabilir. Pert kararı çıkan araç için sigorta şirketi sahibine tazminat öder ve aracı teslim alır; ya da sahibi aracı elinde tutarak sigorta tazminatının bir bölümünü alır. Pert raporlu araç alınıp satılabilir; bunun önünde yasal bir engel yoktur. Yenice Otomotiv olarak pert araçlara özel değerlendirme yapıyor ve en yüksek fiyatı veriyoruz.',
      },
      {
        question: 'Pert raporlu araç satılabilir mi?',
        answer: 'Evet, pert raporlu araçlar Türkiye\'de yasal olarak alınıp satılabilir. Pert raporu bir satış engeli yaratmaz; aksine araca özel bir statü kazandırır. Satış işlemi noterde yapılır ve pert bilgisi resmi kayıtlara işlenir. Alıcı bu durumu bilerek işleme girer. Yenice Otomotiv olarak pert araç alımındaki 5 yılı aşkın deneyimimizle tüm yasal süreçleri sizin adınıza yürütüyoruz. Pert raporunuz olsun ya da olmasın, sigorta sürecinin hangi aşamasında bulunursanız bulunun aracınızı değerlendiriyor ve en yüksek teklifi veriyoruz.',
      },
      {
        question: 'Pert aracın değeri ne kadar olur?',
        answer: 'Pert aracın piyasa değeri pek çok etkene bağlıdır: aracın markası, modeli, üretim yılı, orijinal piyasa değeri, hasarın büyüklüğü, kullanılabilir parçaların durumu ve sigorta ödeme tutarı bunların başında gelir. Genel olarak pert araçlar sağlam piyasa değerinin %25-55\'i aralığında fiyatlanır. Ancak hasar küçükse ve parçaların büyük bölümü kullanılabilir durumdaysa bu oran %50-65\'e kadar yükselebilir. Lüks ya da az bulunan araçlarda yedek parça değeri yüksek olduğundan fiyat oranı da artabilir. Bizi arayıp ücretsiz değerlendirme yaptırın; alacağınız teklifin sizi şaşırtacağını göreceksiniz.',
      },
      {
        question: 'Pert işlemi ne kadar zaman alır?',
        answer: 'Pert aracın alım satım işlemi çoğunlukla 24-48 saat içinde tamamlanır. İlk aşamada fotoğraf üzerinden değerlendirme yapıp teklifimizi 30-60 dakikada iletiyoruz. Teklifi onaylamanız halinde aynı gün ya da ertesi gün ücretsiz çekiciyle aracı teslim alıyoruz. Evraklar hazırsa (araç ruhsatı, pert raporu, kimlik) noter işlemi 1-2 saat içinde biter. Noterin ardından ödeme anında yapılır. Evraklarınız eksikse tamamlanması için size yol gösteriyoruz. Tüm süreci olabildiğince hızlı tutmak bizim önceliğimiz.',
      },
      {
        question: 'Hangi belgeler gerekiyor?',
        answer: 'Pert araç satışı için gereken belgeler: araç ruhsatının aslı, sigorta şirketinden alınan pert raporu, kimlik belgesi (nüfus cüzdanı veya pasaport), sigorta poliçesi ve varsa araç muayene belgesi. Sigorta şirketi aracı teslim aldıysa ek bir devir belgesi gerekebilir; böyle bir durumda sizi bilgilendiriyor ve süreci yönetiyoruz. Evrak eksikse nasıl tamamlanacağı konusunda ücretsiz rehberlik veriyoruz. Tüm bürokratik işlemleri sizin adınıza takip ediyor, noter ve tescil işlemlerini hallediyoruz.',
      },
    ],

    commonMistakes: [
      {
        mistake: 'Sigorta şirketinin teklifini sorgulamadan onaylamak',
        tip: 'Sigorta tazminatı her zaman en yüksek tutar olmayabilir. Önce Yenice Otomotiv\'tan bağımsız bir değerlendirme alın; bazen aracı kendiniz satmak sigorta tazminatından daha kazançlı çıkabilir.',
      },
      {
        mistake: 'Pert belgesini almadan satışa kalkışmak',
        tip: 'Pert belgesi olmadan yapılan satışlar ileride hukuki sorunlara yol açabilir. Sigorta şirketinizden resmi pert raporunu mutlaka temin edin.',
      },
      {
        mistake: 'Pert aracı düşük fiyata elden çıkarmak',
        tip: 'Birçok araç sahibi pert raporlu araçların değersiz olduğunu sanarak çok düşük fiyatlara satıyor. Yenice Otomotiv\'ı arayın; aracınızın gerçek piyasa değerini öğrenin.',
      },
    ],

    customerStories: [
      {
        name: 'Ali R.',
        city: 'Ankara',
        vehicleType: 'Sigorta Pert Toyota Corolla',
        story: 'Sigorta şirketi pert kararı verip düşük bir tazminat önerdi. Aracı kendim satmayı düşündüm ama nereden başlayacağımı kestiremedim.',
        result: 'Yenice Otomotiv ile görüştüm. Tüm yasal süreci onlar üstlendi ve sigorta teklifinden %35 daha fazla para aldım.',
      },
      {
        name: 'Selin K.',
        city: 'İzmir',
        vehicleType: 'Kasko Pert Audi A3',
        story: 'Lüks bir araç olduğundan pert sonrası nasıl hareket edeceğimi bilemedim. Birçok alıcı gerçek değerinin çok altında teklif verdi.',
        result: 'Yenice Otomotiv yedek parça değerini de göz önünde bulundurarak oldukça yüksek bir teklif yaptı. Son derece memnun kaldım.',
      },
    ],

    content: {
      whatWeAccept: [
        'Kasko pert raporlu araçlar',
        'Trafik sigortası pert raporlu araçlar',
        'Tam hasar pert araçlar',
        'Kısmi hasar pert araçlar',
        'Yangın hasarı pert araçlar',
        'Su basması pert araçlar',
        'Her tür pert araç',
      ],
      pricing: {
        title: 'Pert Araç Fiyatlandırması',
        description: 'Pert araç değerini belirleyen etkenler:',
        factors: [
          'Aracın piyasa değeri',
          'Pert raporundaki hasar oranı',
          'Kullanılabilir parça değeri',
          'Aracın markası ve modeli',
          'Üretim yılı',
          'Sigorta ödeme durumu',
        ],
        byVehicleType: [
          { type: 'Küçük Sınıf (Polo, Clio, Corsa)', priceRange: 'Piyasa değerinin %25-50\'si' },
          { type: 'Orta Sınıf (Corolla, Focus, Golf)', priceRange: 'Piyasa değerinin %30-55\'i' },
          { type: 'Üst Sınıf (BMW, Mercedes, Audi)', priceRange: 'Piyasa değerinin %35-60\'ı' },
          { type: 'Hafif Hasarlı Pert', priceRange: 'Piyasa değerinin %45-65\'i' },
          { type: 'Yangın/Su Hasarlı Pert', priceRange: 'Özel değerlendirme gerektirir' },
        ],
      },
      whyChooseUs: [
        'Pert araç alımında 5+ yıllık deneyim',
        'En yüksek pert araç fiyatları',
        'Tüm yasal işlemler bizim sorumluluğumuzda',
        'Hızlı değerlendirme ve ödeme',
        'Güvenli ve şeffaf işlem',
        'Ücretsiz çekici hizmeti',
      ],
      relatedServices: [
        { title: 'Kazalı Araç Alımı', slug: 'kazali-arac-alim', description: 'Kaza yapmış araçlarınız için' },
        { title: 'Hasarlı Araç Alımı', slug: 'hasarli-arac-alim', description: 'Mekanik ya da kaporta hasarı olan araçlarınız için' },
        { title: 'Hurda Araç Alımı', slug: 'hurda-arac-alim', description: 'Ömrünü doldurmuş araçlarınız için' },
      ],
    },
  },

  'hurda-arac-alim': {
    id: 'hurda',
    slug: 'hurda-arac-alim',
    title: 'Hurda Araç Alımı',
    shortTitle: 'Hurda Araç',
    icon: '♻️',
    color: 'lime',

    metaTitle: 'Hurda Araç Alımı | Hurda Belgeli İşlem - Yenice Oto',
    metaDescription: 'Hurda belgeli araçları en yüksek fiyata alıyoruz. Resmi belgeli işlem, çevreci geri dönüşüm, ücretsiz çekici, anında ödeme. Hemen arayın.',
    keywords: [
      'hurda araç alan',
      'hurda araç alımı',
      'hurda belgeli araç',
      'hurdaya araç satmak',
      'hurda oto alan',
    ],
    canonical: 'https://www.yeniceotohasarli.com/hurda-arac-alim',
    ogUrl: 'https://www.yeniceotohasarli.com/hurda-arac-alim',

    hero: {
      badge: '♻️ HURDA ARAÇ ALIMI',
      title: 'Hurda Aracınız',
      titleHighlight: 'Çevreci Çözüm',
      subtitle: 'Ömrünü doldurmuş araçlar için resmi belgeli hurda işlemi. En yüksek kilo fiyatı ve çevre dostu geri dönüşüm.',
      image: '/images/cars/hurda-arac-su-baskini-motor.jpeg',
    },

    features: [
      {
        icon: '📋',
        title: 'Resmi Belgeli',
        description: 'Yasal izinli ve belgeli hurda araç işletmesi hizmeti.',
      },
      {
        icon: '♻️',
        title: 'Çevre Dostu',
        description: 'Çevreye saygılı geri dönüşüm süreçleri.',
      },
      {
        icon: '⚖️',
        title: 'Kilo Bazlı',
        description: 'En yüksek kilo fiyatıyla alım yapıyoruz.',
      },
      {
        icon: '🚚',
        title: 'Ücretsiz Çekici',
        description: 'Hurda aracınızı ücret almadan çekiyoruz.',
      },
      {
        icon: '📄',
        title: 'Hurda Belgesi',
        description: 'Hurda belgesine dair tüm işlemler bizden.',
      },
      {
        icon: '💳',
        title: 'Anında Ödeme',
        description: 'Tartımın ardından ödemenizi hemen yapıyoruz.',
      },
    ],

    faqs: [
      {
        question: 'Hurda araç işlemi nasıl yürür?',
        answer: 'Hurda araç işlemi birkaç kolay adımdan ibarettir. Önce telefonla ya da WhatsApp üzerinden bize ulaşıp aracınızın markası, modeli ve durumu hakkında bilgi veriyorsunuz. Ardından ücretsiz çekici hizmetimizle aracınız teslim alınıyor. Teslim noktasında araç tartılıyor, kilo üzerinden fiyat hesaplanıyor ve size sunuluyor. Anlaşma sağlanırsa hurda belgesi düzenleniyor; bu belgeyle araç trafik tescilinden siliniyor ve MTV gibi vergi yükümlülükleri sona eriyor. Son adımda nakit veya EFT ile anında ödeme yapılıyor. İşlemin tamamı çoğunlukla aynı gün içinde biter.',
      },
      {
        question: 'Hurda aracın kilosu kaç para?',
        answer: 'Hurda araç kilo fiyatı, günlük hurda demir piyasa fiyatlarına göre değişkenlik gösterir. Piyasa koşullarına bağlı olarak kilogram başına ortalama 8-18 TL aralığında bir fiyat oluşur; ancak bu rakam piyasaya göre farklılaşabilir. Güncel hurda fiyatını öğrenmek için bizi arayın, anında bilgilendiriyoruz. Ortalama bir otomobil 800-1.200 kg arasındadır; SUV ve hafif ticari araçlar 1.200-1.800 kg\'a kadar ulaşabilir. Bunun yanı sıra alüminyum parçalar ve motor bloğu gibi değerli metaller ayrıca hesaba katılarak toplam fiyatı yükseltebilir.',
      },
      {
        question: 'Hangi araçlar hurdaya çıkarılabilir?',
        answer: 'Ömrünü doldurmuş ya da artık ekonomik olarak kullanılamayacak durumdaki tüm araçlar hurdaya ayrılabilir. Bu kapsama; ağır hasarlı ve onarımı ekonomik olmayan araçlar, motor veya şanzıman arızası yüzünden çalışmayan araçlar, sigorta pert raporu çıkmış araçlar, Araç Muayene İstasyonundan (TÜVTÜRK) sürekli ret alan araçlar ve MTV borcu birikmiş araçlar girer. Araç çalışır durumda olsa bile sahibi hurda yapmayı seçebilir; bu konuda herhangi bir zorunluluk yoktur.',
      },
      {
        question: 'Hurda belgesi neye yarar?',
        answer: 'Hurda belgesi birçok önemli avantaj sunar. En büyük faydası, aracın trafik tescilinin silinmesiyle birlikte yıllık Motorlu Taşıtlar Vergisi (MTV) ve diğer vergi yükümlülüklerinin tamamen ortadan kalkmasıdır. Ayrıca araç muayenesi yaptırma, trafik sigortasını yenileme ve plaka yenileme yükümlülükleri de sona erer. Bunun yanında hurda belgesi, bazı teşvik programları çerçevesinde yeni araç alımında indirim ya da destek sağlayabilir. Yasal açıdan araç artık kayıt dışı kabul edilir ve tüm sorumluluklar biter.',
      },
      {
        question: 'Hurda işlemi ne kadar zaman alır?',
        answer: 'Hurda araç işlemi oldukça hızlıdır ve genellikle aynı gün tamamlanır. Çekici geldiğinde araç teslim alınır, tartım ve değerlendirme 30-60 dakika içinde yapılır. Hurda belgesinin düzenlenmesi de çoğunlukla aynı gün biter; ancak Trafik Tescil Müdürlüğü işlemleri bulunduğunuz şehre ve yoğunluğa göre 1-2 gün sürebilir. Noterde tescil silme işlemi yapılır yapılmaz ödeme gerçekleştirilir. Evraklarınız hazır ve eksiksizse tüm süreç sabah başlayıp öğleden önce tamamlanabilir.',
      },
    ],

    commonMistakes: [
      {
        mistake: 'Aracı sokakta ya da boş bir arazide bırakmak',
        tip: 'Araç hurda olsa bile hukuki sorumluluk sahibinin üzerindedir. Ceza ve harç ödemekten kurtulmak için resmi hurda işlemini yaptırın.',
      },
      {
        mistake: 'Lisansı olmayan hurda alıcılarıyla çalışmak',
        tip: 'Resmi belgesi bulunmayan hurda alıcıları başınıza yasal sorun açabilir. Yenice Otomotiv resmi izinli ve belgeli bir hurda işletmesidir.',
      },
      {
        mistake: 'Hurda fiyatını sorgulamadan onaylamak',
        tip: 'Hurda fiyatı tartıma ve piyasa fiyatına göre belirlenir. Değerli metal parçalar ise ayrıca değer taşır. Yenice Otomotiv şeffaf bir tartım ve fiyatlandırma yapar.',
      },
    ],

    customerStories: [
      {
        name: 'Hasan M.',
        city: 'Konya',
        vehicleType: '2005 Model Tofaş',
        story: '18 yıllık araç artık muayeneden geçemiyordu, üstüne MTV borcu da birikmişti. Nasıl bir yol izleyeceğimi bilemedim.',
        result: 'Yenice Otomotiv geldi, aracı tartarak değerlendirdi, hurda belgesini hallettiler ve param aynı gün elime geçti. Mükemmel bir hizmet.',
      },
      {
        name: 'Zeynep A.',
        city: 'Gaziantep',
        vehicleType: 'Kazalı ve Hareketsiz Opel Vectra',
        story: 'Araç hem kazalıydı hem de motoru arızalıydı. Kimse ilgilenmeye yanaşmadı.',
        result: 'Yenice Otomotiv her durumu değerlendiriyor. Ücretsiz çekici geldi, kilo başına en yüksek fiyatı verdiler.',
      },
    ],

    content: {
      whatWeAccept: [
        'Ömrünü doldurmuş araçlar',
        'Ağır hasarlı araçlar',
        'Çalışmayan araçlar',
        'Hurda belgesi çıkarılacak araçlar',
        'MTV borcu bulunan araçlar',
        'Tüm marka ve modeller',
      ],
      pricing: {
        title: 'Hurda Araç Değerlemesi',
        description: 'Hurda fiyatını belirleyen etkenler:',
        factors: [
          'Aracın ağırlığı (kilo)',
          'Günlük hurda demir fiyatı',
          'Kullanılabilir parça değeri',
          'Alüminyum ve metal oranı',
          'Aracın genel durumu',
        ],
        byVehicleType: [
          { type: 'Küçük Otomobil (700-900 kg)', priceRange: 'Güncel kilo fiyatı × ağırlık' },
          { type: 'Orta Sınıf Otomobil (900-1200 kg)', priceRange: 'Güncel kilo fiyatı × ağırlık' },
          { type: 'SUV / Crossover (1200-1800 kg)', priceRange: 'Güncel kilo fiyatı × ağırlık' },
          { type: 'Hafif Ticari (1500-2500 kg)', priceRange: 'Güncel kilo fiyatı × ağırlık' },
          { type: 'Değerli Parçalı Araç', priceRange: 'Kilo fiyatı + parça değeri' },
        ],
      },
      whyChooseUs: [
        'Resmi belgeli hurda araç işletmesi',
        'En yüksek kilo fiyatı güvencesi',
        'Çevre dostu geri dönüşüm',
        'Tüm evrak ve işlemler bizim sorumluluğumuzda',
        'Aynı gün ödeme',
        'Ücretsiz çekici hizmeti',
      ],
      relatedServices: [
        { title: 'Kazalı Araç Alımı', slug: 'kazali-arac-alim', description: 'Kaza yapmış araçlarınız için' },
        { title: 'Hasarlı Araç Alımı', slug: 'hasarli-arac-alim', description: 'Mekanik ya da kaporta hasarı olan araçlarınız için' },
        { title: 'Pert Araç Alımı', slug: 'pert-arac-alim', description: 'Sigorta pert raporu düzenlenmiş araçlarınız için' },
      ],
    },
  },
};

// Helper functions
export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return servicesData[slug];
};

export const getAllServices = (): ServiceData[] => {
  return Object.values(servicesData);
};

export const getServiceSlugs = (): string[] => {
  return Object.keys(servicesData);
};
