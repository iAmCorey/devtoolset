"use client";

import Script from "next/script";

const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!;

export function GoogleAnalyticsScript() {
  return (
    <Script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
      onLoad={() => {
        if (typeof window === "undefined") {
          return;
        }

        (window as any).dataLayer = (window as any).dataLayer || [];

        function gtag() {
          (window as any).dataLayer.push(arguments);
        }
        // @ts-expect-error gtag is only improted in the browser
        gtag("js", new Date());
        // @ts-expect-error gtag is only improted in the browser
        gtag("config", googleAnalyticsId);
      }}
    />
  );
}

export function useGoogleAnalytics() {
  const trackEvent = (event: string, data?: Record<string, unknown>) => {
    if (typeof window === "undefined" || !(window as any).gta) {
      return;
    }

    (window as any).gta("event", event, data);
  };

  return {
    trackEvent,
  };
}
