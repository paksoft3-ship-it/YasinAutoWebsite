import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'İletişim - Yenice Otomotiv | Bize Ulaşın',
    description: 'Yenice Otomotiv ile hemen iletişime geçin. Kazalı, hasarlı, pert ve hurda araç alımı için bizi arayın. 7/24 müşteri hizmetleri.',
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
