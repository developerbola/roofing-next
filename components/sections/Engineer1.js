import Link from "next/link"
import Slider from "react-slick"
import VideoPopup from "../elements/VideoPopup"
const settings = {
    centerMode: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    dots: true,
    centerPadding: '0',
    arrows: false,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerPadding: '0',
                infinite: true,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerPadding: '0',
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                centerPadding: '0',
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '0px',
                arrows: false,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '0px',
                arrows: false,
            }
        },
    ]
}

export default function Engineer1() {
    return (
        <>
            <section className="engineer-area pt-115 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center mb-60 tg-heading-subheading animation-style3">
                                <span className="sub-title tg-element-title">Meet Our Engineers</span>
                                <h2 className="title tg-element-title">How Our Engineers Work</h2>
                            </div>
                        </div>
                    </div>
                    <Slider {...settings} className="row engineer-active">
                        <div className="col-lg-5">
                            <div className="engineer-item">
                                <div className="engineer-thumb">
                                    <Link href="/team-details"><img src="/assets/img/images/engineer_img01.jpg" alt="" /></Link>
                                    <VideoPopup />
                                </div>
                                <div className="engineer-info-wrap">
                                    <div className="thumb">
                                        <Link href="/team-details"><img src="/assets/img/images/engineer_info01.png" alt="" /></Link>
                                    </div>
                                    <div className="content">
                                        <h2 className="title"><Link href="/team-details">Mr.Karikoka Ahli</Link></h2>
                                        <span>Roof Engineer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="engineer-item">
                                <div className="engineer-thumb">
                                    <Link href="/team-details"><img src="/assets/img/images/engineer_img02.jpg" alt="" /></Link>
                                    <VideoPopup />
                                </div>
                                <div className="engineer-info-wrap">
                                    <div className="thumb">
                                        <Link href="/team-details"><img src="/assets/img/images/engineer_info02.png" alt="" /></Link>
                                    </div>
                                    <div className="content">
                                        <h2 className="title"><Link href="/team-details">Mr.Karikoka Ahli</Link></h2>
                                        <span>Roof Engineer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="engineer-item">
                                <div className="engineer-thumb">
                                    <Link href="/team-details"><img src="/assets/img/images/engineer_img03.jpg" alt="" /></Link>
                                    <VideoPopup />
                                </div>
                                <div className="engineer-info-wrap">
                                    <div className="thumb">
                                        <Link href="/team-details"><img src="/assets/img/images/engineer_info03.png" alt="" /></Link>
                                    </div>
                                    <div className="content">
                                        <h2 className="title"><Link href="/team-details">Mr.Darikoka Ahli</Link></h2>
                                        <span>Roof Engineer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="engineer-item">
                                <div className="engineer-thumb">
                                    <Link href="/team-details"><img src="/assets/img/images/engineer_img02.jpg" alt="" /></Link>
                                    <VideoPopup />
                                </div>
                                <div className="engineer-info-wrap">
                                    <div className="thumb">
                                        <Link href="/team-details"><img src="/assets/img/images/engineer_info02.png" alt="" /></Link>
                                    </div>
                                    <div className="content">
                                        <h2 className="title"><Link href="/team-details">Mr.Karikoka Ahli</Link></h2>
                                        <span>Roof Engineer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>

        </>
    )
}
