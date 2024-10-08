import Link from "next/link";
import api from "../api/api";
import { useEffect, useState } from "react";

export default function Footer1() {
  const [contact, setContact] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getContact = async () => {
      const { data } = await api.contact();
      setContact(data);
    };
    const getServices = async () => {
      const { data } = await api.servicesSection();
      setServices(data);
    };

    getContact();
    getServices();
  });
  return (
    <>
      <footer>
        <div
          className="footer-area footer-bg"
          data-background="/assets/img/bg/footer_bg.jpg"
        >
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-7">
                  <div className="footer-widget">
                    <h2 className="fw-title">О нас</h2>
                    <div className="footer-content">
                      <p>
                        Существует множество вариантов отрывков Lore Ipsum, но
                        большинство из них имеют изменения в той или иной форме,
                        путем добавления юмора, ондомизированных слов, которые
                        не выглядят
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                  <div className="footer-widget">
                    <h2 className="fw-title">Наши услуги</h2>
                    <div className="footer-link">
                      <ul className="list-wrap">
                        <li>
                          <Link href={`/services/${services[0]?.uid}`}>
                            <i className="fas fa-angle-double-right" />
                            {services[0]?.title}
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/${services[1]?.uid}`}>
                            <i className="fas fa-angle-double-right" />
                            {services[1]?.title}
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/${services[2]?.uid}`}>
                            <i className="fas fa-angle-double-right" />
                            {services[2]?.title}
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/${services[3]?.uid}`}>
                            <i className="fas fa-angle-double-right" />
                            {services[3]?.title}
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/${services[4]?.uid}`}>
                            <i className="fas fa-angle-double-right" />
                            {services[4]?.title}
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/${services[5]?.uid}`}>
                            <i className="fas fa-angle-double-right" />
                            {services[5]?.title}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                  <div className="footer-widget">
                    <h2 className="fw-title">Быстрые ссылки</h2>
                    <div className="footer-link">
                      <ul className="list-wrap">
                        <li>
                          <Link href="/contact">
                            <i className="fas fa-angle-double-right" />
                            Условия
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <i className="fas fa-angle-double-right" />
                            Налог НДС
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <i className="fas fa-angle-double-right" />
                            Политика возврата
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <i className="fas fa-angle-double-right" />
                            Типичные решения
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <i className="fas fa-angle-double-right" />
                            Наш процесс
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <i className="fas fa-angle-double-right" />
                            Свяжитесь с нами
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-6">
                  <div className="footer-widget">
                    <h2 className="fw-title">Посты в Instagram</h2>
                    <div className="footer-instagram">
                      <ul className="list-wrap">
                        <li>
                          <Link href="/">
                            <img
                              src="/assets/img/instagram/f_insta_img01.jpg"
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <img
                              src="/assets/img/instagram/f_insta_img02.jpg"
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <img
                              src="/assets/img/instagram/f_insta_img03.jpg"
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <img
                              src="/assets/img/instagram/f_insta_img04.jpg"
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <img
                              src="/assets/img/instagram/f_insta_img05.jpg"
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <img
                              src="/assets/img/instagram/f_insta_img06.jpg"
                              alt=""
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-logo-area">
                <div className="row align-items-center">
                  <div className="col-xl-3 col-lg-3 col-md-12">
                    <div className="logo">
                      <Link
                        href="/"
                        style={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                        }}
                      >
                        <img src="/assets/img/whiteLogo.png" alt="Logo" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-5 col-md-6">
                    <div className="footer-contact">
                      <div className="icon">
                        <i className="fas fa-phone-alt" />
                      </div>
                      <div className="content">
                        <span>Номер телефона</span>
                        <Link href={`https://wa.me/${contact[0]?.number1}`}>
                          {contact[0]?.number1.replace(
                            /(\d)(\d{3})(\d{3})(\d{2})(\d{2})/,
                            "$1 ($2) $3-$4-$5"
                          )}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="footer-social">
                      <h2 className="title">Подписаться:</h2>
                      <ul className="list-wrap">
                        <li>
                          <Link href="https://t.me/krovlya_remont">
                            <i className="fab fa-telegram" />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://wa.me/79269990761">
                            <i className="fab fa-whatsapp" />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://vk.com/nikrotex">
                            <i className="fab fa-vk" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="copyright-text">
                    <p>
                      © Copyright {new Date().getFullYear()}. All Right Reserved
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="footer-bootom-menu">
                    <ul className="list-wrap">
                      <li>
                        <Link href="/contact">Политика конфиденциальности</Link>
                      </li>
                      <li>
                        <Link href="/contact">Условия и положения</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
