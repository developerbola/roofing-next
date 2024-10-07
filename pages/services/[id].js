import api from "@/components/api/api";
import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function Contact() {
  const [res, setRes] = useState([]);

  const { id } = useRouter().query;

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.servicesSection();
      setRes(data.find((item) => item.uid == id));
    };

    getData();
  });

  return (
    <>
      <Layout breadcrumbTitle={res?.title ? res?.title : "Loading ..."}>
        <section className="contact-area pt-60 pb-120">
          <div className="container d-flex align-items-center justify-content-center">
            <div className="col-md-5 d-inline">
              <h2>{res?.title}</h2>
              <p>{res?.desc}</p>
            </div>
            <div className="col-md-6 border-10">
              <img src={res?.img} alt="" style={{ borderRadius: "15px" }} />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
