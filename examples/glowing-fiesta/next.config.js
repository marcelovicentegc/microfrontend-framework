/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // THIS IS AN AUTOUPDATED FILE. DO NOT EDIT BELOW THIS LINE DIRECTLY
      // [REWRITES ENTRY-POINT]
{ source: "/@mf-framework/mf-app-01@0.0.3/:path*", destination: "/mf-app-01/:path*",},
    ];
  },
};
