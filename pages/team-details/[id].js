import api from "@/components/api/api";
import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function TeamDetails() {
  const { id } = useRouter().query;
  const [teamMember, setTeamMember] = useState(null);
  const [res, setRes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.team();
      setRes(data);
    };

    getData();
  }, []);

  useEffect(() => {
    if (id && res) {
      const findStuff = async () => {
        const member = await res?.find((item) => item.uid == id);
        setTeamMember(member);
      };
      findStuff();
    }
  });

  return (
    <>
      <Layout>
        <div>
          <section className="team-details-area pt-20 pb-20">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="team-details-thumb">
                    <img
                      src={teamMember?.img}
                      alt=""
                      height={500}
                      width={500}
                      style={{
                        backgroundSize: "contain",
                        objectFit: "cover",
                        objectPosition: "0 0",
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="team-details-info">
                    <div className="info-content-top">
                      <h3 className="title">{teamMember?.name}</h3>
                      <span>{teamMember?.job}</span>
                    </div>
                    <ul className="list-wrap team-info">
                      <li>
                        <span>
                          <i className="fas fa-toolbox" />
                          Опыт:
                        </span>
                        15 Годы
                      </li>
                      <li>
                        <span>
                          <i className="fas fa-envelope" />
                          E-mail:
                        </span>
                        icourtnyhenry@example.com
                      </li>
                      <li>
                        <span>
                          <i className="fas fa-phone-alt" />
                          Телефон:
                        </span>
                        +1-800-456-478-00
                      </li>
                    </ul>
                    <div className="team-details-social">
                      <h6 className="title">Подписывайтесь на меня:</h6>
                      <ul className="list-wrap">
                        <li>
                          <Link href="/">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="team-details-content">
                    <h3 className="title">Личный опыт и навыки</h3>
                    <p className="info-one">
                      За годы работы в сфере кровельных услуг я накопил
                      значительный опыт и приобрел ценные навыки. В моём
                      арсенале — установка и ремонт различных типов кровли,
                      включая металлические, битумные и черепичные покрытия. Я
                      также специализируюсь на гидроизоляции, утеплении крыш и
                      решении сложных технических задач, связанных с вентиляцией
                      и дренажными системами. Моя работа включает как частные
                      дома, так и коммерческие объекты, где каждая деталь имеет
                      значение. Мои клиенты ценят точность, внимание к деталям и
                      соблюдение сроков.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* team-details-area-end */}
          {/* brand-area */}
          <Brand3 />
        </div>
      </Layout>
    </>
  );
}
