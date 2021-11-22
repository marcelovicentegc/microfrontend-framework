/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // THIS IS AN AUTOUPDATED FILE. DO NOT EDIT BELOW THIS LINE DIRECTLY
      // [REWRITES ENTRY-POINT]
{ source: "/nextjs-template-app/:path*",
 destination: "/mf-app-nextjs-template@0.0.1/:path*", },
    ];
  },
};
