import Slider from "react-slick";
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
  return (
    <>
      <section className="testimonial-area pt-115 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
              <div className="testimonial-img">
                <img src="/assets/img/images/testimonial_img.jpg" alt="" />
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
                      <p>
                        Существует множество вариантов отрывков Lorem Ipsum, но
                        большинство из них претерпели изменения, с добавлением
                        юмора или случайных слов, которые выглядят совершенно
                        неправдоподобно.
                      </p>
                    </div>
                    <div className="testimonial-avatar">
                      <div className="avatar-thumb">
                        <img
                          src="/assets/img/images/testi_avatar01.png"
                          alt=""
                        />
                      </div>
                      <div className="avatar-content">
                        <h6 className="title">Darrell Steward</h6>
                        <p>Эксперт по кровле</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <div className="testimonial-icon">
                      <i className="fas fa-quote-left" />
                    </div>
                    <div className="testimonial-content">
                      <p>
                        Существует множество вариантов отрывков Lorem Ipsum, но
                        большинство из них претерпели изменения, с добавлением
                        юмора или случайных слов, которые выглядят совершенно
                        неправдоподобно.
                      </p>
                    </div>
                    <div className="testimonial-avatar">
                      <div className="avatar-thumb">
                        <img
                          src="/assets/img/images/testi_avatar01.png"
                          alt=""
                        />
                      </div>
                      <div className="avatar-content">
                        <h6 className="title">Darrell Steward</h6>
                        <p>Эксперт по кровле</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <div className="testimonial-icon">
                      <i className="fas fa-quote-left" />
                    </div>
                    <div className="testimonial-content">
                      <p>
                        Существует множество вариантов отрывков Lorem Ipsum, но
                        большинство из них претерпели изменения, с добавлением
                        юмора или случайных слов, которые выглядят совершенно
                        неправдоподобно.
                      </p>
                    </div>
                    <div className="testimonial-avatar">
                      <div className="avatar-thumb">
                        <img
                          src="/assets/img/images/testi_avatar01.png"
                          alt=""
                        />
                      </div>
                      <div className="avatar-content">
                        <h6 className="title">Darrell Steward</h6>
                        <p>Эксперт по кровле</p>
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
