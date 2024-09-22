import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import Link from "next/link";
export default function ServiceDetails() {
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
                      <h2 className="title">
                        Модифицированная кровля красивого деревянного дома с
                        большими окнами
                      </h2>
                      <p>
                        Существует много вариаций Lorem Ipsum, но большинство из
                        них претерпели изменения в той или иной форме, через
                        юмор или случайные слова, которые кажутся
                        неправдоподобными. Если вы собираетесь использовать
                        отрывок из Lorem Ipsum, убедитесь, что в тексте нет
                        ничего компрометирующего. Все генераторы Lorem Ipsum в
                        Интернете склонны повторяться.
                      </p>
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
                                        Креативный анализ
                                      </h4>
                                      <p>
                                        Креативный анализ важен. Это часто
                                        встречается среди маркетологов.
                                      </p>
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
                                      <h4 className="title">Проектирование</h4>
                                      <p>
                                        Креативный анализ важен. Это часто
                                        встречается среди маркетологов.
                                      </p>
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
                                        Доставка разработки
                                      </h4>
                                      <p>
                                        Креативный анализ важен. Это часто
                                        встречается среди маркетологов.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h2 className="title-two">
                        Надеемся, вы найдете то, что ищете
                      </h2>
                      <p>
                        Существует много вариаций Lorem Ipsum, но большинство из
                        них претерпели изменения в той или иной форме через юмор
                        или случайные слова. Если вы собираетесь использовать
                        Lorem Ipsum, убедитесь, что в тексте нет ничего
                        компрометирующего.
                      </p>
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
                              <h2 className="title">Наши преимущества</h2>
                              <p>
                                Существует много вариаций Lorem Ipsum, но
                                большинство из них изменены через юмор или
                                случайные слова.
                              </p>
                              <ul className="list-wrap">
                                <li>
                                  <i className="fas fa-check-circle" />В
                                  диаметре не меньше, чем соединение
                                </li>
                                <li>
                                  <i className="fas fa-check-circle" />
                                  Вестибулярный тонус дуги
                                </li>
                                <li>
                                  <i className="fas fa-check-circle" />
                                  Предоставляем лучшие кровельные услуги
                                </li>
                                <li>
                                  <i className="fas fa-check-circle" />
                                  Текстурированная черепица
                                </li>
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
                          <li>
                            <Link href="/services">
                              Одиночная кровля
                              <i className="fas fa-arrow-right" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/services">
                              Модифицированная кровля
                              <i className="fas fa-arrow-right" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/services">
                              Сборная кровля
                              <i className="fas fa-arrow-right" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/services">
                              Инспекция крыши
                              <i className="fas fa-arrow-right" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/services">
                              Металлическая кровля
                              <i className="fas fa-arrow-right" />
                            </Link>
                          </li>
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
                      <form action="#" className="sidebar-form">
                        <div className="form-grp">
                          <input id="name" type="text" placeholder="Ваше имя" />
                        </div>
                        <div className="form-grp">
                          <input
                            id="email"
                            type="text"
                            placeholder="Ваш email"
                          />
                        </div>
                        <div className="form-grp">
                          <textarea id="message" placeholder="Ваше сообщение" />
                        </div>
                        <button type="submit" className="btn btn-two">
                          Связаться с нами
                        </button>
                      </form>
                    </div>
                    <div className="services-widget">
                      <h4 className="widget-title">Скачать наши брошюры</h4>
                      <div className="download-wrap">
                        <Link
                          href="assets/img/services/services_details01.jpg"
                          download
                          target="_blank"
                        >
                          <i className="fas fa-cloud-download-alt" />
                          Детали услуги.pdf 65 KB
                        </Link>
                        <Link
                          href="assets/img/services/services_details01.jpg"
                          download
                          target="_blank"
                        >
                          <i className="fas fa-file-pdf" />
                          Модели кровли.doc 48 KB
                        </Link>
                      </div>
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
