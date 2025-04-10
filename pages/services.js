import { useEffect, useState, useMemo } from "react";
import api from "@/components/api/api";
import Layout from "@/components/layout/Layout";
import Counter2 from "@/components/sections/Counter2";
import Services1 from "@/components/sections/Services1";

const TELEGRAM_CONFIG = {
  token: "7324826470:AAF7--oNglGJIEx6tg6FGgu66i_MpRzojvc",
  chatId: "-4584600106",
};

const initialForm = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  address: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Service() {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await api.quickServices();
        setServices(data);
      } catch (err) {
        console.error("Failed to fetch services:", err);
      }
    };

    fetchServices();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidForm = useMemo(() => {
    const { firstName, lastName, phoneNumber, email, address } = formData;
    return (
      firstName &&
      lastName &&
      phoneNumber &&
      emailPattern.test(email) &&
      address
    );
  }, [formData]);

  const sendData = async (e) => {
    e.preventDefault();

    if (!isValidForm) {
      alert("Пожалуйста, заполните все поля корректно.");
      return;
    }

    const message = encodeURIComponent(
      `First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Phone Number: ${formData.phoneNumber}
Email: ${formData.email}
Address: ${formData.address}
Message: ${formData.message}`
    );

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_CONFIG.token}/sendMessage?chat_id=${TELEGRAM_CONFIG.chatId}&text=${message}`
      );

      if (!res.ok) throw new Error("Failed to send message");

      setFormData(initialForm);
      alert("Сообщение отправлено!");
    } catch (err) {
      console.error("Telegram Error:", err);
      alert("Ошибка при отправке сообщения.");
    }
  };

  return (
    <Layout breadcrumbTitle="Услуги">
      <Services1 />
      <div className="area-bg">
        <div
          className="area-background-img jarallax"
          data-background="/assets/img/bg/area_bg01.jpg"
        />
        <Counter2 />
        <section className="appointment-area pt-115">
          <div className="container">
            <div className="section-title white-title mb-60 text-center">
              <span className="sub-title">
                Ваша крыша требует профессионального внимания
              </span>
              <h2 className="title">Запишитесь на прием</h2>
            </div>
            <div
              className="appointment-inner"
              data-background="/assets/img/bg/appointment_bg.jpg"
            >
              <div className="row">
                <div className="col-xl-7">
                  <div className="appointment-form">
                    <form onSubmit={sendData}>
                      <div className="row">
                        {[
                          { label: "Имя", name: "firstName", icon: "user" },
                          { label: "Фамилия", name: "lastName", icon: "user" },
                          {
                            label: "Номер телефона",
                            name: "phoneNumber",
                            icon: "phone-alt",
                          },
                          {
                            label: "Электронная почта",
                            name: "email",
                            icon: "envelope",
                          },
                          {
                            label: "Адрес",
                            name: "address",
                            icon: "map-marker-alt",
                            fullWidth: true,
                          },
                        ].map(({ label, name, icon, fullWidth = false }) => (
                          <div
                            className={`col-md-${fullWidth ? "12" : "6"}`}
                            key={name}
                          >
                            <div className="form-grp">
                              <input
                                name={name}
                                placeholder={label}
                                value={formData[name]}
                                onChange={handleChange}
                                type="text"
                              />
                              <label htmlFor={name}>
                                <i className={`fas fa-${icon}`} />
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="form-grp">
                        <textarea
                          name="message"
                          placeholder="Сообщение"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                      <button type="submit" className="btn">
                        Отправить
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="appointment-img">
                    <img
                      src="/assets/img/images/appointment_img.png"
                      alt="appointment"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="support-area pt-115 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {services.slice(0, 3).map((item, i) => (
              <div className="col-xl-4 col-md-6" key={i}>
                <div className="support-item">
                  <div className="support-icon">
                    <img
                      src={`/assets/img/icon/support_icon0${i + 1}.svg`}
                      alt={`icon${i + 1}`}
                    />
                  </div>
                  <div className="support-content">
                    <h4 className="title">{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
