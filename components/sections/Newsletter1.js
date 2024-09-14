export default function Newsletter1() {
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
                <form action="#">
                  <div className="form-grp">
                    <input type="text" placeholder="Имя*" />
                  </div>
                  <div className="form-grp">
                    <input type="text" placeholder="Номер телефона*" />
                  </div>
                  <button type="submit" className="btn btn-two">
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
