import { useState } from "react";

export default function Newsletter1() {
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const token = "7324826470:AAF7--oNglGJIEx6tg6FGgu66i_MpRzojvc";
  const chatId = "-4584600106";

  const sendData = async (e) => {
    e.preventDefault();

    if (firstName && phoneNumber) {
      const formattedString =
        `First Name: ${firstName}\nPhone Number: ${phoneNumber}`.replace(
          /\s*\n\s*/g,
          "\n"
        );

      const forSend = encodeURIComponent(formattedString);

      try {
        const response = await fetch(
          `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${forSend}`,
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to send message");
        }

        setFirstName("");
        setPhoneNumber("");
      } catch (error) {
        console.error("Error sending data:", error);
        alert("There was an error sending your message. Please try again.");
      }
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <>
      <section
        className="newsletter-area jarallax newsletter-bg"
        data-background="/assets/img/bg/newsletter_bg.jpg"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5">
              <div className="newsletter-content">
                <div className="section-title white-title-two tg-heading-subheading animation-style3">
                  <span className="sub-title tg-element-title">
                    Форма обратной связи по качественной кровле
                  </span>
                  <h2 className="title tg-element-title">
                    Нужны кровельные услуги?
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="newsletter-form">
                <form id="form" action="#">
                  <div className="form-grp">
                    <input
                      type="text"
                      name="name"
                      placeholder="Имя*"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      value={firstName}
                    />
                  </div>
                  <div className="form-grp">
                    <input
                      type="text"
                      name="number"
                      placeholder="Номер телефона*"
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                      value={phoneNumber}
                    />
                  </div>
                  <button onClick={(e) => sendData(e)} className="btn btn-two">
                    Отправить
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
