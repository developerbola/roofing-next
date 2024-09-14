import Link from "next/link";

export default function About1() {
  return (
    <>
      <section className="about-area pb-120">
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
                <div className="section-title mb-25 tg-heading-subheading animation-style3">
                  <span className="sub-title tg-element-title">
                    О нашей компании
                  </span>
                  <h2 className="title tg-element-title">
                    Мы стремимся к совершенству в кровельных работах
                  </h2>
                </div>
                <p>
                  Существует множество вариантов отрывков Lorem Ipsum, но
                  большинство из них были изменены в той или иной форме, с
                  добавлением юмора или случайных слов, которые выглядят совсем
                  неправдоподобно.
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
    </>
  );
}
