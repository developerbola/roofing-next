import api from "@/components/api/api";
import Layout from "@/components/layout/Layout";
import Counter2 from "@/components/sections/Counter2";
import Services1 from "@/components/sections/Services1";
import { useEffect, useState } from "react";

export default function Service() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.quickServices();
      setRes(data);
    };

    getData();
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const token = "7324826470:AAF7--oNglGJIEx6tg6FGgu66i_MpRzojvc";
  const chatId = "-4584600106";

  const forSend = encodeURIComponent(
    `First Name: ${firstName}\nLast Name: ${lastName}\nPhone Number: ${phoneNumber}\nEmail: ${email}\nAddress: ${address}\nMessage: ${message}`
  );

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const sendData = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !phoneNumber || !email || !address) {
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
      setLastName("");
      setPhoneNumber("");
      setEmail("");
      setAddress("");
      setMessage("");
      if (!response.ok) throw new Error("Failed to send message");
    } catch (error) {
      console.error("Error during fetch:", error);
      alert("There was an error sending your message. Please try again.");
    }
  };

  return (
    <>
      <Layout breadcrumbTitle="Услуги">
        <div>
          <Services1 />
          {/* area-bg */}
          <div className="area-bg">
            <div
              className="area-background-img jarallax"
              data-background="/assets/img/bg/area_bg01.jpg"
            />
            {/* counter-area */}
            <Counter2 />
            {/* counter-area-end */}
            {/* appointment-area */}
            <section className="appointment-area pt-115">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title white-title mb-60">
                      <span className="sub-title">
                        Ваша крыша требует профессионального внимания
                      </span>
                      <h2 className="title">Запишитесь на прием</h2>
                    </div>
                  </div>
                </div>
                <div
                  className="appointment-inner"
                  data-background="/assets/img/bg/appointment_bg.jpg"
                >
                  <div className="row">
                    <div className="col-xl-7">
                      <div className="appointment-form">
                        <form id="form" action="#">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-grp">
                                <input
                                  id="name"
                                  type="text"
                                  placeholder="Имя"
                                  value={firstName}
                                  onChange={(e) => setFirstName(e.target.value)}
                                />
                                <label htmlFor="name">
                                  <i className="fas fa-user" />
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-grp">
                                <input
                                  id="lastName"
                                  type="text"
                                  placeholder="Фамилия"
                                  value={lastName}
                                  onChange={(e) => setLastName(e.target.value)}
                                />
                                <label htmlFor="lastName">
                                  <i className="fas fa-user" />
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-grp">
                                <input
                                  id="phone"
                                  type="text"
                                  placeholder="Номер телефона"
                                  value={phoneNumber}
                                  onChange={(e) =>
                                    setPhoneNumber(e.target.value)
                                  }
                                />
                                <label htmlFor="phone">
                                  <i className="fas fa-phone-alt" />
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-grp">
                                <input
                                  id="email"
                                  type="text"
                                  placeholder="Электронная почта"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                                <label htmlFor="email">
                                  <i className="fas fa-envelope" />
                                </label>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-grp">
                                <input
                                  id="location"
                                  type="text"
                                  placeholder="Адрес"
                                  value={address}
                                  onChange={(e) => setAddress(e.target.value)}
                                />
                                <label htmlFor="location">
                                  <i className="fas fa-map-marker-alt" />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form-grp">
                            <textarea
                              name="message"
                              placeholder="Сообщение"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                            />
                          </div>
                          <button onClick={(e) => sendData(e)} className="btn">
                            Отправить
                          </button>
                        </form>
                      </div>
                    </div>
                    <div className="col-xl-5">
                      <div className="appointment-img">
                        <img
                          src="/assets/img/images/appointment_img.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* appointment-area-end */}
          </div>
          {/* area-bg-end */}
          {/* support-area */}
          <section className="support-area pt-115 pb-70">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-4 col-md-6">
                  <div className="support-item">
                    <div className="support-icon">
                      <img src="/assets/img/icon/support_icon01.svg" alt="" />
                    </div>
                    <div className="support-content">
                      <h4 className="title">{res[0]?.title}</h4>
                      <p>{res[0]?.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="support-item">
                    <div className="support-icon">
                      <img src="/assets/img/icon/support_icon02.svg" alt="" />
                    </div>
                    <div className="support-content">
                      <h4 className="title">{res[1]?.title}</h4>
                      <p>{res[1]?.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="support-item">
                    <div className="support-icon">
                      <img src="/assets/img/icon/support_icon03.svg" alt="" />
                    </div>
                    <div className="support-content">
                      <h4 className="title">{res[2]?.title}</h4>
                      <p>{res[2]?.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
