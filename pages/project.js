import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Project() {

    return (
        <>
            <Layout breadcrumbTitle="Projects">
                <section className="inner-project-area pt-115 pb-90">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="section-title text-center mb-60">
                                    <span className="sub-title">Наш проект</span>
                                    <h2 className="title">Наши последние проекты</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="project-item-two">
                                    <div className="project-thumb-two">
                                        <Link href="/project"><img src="/assets/img/project/h3_project_img01.jpg" alt="" /></Link>
                                    </div>
                                    <div className="project-content-two">
                                        <span>Product Design</span>
                                        <h2 className="title"><Link href="/project">Web Application</Link></h2>
                                        <Link href="/project" className="link-btn"><i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="project-item-two">
                                    <div className="project-thumb-two">
                                        <Link href="/project"><img src="/assets/img/project/h3_project_img02.jpg" alt="" /></Link>
                                    </div>
                                    <div className="project-content-two">
                                        <span>Product Design</span>
                                        <h2 className="title"><Link href="/project">Web Application</Link></h2>
                                        <Link href="/project" className="link-btn"><i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="project-item-two">
                                    <div className="project-thumb-two">
                                        <Link href="/project"><img src="/assets/img/project/h3_project_img03.jpg" alt="" /></Link>
                                    </div>
                                    <div className="project-content-two">
                                        <span>Product Design</span>
                                        <h2 className="title"><Link href="/project">Web Application</Link></h2>
                                        <Link href="/project" className="link-btn"><i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="project-item-two">
                                    <div className="project-thumb-two">
                                        <Link href="/project"><img src="/assets/img/project/h3_project_img04.jpg" alt="" /></Link>
                                    </div>
                                    <div className="project-content-two">
                                        <span>Product Design</span>
                                        <h2 className="title"><Link href="/project">Web Application</Link></h2>
                                        <Link href="/project" className="link-btn"><i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="project-item-two">
                                    <div className="project-thumb-two">
                                        <Link href="/project"><img src="/assets/img/project/h3_project_img05.jpg" alt="" /></Link>
                                    </div>
                                    <div className="project-content-two">
                                        <span>Product Design</span>
                                        <h2 className="title"><Link href="/project">Web Application</Link></h2>
                                        <Link href="/project" className="link-btn"><i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="project-item-two">
                                    <div className="project-thumb-two">
                                        <Link href="/project"><img src="/assets/img/project/h3_project_img06.jpg" alt="" /></Link>
                                    </div>
                                    <div className="project-content-two">
                                        <span>Product Design</span>
                                        <h2 className="title"><Link href="/project">Web Application</Link></h2>
                                        <Link href="/project" className="link-btn"><i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}