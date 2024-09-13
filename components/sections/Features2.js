import Link from "next/link"


export default function Features2() {
    return (
        <>
            <section className="features-area-two features-bg" data-background="/assets/img/bg/features_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-md-8">
                            <div className="features-item-two wow fadeInUp" data-wow-delay=".2s">
                                <div className="features-item-shape">
                                    <svg viewBox="0 0 451 518" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 15.5706C0 12.3122 2.60044 9.64945 5.85786 9.57226L389.414 0.483096C423.541 -0.32561 451.466 27.4618 450.825 61.5922L442.369 512.113C442.308 515.382 439.64 518 436.37 518H6C2.6863 518 0 515.314 0 512V15.5706Z" fill="currentcolor" />
                                    </svg>
                                </div>
                                <div className="features-item-top">
                                    <div className="features-icon-two">
                                        <img src="/assets/img/icon/features_icon01.svg" alt="" />
                                    </div>
                                    <div className="features-content-two">
                                        <h2 className="title">Quality Materials</h2>
                                        <p>There many variations unavailable, but the majority have suffered.</p>
                                    </div>
                                </div>
                                <div className="features-thumb">
                                    <Link href="/services-details"><img src="/assets/img/images/features_img01.jpg" alt="" /></Link>
                                    <Link href="/services-details" className="link-btn"><img src="/assets/img/icon/right_arrow02.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-8">
                            <div className="features-item-two wow fadeInUp" data-wow-delay=".4s">
                                <div className="features-item-shape">
                                    <svg viewBox="0 0 451 518" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 15.5706C0 12.3122 2.60044 9.64945 5.85786 9.57226L389.414 0.483096C423.541 -0.32561 451.466 27.4618 450.825 61.5922L442.369 512.113C442.308 515.382 439.64 518 436.37 518H6C2.6863 518 0 515.314 0 512V15.5706Z" fill="currentcolor" />
                                    </svg>
                                </div>
                                <div className="features-item-top">
                                    <div className="features-icon-two">
                                        <img src="/assets/img/icon/features_icon02.svg" alt="" />
                                    </div>
                                    <div className="features-content-two">
                                        <h2 className="title">Quality Materials</h2>
                                        <p>There many variations unavailable, but the majority have suffered.</p>
                                    </div>
                                </div>
                                <div className="features-thumb">
                                    <Link href="/services-details"><img src="/assets/img/images/features_img02.jpg" alt="" /></Link>
                                    <Link href="/services-details" className="link-btn"><img src="/assets/img/icon/right_arrow02.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-8">
                            <div className="features-item-two wow fadeInUp" data-wow-delay=".6s">
                                <div className="features-item-shape">
                                    <svg viewBox="0 0 451 518" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 15.5706C0 12.3122 2.60044 9.64945 5.85786 9.57226L389.414 0.483096C423.541 -0.32561 451.466 27.4618 450.825 61.5922L442.369 512.113C442.308 515.382 439.64 518 436.37 518H6C2.6863 518 0 515.314 0 512V15.5706Z" fill="currentcolor" />
                                    </svg>
                                </div>
                                <div className="features-item-top">
                                    <div className="features-icon-two">
                                        <img src="/assets/img/icon/features_icon03.svg" alt="" />
                                    </div>
                                    <div className="features-content-two">
                                        <h2 className="title">Quality Materials</h2>
                                        <p>There many variations unavailable, but the majority have suffered.</p>
                                    </div>
                                </div>
                                <div className="features-thumb">
                                    <Link href="/services-details"><img src="/assets/img/images/features_img03.jpg" alt="" /></Link>
                                    <Link href="/services-details" className="link-btn"><img src="/assets/img/icon/right_arrow02.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="more-btn text-center mt-20">
                        <Link href="/services" className="btn">More Services</Link>
                    </div>
                </div>
            </section>

        </>
    )
}
