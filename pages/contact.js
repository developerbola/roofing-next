import api from "@/components/api/api";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Contact() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.contact();
      setRes(data);
    };

    getData();
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const token = "7324826470:AAF7--oNglGJIEx6tg6FGgu66i_MpRzojvc";
  const chatId = "-4584600106";

  const forSend = encodeURIComponent(
    `First Name: ${firstName}\nLast Name: ${lastName}\nPhone Number: ${phoneNumber}\nEmail: ${email}\nMessage: ${message}`
  );

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const sendData = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !phoneNumber || !email) {
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
      setMessage("");
      if (!response.ok) throw new Error("Failed to send message");
    } catch (error) {
      console.error("Error during fetch:", error);
      alert("There was an error sending your message. Please try again.");
    }
  };

  return (
    <>
      <Layout breadcrumbTitle="Связаться с нами">
        <section className="contact-area pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-10">
                <div
                  className="contact-form-wrap"
                  data-background="/assets/img/images/contact_form_bg.jpg"
                >
                  <h2 className="title">Свяжитесь с нами</h2>
                  <p>Отправьте нам сообщение, и мы ответим как можно скорее.</p>
                  <form id="form" action="#" className="contact-form">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            id="firstName"
                            type="text"
                            placeholder="Имя*"
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            id="lastName"
                            type="text"
                            placeholder="Фамилия*"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            id="email"
                            type="email"
                            placeholder="Электронная почта*"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            id="phone"
                            type="text"
                            placeholder="Номер телефона*"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            value={phoneNumber}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-grp">
                      <textarea
                        id="message"
                        placeholder="Ваше сообщение здесь"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                      />
                    </div>
                    <button className="btn" onClick={(e) => sendData(e)}>
                      Отправить
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-xl-6 col-lg-10">
                <div className="contact-info-wrap">
                  <h2 className="title">Нужна помощь?</h2>
                  <p>
                    Позвоните нам или напишите сообщение, и мы ответим вам как
                    можно скорее.
                  </p>
                  <ul className="list-wrap">
                    <li>
                      <div className="contact-info-item">
                        <div className="icon">
                          <i className="fas fa-phone-alt" />
                        </div>

                        <div className="content">
                          <Link href={`tel:${res[0]?.number1}`}>
                            {res[0]?.number1}
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact-info-item">
                        <div className="icon">
                          <i className="fas fa-envelope" />
                        </div>
                        <div className="content">
                          <Link href={`mailto:${res[1]?.email1}`}>
                            {res[1]?.email1}
                          </Link>
                      
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact-info-item">
                        <div className="icon">
                          <i className="fas fa-map-marker-alt" />
                        </div>
                        <div className="content">
                          <p>
                            {res[2]?.address1}
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* contact-map */}
                <div id="contact-map">
                  <iframe
                    src={res[3]?.mapLink}
                    height={570}
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                {/* contact-map-end */}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
