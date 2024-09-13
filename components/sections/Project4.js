import Link from "next/link"
import Slider from "react-slick"
const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
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

export default function Project4() {
    return (
        <>
            <section className="project-area-four">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center mb-60">
                                <span className="sub-title">Latest Projects</span>
                                <h2 className="title">Explore Our Latest Projects</h2>
                            </div>
                        </div>
                    </div>
                    <Slider {...settings} className="row project-active-two">
                        <div className="col-lg-4">
                            <div className="project-item-four">
                                <div className="project-thumb-four">
                                    <Link href="/project"><img src="/assets/img/project/h4_project_img01.jpg" alt="" /></Link>
                                </div>
                                <div className="project-content-four">
                                    <div className="content-left">
                                        <h2 className="title"><Link href="/project">Replacement of Roof</Link></h2>
                                        <ul className="list-wrap">
                                            <li><Link href="/project">Roof</Link></li>
                                            <li><Link href="/project">Ideas</Link></li>
                                        </ul>
                                    </div>
                                    <div className="content-right">
                                        <Link href="/project" className="link-btn"><i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="project-item-four">
                                <div className="project-thumb-four">
                                    <Link href="/project"><img src="/assets/img/project/h4_project_img02.jpg" alt="" /></Link>
                                </div>
                                <div className="project-content-four">
                                    <div className="content-left">
                                        <h2 className="title"><Link href="/project">Fixing of Roof Damage</Link></h2>
                                        <ul className="list-wrap">
                                            <li><Link href="/project">Roof</Link></li>
                                            <li><Link href="/project">Ideas</Link></li>
                                        </ul>
                                    </div>
                                    <div className="content-right">
                                        <Link href="/project" className="link-btn"><i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="project-item-four">
                                <div className="project-thumb-four">
                                    <Link href="/project"><img src="/assets/img/project/h4_project_img03.jpg" alt="" /></Link>
                                </div>
                                <div className="project-content-four">
                                    <div className="content-left">
                                        <h2 className="title"><Link href="/project">Modern Roofing Style</Link></h2>
                                        <ul className="list-wrap">
                                            <li><Link href="/project">Roof</Link></li>
                                            <li><Link href="/project">Ideas</Link></li>
                                        </ul>
                                    </div>
                                    <div className="content-right">
                                        <Link href="/project" className="link-btn"><i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="project-item-four">
                                <div className="project-thumb-four">
                                    <Link href="/project"><img src="/assets/img/project/h4_project_img02.jpg" alt="" /></Link>
                                </div>
                                <div className="project-content-four">
                                    <div className="content-left">
                                        <h2 className="title"><Link href="/project">Fixing of Roof Damage</Link></h2>
                                        <ul className="list-wrap">
                                            <li><Link href="/project">Roof</Link></li>
                                            <li><Link href="/project">Ideas</Link></li>
                                        </ul>
                                    </div>
                                    <div className="content-right">
                                        <Link href="/project" className="link-btn"><i className="fas fa-arrow-right" /></Link>
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
