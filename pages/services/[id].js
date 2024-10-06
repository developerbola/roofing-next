import api from "@/components/api/api";
import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import latinToCrylic from "@/customHooks/latinToCrylic";
export default function Contact() {
  const [res, setRes] = useState([]);

  const { id } = useRouter().query;

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.contact();
      setRes(data);
    };

    getData();
  }, []);

  return (
    <>
      <Layout
        breadcrumbTitle={latinToCrylic(id ? id : "")
          .split("-")
          .join(" ")}
      >
        <section className="contact-area pt-120 pb-120">
          <div className="container">
            {/* <h1>{latinToCrylic(id ? id : "")}</h1> */}
          </div>
        </section>
      </Layout>
    </>
  );
}
