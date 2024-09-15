"use client";

import Script from 'next/script'

const googleAdsenseId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID!;

const GoogleAdsenseScript = () => {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${googleAdsenseId}`}
      crossOrigin="anonymous"
    />
  )
}

export default GoogleAdsenseScript