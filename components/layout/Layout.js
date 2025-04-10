import { useEffect } from "react";
import BackToTop from "../elements/BackToTop";
import WhatsappBtn from "../elements/WhatsappBtn";
import DataBg from "../elements/DataBg";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import Header from "./Header";
import PageHead from "./PageHead";
import Script from "next/script";

export default function Layout({
  headerCls,
  headerTop,
  headTitle,
  breadcrumbTitle,
  children,
}) {
  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();
  }, []);
  return (
    <>
      <PageHead headTitle={headTitle} />
      <Script
        id="yandex-metrica"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(100708227, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true,
              ecommerce:"dataLayer"
          });`,
        }}
      />

      {/* Noscript Fallback */}
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/100708227"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
      <DataBg />
      <Header headerCls={headerCls} headerTop={headerTop} />
      <main>
        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
        {children}
      </main>
      <Footer />
      <WhatsappBtn />
      <BackToTop />
    </>
  );
}
