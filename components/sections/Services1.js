import Link from "next/link";
import { useEffect, useState } from "react";
import api from "../api/api";

export default function Services1() {
  const [res, setRes] = useState([]);
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.servicesSection();
      setRes(data);
    };
    
    getData();
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <section className="services-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                <span className="sub-title tg-element-title">
                  Что мы делаем
                </span>
                <h2 className="title tg-element-title">
                  Наши области обслуживания
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="services-item wow fadeInUp"
                data-wow-delay=".2s"
                style={{
                  backgroundImage: `url(${res[0]?.img})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                onMouseEnter={() => handleToggle(1)}
                onMouseLeave={() => handleToggle(1)}
              >
                <div
                  className="services-icon"
                  style={{ display: `${isActive.key == 1 ? "none" : "flex"}` }}
                >
                  <img src="/assets/img/icon/services_icon01.svg" alt="" />
                </div>
                <div className="services-content">
                  <h2
                    className="title"
                    style={{
                      display: `${isActive.key == 1 ? "none" : "block"}`,
                    }}
                  >
                    <Link href="/services-details">{res[0]?.title}</Link>
                  </h2>
                  <h2 className="number">01</h2>
                </div>

                <div
                  className="services-overlay-content"
                  style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}
                >
                  <h2 className="title">
                    <Link href="/services-details">{res[0]?.title}</Link>
                  </h2>
                  <p>{res[0]?.desc}</p>
                  <Link href="/services-details" className="read-more">
                    Читать далее <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="services-item wow fadeInUp"
                data-wow-delay=".4s"
                style={{
                  backgroundImage: `url(${res[1]?.img})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                onMouseEnter={() => handleToggle(2)}
                onMouseLeave={() => handleToggle(2)}
              >
                <div
                  className="services-icon"
                  style={{ display: `${isActive.key == 2 ? "none" : "flex"}` }}
                >
                  <img src="/assets/img/icon/services_icon02.svg" alt="" />
                </div>
                <div className="services-content">
                  <h2
                    className="title"
                    style={{
                      display: `${isActive.key == 2 ? "none" : "block"}`,
                    }}
                  >
                    <Link href="/services-details">{res[1]?.title}</Link>
                  </h2>
                  <h2 className="number">02</h2>
                </div>
                <div
                  className="services-overlay-content"
                  style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}
                >
                  <h2 className="title">
                    <Link href="/services-details">{res[1]?.title}</Link>
                  </h2>
                  <p>{res[1]?.desc}</p>
                  <Link href="/services-details" className="read-more">
                    Читать далее <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="services-item wow fadeInUp"
                data-wow-delay=".6s"
                style={{
                  backgroundImage: `url(${res[2]?.img})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                onMouseEnter={() => handleToggle(3)}
                onMouseLeave={() => handleToggle(3)}
              >
                <div
                  className="services-icon"
                  style={{ display: `${isActive.key == 3 ? "none" : "flex"}` }}
                >
                  <img src="/assets/img/icon/services_icon03.svg" alt="" />
                </div>
                <div className="services-content">
                  <h2
                    className="title"
                    style={{
                      display: `${isActive.key == 3 ? "none" : "block"}`,
                    }}
                  >
                    <Link href="/services-details">{res[2]?.title}</Link>
                  </h2>
                  <h2 className="number">03</h2>
                </div>
                <div
                  className="services-overlay-content"
                  style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}
                >
                  <h2 className="title">
                    <Link href="/services-details">{res[2]?.title}</Link>
                  </h2>
                  <p>{res[2]?.desc}</p>
                  <Link href="/services-details" className="read-more">
                    Читать далее <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="services-item wow fadeInUp"
                data-wow-delay=".3s"
                style={{
                  backgroundImage: `url(${res[3]?.img})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                onMouseEnter={() => handleToggle(4)}
                onMouseLeave={() => handleToggle(4)}
              >
                <div
                  className="services-icon"
                  style={{ display: `${isActive.key == 4 ? "none" : "flex"}` }}
                >
                  <img src="/assets/img/icon/services_icon04.svg" alt="" />
                </div>
                <div className="services-content">
                  <h2
                    className="title"
                    style={{
                      display: `${isActive.key == 4 ? "none" : "block"}`,
                    }}
                  >
                    <Link href="/services-details">{res[3]?.title}</Link>
                  </h2>
                  <h2 className="number">04</h2>
                </div>
                <div
                  className="services-overlay-content"
                  style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}
                >
                  <h2 className="title">
                    <Link href="/services-details">{res[3]?.title}</Link>
                  </h2>
                  <p>
                    Существует множество вариантов отрывков Lorem Ipsum, но
                    большинство из них были изменены в той или иной форме
                  </p>
                  <Link href="/services-details" className="read-more">
                    Читать далее <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="services-item wow fadeInUp"
                data-wow-delay=".6s"
                style={{
                  backgroundImage: `url(${res[4]?.img})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                onMouseEnter={() => handleToggle(5)}
                onMouseLeave={() => handleToggle(5)}
              >
                <div
                  className="services-icon"
                  style={{ display: `${isActive.key == 5 ? "none" : "flex"}` }}
                >
                  <img src="/assets/img/icon/services_icon05.svg" alt="" />
                </div>
                <div className="services-content">
                  <h2
                    className="title"
                    style={{
                      display: `${isActive.key == 5 ? "none" : "block"}`,
                    }}
                  >
                    <Link href="/services-details">{res[4]?.title}</Link>
                  </h2>
                  <h2 className="number">05</h2>
                </div>
                <div
                  className="services-overlay-content"
                  style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}
                >
                  <h2 className="title">
                    <Link href="/services-details">{res[4]?.title}</Link>
                  </h2>
                  <p>{res[5]?.desc}</p>
                  <Link href="/services-details" className="read-more">
                    Читать далее <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="services-item wow fadeInUp"
                data-wow-delay=".9s"
                style={{
                  backgroundImage: `url(${res[5]?.img})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                onMouseEnter={() => handleToggle(6)}
                onMouseLeave={() => handleToggle(6)}
              >
                <div
                  className="services-icon"
                  style={{ display: `${isActive.key == 6 ? "none" : "flex"}` }}
                >
                  <img src="/assets/img/icon/services_icon06.svg" alt="" />
                </div>
                <div className="services-content">
                  <h2
                    className="title"
                    style={{
                      display: `${isActive.key == 6 ? "none" : "block"}`,
                    }}
                  >
                    <Link href="/services-details">{res[5]?.title}</Link>
                  </h2>
                  <h2 className="number">06</h2>
                </div>
                <div
                  className="services-overlay-content"
                  style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}
                >
                  <h2 className="title">
                    <Link href="/services-details">{res[5]?.title}</Link>
                  </h2>
                  <p>{res[5]?.desc}</p>
                  <Link href="/services-details" className="read-more">
                    Читать далее <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
