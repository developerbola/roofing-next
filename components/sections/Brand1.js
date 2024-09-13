import Slider from "react-slick"
const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
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
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        },
    ]
}
export default function Brand1() {
    return (
        <>
            <div className="brand-area">
                <div className="container">
                    <div className="brand-inner">
                        <Slider {...settings} className="row brand-active">
                            <div className="col-12">
                                <div className="brand-item">
                                    <img src="/assets/img/brand/brand_img01.png" alt="" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="brand-item">
                                    <img src="/assets/img/brand/brand_img02.png" alt="" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="brand-item">
                                    <img src="/assets/img/brand/brand_img03.png" alt="" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="brand-item">
                                    <img src="/assets/img/brand/brand_img04.png" alt="" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="brand-item">
                                    <img src="/assets/img/brand/brand_img05.png" alt="" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="brand-item">
                                    <img src="/assets/img/brand/brand_img06.png" alt="" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="brand-item">
                                    <img src="/assets/img/brand/brand_img03.png" alt="" />
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}
