import Link from "next/link"


export default function Services2() {
    return (
        <>
            <section className="services-area-two pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="section-title white-title text-center mb-60 tg-heading-subheading animation-style3">
                                <span className="sub-title tg-element-title">Discover Our Company</span>
                                <h2 className="title tg-element-title">See Our Roofing Services Details</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="services-item-two">
                                <div className="services-thumb-two">
                                    <Link href="/services-details"><img src="/assets/img/services/h3_services_img01.jpg" alt="" /></Link>
                                </div>
                                <div className="services-content-two">
                                    <div className="icon">
                                        <img src="/assets/img/icon/services_icon01.svg" alt="" />
                                    </div>
                                    <div className="content">
                                        <h2 className="title"><Link href="/services-details">Quality Materials</Link></h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="services-item-two">
                                <div className="services-thumb-two">
                                    <Link href="/services-details"><img src="/assets/img/services/h3_services_img02.jpg" alt="" /></Link>
                                </div>
                                <div className="services-content-two">
                                    <div className="icon">
                                        <img src="/assets/img/icon/services_icon02.svg" alt="" />
                                    </div>
                                    <div className="content">
                                        <h2 className="title"><Link href="/services-details">Install Metal Roofing</Link></h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
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
