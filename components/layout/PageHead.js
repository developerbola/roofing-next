import Head from "next/head";

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Head>
        <title>{headTitle ? headTitle : "Carlson | Roofing Service"}</title>
      </Head>
    </>
  );
};

export default PageHead;
