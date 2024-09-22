import Link from "next/link";
import { useEffect, useState } from "react";
import api from "../api/api";

export default function Breadcrumb({ breadcrumbTitle }) {
  const [res, setRes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.heroText();
      setRes(data[0]);
    };

    getData();
  });

  return (
    <>
      <section
        className="breadcrumb-area breadcrumb-bg"
        style={{ backgroundImage: `url(${res?.pagesHero})` }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "#00000060",
            zIndex: 1,
          }}
        />
        <div
          className="breadcrumb-shape"
          data-background="/assets/img/images/breadcrumb_shape.png"
        />
        <div className="container" style={{ zIndex: 2, position: "relative" }}>
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content">
                <h2 className="title">{breadcrumbTitle}</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {breadcrumbTitle}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
