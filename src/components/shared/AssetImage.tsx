import Image from 'next/image';
import { Car } from 'lucide-react';
import { cn } from '@/lib/cn';

/**
 * Floating-car image. The supplied PNGs are transparent, so we present them on
 * a designed backdrop (soft gradient + glow + ground shadow), object-contain,
 * which makes the vehicle prominent instead of cropping it in a photo box.
 * Set ASSETS_READY=false to show labelled placeholders again.
 */
const ASSETS_READY = true;

interface AssetImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
  wrapperClassName?: string;
  rounded?: string;
}

export default function AssetImage({
  src,
  alt,
  width,
  height,
  priority,
  sizes,
  className,
  wrapperClassName,
  rounded = 'rounded-3xl',
}: AssetImageProps) {
  return (
    <div
      style={{ aspectRatio: `${width} / ${height}` }}
      className={cn(
        'group/asset relative w-full overflow-hidden bg-surface-alt',
        rounded,
        wrapperClassName
      )}
    >
      {ASSETS_READY ? (
        <>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className={cn(
              'object-cover transition-transform duration-500 group-hover/asset:scale-[1.03]',
              className
            )}
          />
        </>
      ) : (
        <div role="img" aria-label={alt} className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 px-4 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-green-dark shadow-soft">
              <Car className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="text-[12.5px] font-semibold text-ink-soft leading-snug">{alt}</span>
          </div>
        </div>
      )}
    </div>
  );
}
