import Head from "next/head";

const PageHead = () => {
  const title = "НИКРОТЕХ | Кровельные услуги";
  const description =
    "НИКРОТЕХ — профессиональный ремонт, обслуживание и монтаж крыш по доступным ценам. Гарантия качества, бесплатная консультация, выезд мастера по Москве и области.";
  const url = "https://www.nikrotex.ru/";
  const image = "/assets/img/favicon.png";

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="НИКРОТЕХ" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta name="robots" content="index, follow" />
      <meta
        name="google-site-verification"
        content="zUFkPXU85CN8qUIJRUKxebjFvwULj40h0tQ2ATeW2vM"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Language" content="ru" />
      <link rel="canonical" href={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "НИКРОТЕХ",
            url: url,
          }),
        }}
      />
    </Head>
  );
};

export default PageHead;
