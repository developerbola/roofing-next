import Head from "next/head";

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Head>
        <title>{headTitle ? headTitle : "Carlson | Roofing Service"}</title>
        <meta
          name="description"
          content="Top quality, budget friendly roof repair & maintenance for every home!"
        />
      </Head>
    </>
  );
};

export default PageHead;
