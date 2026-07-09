'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import {
  trackConfirmationServiceCtaClick,
  trackGuideCtaClick,
  trackProductTeaserClick,
  trackTattooKitSignupClick,
} from '@/lib/analytics';

type TrackingConfig =
  | {
      event: 'guide_cta';
      guidePath: string;
      ctaLabel: string;
      ctaHref: string;
      ctaLocation: string;
    }
  | {
      event: 'tattoo_kit_signup';
      sourcePath: string;
      ctaLabel: string;
      ctaHref: string;
    }
  | {
      event: 'confirmation_service_cta';
      sourcePath: string;
      ctaLabel: string;
      ctaHref: string;
      ctaLocation: string;
    }
  | {
      event: 'product_teaser';
      sourcePath: string;
      productKey: string;
      ctaLabel: string;
      ctaHref: string;
    };

interface TrackedAnalyticsLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  rel?: string;
  tracking: TrackingConfig;
}

function track(config: TrackingConfig): void {
  if (config.event === 'guide_cta') {
    trackGuideCtaClick({
      guide_path: config.guidePath,
      cta_label: config.ctaLabel,
      cta_href: config.ctaHref,
      cta_location: config.ctaLocation,
    });
  } else if (config.event === 'tattoo_kit_signup') {
    trackTattooKitSignupClick({
      source_path: config.sourcePath,
      cta_label: config.ctaLabel,
      cta_href: config.ctaHref,
    });
  } else if (config.event === 'confirmation_service_cta') {
    trackConfirmationServiceCtaClick({
      source_path: config.sourcePath,
      cta_label: config.ctaLabel,
      cta_href: config.ctaHref,
      cta_location: config.ctaLocation,
    });
  } else {
    trackProductTeaserClick({
      source_path: config.sourcePath,
      product_key: config.productKey,
      cta_label: config.ctaLabel,
      cta_href: config.ctaHref,
    });
  }
}

export default function TrackedAnalyticsLink({
  href,
  children,
  className,
  external = false,
  rel,
  tracking,
}: TrackedAnalyticsLinkProps) {
  const onClick = () => track(tracking);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel={rel ?? 'noreferrer'}
        className={className}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
