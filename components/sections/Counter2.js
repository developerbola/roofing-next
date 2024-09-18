import { useEffect, useState } from "react";
import CountUp from "../elements/CountUp";
import api from "../api/api";

export default function Counter2() {
  const [inViewport, setInViewport] = useState(false);

  const handleScroll = () => {
    const elements = document.getElementsByClassName("count");
    if (elements.length > 0) {
      const element = elements[0];
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (isInViewport && !inViewport) {
        setInViewport(true);
      }
    }
  };

  const [res, setRes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.homeCounter();
      setRes(data);
    };

    getData();
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="counter-area-two">
        <div className="container">
          <div className="counter-inner wow fadeInUp" data-wow-delay=".2s">
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="counter-item-two">
                  <div className="counter-icon">
                    <img src="/assets/img/icon/counter_icon01.svg" alt="" />
                  </div>
                  <div className="counter-content">
                    {inViewport && <CountUp end={res[0].number} duration={10} />}
                    <p>{res[0]?.name}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-item-two">
                  <div className="counter-icon">
                    <img src="/assets/img/icon/counter_icon02.svg" alt="" />
                  </div>
                  <div className="counter-content">
                    <span className="count" />
                    {inViewport && <CountUp end={res[1].number} duration={10} />}
                    <p>{res[1]?.name}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-item-two">
                  <div className="counter-icon">
                    <img src="/assets/img/icon/counter_icon03.svg" alt="" />
                  </div>
                  <div className="counter-content">
                    <span className="count odometer" data-count={450} />
                    {inViewport && <CountUp end={res[2].number} duration={10} />}
                    <p>{res[2]?.name}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-item-two">
                  <div className="counter-icon">
                    <img src="/assets/img/icon/counter_icon04.svg" alt="" />
                  </div>
                  <div className="counter-content">
                    <span className="count odometer" data-count={38} />
                    {inViewport && <CountUp end={res[3].number} duration={10} />}
                    <p>{res[3]?.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
