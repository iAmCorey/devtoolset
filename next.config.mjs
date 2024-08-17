import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin(
    // Specify a custom path here
    './src/i18n.ts'
  );

// const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {};
 
export default withNextIntl(nextConfig);