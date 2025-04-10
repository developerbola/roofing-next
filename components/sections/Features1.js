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
  }, []);

  const cards = [
    {
      title: res?.card1?.title,
      desc: res?.card1?.desc,
      icon: "/assets/img/icon/features_icon01.svg",
      delay: ".2s",
    },
    {
      title: res?.card2?.title,
      desc: res?.card2?.desc,
      icon: "/assets/img/icon/features_icon02.svg",
      delay: ".4s",
    },
    {
      title: res?.card3?.title,
      desc: res?.card3?.desc,
      icon: "/assets/img/icon/features_icon03.svg",
      delay: ".6s",
      limitLines: true, // flag to apply line clamp
    },
  ];

  return (
    <section className="features-area pt-120 pb-90" id="infocards">
      <div className="container">
        <div className="row justify-content-center">
          {cards.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div
                className="features-item wow fadeInUp"
                data-wow-delay={card.delay}
              >
                <div className="features-item-inner">
                  <div className="features-content">
                    <h4 className="title">{card.title}</h4>
                    <p
                      style={
                        card.limitLines
                          ? {
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "-webkit-box",
                              WebkitLineClamp: 4,
                              WebkitBoxOrient: "vertical",
                            }
                          : {}
                      }
                    >
                      {card.desc}
                    </p>
                    <Link href="/services-details" className="link-btn">
                      <i className="fas fa-arrow-right" /> Читать далее
                    </Link>
                  </div>
                  <div className="features-icon">
                    <img src={card.icon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
