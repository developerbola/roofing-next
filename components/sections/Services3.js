import Link from "next/link"
import { useState } from "react"

export default function Services3() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <section className="services-area-three">
                <div className="services-bg jarallax" data-background="/assets/img/bg/services_bg.jpg" />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="section-title text-center white-title mb-60">
                                <span className="sub-title">Discover Our Company</span>
                                <h2 className="title">See Our Roofing Services Details</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="services-nav-wrap">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" onClick={() => handleOnClick(1)}>
                                        <button className={activeIndex === 1 ? "nav-link active" : "nav-link"}>Roof Building</button>
                                    </li>
                                    <li className="nav-item" onClick={() => handleOnClick(2)}>
                                        <button className={activeIndex === 2 ? "nav-link active" : "nav-link"}>Maintenance</button>
                                    </li>
                                    <li className="nav-item" onClick={() => handleOnClick(3)}>
                                        <button className={activeIndex === 3 ? "nav-link active" : "nav-link"}>Engineer</button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className={activeIndex === 1 ? "tab-pane fade show active" : "tab-pane fade"}>
                                        <div className="services-item-three">
                                            <div className="services-thumb-three">
                                                <img src="/assets/img/services/h4_services_img01.jpg" alt="" />
                                            </div>
                                            <div className="services-content-three">
                                                <div className="section-title mb-30">
                                                    <h2 className="title">Bringing New IT Business Solutions And Ideas</h2>
                                                </div>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of</p>
                                                <div className="services-list">
                                                    <ul className="list-wrap">
                                                        <li><i className="fas fa-check-circle" />Business improvement</li>
                                                        <li><i className="fas fa-check-circle" />Business improvement</li>
                                                        <li><i className="fas fa-check-circle" />Network Administration</li>
                                                        <li><i className="fas fa-check-circle" />Network Administration</li>
                                                    </ul>
                                                </div>
                                                <Link href="/services-details" className="btn">Book Service</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 2 ? "tab-pane fade show active" : "tab-pane fade"}>
                                        <div className="services-item-three">
                                            <div className="services-thumb-three">
                                                <img src="/assets/img/services/h4_services_img02.jpg" alt="" />
                                            </div>
                                            <div className="services-content-three">
                                                <div className="section-title mb-30">
                                                    <h2 className="title">Bringing New IT Business 2 Solutions And Ideas</h2>
                                                </div>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of</p>
                                                <div className="services-list">
                                                    <ul className="list-wrap">
                                                        <li><i className="fas fa-check-circle" />Business improvement</li>
                                                        <li><i className="fas fa-check-circle" />Business improvement</li>
                                                        <li><i className="fas fa-check-circle" />Network Administration</li>
                                                        <li><i className="fas fa-check-circle" />Network Administration</li>
                                                    </ul>
                                                </div>
                                                <Link href="/services-details" className="btn">Book Service</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 3 ? "tab-pane fade show active" : "tab-pane fade"}>
                                        <div className="services-item-three">
                                            <div className="services-thumb-three">
                                                <img src="/assets/img/services/h4_services_img03.jpg" alt="" />
                                            </div>
                                            <div className="services-content-three">
                                                <div className="section-title mb-30">
                                                    <h2 className="title">Bringing New IT Business Solutions And Ideas</h2>
                                                </div>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of</p>
                                                <div className="services-list">
                                                    <ul className="list-wrap">
                                                        <li><i className="fas fa-check-circle" />Business improvement</li>
                                                        <li><i className="fas fa-check-circle" />Business improvement</li>
                                                        <li><i className="fas fa-check-circle" />Network Administration</li>
                                                        <li><i className="fas fa-check-circle" />Network Administration</li>
                                                    </ul>
                                                </div>
                                                <Link href="/services-details" className="btn">Book Service</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
