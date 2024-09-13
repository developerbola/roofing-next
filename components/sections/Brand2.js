import Slider from "react-slick"
const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            }
        },
    ]
}
export default function Brand2() {
    return (
        <>
            <div className="brand-area-two">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-lg-6">
                            <h6 className="brand-title">Trusted by big brands</h6>
                            <Slider {...settings} className="row brand-active-two">
                                <div className="col-12">
                                    <div className="brand-item">
                                        <img src="/assets/img/brand/h2_brand_img01.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="brand-item">
                                        <img src="/assets/img/brand/h2_brand_img02.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="brand-item">
                                        <img src="/assets/img/brand/h2_brand_img03.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="brand-item">
                                        <img src="/assets/img/brand/h2_brand_img02.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="brand-item">
                                        <img src="/assets/img/brand/h2_brand_img03.png" alt="" />
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
