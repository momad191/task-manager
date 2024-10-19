 import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = { 
  output:'standalone',
 images: {
   remotePatterns: [
     {
       protocol: "https",
       hostname: "lh3.googleusercontent.com",
       // port: '',
       // pathname: '/account123/**',
     },
     {
       protocol: "https",
       hostname: "avatars.githubusercontent.com",
       // port: '',
       // pathname: '/account123/**',
     },
   ],
 },

};
 
export default withNextIntl(nextConfig);
