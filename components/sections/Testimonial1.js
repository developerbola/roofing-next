import Slider from "react-slick";
import api from "../api/api";
import { useEffect, useState } from "react";
const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: false,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Testimonial1() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.testimonialsSection();
      setRes(data);
    };

    getData();
  });

  return (
    <>
      <section className="testimonial-area pt-115 pb-120" id="testimonails">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
              <div className="testimonial-img">
                <img src={res[3]?.img} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-content">
                <div className="section-title mb-45 tg-heading-subheading animation-style3">
                  <span className="sub-title tg-element-title">
                    Наши Отзывы
                  </span>
                  <h2 className="title tg-element-title">
                    Что говорят наши уважаемые довольные клиенты
                  </h2>
                </div>
                <Slider {...settings} className="testimonial-active">
                  <div className="testimonial-item">
                    <div className="testimonial-icon">
                      <i className="fas fa-quote-left" />
                    </div>
                    <div className="testimonial-content">
                      <p>{res[0]?.comment}</p>
                    </div>
                    <div className="testimonial-avatar">
                      <div className="avatar-thumb">
                        <img src={res[0]?.img} alt="" />
                      </div>
                      <div className="avatar-content">
                        <h6 className="title">{res[0]?.author}</h6>
                        <p>{res[0]?.authorJob}</p>
                      </div>
                    </div>
                  </div>
                  {/* nd */}
                  <div className="testimonial-item">
                    <div className="testimonial-icon">
                      <i className="fas fa-quote-left" />
                    </div>
                    <div className="testimonial-content">
                      <p>{res[1]?.comment}</p>
                    </div>
                    <div className="testimonial-avatar">
                      <div className="avatar-thumb">
                        <img src={res[1]?.img} alt="" />
                      </div>
                      <div className="avatar-content">
                        <h6 className="title">{res[1]?.author}</h6>
                        <p>{res[1]?.authorJob}</p>
                      </div>
                    </div>
                  </div>
                  {/* rd */}
                  <div className="testimonial-item">
                    <div className="testimonial-icon">
                      <i className="fas fa-quote-left" />
                    </div>
                    <div className="testimonial-content">
                      <p>{res[2]?.comment}</p>
                    </div>
                    <div className="testimonial-avatar">
                      <div className="avatar-thumb">
                        <img src={res[2]?.img} alt="" />
                      </div>
                      <div className="avatar-content">
                        <h6 className="title">{res[2]?.author}</h6>
                        <p>{res[2]?.authorJob}</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
