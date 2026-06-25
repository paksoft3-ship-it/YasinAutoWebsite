import { Phone, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site';
import PhoneLink from '@/components/shared/PhoneLink';

/** Compact dark utility bar above the main header. */
export default function TopBar() {
  return (
    <div className="bg-navy-950 text-white/85">
      <div className="container-page flex h-9 items-center justify-between gap-4 text-[12.5px]">
        <p className="hidden sm:block truncate">
          Türkiye’nin güvenilir kazalı, hasarlı ve pert araç alım noktası
        </p>
        <div className="flex items-center gap-4 sm:gap-5 whitespace-nowrap">
          <span className="hidden md:inline-flex items-center gap-1.5 text-white/70">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            7/24 Yanınızdayız!
          </span>
          <PhoneLink
            location="topbar"
            className="inline-flex items-center gap-1.5 font-semibold text-brand-green hover:text-white transition-colors"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {siteConfig.phoneDisplay}
          </PhoneLink>
        </div>
      </div>
    </div>
  );
}
