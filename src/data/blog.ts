export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  canonical: string;
  ogUrl: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'kazali-arac-satarken-nelere-dikkat-edilmeli',
    title: 'Kazalı Araç Satışında Nelere Dikkat Etmek Gerekir?',
    excerpt: 'Kazalı aracınızı elden çıkarmadan önce öğrenmeniz gereken bütün ayrıntılar ve en yüksek fiyat elde etme teknikleri.',
    content: `
<h2>Kazalı Araç Satışında Mutlaka Bilinmesi Gerekenler</h2>
<p>Kazalı bir aracı elden çıkarmak ilk bakışta yorucu bir süreç sanılabilir; ne var ki doğru adımları takip ettiğinizde en yüksek fiyatı elde edebilirsiniz. Bu yazıda kazalı araç satışında göz önünde bulundurmanız gereken bütün noktaları tek tek inceliyoruz.</p>

<h3>1. Aracın Hasarını Gerçekçi Biçimde Değerlendirin</h3>
<p>Atılacak ilk adım, aracınızdaki hasarı önyargısız bir bakışla ölçmektir. Geniş çaplı hasarlar fiyatı belirgin biçimde aşağı çeker; buna karşın küçük hasarlarda da hakkaniyetli bir bedel elde etmeniz mümkündür. Hasarın çeşidini (kaporta, motor, şanzıman, hava yastığı) doğru saptamak, hem alıcıya dürüst bilgi sunmanızı hem de makul bir fiyat beklentisi kurmanızı kolaylaştırır.</p>

<h3>2. Trafik Kazası Raporunu Edinin</h3>
<p>Kaza raporu, alıcıların güven duymasını sağlar ve satışı hızlandırır. Olay yerine trafik polisi çağrıldıysa tutanağı almayı ihmal etmeyin. Belgelenmiş ve alkolsüz bir kaza, aracın değerinin korunmasına katkı sunar.</p>

<h3>3. Ayrıntılı Fotoğraf Kaydı Tutun</h3>
<p>Kazanın hemen ardından bol fotoğraf çekin: hasarlı kısımların yakın çekimleri, aracın dört yönden geneli, motor kaputunun altı ve plakanın okunaklı görüntüsü. Bu kayıtlar hem sigorta aşamasında hem de satış sırasında işinize yarar.</p>

<h3>4. Sigorta İşlemlerini Tamamlayın</h3>
<p>Kasko poliçeniz varsa sigorta firmanızla iletişime geçin. Tazminatı tahsil ettikten sonra aracı satmak daha kazançlı olabilir. Sigorta pert kararı çıkardıysa pert belgesiyle beraber satışı gerçekleştirebilirsiniz.</p>

<h3>5. Birden Çok Alıcıdan Teklif Toplayın</h3>
<p>Yalnızca tek bir alıcıyla görüşmek çoğunlukla en yüksek fiyatı yakalamanızın önüne geçer. Yenice Otomotiv gibi profesyonel alıcılar piyasayı araştırarak hakkaniyetli ve rekabetçi tekliflerde bulunur.</p>

<h3>6. Gereken Belgeleri Hazır Edin</h3>
<ul>
  <li>Araç ruhsatı (aslı)</li>
  <li>Trafik kazası tutanağı</li>
  <li>Kimlik belgesi</li>
  <li>Sigorta poliçesi ve varsa kasko belgesi</li>
  <li>Araç muayene belgesi</li>
</ul>

<h2>En Yüksek Fiyatı Nasıl Yakalarsınız?</h2>
<p>Birkaç farklı alıcıdan teklif alıp bunları kıyaslayın. Yenice Otomotiv, 5+ yıllık deneyimiyle piyasayı tarayarak size daima en yüksek teklifi getirir. Dahası ücretsiz çekici, noter işlemi ve anında ödeme sayesinde süreç baştan sona sorunsuz ilerler.</p>

<h2>Kazalı Araç Satışında Sık Düşülen Yanlışlar</h2>
<p>En çok yapılan yanlış, aracı önce tamir ettirip sonra satmaya kalkışmaktır. Pek çok durumda onarım masrafı aracın piyasa değerini geçer; bu yaklaşım ekonomik açıdan akıllıca değildir. İkinci sık görülen hata yalnızca tanıdıklara satmaya çalışmaktır; oysa profesyonel alıcılar genellikle çok daha iyi fiyatlar teklif eder.</p>
    `,
    image: '/images/blog/kazali-arac-satis-rehberi.png',
    category: 'Rehber',
    author: 'Yenice Otomotiv Ekibi',
    publishedAt: '2025-01-05',
    readTime: '6 dk',
    tags: ['kazalı araç', 'araç satış', 'ipuçları'],
    metaTitle: 'Kazalı Araç Satarken Dikkat Edilecekler | Yenice Otomotiv Blog',
    metaDescription: 'Kazalı aracınızı en yüksek fiyata satabilmeniz için öğrenmeniz gereken bütün ayrıntılar. Profesyonel öneriler ve püf noktaları.',
    metaKeywords: 'hasarlı araç, kazalı araç satışı, pert araç, hurda araç, araç satış rehberi',
    canonical: 'https://www.yeniceotohasarli.com/blog/kazali-arac-satarken-nelere-dikkat-edilmeli',
    ogUrl: 'https://www.yeniceotohasarli.com/blog/kazali-arac-satarken-nelere-dikkat-edilmeli',
  },
  {
    id: '2',
    slug: 'pert-raporu-nedir',
    title: 'Pert Raporu Ne Demektir? Nasıl Edinilir?',
    excerpt: 'Pert raporuyla ilgili aklınıza takılan her konu ve pert raporlu araç satışının işleyişi.',
    content: `
<h2>Pert Raporu Ne Demektir?</h2>
<p>Pert raporu, sigorta şirketinin bir aracı ekonomik açıdan onarılamaz kabul etmesiyle düzenlenen resmi bir belgedir. "Pert" sözcüğü Türkçede "kullanılamaz duruma gelmiş" anlamı taşır ve araç sigortacılığında kendine özgü bir karşılığı vardır.</p>

<h3>Pert Raporu Hangi Durumda Düzenlenir?</h3>
<p>Sigorta mevzuatı uyarınca bir aracın onarım masrafı, aracın rayiç (piyasa) değerinin belli bir oranını — çoğunlukla %60-70'ini — geçtiğinde sigorta şirketi pert kararına gidebilir. Bu karar, sigorta şirketinin koşullarına, aracın yaşına ve hasarın boyutuna göre farklılık gösterebilir.</p>

<h3>Pert Raporu Çeşitleri</h3>
<ul>
  <li><strong>Tam Hasar Pert:</strong> Araç bütünüyle kullanılamaz duruma gelmiştir.</li>
  <li><strong>Kısmi Hasar Pert:</strong> Araç tümüyle yok olmamış; fakat ekonomik onarım eşiğini aşmıştır.</li>
  <li><strong>Hırsızlık Pert:</strong> Çalınan araç belirlenen süre içinde bulunamazsa pert işlemi uygulanır.</li>
  <li><strong>Su Baskını / Yangın Pert:</strong> Doğal afet veya yangından kaynaklanan hasarlarda düzenlenir.</li>
</ul>

<h3>Pert Raporlu Araç Satılabilir mi?</h3>
<p>Evet! Pert raporlu araçlar Türkiye'de yasal çerçevede hem satılabilir hem alınabilir. Araç sahibi pert kararını onaylayıp tazminatı tahsil ettikten sonra aracı sigorta şirketine devredebilir; ya da tazminatın bir bölümünü alarak aracı kendisinde tutup dilediği kişiye satabilir. Yenice Otomotiv olarak pert araçlar için özel bir değerlendirme yapıyor ve en yüksek fiyatı sunuyoruz.</p>

<h3>Gereken Belgeler</h3>
<ul>
  <li>Pert raporu (sigorta şirketinden alınan resmi belge)</li>
  <li>Araç ruhsatı (aslı)</li>
  <li>Sigorta poliçesi</li>
  <li>Kimlik belgesi</li>
  <li>Varsa kaza tutanağı</li>
</ul>

<h2>Pert Araç Sahibi Nasıl Hareket Etmeli?</h2>
<p>Sigorta şirketinin teklifini sorgusuzca kabul etmeden önce bağımsız bir değerlendirme yaptırın. Yenice Otomotiv'ı arayarak sigorta teklifinin üzerinde bir bedel alıp alamayacağınızı öğrenin. Çoğu durumda aracı kendiniz satmak, sigorta tazminatından daha kazançlı olabilir.</p>
    `,
    image: '/images/blog/pert-raporu-belgesi.png',
    category: 'Bilgi',
    author: 'Hukuk Ekibi',
    publishedAt: '2025-01-03',
    readTime: '5 dk',
    tags: ['pert raporu', 'sigorta', 'yasal süreç'],
    metaTitle: 'Pert Raporu Ne Demek, Nasıl Edinilir? | Yenice Otomotiv',
    metaDescription: 'Pert raporuna dair bütün ayrıntılar. Pert raporlu araç satışı ve alımı hakkında bilmeniz gereken her şey.',
    metaKeywords: 'hasarlı araç, kazalı araç satışı, pert araç, hurda araç, araç satış rehberi',
    canonical: 'https://www.yeniceotohasarli.com/blog/pert-raporu-nedir',
    ogUrl: 'https://www.yeniceotohasarli.com/blog/pert-raporu-nedir',
  },
  {
    id: '3',
    slug: 'hurda-arac-teslim-sureci',
    title: 'Hurda Araç Teslim İşlemleri Nasıl Yürür?',
    excerpt: 'Hurda aracınızı nasıl teslim edersiniz? Aşama aşama süreç ve dikkat edilecek noktalar.',
    content: `
<h2>Hurda Araç Teslimi Sırasında Atmanız Gereken Adımlar</h2>
<p>Hurda aracınızı teslim etmek sandığınızdan çok daha basit! Yenice Otomotiv ile bütün süreci aynı gün içinde sonuçlandırabilirsiniz.</p>

<h3>Adım 1: Bizi Arayın ya da WhatsApp'tan Yazın</h3>
<p>İlk adım gayet kolay: +90 530 344 40 97 numaralı hattan bizi arayın veya WhatsApp aracılığıyla mesaj atın. Aracınızın markasını, modelini, yılını ve genel durumunu bizimle paylaşın. Fotoğraf iletmeniz değerlendirmeyi daha da hızlandırır.</p>

<h3>Adım 2: Ücretsiz Çekici Hizmeti</h3>
<p>Anlaşmaya vardıktan sonra Türkiye'nin her yerine ücretsiz çekici yolluyoruz. Aracın çalışmaması bir engel değildir; çekici hizmetimiz her durumda geçerlidir. Randevu saatini size en uygun şekilde ayarlıyoruz.</p>

<h3>Adım 3: Tartım ve Değerlendirme</h3>
<p>Aracınız teslim alındıktan sonra endüstriyel baskülde tartılır. Kilogram başına o günkü hurda demir fiyatı uygulanır. Alüminyum parçalar ve motor bloğu gibi kıymetli metaller ayrıca hesaba katılır. Tartım baştan sona şeffaftır; hiçbir sürprizle karşılaşmazsınız.</p>

<h3>Adım 4: Hurda Belgesi İşlemleri</h3>
<p>Hurda belgesi, aracınızı trafikten kaldıran ve vergi yükümlülüklerinizi bitiren resmi bir belgedir. İşlemleri Trafik Tescil Müdürlüğü'nde biz yürütüyoruz. Hurda belgesi düzenlendiğinde araç tümüyle kayıt dışına çıkar.</p>

<h3>Adım 5: Anında Ödeme</h3>
<p>Tüm işlemler bittiğinde ödemeniz hemen nakit ya da EFT yoluyla yapılır. Ödemenin tamamlanması için gün sonunu beklemenize gerek kalmaz.</p>

<h2>Hurda Belgesi Neye Yarar?</h2>
<p>Hurda belgesiyle aracınızın trafikteki kaydı silinir, MTV (Motorlu Taşıtlar Vergisi) ödemeleri biter, araç muayene zorunluluğu kalkar ve trafik sigortasını yenileme mecburiyeti ortadan kalkar. Ayrıca bazı devlet destekli araç yenileme programlarında hurda belgesi, yeni araç alımında indirim fırsatı sağlamaktadır.</p>
    `,
    image: '/images/blog/hurda-arac-teslim.png',
    category: 'Rehber',
    author: 'Yenice Otomotiv Ekibi',
    publishedAt: '2025-01-01',
    readTime: '4 dk',
    tags: ['hurda araç', 'hurda belgesi', 'süreç'],
    metaTitle: 'Hurda Araç Teslim İşlemleri | Yenice Otomotiv Blog',
    metaDescription: 'Hurda aracınızı teslim etme işlemleri hakkında ayrıntılı rehber. Ücretsiz çekici ve anında ödeme.',
    metaKeywords: 'hasarlı araç, kazalı araç satışı, pert araç, hurda araç, araç satış rehberi',
    canonical: 'https://www.yeniceotohasarli.com/blog/hurda-arac-teslim-sureci',
    ogUrl: 'https://www.yeniceotohasarli.com/blog/hurda-arac-teslim-sureci',
  },
  {
    id: '4',
    slug: 'hasarli-arac-ne-kadar-deger-kaybeder',
    title: 'Hasarlı Araçta Değer Kaybı Ne Boyutta Olur?',
    excerpt: 'Motor, kaporta ve şanzıman hasarının araç değerine yansıması ve en doğru satış stratejisi.',
    content: `
<h2>Hasarın Türüne Bağlı Olarak Araç Değer Kaybı</h2>
<p>Bir araçta oluşan hasar, aracın piyasa değerini dolaysız biçimde etkiler. Ne var ki bu etki; hasarın türüne, büyüklüğüne ve aracın diğer niteliklerine göre ciddi farklar gösterir. Bu yazıda en sık rastlanan hasar türlerinin araç değerine etkisini ele alıyoruz.</p>

<h3>Kaporta Hasarı</h3>
<p>Kaporta hasarı, aracın mekanik performansını bozmadığından genellikle en düşük değer kaybına yol açar. Hafif boyama ya da göçük onarımı gerektiren hasarlarda değer kaybı %10-20 dolayındadır. Fakat geniş çaplı kaporta değişimi (kapı, kanat, bagaj) gereken durumlarda bu oran %20-35'e tırmanabilir. Şasi hasarına evrilen kaporta hasarları ise değeri %40-60 oranında aşağı çekebilir.</p>

<h3>Motor Hasarı</h3>
<p>Motor hasarı, en büyük değer kaybına neden olan hasar türlerinden biridir. Baş contası yanması, silindir bloğu çatlağı veya turbo arızası gibi sorunlar aracın değerini %30-50 oranında düşürebilir. Komple motor değişimi gerektiğinde değer kaybı %40-60'a varabilir. Yine de motor hasarlı araçlarda kullanılabilir durumdaki diğer parçalar (elektrik sistemi, iç döşeme, aksesuar) değerin korunmasına katkıda bulunur.</p>

<h3>Şanzıman Hasarı</h3>
<p>Şanzıman hasarı, onarımı pahalı olduğundan araç değerini hatırı sayılır ölçüde etkiler. Otomatik şanzımandaki arıza, aracın değerini %25-45 oranında düşürebilir. Manuel şanzıman hasarında değer kaybı biraz daha hafiftir; %15-30 aralığında seyreder.</p>

<h3>Elektrik Sistemi Hasarı</h3>
<p>Elektrik arızaları, modern araçlarda giderek daha karmaşık ve pahalı bir hâl almaktadır. ECU (motor kontrol ünitesi) veya airbag sistemi arızaları değeri %20-35 oranında azaltabilir. Hibrit ya da elektrikli araçlarda pil sistemi hasarı ise çok daha büyük değer kayıplarına sebep olur.</p>

<h2>Hasarlı Araç Satışında En Akıllıca Strateji</h2>
<p>Hasarlı araçları onarttırmadan doğrudan satmak çoğu kez daha mantıklıdır. Onarım masrafıyla satış fiyatı kıyaslandığında, pek çok durumda hasarlı aracı olduğu gibi satmak daha yüksek net gelir getirir. Yenice Otomotiv, hasarlı araç alımındaki 5+ yıllık deneyimiyle size hakkaniyetli ve en yüksek fiyatı sunar.</p>

<h2>Nasıl Hareket Etmelisiniz?</h2>
<p>İlk olarak ücretsiz değerlendirme yaptırın, sonra bunu onarım masrafıyla karşılaştırın. Yenice Otomotiv'ı arayın; 30 dakika içinde hasarlı aracınız için net bir teklif alın ve en isabetli kararı verin.</p>
    `,
    image: '/images/blog/hasarli-arac-deger-kaybi.png',
    category: 'Bilgi',
    author: 'Yenice Otomotiv Uzman Ekibi',
    publishedAt: '2025-01-10',
    readTime: '6 dk',
    tags: ['hasarlı araç', 'değer kaybı', 'araç fiyatı'],
    metaTitle: 'Hasarlı Araçta Değer Kaybı Ne Boyutta Olur? | Yenice Otomotiv Blog',
    metaDescription: 'Motor, kaporta ve şanzıman hasarının araç değerine yansıması. Hasarın türüne göre değer kaybı oranları ve satış tavsiyeleri.',
    metaKeywords: 'hasarlı araç, kazalı araç satışı, pert araç, hurda araç, araç satış rehberi',
    canonical: 'https://www.yeniceotohasarli.com/blog/hasarli-arac-ne-kadar-deger-kaybeder',
    ogUrl: 'https://www.yeniceotohasarli.com/blog/hasarli-arac-ne-kadar-deger-kaybeder',
  },
  {
    id: '5',
    slug: 'arac-ekspertizi-ne-kadar-surer',
    title: 'Araç Ekspertizi Ne Kadar Zaman Alır ve Nasıl Uygulanır?',
    excerpt: 'Profesyonel araç ekspertizinin aşamaları, ne kadar sürdüğü ve hasarlı araçlarda ekspertizin nasıl işlediği hakkında ayrıntılı bilgi.',
    content: `
<h2>Araç Ekspertizi Ne Anlama Gelir?</h2>
<p>Araç ekspertizi, bir motorlu taşıtın teknik durumunun, hasar geçmişinin ve piyasa değerinin uzmanlarca incelendiği bir işlemdir. Ekspertiz; araç alım-satımında, sigorta değerlendirmelerinde ve hasar tespitinde belirleyici bir rol üstlenir.</p>

<h3>Standart Bir Araç Ekspertizi Ne Kadar Zaman Alır?</h3>
<p>Standart bir araç ekspertizi 30 dakika ile 2 saat arasında tamamlanır. Süre; aracın türüne, hasarın büyüklüğüne, kullanılan donanıma ve ekspertizin kapsamına göre değişiklik gösterir. Dijital sistemlerle çalışan modern ekspertiz merkezlerinde bu süre kayda değer biçimde kısalır.</p>

<h3>Ekspertizin Aşamaları</h3>
<ul>
  <li><strong>Görsel İnceleme (10-15 dk):</strong> Kaporta, boya, lastik ve genel dış görünüm gözden geçirilir.</li>
  <li><strong>Mekanik Kontrol (15-20 dk):</strong> Motor, şanzıman, fren sistemi ve süspansiyon denetlenir.</li>
  <li><strong>Elektronik Tarama (10-15 dk):</strong> OBD cihazıyla hata kodları okunur, airbag ve ABS sistemi sınanır.</li>
  <li><strong>Boya Ölçümü (5-10 dk):</strong> Boya kalınlık ölçeriyle orijinal boya tespit edilir.</li>
  <li><strong>Değerlendirme ve Rapor (10-20 dk):</strong> Bütün bulgular rapora dökülür ve piyasa değeri saptanır.</li>
</ul>

<h3>Hasarlı Araçlarda Ekspertiz</h3>
<p>Hasarlı araçlarda ekspertiz daha geniş kapsamlı olabilir. Şasi kontrolü, hasar analizi ve parça değer tespiti ek zaman gerektirebilir. Yenice Otomotiv, hasarlı araç ekspertizini ücretsiz şekilde yapmaktadır; bunun için sizden ayrıca bir bedel almıyoruz.</p>

<h2>Ekspertizden Sonra Nasıl İlerlemelisiniz?</h2>
<p>Ekspertiz raporu elinize geçtiğinde, hasarlı aracınızı satmak için en doğru zamandasınız demektir. Yenice Otomotiv'ı arayın; ekspertiz raporunuzu iletin, biz de 30 dakika içinde size en yüksek fiyat teklifini sunalım. Ekspertiz raporunuz olmasa dahi değerlendirme yapıyoruz.</p>
    `,
    image: '/images/blog/arac-ekspertiz-sureci.png',
    category: 'Rehber',
    author: 'Teknik Ekip',
    publishedAt: '2025-01-15',
    readTime: '5 dk',
    tags: ['araç ekspertizi', 'ekspertiz süresi', 'hasar tespiti'],
    metaTitle: 'Araç Ekspertizi Ne Kadar Zaman Alır? | Yenice Otomotiv Blog',
    metaDescription: 'Araç ekspertizinin aşamaları ve ne kadar sürdüğü hakkında ayrıntılı bilgi. Hasarlı araçlarda ekspertiz ve ücretsiz değerlendirme.',
    metaKeywords: 'hasarlı araç, kazalı araç satışı, pert araç, hurda araç, araç satış rehberi',
    canonical: 'https://www.yeniceotohasarli.com/blog/arac-ekspertizi-ne-kadar-surer',
    ogUrl: 'https://www.yeniceotohasarli.com/blog/arac-ekspertizi-ne-kadar-surer',
  },
  {
    id: '6',
    slug: 'kazali-arac-sigorta-sureci',
    title: 'Kazalı Araçta Sigorta İşlemleri Nasıl Yürür?',
    excerpt: 'Kaza ardından sigorta başvurusu, hasar tespiti ve tazminat alma sürecine dair kapsamlı bir rehber.',
    content: `
<h2>Kazadan Sonraki İlk 24 Saat</h2>
<p>Trafik kazasının ardından ilk 24 saat büyük önem taşır. Bu süreçte doğru adımları atmanız, hem sigorta işlemlerinizi hem de araç satış sürecinizi belirgin biçimde etkiler.</p>

<h3>Vakit Kaybetmeden Yapmanız Gerekenler</h3>
<ul>
  <li>Güvendeyseniz aracı yol kenarına çekin ve reflektör yerleştirin</li>
  <li>Tutanak için trafik polisini veya jandarmayı arayın</li>
  <li>Gerekiyorsa ambulans çağırın</li>
  <li>Karşı aracın bilgilerini not alın (plaka, ruhsat, sigorta poliçesi)</li>
  <li>Kazayı fotoğraflarla kayıt altına alın</li>
  <li>24 saat içinde sigorta şirketinizi arayın</li>
</ul>

<h3>Sigorta Hasar Başvurusu</h3>
<p>Kasko sigortanız varsa başvurunuzu kendi sigorta şirketinize yaparsınız. Yalnızca zorunlu trafik sigortanız bulunuyorsa karşı tarafın sigortasına başvurmanız gerekir. Başvuruyu takiben sigorta şirketi bir eksper atar ve hasar tespitini gerçekleştirir.</p>

<h3>Hasar Tespiti ve Pert Kararı</h3>
<p>Sigorta şirketinin eksperi hasarı inceler ve onarım masrafını hesaplar. Onarım masrafı aracın rayiç değerinin %60-70'ini geçerse pert kararı çıkabilir. Bu durumda sigorta şirketi size bir tazminat teklifi sunar.</p>

<h2>Sigorta Teklifi Düşük Çıkarsa Nasıl Hareket Etmelisiniz?</h2>
<p>Sigortanın tazminat teklifini sorgusuz kabul etme zorunluluğunuz yoktur. İtiraz hakkınızı kullanabilir ya da bağımsız bir eksper atatabilirsiniz. Bir başka seçenek olarak aracı kendiniz satmayı düşünebilirsiniz. Yenice Otomotiv olarak sigorta tazminatını beklemeksizin aracınızı anında satın alıyoruz — çoğu kez sigorta teklifinin üzerinde bir fiyat verebiliyoruz.</p>

<h2>Kaza Sonrası Araç Satışı</h2>
<p>Sigorta sürecini beklemek istemiyorsanız doğrudan kazalı araç alıcılarıyla görüşebilirsiniz. Yenice Otomotiv, sigorta sürecinizin hangi aşamasında olursanız olun aracınızı değerlendirip en yüksek teklifi sunar. Ücretsiz ekspertiz, çekici ve bütün evrak işlemleri bizim üzerimizdedir.</p>
    `,
    image: '/images/blog/sigorta-hasar-islemleri.png',
    category: 'Rehber',
    author: 'Yenice Otomotiv Ekibi',
    publishedAt: '2025-01-18',
    readTime: '7 dk',
    tags: ['sigorta süreci', 'kaza sonrası', 'kasko'],
    metaTitle: 'Kazalı Araçta Sigorta İşlemleri Nasıl Yürür? | Yenice Otomotiv',
    metaDescription: 'Kaza ardından sigorta başvurusu ve hasar tespiti sürecinin bütün adımları. Sigorta teklifi düşük çıkarsa nasıl hareket etmelisiniz?',
    metaKeywords: 'hasarlı araç, kazalı araç satışı, pert araç, hurda araç, araç satış rehberi',
    canonical: 'https://www.yeniceotohasarli.com/blog/kazali-arac-sigorta-sureci',
    ogUrl: 'https://www.yeniceotohasarli.com/blog/kazali-arac-sigorta-sureci',
  },
  {
    id: '7',
    slug: 'pert-arac-satin-almak-mantikli-mi',
    title: 'Pert Araç Almak Akıllıca mı?',
    excerpt: 'Pert araç alımının getirileri, barındırdığı riskler ve göz önünde tutulması gereken önemli ayrıntılar.',
    content: `
<h2>Pert Araç Nedir ve Neden Tercih Edilir?</h2>
<p>Pert araç, sigorta şirketince ekonomik onarım eşiğini geçtiği değerlendirilen araçtır. Bu araçlar piyasa değerinin epey altında satışa çıkar; bu da yedek parça üreticileri, oto tamircileri ve bilinçli alıcılar için çekici fırsatlar doğurur.</p>

<h3>Pert Araç Almanın Getirileri</h3>
<ul>
  <li>Piyasa değerinin %30-50'si fiyatına araç sahibi olabilirsiniz</li>
  <li>Yedek parça kaynağı olarak kullanılabilir</li>
  <li>Tecrübeli tamircilerin elinde eski haline kavuşturulabilir</li>
  <li>Tarımsal ya da endüstriyel kullanıma elverişli olabilir</li>
</ul>

<h3>Pert Araç Almanın Riskleri</h3>
<ul>
  <li>Gizli hasarlar her durumda göze çarpmayabilir</li>
  <li>Onarım masrafı beklediğinizin üzerine çıkabilir</li>
  <li>Yeniden trafiğe çıkarma işlemleri bürokratik olabilir</li>
  <li>Sigorta yaptırmak zorlaşabilir</li>
</ul>

<h3>Pert Araç Almadan Önce Denetlenmesi Gerekenler</h3>
<p>Şasi numarasını mutlaka sorgulatın. Pert raporunu ve sigorta belgelerini gözden geçirin. Bağımsız bir eksperin görüşüne başvurun. Onarım masrafı için bir tahmin yaptırın ve gerçekçi bir bütçe oluşturun.</p>

<h2>Yenice Otomotiv'tan Pert Araç Alabilir misiniz?</h2>
<p>Yenice Otomotiv temel olarak pert araç alan bir firmadır; pert araç satışı yapmıyoruz. Pert aracınızı en yüksek fiyata Yenice Otomotiv'a satabilirsiniz. Bütün yasal işlemler, evraklar ve çekici hizmetimizden ücretsiz biçimde faydalanırsınız.</p>
    `,
    image: '/images/blog/pert-arac-yatirimi.png',
    category: 'Bilgi',
    author: 'Yenice Otomotiv Uzman Ekibi',
    publishedAt: '2025-01-20',
    readTime: '5 dk',
    tags: ['pert araç', 'araç satın alma', 'ikinci el'],
    metaTitle: 'Pert Araç Almak Akıllıca mı? | Yenice Otomotiv Blog',
    metaDescription: 'Pert araç alımının getirileri ve riskleri. Pert araç alırken göz önünde tutmanız gereken önemli ayrıntılar.',
    metaKeywords: 'hasarlı araç, kazalı araç satışı, pert araç, hurda araç, araç satış rehberi',
    canonical: 'https://www.yeniceotohasarli.com/blog/pert-arac-satin-almak-mantikli-mi',
    ogUrl: 'https://www.yeniceotohasarli.com/blog/pert-arac-satin-almak-mantikli-mi',
  },
  {
    id: '8',
    slug: 'aracinizi-en-yuksek-fiyata-satmanin-yollari',
    title: 'Hasarlı Aracınızı En Yüksek Fiyata Satmanın 7 Yöntemi',
    excerpt: 'Kazalı, hasarlı ya da pert raporlu aracınızı piyasanın en yüksek fiyatına satmanız için kanıtlanmış yöntemler.',
    content: `
<h2>Hasarlı Araç Satışında En Yüksek Bedel İçin 7 Yöntem</h2>
<p>Hasarlı araç satışı, doğru yaklaşımla beklentinizin ötesinde bir gelir getirebilir. İşte uzmanların tavsiye ettiği ve etkinliği kanıtlanmış 7 yöntem:</p>

<h3>1. Doğru Zamanlamayı Yakalayın</h3>
<p>Hasarlı araçlar bekledikçe ek hasarlar (pas, nem, pil boşalması) nedeniyle değer yitirir. Kaza veya arızadan sonra olabildiğince hızlı satışa çıkmak daha yüksek bir fiyat almanızı sağlar.</p>

<h3>2. Ayrıntılı Fotoğraf Çekin</h3>
<p>Hasarı net gösteren, iyi aydınlatılmış fotoğraflar alıcıların güvenini pekiştirir. 10-15 fotoğraf yeterlidir: her açıdan dış görünüm, hasarlı bölgenin yakın çekimi, motor kaputu altı ve iç mekan.</p>

<h3>3. Bütün Belgeleri Hazır Edin</h3>
<p>Araç ruhsatı, sigorta belgesi, varsa kaza tutanağı ve servis geçmişi belgeleri satış fiyatına olumlu yansır. Bakımlı ve belgeli araçlar daha yüksek teklif çeker.</p>

<h3>4. Birden Çok Alıcıdan Teklif Toplayın</h3>
<p>Yalnızca tek bir alıcıyla görüşmek her zaman en iyi fiyatı getirmez. En az 2-3 profesyonel alıcıdan teklif alarak bunları karşılaştırın.</p>

<h3>5. Profesyonel Alıcılarla Çalışın</h3>
<p>Bireysel alıcılar çoğunlukla düşük teklif sunar. Yenice Otomotiv gibi profesyonel alıcılar piyasayı araştırarak hakkaniyetli ve rekabetçi fiyatlar verir.</p>

<h3>6. Onarttırmadan Satın</h3>
<p>Hasarlı araçta onarım masrafı çoğu kez piyasa değerini geçer. Tamir masrafına girmeden doğrudan satmak pek çok durumda daha kazançlıdır.</p>

<h3>7. Sigorta Teklifini Sorgulamadan Onaylamayın</h3>
<p>Sigorta şirketinin ilk teklifi her zaman en iyi teklif değildir. Bağımsız değerlendirme yaptırmak ve itiraz haklarınızı kullanmak daha yüksek tazminat almanızı sağlayabilir.</p>

<h2>Yenice Otomotiv ile En Yüksek Fiyatı Güvenceye Alın</h2>
<p>Yenice Otomotiv, 5+ yıllık deneyimiyle hasarlı araç alımında Türkiye'nin en yüksek fiyatlarını sunar. Ücretsiz ekspertiz, anında teklif, ücretsiz çekici ve noter işlemlerini de içeren eksiksiz bir hizmet. Hemen arayın: +90 530 344 40 97</p>
    `,
    image: '/images/blog/en-yuksek-fiyata-arac-satisi.png',
    category: 'Strateji',
    author: 'Yenice Otomotiv Ekibi',
    publishedAt: '2025-01-25',
    readTime: '6 dk',
    tags: ['araç satış stratejisi', 'hasarlı araç', 'en yüksek fiyat'],
    metaTitle: 'Hasarlı Aracı En Yüksek Fiyata Satmanın 7 Yöntemi | Yenice Otomotiv',
    metaDescription: 'Kazalı ve hasarlı aracınızı en yüksek fiyata satmanız için 7 kanıtlanmış yöntem. Profesyonel öneriler ve püf noktaları.',
    metaKeywords: 'hasarlı araç, kazalı araç satışı, pert araç, hurda araç, araç satış rehberi',
    canonical: 'https://www.yeniceotohasarli.com/blog/aracinizi-en-yuksek-fiyata-satmanin-yollari',
    ogUrl: 'https://www.yeniceotohasarli.com/blog/aracinizi-en-yuksek-fiyata-satmanin-yollari',
  },
  {
    id: '9',
    slug: 'hurda-arac-fiyatlari-nasil-belirlenir',
    title: 'Hurda Araç Fiyatları Nasıl Hesaplanır?',
    excerpt: 'Hurda araç fiyatına etki eden unsurlar, kilo fiyatları ve değerlendirme aşamaları hakkında kapsamlı bir rehber.',
    content: `
<h2>Hurda Araç Fiyatını Belirleyen Unsurlar</h2>
<p>Hurda araç fiyatı; aracın ağırlığı, o günkü hurda demir fiyatı ve kullanılabilir parçaların değerinin bir araya gelmesiyle oluşur. Bu unsurları kavrayarak aracınız için en iyi fiyatı elde edebilirsiniz.</p>

<h3>1. Günlük Hurda Demir Fiyatı</h3>
<p>Hurda araç fiyatlamasının çekirdeğini bu oluşturur. Hurda demir fiyatı her gün değişir ve çelik piyasasına bağlıdır. Piyasa koşullarına göre kilogram başına 8-18 TL aralığında seyreder. Yenice Otomotiv, her gün güncel piyasa fiyatlarını izleyerek size en iyi teklifi getirir.</p>

<h3>2. Araç Ağırlığı</h3>
<p>Ortalama araç ağırlıkları şöyledir:
- Küçük otomobil (Fiat Punto, Renault Clio): 900-1.100 kg
- Orta sınıf (Toyota Corolla, VW Golf): 1.100-1.400 kg
- Büyük sedan (BMW 5 Serisi): 1.400-1.700 kg
- SUV (Volkswagen Tiguan): 1.500-1.900 kg
- Hafif ticari araç: 1.500-2.500 kg</p>

<h3>3. Değerli Metal İçeriği</h3>
<p>Alüminyum kapılar, motor bloğu ve bazı özel parçalar hurda demir değerinin üzerinde fiyatlanır. Bakır kablo demeti, katalitik konvertör (platin içerdiği için) ve alüminyum jantlar ek bir değer katar.</p>

<h3>4. Kullanılabilir Parçalar</h3>
<p>Araçta kullanılabilir durumda parçalar varsa (çalışan motor, sağlam koltuklar, hasarsız camlar, orijinal aksesuar) bu parçalar hurda değerinin üstünde fiyatlanır ve toplam ödemeyi yükseltir.</p>

<h2>Örnek Bir Hurda Araç Fiyat Hesabı</h2>
<p>1.200 kg ağırlığındaki bir araç, günlük 12 TL/kg fiyatıyla değerlendirildiğinde: 1.200 × 12 = 14.400 TL temel değere ulaşır. Değerli parçalar ve metal içeriği bu tutarı artırabilir.</p>

<h2>Neden Yenice Otomotiv'ı Tercih Etmelisiniz?</h2>
<p>Resmi belgeli bir hurda araç işletmesi olarak Yenice Otomotiv; şeffaf tartım süreci, güncel piyasa fiyatları ve anında ödeme güvencesiyle Türkiye genelinde hizmet sunmaktadır. Ücretsiz çekici ve bütün evrak işlemleri buna dahildir.</p>
    `,
    image: '/images/blog/hurda-demir-fiyatlari.png',
    category: 'Bilgi',
    author: 'Yenice Otomotiv Uzman Ekibi',
    publishedAt: '2025-02-01',
    readTime: '5 dk',
    tags: ['hurda araç fiyatı', 'kilo fiyatı', 'hurda demir'],
    metaTitle: 'Hurda Araç Fiyatları Nasıl Hesaplanır? | Yenice Otomotiv Blog',
    metaDescription: 'Hurda araç fiyatına etki eden unsurlar ve güncel kilo fiyatları. Aracınız için en yüksek hurda teklifini alın.',
    metaKeywords: 'hasarlı araç, kazalı araç satışı, pert araç, hurda araç, araç satış rehberi',
    canonical: 'https://www.yeniceotohasarli.com/blog/hurda-arac-fiyatlari-nasil-belirlenir',
    ogUrl: 'https://www.yeniceotohasarli.com/blog/hurda-arac-fiyatlari-nasil-belirlenir',
  },
  {
    id: '10',
    slug: 'motor-ariza-sonrasi-ne-yapilmali',
    title: 'Motor Arızasının Ardından Nasıl Hareket Etmelisiniz?',
    excerpt: 'Motor arızasıyla karşılaşan araç sahipleri için uygulamalı rehber: tamir mi, satış mı? Doğru karara nasıl varılır?',
    content: `
<h2>Motor Arızası: Onarmak mı, Satmak mı?</h2>
<p>Motor arızası, araç sahiplerini en güç kararlardan biriyle karşı karşıya bırakır: Masraflı bir tamirata girişmek mi, yoksa aracı satmak mı? Bu rehber karar verme sürecinizi kolaylaştıracak.</p>

<h3>Motor Arızası Çeşitleri</h3>
<ul>
  <li><strong>Hafif Arızalar (Onarılabilir):</strong> Conta değişimi, enjektör temizliği, soğutma sistemi arızası</li>
  <li><strong>Orta Düzey Arızalar (Maliyet değerlendirmesi gerektirir):</strong> Turbo arızası, zamanlama zinciri sorunu, şanzıman arızası</li>
  <li><strong>Ağır Arızalar (Satış tavsiye edilir):</strong> Motor bloğu çatlağı, silindir kapağı çatlağı, hidrolik hasar (su basması)</li>
</ul>

<h3>Onarmak mı, Satmak mı? Karar Ölçütleri</h3>
<p>Bu sorunun yanıtı için önce onarım masrafını öğrenin. Sonra şu hesabı yapın: Onarımdan sonra aracın piyasa değeri - Onarım masrafı = Net kazanç. Bu sonuç eksiyse ya da oldukça düşükse satış daha mantıklıdır.</p>

<h3>Karar Tablosu</h3>
<p>Onarım mantıklı: Araç genç olduğunda (0-5 yaş), onarım masrafı aracın değerinin %30'unun altında kaldığında, aracın duygusal bir değeri olduğunda.</p>
<p>Satış mantıklı: Araç yaşlı olduğunda (8+ yaş), onarım masrafı değerin %50'sini aştığında, beraberinde başka sorunlar da bulunduğunda.</p>

<h2>Motor Arızalı Araç Satışı</h2>
<p>Motor arızalı araçları satın alıyoruz — çalışmasa bile. Yenice Otomotiv, motorun durumuna bakmaksızın aracınızı değerlendiriyor. Tümüyle motor arızalı araçlarda dahi parça değerleri, metal içeriği ve aracın genel durumu hesaba katılarak hakkaniyetli bir fiyat belirleniyor.</p>

<p>Ücretsiz ekspertiz için +90 530 344 40 97 numarayı arayın. 30 dakikada net teklif, aynı gün çekici hizmeti ve anında ödeme.</p>
    `,
    image: '/images/blog/motor-arizasi-tamir.png',
    category: 'Rehber',
    author: 'Teknik Ekip',
    publishedAt: '2025-02-05',
    readTime: '5 dk',
    tags: ['motor arızası', 'motor hasarı', 'tamir mi satış mı'],
    metaTitle: 'Motor Arızasının Ardından Nasıl Hareket Etmelisiniz? | Yenice Otomotiv Blog',
    metaDescription: 'Motor arızalı araçta isabetli karar: tamir mi satış mı? Motor arıza çeşitleri ve satış stratejisi rehberi.',
    metaKeywords: 'hasarlı araç, kazalı araç satışı, pert araç, hurda araç, araç satış rehberi',
    canonical: 'https://www.yeniceotohasarli.com/blog/motor-ariza-sonrasi-ne-yapilmali',
    ogUrl: 'https://www.yeniceotohasarli.com/blog/motor-ariza-sonrasi-ne-yapilmali',
  },
  {
    id: '11',
    slug: 'noter-ile-arac-satisi-nasil-yapilir',
    title: 'Noterde Araç Satışı Nasıl Gerçekleştirilir? Adım Adım Rehber',
    excerpt: 'Hasarlı ve kazalı araç satışında noter işlemleri, gereken belgeler ve sürecin işleyişi hakkında ayrıntılı bilgi.',
    content: `
<h2>Noterde Araç Satışının İşleyişi</h2>
<p>Türkiye'de araç satışı noter onayını gerektirir. Bu işlem, hem alıcıya hem satıcıya hukuki güvence sunar. Hasarlı, kazalı ya da pert raporlu araçlarda noter süreci de aynı biçimde yürür.</p>

<h3>Gereken Belgeler</h3>
<ul>
  <li>Araç ruhsatı (aslı)</li>
  <li>Satıcı ve alıcının nüfus cüzdanı veya pasaportu</li>
  <li>Araç muayene belgesi (geçerli tarihli)</li>
  <li>Trafik sigortası poliçesi</li>
  <li>Varsa pert raporu veya hasar belgesi</li>
  <li>Araç satış sözleşmesi (noter tarafından düzenlenir)</li>
</ul>

<h3>Noter Süreci Adım Adım</h3>
<p>1. Noterden randevu alın (kimi noterler randevusuz da kabul eder).
2. Bütün belgelerinizle birlikte notere gidin.
3. Noter, araç ruhsatındaki bilgileri denetler.
4. Satış sözleşmesi hazırlanır ve taraflarca imzalanır.
5. Gerekli vergi ve harçlar ödenir.
6. Tapu sicil müdürlüğüne bildirimde bulunulur.</p>

<h3>Toplam Maliyet Ne Tutar?</h3>
<p>Araç satışının noter ücreti, aracın değerine ve harç oranlarına göre değişir. Sıradan bir işlemde noter harçları ve masraflar 500-2.000 TL arasında değişebilir. Yenice Otomotiv olarak noter işlem ücretlerini ve bürokratik adımları tümüyle biz karşılıyoruz; ekstra bir bedel ödemiyorsunuz.</p>

<h2>Yenice Otomotiv ile Zahmetsiz Satış</h2>
<p>Yenice Otomotiv, noter sürecinin tamamını sizin adınıza yürütür. Yapmanız gereken tek şey aracınızı teslim etmek; gerisi bizim işimiz. Randevu, evrak hazırlığı, noter ziyareti ve tescil işlemlerini de kapsayan eksiksiz bir hizmet sağlıyoruz.</p>
    `,
    image: '/images/blog/noter-arac-devir.png',
    category: 'Rehber',
    author: 'Hukuk Ekibi',
    publishedAt: '2025-02-10',
    readTime: '4 dk',
    tags: ['noter işlemleri', 'araç satışı', 'evraklar'],
    metaTitle: 'Noterde Araç Satışı Nasıl Gerçekleştirilir? | Yenice Otomotiv Blog',
    metaDescription: 'Hasarlı ve kazalı araçlarda noter süreci, gereken belgeler ve adımlar. Yenice Otomotiv ile zahmetsiz noter işlemi.',
    metaKeywords: 'hasarlı araç, kazalı araç satışı, pert araç, hurda araç, araç satış rehberi',
    canonical: 'https://www.yeniceotohasarli.com/blog/noter-ile-arac-satisi-nasil-yapilir',
    ogUrl: 'https://www.yeniceotohasarli.com/blog/noter-ile-arac-satisi-nasil-yapilir',
  },
  {
    id: '12',
    slug: 'ikinci-el-arac-deger-kaybi-nasil-onlenir',
    title: 'İkinci El Araçlarda Değer Kaybının Önüne Nasıl Geçilir?',
    excerpt: 'Aracınızın değerini koruma yöntemleri ve hasar sonrası değer kaybını en aza indirme stratejileri.',
    content: `
<h2>Araç Değer Kaybına Yol Açan Unsurlar</h2>
<p>Her araç zaman içinde değer yitirir. Ne var ki hasar, bakımsızlık ve hatalı kullanım bu süreci ciddi biçimde hızlandırır. Değer kaybını en aza indirmek için bunları bilmeniz gerekir.</p>

<h3>En Hızlı Değer Kaybına Sebep Olan Durumlar</h3>
<ul>
  <li>Trafik kazası (değer kaybı: %15-40)</li>
  <li>Motor veya şanzıman arızası (değer kaybı: %20-50)</li>
  <li>Pert raporu (değer kaybı: %40-70)</li>
  <li>Düzensiz bakım geçmişi (değer kaybı: %10-20)</li>
  <li>Yüksek kilometre (değer kaybı: her 10.000 km'de %5-15)</li>
  <li>Sigara içilmesi / hayvan taşınması (değer kaybı: %5-10)</li>
</ul>

<h3>Değer Koruma Stratejileri</h3>
<p>Bakımlarınızı düzenli yaptırın ve bütün servis kayıtlarını saklayın. Kazadan sonra onarımı orijinal parçalarla gerçekleştirin. Boya ve kaporta işlerini yetkili serviste yaptırın. Aracın bakım geçmişini belgeleyin.</p>

<h3>Kaza Sonrası Değer Kaybı Talebi</h3>
<p>Türkiye'de kaza sonrası oluşan araç değer kaybı için karşı tarafın sigortasından tazminat isteyebilirsiniz. "Değer kaybı davası" diye bilinen bu süreçte, mahkeme ya da sigorta tahkimi aracılığıyla kazadan kaynaklanan değer kaybı tazminatı alınabilir.</p>

<h2>Hasar Sonrası En Doğru Karar: Satmak</h2>
<p>Ağır hasar görmüş araçlarda zaman ilerledikçe değer kaybı daha da derinleşir. En hızlı ve kazançlı çözüm, hasarlı aracı profesyonel bir alıcıya satmaktır. Yenice Otomotiv ile 30 dakika içinde en güncel ve en yüksek teklifi alın; değer kaybı daha da büyümeden doğru kararı verin.</p>
    `,
    image: '/images/blog/ikinci-el-deger-koruma.png',
    category: 'Bilgi',
    author: 'Yenice Otomotiv Uzman Ekibi',
    publishedAt: '2025-02-15',
    readTime: '5 dk',
    tags: ['değer kaybı', 'araç değeri', 'ikinci el'],
    metaTitle: 'İkinci El Araçlarda Değer Kaybının Önüne Nasıl Geçilir? | Yenice Otomotiv',
    metaDescription: 'Araç değer kaybına yol açan unsurlar ve değer koruma stratejileri. Hasar sonrası en isabetli karar.',
    metaKeywords: 'hasarlı araç, kazalı araç satışı, pert araç, hurda araç, araç satış rehberi',
    canonical: 'https://www.yeniceotohasarli.com/blog/ikinci-el-arac-deger-kaybi-nasil-onlenir',
    ogUrl: 'https://www.yeniceotohasarli.com/blog/ikinci-el-arac-deger-kaybi-nasil-onlenir',
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getPostSlugs(): string[] {
  return blogPosts.map(post => post.slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getCategories(): string[] {
  return [...new Set(blogPosts.map(post => post.category))];
}
