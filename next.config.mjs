import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin(
    // Specify a custom path here
    './src/i18n.ts'
  );

// const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 允许加载图片的host
    domains: ['favicon.im', 'domainscore.ai', 'llmgpuhelper.com'],
    // 允许加载svg图片
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  optimizeFonts: true,
};
 
export default withNextIntl(nextConfig);