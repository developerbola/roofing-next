import Link from "next/link";
import { useEffect, useState } from "react";
import api from "../api/api";

export default function About1() {
  const [res, setRes] = useState();

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.aboutSection();
      setRes(data[0]);
    };

    getData();
  });

  return (
    <>
      <section className="about-area pb-120" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
              <div className="about-img-wrap">
                <img
                  src={res?.img1}
                  alt=""
                  className="wow fadeInRight"
                  data-wow-delay=".4s"
                  width={322}
                  height={480}
                />
                <img
                  src={res?.img2}
                  alt=""
                  className="wow fadeInRight"
                  data-wow-delay=".2s"
                  width={223}
                  height={440}
                />
                <div className="about-experiences-wrap">
                  <div className="experiences-item">
                    <div className="icon">
                      <img src="/assets/img/icon/about_icon01.svg" alt="" />
                    </div>
                    <div className="content">
                      <h6 className="title">{res?.someAbout[0]}</h6>
                    </div>
                  </div>
                  <div className="experiences-item">
                    <div className="icon">
                      <img src="/assets/img/icon/about_icon02.svg" alt="" />
                    </div>
                    <div className="content">
                      <h6 className="title">{res?.someAbout[1]}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="about-content">
                <div className="section-title mb-25 tg-heading-subheading animation-style3">
                  <span className="sub-title tg-element-title">
                    О нашей компании
                  </span>
                  <h2 className="title tg-element-title">{res?.title}</h2>
                </div>
                <p>{res?.desc}</p>
                <div className="about-list">
                  <ul className="list-wrap">
                    <li>
                      <i className="fas fa-check" />
                      {res?.skills[0]}
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      {res?.skills[1]}
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      {res?.skills[2]}
                    </li>
                  </ul>
                </div>
                <Link href="/about" className="btn">
                  Узнать больше
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
