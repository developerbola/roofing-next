import Link from "next/link";
import { useEffect, useState } from "react";
import api from "../api/api";

export default function Services1() {
  const [services, setServices] = useState([]);
  const [activeKey, setActiveKey] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.servicesSection();
      setServices(data || []);
    };
    getData();
  }, []);

  const handleToggle = (key) => {
    setActiveKey((prevKey) => (prevKey === key ? null : key));
  };

  const iconPaths = [
    "services_icon01.svg",
    "services_icon02.svg",
    "services_icon03.svg",
    "services_icon04.svg",
    "services_icon05.svg",
    "services_icon06.svg",
  ];

  return (
    <section className="services-area" id="services">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
              <span className="sub-title tg-element-title">Что мы делаем</span>
              <h2 className="title tg-element-title">
                Наши области обслуживания
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div key={service.uid} className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="services-item wow fadeInUp"
                data-wow-delay={`.${2 + index * 2}s`}
                style={{
                  backgroundImage: `url(${service.img})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                onMouseEnter={() => handleToggle(index)}
                onMouseLeave={() => handleToggle(index)}
              >
                {/* Icon */}
                <div
                  className="services-icon"
                  style={{ display: activeKey === index ? "none" : "flex" }}
                >
                  <img src={`/assets/img/icon/${iconPaths[index]}`} alt="" />
                </div>

                {/* Title/Number */}
                <div className="services-content">
                  <h2
                    className="title"
                    style={{ display: activeKey === index ? "none" : "block" }}
                  >
                    <Link href={`/services/${service.uid}`}>
                      {service.title}
                    </Link>
                  </h2>
                  <h2 className="number">
                    {String(index + 1).padStart(2, "0")}
                  </h2>
                </div>

                {/* Overlay */}
                <div
                  className="services-overlay-content"
                  style={{ display: activeKey === index ? "block" : "none" }}
                >
                  <h2 className="title">
                    <Link href={`/services/${service.uid}`}>
                      {service.title}
                    </Link>
                  </h2>
                  <p
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {service.desc}
                  </p>

                  <Link href={`/services/${service.uid}`} className="read-more">
                    Читать далее <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
