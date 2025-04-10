import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import Sidebar from "./Sidebar";
import classNames from "classnames"; // For cleaner className management

export default function Header({ headerCls }) {
  const [scroll, setScroll] = useState(0);
  const [isToggled, setToggled] = useState(false);

  // Handle menu toggle and body class change
  const handleToggled = useCallback(() => {
    setToggled((prev) => {
      const newState = !prev;
      document.body.classList.toggle("mobile-menu-visible", newState);
      return newState;
    });
  }, []);

  // Scroll event listener
  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY > 100 ? 1 : 0);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll); // Cleanup listener
  }, []);

  return (
    <header>
      <div
        id="sticky-header"
        className={classNames("menu-area", {
          "sticky-menu": scroll,
          [headerCls]: headerCls,
        })}
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
                      className="flex-center" // Assuming you want to center the logo
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

              {/* Mobile Menu */}
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
                        width="80px"
                        height="auto"
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
  );
}
