import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import Link from "next/link";
import Slider from "react-slick";
const settings = {
  dots: true,
  autoplay: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function About() {
  return (
    <>
      <Layout breadcrumbTitle="О нас">
        <section className="about-area inner-about-area pt-120 pb-120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
                <div className="about-img-wrap">
                  <img
                    src="/assets/img/images/about_img01.jpg"
                    alt=""
                    className="wow fadeInRight"
                    data-wow-delay=".4s"
                  />
                  <img
                    src="/assets/img/images/about_img02.jpg"
                    alt=""
                    className="wow fadeInRight"
                    data-wow-delay=".2s"
                  />
                  <div className="about-experiences-wrap">
                    <div className="experiences-item">
                      <div className="icon">
                        <img src="/assets/img/icon/about_icon01.svg" alt="" />
                      </div>
                      <div className="content">
                        <h6 className="title">У нас более 10 лет опыта</h6>
                      </div>
                    </div>
                    <div className="experiences-item">
                      <div className="icon">
                        <img src="/assets/img/icon/about_icon02.svg" alt="" />
                      </div>
                      <div className="content">
                        <h6 className="title">
                          Мы используем профессиональных и опытных людей
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="about-content">
                  <div className="section-title mb-25">
                    <span className="sub-title">О нашей компании</span>
                    <h2 className="title">
                      Мы стремимся к совершенству в кровельных работах
                    </h2>
                  </div>
                  <p>
                    Существует множество вариантов отрывков Lorem Ipsum, но
                    большинство из них были изменены в той или иной форме, с
                    добавлением юмора или случайных слов, которые выглядят
                    совсем неправдоподобно.
                  </p>
                  <div className="about-list">
                    <ul className="list-wrap">
                      <li>
                        <i className="fas fa-check" />
                        32k партнеров работали с нами.
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        Профессиональные и опытные человеческие ресурсы.
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        Предоставляем лучшие кровельные услуги
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
        {/* about-area-end */}
        {/* work-area */}
        <section className="work-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center mb-50">
                  <span className="sub-title">Рабочий план</span>
                  <h2 className="title">Рабочий процесс плана крыши</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div className="work-item">
                  <div className="work-thumb">
                    <img src="/assets/img/images/work_img01.png" alt="" />
                    <h4 className="number">01</h4>
                  </div>
                  <div className="work-content">
                    <h2 className="title">План кровли</h2>
                    <p>
                      Претерпел изменения в какой-то форме, путем инъекции юмора
                      или случайного слова
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="work-item">
                  <div className="work-thumb">
                    <img src="/assets/img/images/work_img02.png" alt="" />
                    <h4 className="number">02</h4>
                  </div>
                  <div className="work-content">
                    <h2 className="title">График оценки</h2>
                    <p>
                      Претерпел изменения в какой-то форме, путем инъекции юмора
                      или случайного слова
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="work-item">
                  <div className="work-thumb">
                    <img src="/assets/img/images/work_img03.png" alt="" />
                    <h4 className="number">03</h4>
                  </div>
                  <div className="work-content">
                    <h2 className="title">Установить крышу</h2>
                    <p>
                      Претерпел изменения в какой-то форме, путем инъекции юмора
                      или случайного слова
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="work-item">
                  <div className="work-thumb">
                    <img src="/assets/img/images/work_img04.png" alt="" />
                    <h4 className="number">04</h4>
                  </div>
                  <div className="work-content">
                    <h2 className="title">Наслаждайтесь кровлей</h2>
                    <p>
                      Претерпел изменения в какой-то форме, путем инъекции юмора
                      или случайного слова
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* work-area-end */}
        {/* history-area */}
        <section className="history-area pt-120 pb-120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="history-img-wrap">
                  <ul className="list-wrap">
                    <li>
                      <img src="/assets/img/images/history_img01.jpg" alt="" />
                    </li>
                    <li>
                      <img src="/assets/img/images/history_img02.jpg" alt="" />
                      <VideoPopup />
                    </li>
                    <li>
                      <img src="/assets/img/images/history_img03.jpg" alt="" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="history-content">
                  <div className="section-title mb-20">
                    <span className="sub-title">Наша история кровли</span>
                    <h2 className="title">
                      Кровля, когда неизвестный печатник взялся за изготовление
                      печатной книги
                    </h2>
                  </div>
                  <p>
                    Существует множество вариантов отрывков Lorem Ipsum, но
                    большинство из них подверглись изменениям в той или иной
                    форме, в виде вставленного юмора или случайного слова,
                    которые не выглядят даже немного правдоподобными.
                  </p>
                  <div className="history-list">
                    <ul className="list-wrap">
                      <li>
                        <i className="fas fa-check-circle" />
                        Управление технологиями
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Кровельные решения
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Современный работник, работающий здесь
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Быстрый ответ
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* history-area-end */}
        {/* area-bg */}
        <div
          className="area-bg-five"
          data-background="/assets/img/bg/area_bg05.jpg"
        >
          {/* team-area */}
          <section className="inner-team-area pb-90">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="section-title text-center mb-60">
                    <span className="sub-title">Профессиональная команда</span>
                    <h2 className="title">Член профессиональной команды</h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                  <div className="team-item">
                    <div className="team-thumb">
                      <Link href="/team-details">
                        <img src="/assets/img/team/team_img01.jpg" alt="" />
                      </Link>
                      <div className="team-social">
                        <ul className="list-wrap">
                          <li>
                            <Link href="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-instagram" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-content">
                      <h2 className="title">
                        <Link href="/team-details">Robert C. Simmons</Link>
                      </h2>
                      <span>Инженер по кровле</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                  <div className="team-item">
                    <div className="team-thumb">
                      <Link href="/team-details">
                        <img src="/assets/img/team/team_img02.jpg" alt="" />
                      </Link>
                      <div className="team-social">
                        <ul className="list-wrap">
                          <li>
                            <Link href="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-instagram" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-content">
                      <h2 className="title">
                        <Link href="/team-details">Christopher Jhon</Link>
                      </h2>
                      <span>Инженер по кровле</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                  <div className="team-item">
                    <div className="team-thumb">
                      <Link href="/team-details">
                        <img src="/assets/img/team/team_img03.jpg" alt="" />
                      </Link>
                      <div className="team-social">
                        <ul className="list-wrap">
                          <li>
                            <Link href="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-instagram" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-content">
                      <h2 className="title">
                        <Link href="/team-details">Karikoka Ahli</Link>
                      </h2>
                      <span>Инженер по кровле</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                  <div className="team-item">
                    <div className="team-thumb">
                      <Link href="/team-details">
                        <img src="/assets/img/team/team_img04.jpg" alt="" />
                      </Link>
                      <div className="team-social">
                        <ul className="list-wrap">
                          <li>
                            <Link href="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-instagram" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-content">
                      <h2 className="title">
                        <Link href="/team-details">Dickerson MH</Link>
                      </h2>
                      <span>Инженер по кровле</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* team-area-end */}
          {/* testimonial-area */}
          <section className="inner-testimonial-area parallax pb-120 position-relative">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6">
                  <div className="section-title text-center mb-50">
                    <span className="sub-title">Наш отзыв</span>
                    <h2 className="title">Что говорят наши клиенты?</h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="testimonial-inner">
                    <Slider {...settings} className="testimonial-active-two">
                      <div className="testimonial-item-two">
                        <div className="testimonial-avatar-two">
                          <img
                            src="/assets/img/images/h2_testi_avatar01.png"
                            alt=""
                          />
                        </div>
                        <div className="testimonial-content-two">
                          <div className="content-top">
                            <div className="icon">
                              <i className="fas fa-quote-left" />
                            </div>
                            <div className="rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          <p>
                            Существует множество вариаций пассажей Lorem как
                            Ipum, но большинство из них подверглись изменениям в
                            той или иной форме, нашими введенными hsumour
                            случайными словами, которые не выглядят даже немного
                            правдоподобными. Если вы собираетесь использовать
                            отрывок Lorem Ipsum.
                          </p>
                          <div className="content-bottom">
                            <h4 className="title">Darrell Steward</h4>
                            <span>Эксперт по кровле</span>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-item-two">
                        <div className="testimonial-avatar-two">
                          <img
                            src="/assets/img/images/h2_testi_avatar02.png"
                            alt=""
                          />
                        </div>
                        <div className="testimonial-content-two">
                          <div className="content-top">
                            <div className="icon">
                              <i className="fas fa-quote-left" />
                            </div>
                            <div className="rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          <p>
                            Существует множество вариаций пассажей Lorem как
                            Ipum, но большинство из них подверглись изменениям в
                            той или иной форме, нашими введенными hsumour
                            случайными словами, которые не выглядят даже немного
                            правдоподобными. Если вы собираетесь использовать
                            отрывок Lorem Ipsum.
                          </p>
                          <div className="content-bottom">
                            <h4 className="title">Robert C. Simmons</h4>
                            <span>Эксперт по кровле</span>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-item-two">
                        <div className="testimonial-avatar-two">
                          <img
                            src="/assets/img/images/h2_testi_avatar03.png"
                            alt=""
                          />
                        </div>
                        <div className="testimonial-content-two">
                          <div className="content-top">
                            <div className="icon">
                              <i className="fas fa-quote-left" />
                            </div>
                            <div className="rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          <p>
                            Существует множество вариаций пассажей Lorem как
                            Ipum, но большинство из них подверглись изменениям в
                            той или иной форме, нашими введенными hsumour
                            случайными словами, которые не выглядят даже немного
                            правдоподобными. Если вы собираетесь использовать
                            отрывок Lorem Ipsum.
                          </p>
                          <div className="content-bottom">
                            <h4 className="title">Karikoka Ahli</h4>
                            <span>Исполнительный менеджер</span>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
              <div className="testimonial-avatar-wrap">
                <ul className="list-wrap">
                  <li>
                    <img
                      src="/assets/img/images/h4_testi_avatar01.png"
                      className="layer"
                      data-depth="0.1"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/img/images/h4_testi_avatar02.png"
                      className="layer"
                      data-depth="0.2"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/img/images/h4_testi_avatar03.png"
                      className="layer"
                      data-depth="0.05"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/img/images/h4_testi_avatar03.png"
                      className="layer"
                      data-depth="0.2"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/img/images/h4_testi_avatar02.png"
                      className="layer"
                      data-depth="0.05"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/img/images/h4_testi_avatar01.png"
                      className="layer"
                      data-depth="0.1"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* testimonial-area-end */}
        </div>
        {/* area-bg-end */}
        {/* brand-area */}
        <Brand3 />
      </Layout>
    </>
  );
}
