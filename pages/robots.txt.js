// pages/robots.txt.js
function generateRobotsTxt() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://nikrotex.ru";

  return `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /dashboard/
Disallow: /profile/

# Block development/staging environments
${process.env.NODE_ENV !== "production" ? "Disallow: /" : ""}

# Crawl delay (optional)
Crawl-delay: 1
`;
}

function RobotsTxt() {
  // getServerSideProps will handle the response
}

export async function getServerSideProps({ res }) {
  const robotsTxt = generateRobotsTxt();

  res.setHeader("Content-Type", "text/plain");
  res.write(robotsTxt);
  res.end();

  return {
    props: {},
  };
}

export default RobotsTxt;
