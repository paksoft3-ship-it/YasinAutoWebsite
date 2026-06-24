export interface CityData {
  id: string;
  slug: string;
  name: string;
  region: string;

  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonical: string;
  ogUrl: string;
  intro: string;

  // Hero Section
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPhoneText?: string;
    ctaWhatsappText?: string;
    customPhone?: string;
    image?: string;
  };

  // Service availability & details
  services: {
    kazali: boolean;
    hasarli: boolean;
    pert: boolean;
    hurda: boolean;
  };

  // Custom content for service cards (for explicit keywords)
  servicesDetail?: {
    kazali?: { title: string; description: string };
    hasarli?: { title: string; description: string };
    pert?: { title: string; description: string };
    hurda?: { title: string; description: string };
  };

  // City-specific info
  cityInfo: {
    population: string;
    coverage: string[];
    responseTime: string;
    localOffice?: string;
  };

  // Detailed District Info (for H3 blocks)
  districtDetails?: Array<{
    title: string;
    description: string;
  }>;

  // Features for this city
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  // Testimonials
  testimonials: Array<{
    name: string;
    district: string;
    rating: number;
    text: string;
    service: string;
  }>;

  // FAQ
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const citiesData: Record<string, CityData> = {
  'istanbul': {
    id: 'istanbul',
    slug: 'istanbul',
    name: 'İstanbul',
    region: 'Marmara',

    metaTitle: 'İstanbul Hasarlı Kazalı Pert Hurda Araç Alımı',
    metaDescription: 'İstanbul\'da kazalı, hasarlı, pert ve hurda araç alımı. Kadıköy ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: [
      'istanbul hasarlı araç alan',
      'istanbul kazalı araç alan',
      'istanbul pert araç alan',
      'istanbul hurda araç alımı',
    ],
    canonical: 'https://www.yeniceotohasarli.com/sehirler/istanbul',
    ogUrl: 'https://www.yeniceotohasarli.com/sehirler/istanbul',
    intro: 'İstanbul\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 34 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Marmara bölgesinde Kadıköy, Beşiktaş, Bağcılar, Pendik, Beylikdüzü başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakikada ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile İstanbul\'da güvenle satın.',

    hero: {
      badge: '🏙️ İSTANBUL ARAÇ ALIM',
      title: 'İstanbul\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Hem Anadolu hem Avrupa Yakası\'nda kazalı, hasarlı, pert ve hurda araç alımı yapıyoruz. 2 saat içinde ücretsiz ekspertiz ve teklif sizinle.',
      image: '/images/cities/istanbul.png',
    },

    services: {
      kazali: true,
      hasarli: true,
      pert: true,
      hurda: true,
    },

    cityInfo: {
      population: '15+ Milyon',
      coverage: [
        'Kadıköy', 'Üsküdar', 'Beşiktaş', 'Beyoğlu', 'Şişli',
        'Kartal', 'Maltepe', 'Pendik', 'Ataşehir', 'Ümraniye',
        'Bakırköy', 'Zeytinburnu', 'Fatih', 'Beylikdüzü', 'Esenyurt',
        'Başakşehir', 'Sultangazi', 'Sarıyer', 'Beykoz', 'Çekmeköy',
        'Sancaktepe', 'Sultanbeyli', 'Arnavutköy', 'Küçükçekmece', 'Bahçelievler',
        'Bağcılar', 'Gaziosmanpaşa', 'Esenler', 'Güngören', 'Kağıthane',
        'Bayrampaşa', 'Eyüpsultan', 'Büyükçekmece', 'Çatalca', 'Silivri',
        'Tuzla', 'Şile', 'Adalar', 'Avcılar', 'Sultangazi'
      ],
      responseTime: '2 saat içinde',
      localOffice: 'Kadıköy & Beylikdüzü Ofislerimiz',
    },

    features: [
      {
        icon: '🚗',
        title: 'Her İlçeye Hizmet',
        description: '39 ilçenin tamamında ücretsiz çekici ve ekspertiz desteği.',
      },
      {
        icon: '⚡',
        title: '2 Saat İçinde Teklif',
        description: 'İstanbul trafiği ne olursa olsun değerlendirmemiz hızlı ilerler.',
      },
      {
        icon: '🏢',
        title: 'Lokal Ofisler',
        description: 'Anadolu ve Avrupa yakasındaki ofislerimizle hemen yanı başınızdayız.',
      },
      {
        icon: '💰',
        title: 'İstanbul\'un En Yüksek Fiyatı',
        description: 'Güncel piyasayı tarayarak size en iyi teklifi sunuyoruz.',
      },
      {
        icon: '🚚',
        title: 'Ücretsiz Çekici',
        description: 'Bütün ilçelerden aracınızı ücretsiz çekiyoruz.',
      },
      {
        icon: '📄',
        title: 'Noter İşlemleri',
        description: 'İstanbul genelindeki tüm noterlerle iş birliği içindeyiz.',
      },
    ],

    testimonials: [
      {
        name: 'Mehmet K.',
        district: 'Kadıköy',
        rating: 5,
        text: 'Kazalı aracımı Kadıköy\'den teslim aldılar. 2 saatte geldiler ve ödemeyi aynı gün yaptılar. İstanbul trafiğine rağmen inanılmaz hızlılar.',
        service: 'Kazalı Araç',
      },
      {
        name: 'Ayşe D.',
        district: 'Beylikdüzü',
        rating: 5,
        text: 'Avrupa yakasında en yüksek fiyatı veren firma burası. Başka firmalarla karşılaştırdım, gerçekten en iyisi çıktı.',
        service: 'Hasarlı Araç',
      },
      {
        name: 'Can Y.',
        district: 'Ümraniye',
        rating: 5,
        text: 'Pert aracımın bütün evrak işlerini onlar üstlendi. Noter sürecini bile kendileri yürüttü. Son derece profesyonel bir ekip.',
        service: 'Pert Araç',
      },
    ],

    faqs: [
      {
        question: 'İstanbul\'un hangi ilçelerine hizmet veriyorsunuz?',
        answer: 'İstanbul\'un 39 ilçesinin tamamına ulaşıyoruz. İster Anadolu yakası ister Avrupa yakası olsun, her bölgede ücretsiz çekici ve ekspertiz hizmetimiz mevcut.',
      },
      {
        question: 'İstanbul trafiğinde ne kadar sürede gelirsiniz?',
        answer: 'İstanbul trafiğini de hesaba katarak ekspertiz ekibimiz adresinize ortalama 2-3 saat içinde varır. Acil durumlarda size öncelik veriyoruz.',
      },
      {
        question: 'Boğaz köprüsü geçişi için ücret alıyor musunuz?',
        answer: 'Hayır, köprü geçiş ücretleri dahil olmak üzere çekici hizmetimizin tamamı ücretsizdir.',
      },
      {
        question: 'İstanbul\'da hangi noterlerde işlem yapıyorsunuz?',
        answer: 'İstanbul\'daki tüm noterlerle çalışabiliyoruz. İşlemlerinizi size en yakın noterde tamamlayabilirsiniz.',
      },
      {
        question: 'İstanbul\'da kaç ofissiniz var?',
        answer: 'Anadolu yakası ofisimiz Kadıköy\'de, Avrupa yakası ofisimiz ise Beylikdüzü\'nde yer alıyor. Her iki ofisten de İstanbul\'un tamamına hizmet sunuyoruz.',
      },
    ],
  },

  'ankara': {
    id: 'ankara',
    slug: 'ankara',
    name: 'Ankara',
    region: 'İç Anadolu',

    metaTitle: 'Ankara Hasarlı Kazalı Pert Hurda Araç Alımı',
    metaDescription: 'Ankara\'da kazalı, hasarlı, pert ve hurda araç alımı. Çankaya ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: [
      'ankara hasarlı araç alan',
      'ankara kazalı araç alan',
      'ankara pert araç alan',
      'ankara hurda araç alımı',
    ],
    canonical: 'https://www.yeniceotohasarli.com/sehirler/ankara',
    ogUrl: 'https://www.yeniceotohasarli.com/sehirler/ankara',
    intro: 'Ankara\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 06 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. İç Anadolu bölgesinde Çankaya, Keçiören, Etimesgut, Sincan başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakikada ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Ankara\'da güvenle satın.',

    hero: {
      badge: '🏛️ ANKARA HASARLI ARAÇ ALIM',
      title: 'Ankara\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Hasarlı araç alım satım işlemleri Ankara genelinde hızla ilerler. Fotoğrafınızı iletin, 30 dk içinde teklifinizi alın. Ücretsiz çekici + noter + anında ödeme.',
      ctaPhoneText: 'Hemen Ara',
      ctaWhatsappText: 'Whatsapp',
      customPhone: '05303444097',
      image: '/images/cities/ankara.png',
    },

    services: {
      kazali: true,
      hasarli: true,
      pert: true,
      hurda: true,
    },

    servicesDetail: {
      hasarli: {
        title: 'Ankara Hasarlı Araç Alan',
        description: 'Ankara hasarlı araç alan ekibimiz, ister kaporta ister mekanik olsun aracınızı yerinde inceler. Hasarlı araç alan firmalar Ankara içinde şeffaf fiyat + ücretsiz çekici + noter süreci sunar.'
      },
      kazali: {
        title: 'Ankara Kazalı Araç Alan',
        description: 'Kazalı araç alan Ankara hizmetinde önce fotoğrafa göre ön fiyat, ekspertizin ardından net teklif veriyoruz. Kazalı araç alan yerler Ankara diyenlere Çankaya-Keçiören-Etimesgut aynı gün hizmet.'
      },
      pert: {
        title: 'Ankara Pert Araç Alan',
        description: 'Pert araç alan Ankara hizmetinde pert raporunuza göre özel değerlendirme yapar, yasal süreci sizin yerinize yürütürüz.'
      },
      hurda: {
        title: 'Ankara Hurda Araç Alan',
        description: 'Hurda araç alan Ankara ekibimiz, hurda belgeli araçlarınızda ücretsiz çekici ve hızlı işlem sağlar.'
      }
    },

    cityInfo: {
      population: '5.7 Milyon',
      coverage: [
        'Çankaya', 'Keçiören', 'Yenimahalle', 'Mamak', 'Etimesgut',
        'Sincan', 'Gölbaşı', 'Pursaklar', 'Altındağ', 'Kahramankazan',
        'Çubuk', 'Polatlı', 'Beypazarı', 'Elmadağ', 'Akyurt'
      ],
      responseTime: '30 dk içinde',
      localOffice: 'Çankaya Merkez Ofis',
    },

    districtDetails: [
      {
        title: 'Çankaya hasarlı araç alan',
        description: 'Merkez ofisimize yakın bölgelerde 1 saat içinde ekspertiz.'
      },
      {
        title: 'Keçiören hasarlı araç alan',
        description: 'Ücretsiz çekici ile aracınızı adresinizden alıyoruz.'
      },
      {
        title: 'Etimesgut hasarlı araç alan',
        description: 'Noter ve ödeme aynı gün tamamlanır.'
      }
    ],

    features: [
      {
        icon: '⚡',
        title: '30 dk Teklif',
        description: 'Ankara\'nın en hızlı değerlendirmesi bizde.',
      },
      {
        icon: '🚚',
        title: 'Ücretsiz Çekici',
        description: 'Ankara genelinde çekme işlemi ücretsiz.',
      },
      {
        icon: '💰',
        title: 'Noterde Anında Ödeme',
        description: 'Güvenli ve hızlı şekilde para transferi.',
      },
    ],

    testimonials: [
      {
        name: 'Ali R.',
        district: 'Çankaya',
        rating: 5,
        text: 'Çankaya\'da ofisleri olduğu için çok hızlı geldiler. Kızılay\'daki noterde işlemleri bitirdik, ödememi aynı gün aldım.',
        service: 'Kazalı Araç',
      },
      {
        name: 'Zeynep M.',
        district: 'Keçiören',
        rating: 5,
        text: 'Ta Keçiören\'e kadar gelip aracı aldılar. Ankara\'da en yüksek fiyatı veren firma kesinlikle bunlar.',
        service: 'Hasarlı Araç',
      },
      {
        name: 'Burak S.',
        district: 'Yenimahalle',
        rating: 5,
        text: 'Aracımı Yenimahalle\'de hurdaya çıkardım. Bütün işlemleri onlar yürüttü, gerçekten çok memnunum.',
        service: 'Hurda Araç',
      },
    ],

    faqs: [
      {
        question: 'Hasarlı araç alım satım Ankara için hangi evraklar lazım?',
        answer: 'Ruhsat, kimlik ve varsa hasar geçmişi belgeleri yeterli oluyor. Noter satışında ruhsat sahibinin bizzat hazır bulunması gerekir.',
      },
      {
        question: 'Hasarlı araç alan firmalar Ankara fiyatı neye göre belirler?',
        answer: 'Fiyatlandırma; aracın marka/modeli, hasar durumu, değişen parçalar ve güncel piyasa değeri dikkate alınarak şeffaf biçimde yapılır.',
      },
      {
        question: 'Hasarlı araç alan yerler Ankara içinde aynı gün gelir misiniz?',
        answer: 'Evet, Ankara içindeki tüm ilçelere aynı gün, çoğunlukla 1-2 saat içinde ulaşıyoruz.',
      },
      {
        question: 'Keçiören/Etimesgut’ta çekici ücretsiz mi?',
        answer: 'Evet; Keçiören, Etimesgut ve Ankara\'nın bütün ilçelerinde çekici hizmetimiz tamamen ücretsizdir.',
      },
      {
        question: 'Sincan, Polatlı gibi uzak ilçelere de geliyor musunuz?',
        answer: 'Evet, Ankara\'nın tüm ilçelerine ücretsiz çekici hizmeti sunuyoruz. Mesafe fiyata yansımaz.',
      },
    ],
  },

  'izmir': {
    id: 'izmir',
    slug: 'izmir',
    name: 'İzmir',
    region: 'Ege',

    metaTitle: 'İzmir Hasarlı Kazalı Pert Hurda Araç Alımı',
    metaDescription: 'İzmir\'da kazalı, hasarlı, pert ve hurda araç alımı. Konak ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: [
      'izmir hasarlı araç alan',
      'izmir kazalı araç alan',
      'izmir pert araç alan',
      'izmir hurda araç alımı',
    ],
    canonical: 'https://www.yeniceotohasarli.com/sehirler/izmir',
    ogUrl: 'https://www.yeniceotohasarli.com/sehirler/izmir',
    intro: 'İzmir\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 35 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Ege bölgesinde Konak, Karşıyaka, Bornova, Buca başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakikada ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile İzmir\'da güvenle satın.',

    hero: {
      badge: '🌊 İZMİR ARAÇ ALIM',
      title: 'İzmir\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'İzmir\'in bütün ilçelerinde kazalı, hasarlı, pert ve hurda araç alımı yapıyoruz. Sahil şeridinden Kemalpaşa\'ya dek her noktada yanınızdayız.',
      image: '/images/cities/izmir.png',
    },

    services: {
      kazali: true,
      hasarli: true,
      pert: true,
      hurda: true,
    },

    cityInfo: {
      population: '4.4 Milyon',
      coverage: [
        'Konak', 'Karşıyaka', 'Bornova', 'Buca', 'Çiğli',
        'Balçova', 'Gaziemir', 'Narlıdere', 'Bayraklı', 'Karabağlar',
        'Güzelbahçe', 'Menderes', 'Foça', 'Aliağa', 'Menemen',
        'Urla', 'Çeşme', 'Karaburun', 'Selçuk', 'Tire',
        'Torbalı', 'Ödemiş', 'Bergama', 'Kemalpaşa', 'Kınık',
        'Kiraz', 'Beydağ', 'Dikili', 'Seferihisar', 'Bayındır'
      ],
      responseTime: '1 saat içinde',
      localOffice: 'Konak & Karşıyaka Ofisleri',
    },

    features: [
      {
        icon: '🌊',
        title: 'Sahil Şeridi Hizmeti',
        description: 'Karşıyaka\'dan Çeşme\'ye kadar tüm sahil hattında hizmet.',
      },
      {
        icon: '⚡',
        title: 'Hızlı Ekspertiz',
        description: '1 saat içinde uzman ekibimizden değerlendirme.',
      },
      {
        icon: '💰',
        title: 'Ege\'nin En İyi Fiyatı',
        description: 'İzmir\'in en yüksek araç alım fiyatlarını sunuyoruz.',
      },
      {
        icon: '🚚',
        title: 'Ücretsiz Çekici',
        description: 'İzmir genelinde taşıma tamamen ücretsiz.',
      },
      {
        icon: '📄',
        title: 'Konak Noter',
        description: 'İşlemler Alsancak noterlerinde tamamlanır.',
      },
      {
        icon: '🏢',
        title: 'İki Yakada Ofis',
        description: 'Konak ve Karşıyaka\'da iki ofisimiz mevcut.',
      },
    ],

    testimonials: [
      {
        name: 'Cem A.',
        district: 'Karşıyaka',
        rating: 5,
        text: 'Karşıyaka ofisinden anında geldiler. İzmir\'de bu kadar güvenilir bir firma bulmak gerçekten zor. Teşekkürler.',
        service: 'Kazalı Araç',
      },
      {
        name: 'Selin K.',
        district: 'Bornova',
        rating: 5,
        text: 'Hasarlı aracımı Bornova\'da sattım. Piyasayı iyice araştırmışlar, gerçekten en yüksek fiyatı verdiler.',
        service: 'Hasarlı Araç',
      },
      {
        name: 'Murat T.',
        district: 'Konak',
        rating: 5,
        text: 'İşlemleri Alsancak\'taki noterde hallettik. Ödememi aynı gün aldım. İzmir\'in en iyisi.',
        service: 'Pert Araç',
      },
    ],

    faqs: [
      {
        question: 'İzmir\'in hangi ilçelerine hizmet veriyorsunuz?',
        answer: 'İzmir\'in 30 ilçesinin tamamına ulaşıyoruz. Konak, Karşıyaka, Bornova gibi merkez ilçelerin yanında Çeşme, Urla, Menemen gibi dış ilçelere de ücretsiz hizmet götürüyoruz.',
      },
      {
        question: 'İzmir\'de ne kadar sürede gelirsiniz?',
        answer: 'Merkez ilçelerde (Konak, Karşıyaka, Bornova, Buca) 1 saat içinde, dış ilçelerde ise 2-3 saat içinde adresinize ulaşıyoruz.',
      },
      {
        question: 'Çeşme, Urla gibi uzak ilçelere de geliyor musunuz?',
        answer: 'Evet, İzmir\'in bütün ilçelerine ücretsiz çekici hizmetimiz var. Mesafe ne olursa olsun hizmet veriyoruz.',
      },
      {
        question: 'İzmir\'de hangi noterlerde işlem yapıyorsunuz?',
        answer: 'Çoğunlukla Alsancak ve Konak çevresindeki noterlerle çalışıyoruz. İsterseniz size yakın bir noterde de işlem yapabiliriz.',
      },
    ],
  },

  'bursa': {
    id: 'bursa',
    slug: 'bursa',
    name: 'Bursa',
    region: 'Marmara',

    metaTitle: 'Bursa Hasarlı Kazalı Pert Hurda Araç Alımı',
    metaDescription: 'Bursa\'da kazalı, hasarlı, pert ve hurda araç alımı. Osmangazi ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: [
      'bursa hasarlı araç alan',
      'bursa kazalı araç alan',
      'bursa pert araç alan',
      'bursa hurda araç alımı',
    ],
    canonical: 'https://www.yeniceotohasarli.com/sehirler/bursa',
    ogUrl: 'https://www.yeniceotohasarli.com/sehirler/bursa',
    intro: 'Bursa\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 16 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Marmara bölgesinde Osmangazi, Nilüfer, İnegöl, Gemlik başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakikada ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Bursa\'da güvenle satın.',

    hero: {
      badge: '🏔️ BURSA ARAÇ ALIM',
      title: 'Bursa\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Bursa\'nın bütün ilçelerinde kazalı, hasarlı, pert ve hurda araç alımı yapıyoruz. Yerinde ekspertiz ve anında ödeme imkanı.',
      image: '/images/cities/bursa.png',
    },

    services: {
      kazali: true,
      hasarli: true,
      pert: true,
      hurda: true,
    },

    cityInfo: {
      population: '3.1 Milyon',
      coverage: [
        'Osmangazi', 'Nilüfer', 'Yıldırım', 'Gemlik', 'İnegöl',
        'Mudanya', 'Gürsu', 'Kestel', 'Yenişehir', 'Mustafakemalpaşa',
        'Karacabey', 'Orhangazi', 'İznik', 'Keles', 'Orhaneli',
        'Harmancık', 'Büyükorhan'
      ],
      responseTime: '1 saat içinde',
      localOffice: 'Nilüfer & Osmangazi Ofisleri',
    },

    features: [
      {
        icon: '🏔️',
        title: 'Tüm Bursa\'ya Hizmet',
        description: 'Merkez ve çevre ilçelerin hepsine ulaşıyoruz.',
      },
      {
        icon: '⚡',
        title: 'Hızlı Ekspertiz',
        description: 'Uzman ekibimiz 1 saat içinde yanınızda olur.',
      },
      {
        icon: '💰',
        title: 'Bursa\'nın En İyi Fiyatı',
        description: 'Piyasa değerinin üzerinde teklifler veriyoruz.',
      },
      {
        icon: '🚚',
        title: 'Ücretsiz Çekici',
        description: 'Bursa genelinde araç çekimi ücretsizdir.',
      },
      {
        icon: '📄',
        title: 'Hızlı Noter',
        description: 'Bütün noterlerde devir işlemi anında yapılır.',
      },
      {
        icon: '🏢',
        title: 'Yerel Ofisler',
        description: 'Nilüfer ve Osmangazi\'de ofislerimiz bulunuyor.',
      },
    ],

    testimonials: [
      {
        name: 'Ahmet Y.',
        district: 'Nilüfer',
        rating: 5,
        text: 'Nilüfer\'de kaza yapan aracımı tam değerinde aldılar. Gerçekten çok memnun kaldım.',
        service: 'Kazalı Araç',
      },
      {
        name: 'Seda B.',
        district: 'Osmangazi',
        rating: 5,
        text: 'Pert aracımı Osmangazi\'de sattım. Tüm işlemler son derece hızlı ilerledi.',
        service: 'Pert Araç',
      },
      {
        name: 'Kemal T.',
        district: 'İnegöl',
        rating: 5,
        text: 'Ta İnegöl\'e kadar geldiler, hiç bekletmediler. Teşekkürler.',
        service: 'Hasarlı Araç',
      },
    ],

    faqs: [
      {
        question: 'Bursa\'nın hangi ilçelerine geliyorsunuz?',
        answer: 'Bursa\'nın 17 ilçesinin tamamına hizmet götürüyoruz. Merkez ilçelerin yanı sıra İnegöl, Gemlik gibi dış ilçeler de buna dahil.',
      },
      {
        question: 'Bursa\'da ödeme nasıl oluyor?',
        answer: 'Noter satışıyla eş zamanlı olarak nakit tutarı banka hesabınıza aktarıyoruz.',
      },
    ],
  },

  'antalya': {
    id: 'antalya',
    slug: 'antalya',
    name: 'Antalya',
    region: 'Akdeniz',

    metaTitle: 'Antalya Hasarlı Kazalı Pert Hurda Araç Alımı',
    metaDescription: 'Antalya\'da kazalı, hasarlı, pert ve hurda araç alımı. Muratpaşa ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: [
      'antalya hasarlı araç alan',
      'antalya kazalı araç alan',
      'antalya pert araç alan',
      'antalya hurda araç alımı',
    ],
    canonical: 'https://www.yeniceotohasarli.com/sehirler/antalya',
    ogUrl: 'https://www.yeniceotohasarli.com/sehirler/antalya',
    intro: 'Antalya\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 07 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Akdeniz bölgesinde Muratpaşa, Kepez, Alanya, Manavgat başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakikada ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Antalya\'da güvenle satın.',

    hero: {
      badge: '☀️ ANTALYA ARAÇ ALIM',
      title: 'Antalya\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Antalya ve ilçelerinde kazalı, hasarlı, pert ve hurda araç alımı yapıyoruz. Turizm sezonu olsun olmasın 7/24 hizmetinizdeyiz.',
      image: '/images/cities/antalya.png',
    },

    services: {
      kazali: true,
      hasarli: true,
      pert: true,
      hurda: true,
    },

    cityInfo: {
      population: '2.6 Milyon',
      coverage: [
        'Muratpaşa', 'Kepez', 'Konyaaltı', 'Alanya', 'Manavgat',
        'Serik', 'Aksu', 'Döşemealtı', 'Kemer', 'Kumluca',
        'Finike', 'Kaş', 'Korkuteli', 'Gazipaşa', 'Elmalı',
        'Demre', 'Akseki', 'Gündoğmuş', 'İbradı'
      ],
      responseTime: '1-2 saat içinde',
      localOffice: 'Muratpaşa & Alanya Ofisleri',
    },

    features: [
      {
        icon: '☀️',
        title: 'Tüm Antalya\'ya Hizmet',
        description: 'Kaş\'tan Gazipaşa\'ya kadar her noktaya ulaşıyoruz.',
      },
      {
        icon: '⚡',
        title: 'Hızlı Değerleme',
        description: 'Uzman ekibimizle fiyat teklifini hızla hazırlıyoruz.',
      },
      {
        icon: '💰',
        title: 'Antalya\'nın En İyi Fiyatı',
        description: 'Bölgenin en yüksek fiyatını garanti ediyoruz.',
      },
      {
        icon: '🚚',
        title: 'Ücretsiz Çekici',
        description: 'Bütün ilçelerden aracınızı ücretsiz alıyoruz.',
      },
      {
        icon: '📄',
        title: 'Kolay Devir',
        description: 'Noter işlemlerini sizin yerinize biz hallediyoruz.',
      },
      {
        icon: '🏢',
        title: 'Merkezi Ofisler',
        description: 'Muratpaşa ve Alanya\'da şubelerimiz var.',
      },
    ],

    testimonials: [
      {
        name: 'Hakan Ç.',
        district: 'Muratpaşa',
        rating: 5,
        text: 'Aracımı Muratpaşa\'da sattım. Son derece ilgililerdi, fiyat konusunda da elimden tuttular.',
        service: 'Kazalı Araç',
      },
      {
        name: 'Merve K.',
        district: 'Alanya',
        rating: 5,
        text: 'Alanya\'da tatildeyken kaza yaptım, gelip aracı aldılar. Beni büyük bir yükten kurtardılar.',
        service: 'Hasarlı Araç',
      },
      {
        name: 'Serdar A.',
        district: 'Konyaaltı',
        rating: 5,
        text: 'Pert aracımı Konyaaltı\'nda en iyi fiyata elden çıkardım. Kesinlikle tavsiye ederim.',
        service: 'Pert Araç',
      },
    ],

    faqs: [
      {
        question: 'Antalya\'nın turistik ilçelerine geliyor musunuz?',
        answer: 'Evet, Kemer, Alanya, Kaş başta olmak üzere tüm turistik ilçelere hizmet götürüyoruz.',
      },
      {
        question: 'Antalya dışına da hizmetiniz var mı?',
        answer: 'Evet, Burdur ve Isparta gibi çevre illere de hizmet veriyoruz.',
      },
    ],
  },

  'adana': {
    id: 'adana',
    slug: 'adana',
    name: 'Adana',
    region: 'Akdeniz',

    metaTitle: 'Adana Hasarlı Kazalı Pert Hurda Araç Alımı',
    metaDescription: 'Adana\'da kazalı, hasarlı, pert ve hurda araç alımı. Seyhan ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: [
      'adana hasarlı araç alan',
      'adana kazalı araç alan',
      'adana pert araç alan',
      'adana hurda araç alımı',
    ],
    canonical: 'https://www.yeniceotohasarli.com/sehirler/adana',
    ogUrl: 'https://www.yeniceotohasarli.com/sehirler/adana',
    intro: 'Adana\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 01 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Akdeniz bölgesinde Seyhan, Yüreğir, Çukurova, Ceyhan başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakikada ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Adana\'da güvenle satın.',

    hero: {
      badge: '🌶️ ADANA ARAÇ ALIM',
      title: 'Adana\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Adana ve çevresinde kazalı, hasarlı, pert ve hurda araç alımı yapıyoruz. 1 saat içinde adresinize geliyoruz.',
      image: '/images/cities/adana.png',
    },

    services: {
      kazali: true,
      hasarli: true,
      pert: true,
      hurda: true,
    },

    cityInfo: {
      population: '2.2 Milyon',
      coverage: [
        'Seyhan', 'Yüreğir', 'Çukurova', 'Sarıçam', 'Ceyhan',
        'Kozan', 'İmamoğlu', 'Karataş', 'Karaisalı', 'Pozantı',
        'Yumurtalık', 'Tufanbeyli', 'Feke', 'Aladağ', 'Saimbeyli'
      ],
      responseTime: '1 saat içinde',
      localOffice: 'Seyhan Merkez Ofis',
    },

    features: [
      {
        icon: '🌶️',
        title: 'Tüm Adana\'ya Hizmet',
        description: 'Merkez ve taşra ilçelerinin hepsine ulaşıyoruz.',
      },
      {
        icon: '⚡',
        title: 'Hızlı İşlem',
        description: 'Ekspertiz ve teklifi 1 saat içinde tamamlıyoruz.',
      },
      {
        icon: '💰',
        title: 'Adana\'nın En İyi Fiyatı',
        description: 'Bölge piyasasının üstünde rakamlar sunuyoruz.',
      },
      {
        icon: '🚚',
        title: 'Ücretsiz Çekici',
        description: 'Adana içinde çekici hizmetimiz ücretsizdir.',
      },
      {
        icon: '📄',
        title: 'Güvenilir Devir',
        description: 'Satış işlemi noter huzurunda güvenle yapılır.',
      },
      {
        icon: '🏢',
        title: 'Merkezi Konum',
        description: 'Seyhan ofisimizle hizmetinizdeyiz.',
      },
    ],

    testimonials: [
      {
        name: 'Murat D.',
        district: 'Seyhan',
        rating: 5,
        text: 'Seyhan\'da kaza yapan aracımı anında gelip aldılar. Ödemeyi de peşin yaptılar.',
        service: 'Kazalı Araç',
      },
      {
        name: 'Ayşe T.',
        district: 'Çukurova',
        rating: 5,
        text: 'Çukurova\'daki hasarlı aracım için en yüksek fiyatı verdiler. Çok memnun kaldım.',
        service: 'Hasarlı Araç',
      },
      {
        name: 'Mehmet K.',
        district: 'Ceyhan',
        rating: 5,
        text: 'Ta Ceyhan\'a kadar geldiler. Hizmet kaliteleri gerçekten çok iyi.',
        service: 'Pert Araç',
      },
    ],

    faqs: [
      {
        question: 'Adana\'nın hangi ilçelerine hizmet veriyorsunuz?',
        answer: 'Adana\'nın 15 ilçesinin hepsine hizmet götürüyoruz.',
      },
      {
        question: 'Adana\'da ekspertiz ücretli mi?',
        answer: 'Hayır, ekspertiz hizmetimizden hiçbir ücret almıyoruz.',
      },
    ],
  },

  'konya': {
    id: 'konya',
    slug: 'konya',
    name: 'Konya',
    region: 'İç Anadolu',
    metaTitle: 'Konya Hasarlı Kazalı Pert Hurda Araç Alımı',
    metaDescription: 'Konya\'da kazalı, hasarlı, pert ve hurda araç alımı. Selçuklu ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: [
      'konya hasarlı araç alan',
      'konya kazalı araç alan',
      'konya pert araç alan',
      'konya hurda araç alımı',
    ],
    canonical: 'https://www.yeniceotohasarli.com/sehirler/konya',
    ogUrl: 'https://www.yeniceotohasarli.com/sehirler/konya',
    intro: 'Konya\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 42 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. İç Anadolu bölgesinde Selçuklu, Meram, Karatay başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakikada ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Konya\'da güvenle satın.',
    hero: {
      badge: '🌾 KONYA ARAÇ ALIM',
      title: 'Konya\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Konya ve ilçelerinde her tür hasarlı aracınızı alıyoruz.',
      image: '/images/cities/konya.png',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '2.3 Milyon',
      coverage: ['Selçuklu', 'Meram', 'Karatay', 'Ereğli', 'Akşehir', 'Beyşehir'],
      responseTime: '1 saat içinde',
      localOffice: 'Selçuklu Ofis',
    },
    features: [],
    testimonials: [],
    faqs: [],
  },

  'gaziantep': {
    id: 'gaziantep',
    slug: 'gaziantep',
    name: 'Gaziantep',
    region: 'Güneydoğu Anadolu',
    metaTitle: 'Gaziantep Hasarlı Kazalı Pert Hurda Araç Alımı',
    metaDescription: 'Gaziantep\'da kazalı, hasarlı, pert ve hurda araç alımı. Şahinbey ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: [
      'gaziantep hasarlı araç alan',
      'gaziantep kazalı araç alan',
      'gaziantep pert araç alan',
      'gaziantep hurda araç alımı',
    ],
    canonical: 'https://www.yeniceotohasarli.com/sehirler/gaziantep',
    ogUrl: 'https://www.yeniceotohasarli.com/sehirler/gaziantep',
    intro: 'Gaziantep\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 27 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Güneydoğu bölgesinde Şahinbey, Şehitkamil, Nizip başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakikada ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Gaziantep\'da güvenle satın.',
    hero: {
      badge: '🏰 GAZİANTEP ARAÇ ALIM',
      title: 'Gaziantep\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Gaziantep genelinde hasarlı araçlarınızı bulunduğu yerde satın alıyoruz.',
      image: '/images/cities/gaziantep.png',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '2.1 Milyon',
      coverage: ['Şehitkamil', 'Şahinbey', 'Nizip', 'İslahiye'],
      responseTime: '1 saat içinde',
      localOffice: 'Şehitkamil Ofis',
    },
    features: [],
    testimonials: [],
    faqs: [],
  },

  'mersin': {
    id: 'mersin',
    slug: 'mersin',
    name: 'Mersin',
    region: 'Akdeniz',
    metaTitle: 'Mersin Hasarlı Kazalı Pert Hurda Araç Alımı',
    metaDescription: 'Mersin\'da kazalı, hasarlı, pert ve hurda araç alımı. Yenişehir ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: [
      'mersin hasarlı araç alan',
      'mersin kazalı araç alan',
      'mersin pert araç alan',
      'mersin hurda araç alımı',
    ],
    canonical: 'https://www.yeniceotohasarli.com/sehirler/mersin',
    ogUrl: 'https://www.yeniceotohasarli.com/sehirler/mersin',
    intro: 'Mersin\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 33 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Akdeniz bölgesinde Yenişehir, Toroslar, Tarsus başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakikada ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Mersin\'da güvenle satın.',
    hero: {
      badge: '🍊 MERSİN ARAÇ ALIM',
      title: 'Mersin\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Mersin ve ilçelerinde hasarlı araç alım hizmeti sunuyoruz.',
      image: '/images/cities/mersin.png',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '1.9 Milyon',
      coverage: ['Yenişehir', 'Mezitli', 'Akdeniz', 'Toroslar', 'Tarsus', 'Erdemli'],
      responseTime: '1-2 saat içinde',
      localOffice: 'Yenişehir Ofis',
    },
    features: [],
    testimonials: [],
    faqs: [],
  },

  'kayseri': {
    id: 'kayseri',
    slug: 'kayseri',
    name: 'Kayseri',
    region: 'İç Anadolu',
    metaTitle: 'Kayseri Hasarlı Kazalı Pert Hurda Araç Alımı',
    metaDescription: 'Kayseri\'da kazalı, hasarlı, pert ve hurda araç alımı. Melikgazi ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: [
      'kayseri hasarlı araç alan',
      'kayseri kazalı araç alan',
      'kayseri pert araç alan',
      'kayseri hurda araç alımı',
    ],
    canonical: 'https://www.yeniceotohasarli.com/sehirler/kayseri',
    ogUrl: 'https://www.yeniceotohasarli.com/sehirler/kayseri',
    intro: 'Kayseri\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 38 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. İç Anadolu bölgesinde Melikgazi, Kocasinan, Talas başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakikada ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Kayseri\'da güvenle satın.',
    hero: {
      badge: '🗻 KAYSERİ ARAÇ ALIM',
      title: 'Kayseri\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Kayseri ve çevresinde hasarlı araçlarınıza değer biçiyoruz.',
      image: '/images/cities/kayseri.png',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '1.4 Milyon',
      coverage: ['Melikgazi', 'Kocasinan', 'Talas', 'Develi'],
      responseTime: '1 saat içinde',
      localOffice: 'Melikgazi Ofis',
    },
    features: [],
    testimonials: [],
    faqs: [],
  },

  'eskisehir': {
    id: 'eskisehir',
    slug: 'eskisehir',
    name: 'Eskişehir',
    region: 'İç Anadolu',
    metaTitle: 'Eskişehir Hasarlı Kazalı Pert Hurda Araç Alımı',
    metaDescription: 'Eskişehir\'da kazalı, hasarlı, pert ve hurda araç alımı. Odunpazarı ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: [
      'eskişehir hasarlı araç alan',
      'eskişehir kazalı araç alan',
      'eskişehir pert araç alan',
      'eskişehir hurda araç alımı',
    ],
    canonical: 'https://www.yeniceotohasarli.com/sehirler/eskisehir',
    ogUrl: 'https://www.yeniceotohasarli.com/sehirler/eskisehir',
    intro: 'Eskişehir\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 26 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. İç Anadolu bölgesinde Odunpazarı, Tepebaşı başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakikada ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Eskişehir\'da güvenle satın.',
    hero: {
      badge: '🌉 ESKİŞEHİR ARAÇ ALIM',
      title: 'Eskişehir\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Eskişehir genelinde hasarlı araç alım hizmeti veriyoruz.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '900 Bin',
      coverage: ['Odunpazarı', 'Tepebaşı', 'Sivrihisar'],
      responseTime: '1 saat içinde',
      localOffice: 'Odunpazarı Ofis',
    },
    features: [],
    testimonials: [],
    faqs: [],
  },

  'diyarbakir': {
    id: 'diyarbakir',
    slug: 'diyarbakir',
    name: 'Diyarbakır',
    region: 'Güneydoğu Anadolu',
    metaTitle: 'Diyarbakır Hasarlı Kazalı Pert Hurda Araç Alımı',
    metaDescription: 'Diyarbakır\'da kazalı, hasarlı, pert ve hurda araç alımı. Bağlar ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: [
      'diyarbakır hasarlı araç alan',
      'diyarbakır kazalı araç alan',
      'diyarbakır pert araç alan',
      'diyarbakır hurda araç alımı',
    ],
    canonical: 'https://www.yeniceotohasarli.com/sehirler/diyarbakir',
    ogUrl: 'https://www.yeniceotohasarli.com/sehirler/diyarbakir',
    intro: 'Diyarbakır\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 21 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Güneydoğu bölgesinde Bağlar, Kayapınar, Yenişehir başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakikada ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Diyarbakır\'da güvenle satın.',
    hero: {
      badge: '🏯 DİYARBAKIR ARAÇ ALIM',
      title: 'Diyarbakır\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Diyarbakır ve ilçelerinde hasarlı araç alımı yapıyoruz.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '1.8 Milyon',
      coverage: ['Bağlar', 'Kayapınar', 'Yenişehir', 'Sur'],
      responseTime: '1 saat içinde',
      localOffice: 'Kayapınar Ofis',
    },
    features: [],
    testimonials: [],
    faqs: [],
  },

  'samsun': {
    id: 'samsun',
    slug: 'samsun',
    name: 'Samsun',
    region: 'Karadeniz',
    metaTitle: 'Samsun Hasarlı Kazalı Pert Hurda Araç Alımı',
    metaDescription: 'Samsun\'da kazalı, hasarlı, pert ve hurda araç alımı. İlkadım ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: [
      'samsun hasarlı araç alan',
      'samsun kazalı araç alan',
      'samsun pert araç alan',
      'samsun hurda araç alımı',
    ],
    canonical: 'https://www.yeniceotohasarli.com/sehirler/samsun',
    ogUrl: 'https://www.yeniceotohasarli.com/sehirler/samsun',
    intro: 'Samsun\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 55 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Karadeniz bölgesinde İlkadım, Atakum, Canik başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakikada ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Samsun\'da güvenle satın.',
    hero: {
      badge: '🚢 SAMSUN ARAÇ ALIM',
      title: 'Samsun\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Samsun ve Karadeniz bölgesinde hasarlı araç alımı yapıyoruz.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '1.3 Milyon',
      coverage: ['İlkadım', 'Atakum', 'Canik', 'Tekkeköy', 'Bafra', 'Çarşamba'],
      responseTime: '1 saat içinde',
      localOffice: 'Atakum Ofis',
    },
    features: [],
    testimonials: [],
    faqs: [],
  },

  'denizli': {
    id: 'denizli',
    slug: 'denizli',
    name: 'Denizli',
    region: 'Ege',
    metaTitle: 'Denizli Hasarlı Kazalı Pert Hurda Araç Alımı',
    metaDescription: 'Denizli\'da kazalı, hasarlı, pert ve hurda araç alımı. Pamukkale ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: [
      'denizli hasarlı araç alan',
      'denizli kazalı araç alan',
      'denizli pert araç alan',
      'denizli hurda araç alımı',
    ],
    canonical: 'https://www.yeniceotohasarli.com/sehirler/denizli',
    ogUrl: 'https://www.yeniceotohasarli.com/sehirler/denizli',
    intro: 'Denizli\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 20 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Ege bölgesinde Pamukkale, Merkezefendi başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakikada ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Denizli\'da güvenle satın.',
    hero: {
      badge: '🐓 DENİZLİ ARAÇ ALIM',
      title: 'Denizli\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Denizli ve çevresinde hasarlı araçlarınızı satın alıyoruz.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '1 Milyon',
      coverage: ['Pamukkale', 'Merkezefendi', 'Çivril', 'Acıpayam'],
      responseTime: '1 saat içinde',
      localOffice: 'Pamukkale Ofis',
    },
    features: [],
    testimonials: [],
    faqs: [],
  },

  'sanliurfa': {
    id: 'sanliurfa',
    slug: 'sanliurfa',
    name: 'Şanlıurfa',
    region: 'Güneydoğu Anadolu',
    metaTitle: 'Şanlıurfa Hasarlı Kazalı Pert Hurda Araç Alımı',
    metaDescription: 'Şanlıurfa\'da kazalı, hasarlı, pert ve hurda araç alımı. Haliliye ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: [
      'şanlıurfa hasarlı araç alan',
      'şanlıurfa kazalı araç alan',
      'şanlıurfa pert araç alan',
      'şanlıurfa hurda araç alımı',
    ],
    canonical: 'https://www.yeniceotohasarli.com/sehirler/sanliurfa',
    ogUrl: 'https://www.yeniceotohasarli.com/sehirler/sanliurfa',
    intro: 'Şanlıurfa\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 63 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Güneydoğu bölgesinde Haliliye, Eyyübiye, Karaköprü başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakikada ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Şanlıurfa\'da güvenle satın.',
    hero: {
      badge: '🕌 ŞANLIURFA ARAÇ ALIM',
      title: 'Şanlıurfa\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Şanlıurfa ve ilçelerinde hasarlı araç alım hizmeti sunuyoruz.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '2.1 Milyon',
      coverage: ['Haliliye', 'Eyyübiye', 'Karaköprü', 'Siverek', 'Viranşehir'],
      responseTime: '1 saat içinde',
      localOffice: 'Haliliye Ofis',
    },
    features: [],
    testimonials: [],
    faqs: [],
  },

  'malatya': {
    id: 'malatya',
    slug: 'malatya',
    name: 'Malatya',
    region: 'Doğu Anadolu',
    metaTitle: 'Malatya Hasarlı Kazalı Pert Hurda Araç Alımı',
    metaDescription: 'Malatya\'da kazalı, hasarlı, pert ve hurda araç alımı. Battalgazi ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: [
      'malatya hasarlı araç alan',
      'malatya kazalı araç alan',
      'malatya pert araç alan',
      'malatya hurda araç alımı',
    ],
    canonical: 'https://www.yeniceotohasarli.com/sehirler/malatya',
    ogUrl: 'https://www.yeniceotohasarli.com/sehirler/malatya',
    intro: 'Malatya\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 44 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Doğu Anadolu bölgesinde Battalgazi, Yeşilyurt başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakikada ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Malatya\'da güvenle satın.',
    hero: {
      badge: '🍑 MALATYA ARAÇ ALIM',
      title: 'Malatya\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Malatya genelinde hasarlı araç alımı yapıyoruz.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '800 Bin',
      coverage: ['Battalgazi', 'Yeşilyurt', 'Doğanşehir'],
      responseTime: '1 saat içinde',
      localOffice: 'Battalgazi Ofis',
    },
    features: [],
    testimonials: [],
    faqs: [],
  },

  'kahramanmaras': {
    id: 'kahramanmaras',
    slug: 'kahramanmaras',
    name: 'Kahramanmaraş',
    region: 'Akdeniz',
    metaTitle: 'Kahramanmaraş Hasarlı Kazalı Pert Hurda Araç Alımı',
    metaDescription: 'Kahramanmaraş\'da kazalı, hasarlı, pert ve hurda araç alımı. Onikişubat ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: [
      'kahramanmaraş hasarlı araç alan',
      'kahramanmaraş kazalı araç alan',
      'kahramanmaraş pert araç alan',
      'kahramanmaraş hurda araç alımı',
    ],
    canonical: 'https://www.yeniceotohasarli.com/sehirler/kahramanmaras',
    ogUrl: 'https://www.yeniceotohasarli.com/sehirler/kahramanmaras',
    intro: 'Kahramanmaraş\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 46 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Akdeniz bölgesinde Onikişubat, Dulkadiroğlu başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakikada ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Kahramanmaraş\'da güvenle satın.',
    hero: {
      badge: '🍦 KAHRAMANMARAŞ ARAÇ ALIM',
      title: 'Kahramanmaraş\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Kahramanmaraş ve ilçelerinde hasarlı araç alımı yapıyoruz.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '1.1 Milyon',
      coverage: ['Onikişubat', 'Dulkadiroğlu', 'Elbistan', 'Afşin'],
      responseTime: '1 saat içinde',
      localOffice: 'Onikişubat Ofis',
    },
    features: [],
    testimonials: [],
    faqs: [],
  },

  'erzurum': {
    id: 'erzurum',
    slug: 'erzurum',
    name: 'Erzurum',
    region: 'Doğu Anadolu',
    metaTitle: 'Erzurum Hasarlı Kazalı Pert Hurda Araç Alımı',
    metaDescription: 'Erzurum\'da kazalı, hasarlı, pert ve hurda araç alımı. Yakutiye ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: [
      'erzurum hasarlı araç alan',
      'erzurum kazalı araç alan',
      'erzurum pert araç alan',
      'erzurum hurda araç alımı',
    ],
    canonical: 'https://www.yeniceotohasarli.com/sehirler/erzurum',
    ogUrl: 'https://www.yeniceotohasarli.com/sehirler/erzurum',
    intro: 'Erzurum\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 25 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Doğu Anadolu bölgesinde Yakutiye, Palandöken başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakikada ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Erzurum\'da güvenle satın.',
    hero: {
      badge: '⛷️ ERZURUM ARAÇ ALIM',
      title: 'Erzurum\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Erzurum ve çevresinde hasarlı araçlarınızı satın alıyoruz.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '750 Bin',
      coverage: ['Yakutiye', 'Palandöken', 'Aziziye', 'Horasan', 'Oltu'],
      responseTime: '1 saat içinde',
      localOffice: 'Yakutiye Ofis',
    },
    features: [],
    testimonials: [],
    faqs: [],
  },

  'van': {
    id: 'van',
    slug: 'van',
    name: 'Van',
    region: 'Doğu Anadolu',
    metaTitle: 'Van Hasarlı Kazalı Pert Hurda Araç Alımı',
    metaDescription: 'Van\'da kazalı, hasarlı, pert ve hurda araç alımı. İpekyolu ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: [
      'van hasarlı araç alan',
      'van kazalı araç alan',
      'van pert araç alan',
      'van hurda araç alımı',
    ],
    canonical: 'https://www.yeniceotohasarli.com/sehirler/van',
    ogUrl: 'https://www.yeniceotohasarli.com/sehirler/van',
    intro: 'Van\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 65 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Doğu Anadolu bölgesinde İpekyolu, Tuşba, Edremit başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakikada ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Van\'da güvenle satın.',
    hero: {
      badge: '🌊 VAN ARAÇ ALIM',
      title: 'Van\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Van ve ilçelerinde hasarlı araç alım hizmeti sunuyoruz.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '1.1 Milyon',
      coverage: ['İpekyolu', 'Tuşba', 'Edremit', 'Erciş'],
      responseTime: '1 saat içinde',
      localOffice: 'İpekyolu Ofis',
    },
    features: [],
    testimonials: [],
    faqs: [],
  }
};

// Helper functions
export const getCityBySlug = (slug: string): CityData | undefined => {
  return citiesData[slug];
};

export const getAllCities = (): CityData[] => {
  return Object.values(citiesData);
};

export const getCitySlugs = (): string[] => {
  return Object.keys(citiesData);
};

export const getCitiesByRegion = (region: string): CityData[] => {
  return Object.values(citiesData).filter(city => city.region === region);
};

// Generate city-service combination URLs
export const generateCityServiceUrls = () => {
  const cities = getAllCities();
  const services = ['kazali', 'hasarli', 'pert', 'hurda'];

  const urls: Array<{ city: string; service: string; url: string }> = [];

  cities.forEach(city => {
    services.forEach(service => {
      if (city.services[service as keyof typeof city.services]) {
        urls.push({
          city: city.name,
          service,
          url: `/sehirler/${city.slug}/${service}-arac-alim`,
        });
      }
    });
  });

  return urls;
};