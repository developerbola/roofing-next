import Preloader from "@/components/elements/Preloader";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/animate.min.css";
import "../public/assets/css/magnific-popup.css";
import "../public/assets/css/fontawesome-all.min.css";
import "../public/assets/css/odometer.css";
import "../public/assets/css/tg-cursor.css";
import "../public/assets/css/default.css";
import "../public/assets/css/jarallax.css";
import "../public/assets/css/style.css";
import "../public/assets/css/responsive.css";
import "@/public/assets/css/preloader.css";
import { Data } from "@/context/context";
import api from "@/components/api/api";

function MyApp({ Component, pageProps }) {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.heroText();
      if (data) {
        setLoad(false);
      }
    };

    getData();
  });

  if (process.env.NODE_ENV === "production") {
    console.log = () => {};
    console.warn = () => {};
    console.error = () => {};
  }
  return (
    <>
      <Data.Provider value={setLoad}>
        {!load ? <Component {...pageProps} /> : <Preloader />}
      </Data.Provider>
    </>
  );
}

export default MyApp;
