import api from "@/components/api/api";
import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function ServiceDetails() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.servicesDetails();
      setRes(data[0]);
    };

    getData();
  }, [res]);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const token = "7324826470:AAF7--oNglGJIEx6tg6FGgu66i_MpRzojvc";
  const chatId = "-4584600106";

  const forSend = encodeURIComponent(
    `First Name: ${firstName}\nEmail: ${email}\nMessage: ${message}`
  );

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const sendData = async (e) => {
    e.preventDefault();

    if (!firstName || !email || !message) {
      alert("Please fill in all required fields correctly.");
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${forSend}`,
        {
          method: "GET",
        }
      );
      setFirstName("");
      setEmail("");
      setMessage("");
      if (!response.ok) throw new Error("Failed to send message");
    } catch (error) {
      console.error("Error during fetch:", error);
      alert("There was an error sending your message. Please try again.");
    }
  };

  return (
    <>
      <Layout breadcrumbTitle="Детали услуги">
        <div>
          <section className="services-details-area pt-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="services-details-wrap">
                    <div className="services-details-thumb">
                      <img
                        src="/assets/img/services/services_details01.jpg"
                        alt=""
                      />
                    </div>
                    <div className="services-details-content">
                      <h2 className="title">{res?.title1}</h2>
                      <p>{res?.desc1}</p>
                      <div className="services-process-wrap">
                        <div className="row justify-content-center">
                          <div className="col-lg-6 col-md-8">
                            <div className="services-process-img">
                              <img
                                src="/assets/img/services/sp_img01.jpg"
                                alt=""
                              />
                              <img
                                src="/assets/img/services/sp_img02.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="services-process-content">
                              <h2 className="title">
                                Наш процесс обслуживания
                              </h2>
                              <ul className="list-wrap">
                                <li>
                                  <div className="services-process-item">
                                    <div className="icon">
                                      <img
                                        src="/assets/img/icon/sp_icon01.svg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="content">
                                      <h4 className="title">
                                        {res?.cards?.title1}
                                      </h4>
                                      <p>{res?.cards?.desc1}</p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="services-process-item">
                                    <div className="icon">
                                      <img
                                        src="/assets/img/icon/sp_icon02.svg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="content">
                                      <h4 className="title">
                                        {" "}
                                        {res?.cards?.title2}
                                      </h4>
                                      <p>{res?.cards?.desc2}</p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="services-process-item">
                                    <div className="icon">
                                      <img
                                        src="/assets/img/icon/sp_icon01.svg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="content">
                                      <h4 className="title">
                                        {res?.cards?.title3}
                                      </h4>
                                      <p>{res?.cards?.desc3}</p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h2 className="title-two">{res?.title2}</h2>
                      <p>{res?.desc2}</p>
                      <div className="service-benefits-wrap">
                        <div className="row">
                          <div className="col-lg-7 order-0 order-lg-2">
                            <div className="benefits-img">
                              <img
                                src="/assets/img/services/sb_img01.jpg"
                                alt=""
                              />
                              <img
                                src="/assets/img/services/sb_img02.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="benefits-content">
                              <h2 className="title">{res?.mt}</h2>
                              <p>{res?.md}</p>
                              <ul className="list-wrap">
                                {res?.text2Bottom?.map((item, idx) => {
                                  return (
                                    <li key={idx}>
                                      <i className="fas fa-check-circle" />
                                      {item}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                  <aside className="services-sidebar">
                    <div className="services-widget">
                      <h4 className="widget-title">Все наши услуги</h4>
                      <div className="our-services-list">
                        <ul className="list-wrap">
                          {res?.allServices?.map((item, idx) => {
                            return (
                              <li key={idx}>
                                <Link href="/contact">
                                  {item}
                                  <i className="fas fa-arrow-right" />
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                    <div
                      className="services-widget widget-bg"
                      data-background="/assets/img/services/sw_bg.jpg"
                    >
                      <h4 className="widget-title">
                        Получить бесплатную смету
                      </h4>
                      <form id="form" action="#" className="sidebar-form">
                        <div className="form-grp">
                          <input
                            id="name"
                            type="text"
                            placeholder="Ваше имя"
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                          />
                        </div>
                        <div className="form-grp">
                          <input
                            id="email"
                            type="text"
                            placeholder="Ваш email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                          />
                        </div>
                        <div className="form-grp">
                          <textarea
                            id="message"
                            placeholder="Ваше сообщение"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                          />
                        </div>
                        <button onClick={sendData} className="btn btn-two">
                          Связаться с нами
                        </button>
                      </form>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </section>
          {/* services-details-area-end */}
          {/* brand-area */}
          <Brand3 />
        </div>
      </Layout>
    </>
  );
}
