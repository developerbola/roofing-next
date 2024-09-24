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
                      <h3 className="title">Christopher Jhon</h3>
                      <span>Senior Manager</span>
                    </div>
                    <ul className="list-wrap team-info">
                      <li>
                        <span>
                          <i className="fas fa-toolbox" />
                          Experience:
                        </span>
                        15 Years
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
                          Phone:
                        </span>
                        +1-800-456-478-00
                      </li>
                    </ul>
                    <div className="team-details-social">
                      <h6 className="title">Follow Me:</h6>
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
                    <h3 className="title">Personal Experience and Skills</h3>
                    <p className="info-one">
                      Since joining Sotcox in 2009 .Web design encompasses many
                      different skills and disciplines in the production and
                      maintenance of websites. The different area of web design
                      ki je bolbo as include web graphic design; user interface
                      design (UI design); authoring, including standardised code
                      and proprietary amra kothai jabo assoftware; user
                      experience design (UX design); and search engine
                      optimization. Often many individuals will work in teams
                      covering different aspects of the design process,
                      including writing markup.
                    </p>
                    <p className="info-two">
                      The term "web design" is normally used to describe the
                      design process relating to the front-end (client side)
                      design of a ki holo design ki valo hoy nai website
                      including writing markup. Web design partially overlaps
                      web engineering in the broader scope of web development.
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
