import Head from "next/head";

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Head>
        <title>{headTitle ? headTitle : "НИКРОТЕХ | Кровельные услуги"}</title>
        <meta
          name="description"
          content="НИКРОТЕХ — профессиональный ремонт, обслуживание и монтаж крыш по доступным ценам. Гарантия качества, бесплатная консультация, выезд мастера по Москве и области."
        />
        <meta
          property="og:description"
          content="НИКРОТЕХ — профессиональный ремонт, обслуживание и монтаж крыш по доступным ценам. Гарантия качества, бесплатная консультация, выезд мастера по Москве и области."
        />
        <meta property="og:site_name" content="НИКРОТЕХ" />
        <meta property="og:url" content="https://www.nikrotex.ru/" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Head>
    </>
  );
};

export default PageHead;
