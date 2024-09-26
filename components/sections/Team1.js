import Link from "next/link";
import api from "../api/api";
import { useEffect, useState } from "react";

export default function Team1() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.team();
      setRes(data?.slice(0, 4));
    };

    getData();
  });

  return (
    <>
      <section className="team-area pt-115 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-60 tg-heading-subheading animation-style3">
                <span className="sub-title tg-element-title">
                  Профессиональная команда
                </span>
                <h2 className="title tg-element-title">
                  Член профессиональной команды
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <div className="team-item">
                <div className="team-thumb">
                  <Link href={`/team-details/${res[0]?.uid}`}>
                    <img src={res[0]?.img} alt="" />
                  </Link>
                </div>
                <div className="team-content">
                  <h2 className="title">
                    <Link href={`/team-details/${res[0]?.uid}`}>
                      {res[0]?.name}
                    </Link>
                  </h2>
                  <span>{res[0]?.job}</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <div className="team-item">
                <div className="team-thumb">
                  <Link href={`/team-details/${res[1]?.uid}`}>
                    <img src={res[1]?.img} alt="" />
                  </Link>
                </div>
                <div className="team-content">
                  <h2 className="title">
                    <Link href={`/team-details/${res[1]?.uid}`}>
                      {res[1]?.name}
                    </Link>
                  </h2>
                  <span>{res[1]?.job}</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <div className="team-item">
                <div className="team-thumb">
                  <Link href={`/team-details/${res[2]?.uid}`}>
                    <img src={res[2]?.img} alt="" />
                  </Link>
                </div>
                <div className="team-content">
                  <h2 className="title">
                    <Link href={`/team-details/${res[2]?.uid}`}>
                      {res[2]?.name}
                    </Link>
                  </h2>
                  <span>{res[2]?.job}</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <div className="team-item">
                <div className="team-thumb">
                  <Link href={`/team-details/${res[3]?.uid}`}>
                    <img src={res[3]?.img} alt="" />
                  </Link>
                </div>
                <div className="team-content">
                  <h2 className="title">
                    <Link href={`/team-details/${res[3]?.uid}`}>
                      {res[3]?.name}
                    </Link>
                  </h2>
                  <span>{res[3]?.job}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
