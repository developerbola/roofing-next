import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Custom404() {

    return (
        <>
            <Layout breadcrumbTitle="Error Pages">
                <section className="error-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="error-img">
                                    <img src="/assets/img/images/404_img.png" alt="" />
                                </div>
                                <div className="error-content">
                                    <h2 className="title">Oops! Page Not Found.</h2>
                                    <Link href="/" className="btn">Back to Home page</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}