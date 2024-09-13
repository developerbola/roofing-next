import Link from "next/link"


export default function Project3() {
    return (
        <>
            <section className="project-area-three">
                <div className="project-bg-two" data-background="/assets/img/bg/area_bg03.jpg" />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center white-title mb-60 tg-heading-subheading animation-style3">
                                <span className="sub-title tg-element-title">Our Projects</span>
                                <h2 className="title tg-element-title">Our Latest Projects</h2>
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
                    <div className="learn-more-btn text-center mt-25">
                        <Link href="/project" className="btn">Learn More</Link>
                    </div>
                </div>
            </section>

        </>
    )
}
