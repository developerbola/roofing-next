import Link from "next/link"

export default function About2() {
    return (
        <>
            <section className="about-area-two parallax about-bg" data-background="/assets/img/bg/about_bg.jpg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-0 order-lg-2">
                            <div className="about-img-wrap-two">
                                <ul className="list-wrap">
                                    <li>
                                        <div className="year-experience-wrap wow fadeInDown" data-wow-delay=".2s">
                                            <div className="icon"><img src="/assets/img/icon/h2_about_icon03.svg" alt="" /></div>
                                            <h2 className="title">07 Years <span>Experience</span></h2>
                                        </div>
                                    </li>
                                    <li><img src="/assets/img/images/h2_about_img01.jpg" alt="" className="wow fadeInLeft" data-wow-delay=".4s" /></li>
                                </ul>
                                <ul className="list-wrap">
                                    <li><img src="/assets/img/images/h2_about_img02.jpg" alt="" className="wow fadeInRight" data-wow-delay=".2s" /></li>
                                    <li><img src="/assets/img/images/h2_about_img03.jpg" alt="" className="wow fadeInUp" data-wow-delay=".4s" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content-two">
                                <div className="section-title mb-30">
                                    <span className="sub-title">About Our Company</span>
                                    <h2 className="title">We’re Committed to Roofing Excellence</h2>
                                </div>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majori have suffered alteration in some form, by injected humour, or randomised word which don't look even slightly believable.</p>
                                <div className="about-list-two">
                                    <ul className="list-wrap">
                                        <li className="list-item">
                                            <div className="icon">
                                                <img src="/assets/img/icon/h2_about_icon01.svg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h5 className="title">Mission Statement Roofing</h5>
                                            </div>
                                        </li>
                                        <li className="list-item">
                                            <div className="icon">
                                                <img src="/assets/img/icon/h2_about_icon02.svg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h5 className="title">Our Core Time Values Lenthlyness</h5>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <Link href="/about" className="btn">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-shape-wrap">
                    <ul className="list-wrap">
                        <li><img src="/assets/img/images/about_shape01.png" className="layer" data-depth="0.3" alt="" /></li>
                        <li><img src="/assets/img/images/about_shape02.png" className="layer" data-depth="0.3" alt="" /></li>
                        <li><img src="/assets/img/images/about_shape03.png" className="layer" data-depth="0.2" alt="" /></li>
                    </ul>
                </div>
            </section>

        </>
    )
}
