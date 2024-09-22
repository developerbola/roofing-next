import Link from "next/link";
import { useEffect, useState } from "react";
import Brand1 from "./Brand1";
import api from "../api/api";

export default function Banner1() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });
  const [res, setRes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.heroText();
      setRes(data[0]);
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
      <section className="banner-area">
        <div
          className="banner-shape"
          data-background="/assets/img/banner/banner_shape.jpg"
        />
        <div
          className="banner-bg"
          style={{ backgroundImage: `url(${res?.img})` }}
        >
          <div className="banner-content">
            <h2 className="title wow fadeInDown" data-wow-delay=".2s">
              {res?.title}
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".2s">
              {res?.desc}
            </p>
            <Link
              href="/project"
              className="btn wow fadeInUp"
              data-wow-delay=".4s"
            >
              Узнать больше
            </Link>
          </div>
          <div className="banner-tooltip-wrap">
            <div
              className={
                isActive.key == 1
                  ? "tooltip-item top active"
                  : "tooltip-item top"
              }
              onClick={() => handleToggle(1)}
            >
              <div className="tooltip-btn pulse">
                <i className="fas fa-plus" />
              </div>
              <div className="tooltip-content">
                <h2 className="title">{res?.item1?.title}</h2>
                <p>{res?.item1?.desc}</p>
              </div>
            </div>
            <div
              className={
                isActive.key == 2 ? "tooltip-item active" : "tooltip-item"
              }
              onClick={() => handleToggle(2)}
            >
              <div className="tooltip-btn pulse">
                <i className="fas fa-plus" />
              </div>
              <div className="tooltip-content">
                <h2 className="title">{res?.item2?.title}</h2>
                <p>{res?.item2?.desc}</p>
              </div>
            </div>
            <div
              className={
                isActive.key == 3 ? "tooltip-item active" : "tooltip-item"
              }
              onClick={() => handleToggle(3)}
            >
              <div className="tooltip-btn pulse">
                <i className="fas fa-plus" />
              </div>
              <div className="tooltip-content">
                <h2 className="title">{res?.item3?.title}</h2>
                <p>{res?.item3?.desc}</p>
              </div>
            </div>
          </div>
        </div>
        {/* brand-area */}
        <Brand1 />
        {/* brand-area-end */}
      </section>
    </>
  );
}
