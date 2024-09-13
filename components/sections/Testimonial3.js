import Slider from "react-slick"
const settings = {
    dots: true,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
}

export default function Testimonial3() {
    return (
        <>
            <section className="testimonial-area-three parallax pt-115 pb-120 position-relative">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title text-center mb-50">
                                <span className="sub-title">Our Testimonial</span>
                                <h2 className="title">What Our Client Feedback</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="testimonial-inner">
                                <Slider {...settings} className="testimonial-active-two">
                                    <div className="testimonial-item-two">
                                        <div className="testimonial-avatar-two">
                                            <img src="/assets/img/images/h2_testi_avatar01.png" alt="" />
                                        </div>
                                        <div className="testimonial-content-two">
                                            <div className="content-top">
                                                <div className="icon">
                                                    <i className="fas fa-quote-left" />
                                                </div>
                                                <div className="rating">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                            <p>There are many varation of paissages of Lorem as the Ipum available but our majority have sufferied alterations in some form, by our by injected hsumour randomised worids which don't looks even slightly there as believable. If you going to use a passage of Lorem Ipsum.</p>
                                            <div className="content-bottom">
                                                <h4 className="title">Darrell Steward</h4>
                                                <span>Roofing Expert</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-item-two">
                                        <div className="testimonial-avatar-two">
                                            <img src="/assets/img/images/h2_testi_avatar02.png" alt="" />
                                        </div>
                                        <div className="testimonial-content-two">
                                            <div className="content-top">
                                                <div className="icon">
                                                    <i className="fas fa-quote-left" />
                                                </div>
                                                <div className="rating">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                            <p>Lorem Ipsum are many varation of paissages of Lorem as the Ipum available but our majority have sufferied alterations in some form, by our by injected hsumour randomised worids which don't looks even slightly there as believable. If you going to use a passage of Lorem Ipsum.</p>
                                            <div className="content-bottom">
                                                <h4 className="title">Robert C. Simmons</h4>
                                                <span>Roofing Expert</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-item-two">
                                        <div className="testimonial-avatar-two">
                                            <img src="/assets/img/images/h2_testi_avatar03.png" alt="" />
                                        </div>
                                        <div className="testimonial-content-two">
                                            <div className="content-top">
                                                <div className="icon">
                                                    <i className="fas fa-quote-left" />
                                                </div>
                                                <div className="rating">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                            <p>Lorem Ipsum are many varation of paissages of Lorem as the Ipum available but our majority have sufferied alterations in some form, by our by injected hsumour randomised worids which don't looks even slightly there as believable. If you going to use a passage of Lorem Ipsum.</p>
                                            <div className="content-bottom">
                                                <h4 className="title">Karikoka Ahli</h4>
                                                <span>Executive Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-avatar-wrap">
                        <ul className="list-wrap">
                            <li>
                                <img src="/assets/img/images/h4_testi_avatar01.png" className="layer" data-depth="0.1" alt="" />
                            </li>
                            <li>
                                <img src="/assets/img/images/h4_testi_avatar02.png" className="layer" data-depth="0.2" alt="" />
                            </li>
                            <li>
                                <img src="/assets/img/images/h4_testi_avatar03.png" className="layer" data-depth="0.05" alt="" />
                            </li>
                            <li>
                                <img src="/assets/img/images/h4_testi_avatar03.png" className="layer" data-depth="0.2" alt="" />
                            </li>
                            <li>
                                <img src="/assets/img/images/h4_testi_avatar02.png" className="layer" data-depth="0.05" alt="" />
                            </li>
                            <li>
                                <img src="/assets/img/images/h4_testi_avatar01.png" className="layer" data-depth="0.1" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}
