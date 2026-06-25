'use client';

import { siteConfig } from '@/config/site';
import { trackPhoneClick } from '@/lib/analytics';

type PhoneLinkProps = {
  /** Location label sent to the dataLayer (e.g. "topbar", "footer-cta"). */
  location: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Client-side `tel:` link that fires the `phone_click` dataLayer event.
 * Use this inside server components (TopBar, Footer) so phone clicks are tracked
 * without converting the whole component tree to a client component.
 */
export default function PhoneLink({ location, className, children }: PhoneLinkProps) {
  return (
    <a
      href={`tel:${siteConfig.phone}`}
      className={className}
      onClick={() => trackPhoneClick(location)}
    >
      {children}
    </a>
  );
}
