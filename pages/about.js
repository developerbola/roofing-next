import api from "@/components/api/api";
import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import { useEffect, useState } from "react";
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
  const [about, setAbout] = useState();
  const [workingPlan, setWorkingPlan] = useState([]);
  const [history, setHistory] = useState([]);
  const [team, setTeam] = useState([]);
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    const getAbout = async () => {
      const { data } = await api.aboutSection();
      setAbout(data[0]);
    };
    const getWorkingPlan = async () => {
      const { data } = await api.aboutPlans();
      setWorkingPlan(data);
    };
    const getHistory = async () => {
      const { data } = await api.roofingHistory();
      setHistory(data[0]);
    };
    const getTeam = async () => {
      const { data } = await api.team();
      setTeam(data);
    };
    const getTestimonial = async () => {
      const { data } = await api.testimonialsSection();
      setTestimonial(data);
    };

    getAbout();
    getWorkingPlan();
    getHistory();
    getTeam();
    getTestimonial();
  }, []);
  return (
    <>
      <Layout breadcrumbTitle="О нас" >
        <section className="about-area inner-about-area pt-120 pb-120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
                <div className="about-img-wrap">
                  <img
                    src={about?.img1}
                    alt=""
                    className="wow fadeInRight"
                    data-wow-delay=".4s"
                    width={322}
                    height={480}
                  />
                  <img
                    src={about?.img2}
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
                        <h6 className="title">{about?.someAbout[0]}</h6>
                      </div>
                    </div>
                    <div className="experiences-item">
                      <div className="icon">
                        <img src="/assets/img/icon/about_icon02.svg" alt="" />
                      </div>
                      <div className="content">
                        <h6 className="title">{about?.someAbout[1]}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="about-content">
                  <div className="section-title mb-25">
                    <span className="sub-title">О нашей компании</span>
                    <h2 className="title">{about?.title}</h2>
                  </div>
                  <p>{about?.desc}</p>
                  <div className="about-list">
                    <ul className="list-wrap">
                      <li>
                        <i className="fas fa-check" />
                        {about?.skills[0]}
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        {about?.skills[1]}
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        {about?.skills[2]}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about-area-end */}
        {/* work-area */}
        <section className="work-area" id="workingPlan">
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
                    <img
                      src={workingPlan[0]?.img}
                      alt=""
                      height={"130px"}
                      className="workingPlanImg"
                    />
                    <h4 className="number">01</h4>
                  </div>
                  <div className="work-content">
                    <h2 className="title">{workingPlan[0]?.title}</h2>
                    <p>{workingPlan[0]?.desc}</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="work-item">
                  <div className="work-thumb">
                    <img
                      src={workingPlan[1]?.img}
                      alt=""
                      height={"130px"}
                      className="workingPlanImg"
                    />
                    <h4 className="number">02</h4>
                  </div>
                  <div className="work-content">
                    <h2 className="title">{workingPlan[1]?.title}</h2>
                    <p>{workingPlan[1]?.desc}</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="work-item">
                  <div className="work-thumb">
                    <img
                      src={workingPlan[2]?.img}
                      alt=""
                      height={"130px"}
                      className="workingPlanImg"
                    />
                    <h4 className="number">03</h4>
                  </div>
                  <div className="work-content">
                    <h2 className="title">{workingPlan[2]?.title}</h2>
                    <p>{workingPlan[2]?.desc}</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="work-item">
                  <div className="work-thumb">
                    <img
                      src={workingPlan[3]?.img}
                      alt=""
                      height={"130px"}
                      className="workingPlanImg"
                    />
                    <h4 className="number">04</h4>
                  </div>
                  <div className="work-content">
                    <h2 className="title">{workingPlan[3]?.title}</h2>
                    <p>{workingPlan[3]?.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* work-area-end */}
        {/* history-area */}
        <section className="history-area pt-120 pb-120" id="history">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="history-img-wrap">
                  <ul className="list-wrap">
                    <li>
                      <img
                        src={history?.assets?.img1}
                        alt=""
                        height={440}
                        width={380}
                      />
                    </li>
                    <li>
                      <img
                        src={history?.assets?.img2}
                        alt=""
                        height={218}
                        width={217}
                      />
                      <VideoPopup />
                    </li>
                    <li>
                      <img
                        src="https://i.ibb.co/1XDnPCg/history-img03.jpg"
                        alt=""
                        height={250}
                        width={342}
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="history-content">
                  <div className="section-title mb-20">
                    <span className="sub-title">Наша история кровли</span>
                    <h2 className="title">{history?.title}</h2>
                  </div>
                  <p>{history?.desc}</p>
                  <div className="history-list">
                    <ul className="list-wrap">
                      {history?.skills?.map((skill) => {
                        return (
                          <li key={skill}>
                            <i className="fas fa-check-circle" />
                            {skill}
                          </li>
                        );
                      })}
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
          <section className="inner-team-area pb-90" id="team">
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
                      <img src={team[0]?.img} alt="" />
                    </div>
                    <div className="team-content">
                      <h2 className="title">{team[0]?.name}</h2>
                      <span>{team[0]?.job}</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                  <div className="team-item">
                    <div className="team-thumb">
                      <img src={team[1]?.img} alt="" />
                    </div>
                    <div className="team-content">
                      <h2 className="title">{team[1]?.name}</h2>
                      <span>{team[1]?.job}</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                  <div className="team-item">
                    <div className="team-thumb">
                      <img src={team[2]?.img} alt="" />
                    </div>
                    <div className="team-content">
                      <h2 className="title">{team[2]?.name}</h2>
                      <span>{team[2]?.job}</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                  <div className="team-item">
                    <div className="team-thumb">
                      <img src={team[3]?.img} alt="" />
                    </div>
                    <div className="team-content">
                      <h2 className="title">{team[3]?.name}</h2>
                      <span>{team[3]?.job}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* team-area-end */}
          {/* testimonial-area */}
          <section
            className="inner-testimonial-area parallax pb-120 position-relative"
            id="testimonials"
          >
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
                          <img src={testimonial[0]?.img} alt="" />
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
                          <p>{testimonial[0]?.comment}</p>
                          <div className="content-bottom">
                            <h4 className="title">{testimonial[0]?.author}</h4>
                            <span>{testimonial[0]?.authorJob}</span>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-item-two">
                        <div className="testimonial-avatar-two">
                          <img src={testimonial[1]?.img} alt="" />
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
                          <p>{testimonial[1]?.comment}</p>
                          <div className="content-bottom">
                            <h4 className="title">{testimonial[1]?.author} </h4>
                            <span>{testimonial[1]?.authorJob} </span>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-item-two">
                        <div className="testimonial-avatar-two">
                          <img src={testimonial[2]?.img} alt="" />
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
                          <p>{testimonial[2]?.comment}</p>
                          <div className="content-bottom">
                            <h4 className="title">{testimonial[2]?.author}</h4>
                            <span>{testimonial[2]?.authorJob}</span>
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
