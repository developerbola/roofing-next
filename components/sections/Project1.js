import Link from "next/link";
import { useState } from "react";

export default function Project1() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <section
        className="project-area project-bg"
        data-background="/assets/img/bg/project_bg.jpg"
      >
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-8">
              <div className="section-title white-title mb-50 tg-heading-subheading animation-style3">
                <span className="sub-title tg-element-title">
                  Последние проекты
                </span>
                <h2 className="title tg-element-title">
                  Изучите наши последние проекты
                </h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="view-all-btn text-end mb-50">
                <Link href="/project" className="btn">
                  Просмотреть
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div
                className="project-item wow fadeInUp"
                data-wow-delay=".2s"
                onMouseEnter={() => handleToggle(1)}
                onMouseLeave={() => handleToggle(1)}
              >
                <div
                  className="project-thumb"
                  style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}
                >
                  <img src="/assets/img/project/project_img01.jpg" alt="" />
                </div>
                <div className="project-content">
                  <div className="left-side-content">
                    <span>Projects V1</span>
                    <h2 className="title">
                      <Link href="/project">
                        Низкоэтажное строительство и ремонт кровли
                      </Link>
                    </h2>
                    <p
                      style={{
                        display: `${isActive.key == 1 ? "block" : "none"}`,
                      }}
                    >
                      Есть много вариаций отрывков Lorem Ipsum ava претерпели
                      изменения в той или иной форме, впрыскивая юмор которые не
                      выглядят даже немного правдоподобно.
                    </p>
                  </div>
                  <div className="project-link">
                    <Link href="/project">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="project-item wow fadeInUp"
                data-wow-delay=".3s"
                onMouseEnter={() => handleToggle(2)}
                onMouseLeave={() => handleToggle(2)}
              >
                <div
                  className="project-thumb"
                  style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}
                >
                  <img src="/assets/img/project/project_img02.jpg" alt="" />
                </div>
                <div className="project-content">
                  <div className="left-side-content">
                    <span>Projects V2</span>
                    <h2 className="title">
                      <Link href="/project">Кровля мирового класса</Link>
                    </h2>
                    <p
                      style={{
                        display: `${isActive.key == 2 ? "block" : "none"}`,
                      }}
                    >
                      Есть много вариаций отрывков Lorem Ipsum ava претерпели
                      изменения в той или иной форме, впрыскивая юмор которые не
                      выглядят даже немного правдоподобно.
                    </p>
                  </div>
                  <div className="project-link">
                    <Link href="/project">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="project-item wow fadeInUp"
                data-wow-delay=".4s"
                onMouseEnter={() => handleToggle(3)}
                onMouseLeave={() => handleToggle(3)}
              >
                <div
                  className="project-thumb"
                  style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}
                >
                  <img src="/assets/img/project/project_img03.jpg" alt="" />
                </div>
                <div className="project-content">
                  <div className="left-side-content">
                    <span>Projects V3</span>
                    <h2 className="title">
                      <Link href="/project">
                        Система контроля качества кровли
                      </Link>
                    </h2>
                    <p
                      style={{
                        display: `${isActive.key == 3 ? "block" : "none"}`,
                      }}
                    >
                      Есть много вариаций отрывков Lorem Ipsum ava претерпели
                      изменения в той или иной форме, впрыскивая юмор которые не
                      выглядят даже немного правдоподобно.
                    </p>
                  </div>
                  <div className="project-link">
                    <Link href="/project">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="project-item wow fadeInUp"
                data-wow-delay=".5s"
                onMouseEnter={() => handleToggle(4)}
                onMouseLeave={() => handleToggle(4)}
              >
                <div
                  className="project-thumb"
                  style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}
                >
                  <img src="/assets/img/project/project_img04.jpg" alt="" />
                </div>
                <div className="project-content">
                  <div className="left-side-content">
                    <span>Projects V3</span>
                    <h2 className="title">
                      <Link href="/project">
                        Низкоэтажное строительство и ремонт кровли
                      </Link>
                    </h2>
                    <p
                      style={{
                        display: `${isActive.key == 4 ? "block" : "none"}`,
                      }}
                    >
                      Есть много вариаций отрывков Lorem Ipsum ava претерпели
                      изменения в той или иной форме, впрыскивая юмор которые не
                      выглядят даже немного правдоподобно.
                    </p>
                  </div>
                  <div className="project-link">
                    <Link href="/project">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
