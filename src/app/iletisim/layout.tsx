import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'İletişim | Yenice Oto - Bize Ulaşın',
    description: 'Yenice Oto ile iletişime geçin. Kazalı, hasarlı, pert, hurda araç alımı için hemen arayın veya WhatsApp\'tan yazın. 7/24 destek.',
    alternates: { canonical: 'https://www.yeniceotohasarli.com/iletisim' },
    openGraph: { url: 'https://www.yeniceotohasarli.com/iletisim' },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
