import Link from "next/link";
import { useEffect, useState } from "react";
import api from "../api/api";

export default function Features1() {
  const [res, setRes] = useState();

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.infoCards();
      setRes(data[0]);
    };

    getData();
  });

  return (
    <>
      <section className="features-area pt-120 pb-90" id="infocards">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="features-item wow fadeInUp" data-wow-delay=".2s">
                <div className="features-item-inner">
                  <div className="features-content">
                    <h4 className="title">{res?.card1?.title}</h4>
                    <p>{res?.card1?.desc}</p>
                    <Link href="/services-details" className="link-btn">
                      <i className="fas fa-arrow-right" /> Читать далее
                    </Link>
                  </div>
                  <div className="features-icon">
                    <img src="/assets/img/icon/features_icon01.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="features-item wow fadeInUp" data-wow-delay=".4s">
                <div className="features-item-inner">
                  <div className="features-content">
                    <h4 className="title">{res?.card2?.title}</h4>
                    <p>{res?.card2?.desc}</p>
                    <Link href="/services-details" className="link-btn">
                      <i className="fas fa-arrow-right" /> Читать далее
                    </Link>
                  </div>
                  <div className="features-icon">
                    <img src="/assets/img/icon/features_icon02.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="features-item wow fadeInUp" data-wow-delay=".6s">
                <div className="features-item-inner">
                  <div className="features-content">
                    <h4 className="title">{res?.card3?.title}</h4>
                    <p>{res?.card3?.desc}</p>
                    <Link href="/services-details" className="link-btn">
                      <i className="fas fa-arrow-right" /> Читать далее
                    </Link>
                  </div>
                  <div className="features-icon">
                    <img src="/assets/img/icon/features_icon03.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
