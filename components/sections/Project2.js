import Link from "next/link"
import Slider from "react-slick"
const settings = {
    centerMode: true,
    autoplay: false,
    infinite: true,
    dots: true,
    speed: 1500,
    arrows: false,
    centerPadding: '0',
    slidesToShow: 2,
    responsive: [
        {
            breakpoint: 1800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding: '0',
                infinite: true,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding: '0',
                infinite: true,
                arrows: false,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                centerPadding: '0',
                slidesToScroll: 1,
                arrows: false,
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

export default function Project2() {
    return (
        <>
            <section className="project-area-two">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="section-title text-center mb-60">
                                <span className="sub-title">Latest Projects</span>
                                <h2 className="title">Explore Our Latest Projects</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-md-8">
                            <Slider {...settings} className="row project-active g-0">
                                <div className="col-lg-4">
                                    <div className="project-item-two">
                                        <div className="project-thumb-two">
                                            <Link href="/project"><img src="/assets/img/project/h2_project_img01.jpg" alt="" /></Link>
                                        </div>
                                        <div className="project-content-two">
                                            <span>Product Design</span>
                                            <h2 className="title"><Link href="/project">Web Application</Link></h2>
                                            <Link href="/project" className="link-btn"><i className="fas fa-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-item-two">
                                        <div className="project-thumb-two">
                                            <Link href="/project"><img src="/assets/img/project/h2_project_img02.jpg" alt="" /></Link>
                                        </div>
                                        <div className="project-content-two">
                                            <span>Product Design</span>
                                            <h2 className="title"><Link href="/project">Web Application</Link></h2>
                                            <Link href="/project" className="link-btn"><i className="fas fa-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-item-two">
                                        <div className="project-thumb-two">
                                            <Link href="/project"><img src="/assets/img/project/h2_project_img03.jpg" alt="" /></Link>
                                        </div>
                                        <div className="project-content-two">
                                            <span>Product Design</span>
                                            <h2 className="title"><Link href="/project">Web Application</Link></h2>
                                            <Link href="/project" className="link-btn"><i className="fas fa-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-item-two">
                                        <div className="project-thumb-two">
                                            <Link href="/project"><img src="/assets/img/project/h2_project_img04.jpg" alt="" /></Link>
                                        </div>
                                        <div className="project-content-two">
                                            <span>Product Design</span>
                                            <h2 className="title"><Link href="/project">Web Application</Link></h2>
                                            <Link href="/project" className="link-btn"><i className="fas fa-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-item-two">
                                        <div className="project-thumb-two">
                                            <Link href="/project"><img src="/assets/img/project/h2_project_img02.jpg" alt="" /></Link>
                                        </div>
                                        <div className="project-content-two">
                                            <span>Product Design</span>
                                            <h2 className="title"><Link href="/project">Web Application</Link></h2>
                                            <Link href="/project" className="link-btn"><i className="fas fa-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
