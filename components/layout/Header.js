import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

export default function Header({ headerCls }) {
  const [scroll, setScroll] = useState(0);

  const [isToggled, setToggled] = useState(false);
  const handleToggled = () => {
    setToggled(!isToggled);
    !isToggled
      ? document.body.classList.add("mobile-menu-visible")
      : document.body.classList.remove("mobile-menu-visible");
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header>
        <div
          id="sticky-header"
          className={`menu-area  ${scroll ? "sticky-menu" : ""} ${
            headerCls ? headerCls : ""
          }`}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler" onClick={handleToggled}>
                  <i className="fas fa-bars" />
                </div>
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo">
                      <Link
                        href="/"
                        style={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src="/assets/img/logo.png"
                          className="logoImg"
                          alt="logo"
                        />
                      </Link>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        <li>
                          <Link href="/">главный</Link>
                        </li>
                        <li>
                          <Link href="/about">о нас</Link>
                        </li>
                        <li>
                          <Link href="/services">услуги</Link>
                        </li>
                        <li>
                          <Link href="/contact">контакты</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="header-action d-none d-md-block">
                      <ul className="list-wrap">
                        <li className="header-btn">
                          <Link href="/contact" className="btn">
                            Получить
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn" onClick={handleToggled}>
                      <i className="fas fa-times" />
                    </div>
                    <div className="nav-logo">
                      <Link href="/">
                        <img
                          src="/assets/img/logo.png"
                          alt="Logo"
                          height={"auto"}
                          width={"80px"}
                        />
                      </Link>
                    </div>
                    <div className="menu-outer">
                      <Sidebar />
                    </div>
                    <div className="social-links">
                      <ul className="clearfix list-wrap">
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
                  </nav>
                </div>
                <div className="menu-backdrop" />
                {/* End Mobile Menu */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
