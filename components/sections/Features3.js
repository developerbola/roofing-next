import Link from "next/link"


export default function Features3() {
    return (
        <>
            <section className="features-area-three features-bg-two" data-background="/assets/img/bg/features_bg02.jpg">
                <div className="container">
                    <div className="features-item-wrap">
                        <div className="row justify-content-center">
                            <div className="col-xl-4 col-md-6">
                                <div className="fetures-item-three wow fadeInUp" data-wow-delay=".2s">
                                    <div className="fetures-thumb-three">
                                        <Link href="/services-details"><img src="/assets/img/images/h4_features_img01.jpg" alt="" /></Link>
                                    </div>
                                    <div className="fetures-content-three">
                                        <div className="fetures-icon-three">
                                            <img src="/assets/img/icon/features_icon01.svg" alt="" />
                                        </div>
                                        <h4 className="title"><Link href="/services-details">Quality Materials</Link></h4>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="fetures-item-three wow fadeInUp" data-wow-delay=".4s">
                                    <div className="fetures-thumb-three">
                                        <Link href="/services-details"><img src="/assets/img/images/h4_features_img02.jpg" alt="" /></Link>
                                    </div>
                                    <div className="fetures-content-three">
                                        <div className="fetures-icon-three">
                                            <img src="/assets/img/icon/features_icon02.svg" alt="" />
                                        </div>
                                        <h4 className="title"><Link href="/services-details">Expert Engineer</Link></h4>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="fetures-item-three wow fadeInUp" data-wow-delay=".6s">
                                    <div className="fetures-thumb-three">
                                        <Link href="/services-details"><img src="/assets/img/images/h4_features_img03.jpg" alt="" /></Link>
                                    </div>
                                    <div className="fetures-content-three">
                                        <div className="fetures-icon-three">
                                            <img src="/assets/img/icon/features_icon03.svg" alt="" />
                                        </div>
                                        <h4 className="title"><Link href="/services-details">Quality Maintenance</Link></h4>
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
