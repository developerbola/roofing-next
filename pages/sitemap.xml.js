// pages/sitemap.xml.js
function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://nikrotex.ru/</loc>
     </url>
     <url>
       <loc>https://nikrotex.ru/about</loc>
     </url>
     <url>
       <loc>https://nikrotex.ru/services</loc>
     </url>
     <url>
       <loc>https://nikrotex.ru/contact</loc>
     </url>
     <url>
       <loc>https://nikrotex.ru/services-details</loc>
     </url>
     ${posts
       .map(({ slug }) => {
         return `
       <url>
           <loc>https://nikrotex.ru/services/${slug}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // Fetch your dynamic content here
  const services = []; // Replace with your actual data fetching

  // Generate the XML sitemap
  const sitemap = generateSiteMap(services);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
