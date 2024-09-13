import Link from 'next/link'
import { useState } from 'react'
import Slider from 'react-slick'
import Brand2 from './Brand2'



export default function Slider1() {
    const [nav1, setNav1] = useState()
    const [nav2, setNav2] = useState()
    return (
        <>
            <section className="slider-area">
                <div className="slider-shape" data-background="/assets/img/slider/slider_shape.png" />
                <div className="slider-img-wrap">
                    <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}
                        autoplay={true}
                        infinite={true}
                        speed={500} className="sliderNav-active">
                        <div className="slider-img-item" data-background="/assets/img/slider/slider_img01.jpg" />
                        <div className="slider-img-item" data-background="/assets/img/slider/slider_img02.jpg" />
                    </Slider>
                </div>
                <div className="slider-content-wrap">
                    <Slider
                        asNavFor={nav1}
                        ref={(slider2) => setNav2(slider2)}
                        autoplay={true}
                        infinite={true}
                        speed={500}
                        slidesToShow={1}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        arrows={false}
                        className="sliderContent-active">
                        <div className="slider-content">
                            <h1 className="overly-text">Roofing <br /> Services</h1>
                            <span className="sub-title" data-animation-in="fadeInUp" data-delay-in=".2" data-duration-in=".6">Smart Solutions</span>
                            <h2 className="title" data-animation-in="fadeInUp" data-delay-in=".4" data-duration-in=".6">Best Roofing Services and Consulting</h2>
                            <p data-animation-in="fadeInUp" data-delay-in=".6" data-duration-in=".6">Roofing mbrace change are thriving, building bigger, better,faster, and products than ever Roofing mbrace.</p>
                            <Link href="/project" className="btn" data-animation-in="fadeInUp" data-delay-in=".8" data-duration-in=".6">Discover More</Link>
                        </div>
                        <div className="slider-content">
                            <h1 className="overly-text">Roofing <br /> Services</h1>
                            <span className="sub-title" data-animation-in="fadeInUp" data-delay-in=".2" data-duration-in=".6">Smart Solutions</span>
                            <h2 className="title" data-animation-in="fadeInUp" data-delay-in=".4" data-duration-in=".6">Best Roofing Services and Consulting</h2>
                            <p data-animation-in="fadeInUp" data-delay-in=".6" data-duration-in=".6">Roofing mbrace change are thriving, building bigger, better,faster, and products than ever Roofing mbrace.</p>
                            <Link href="/project" className="btn" data-animation-in="fadeInUp" data-delay-in=".8" data-duration-in=".6">Discover More</Link>
                        </div>
                    </Slider>
                </div>
                {/* brand-area */}
                <Brand2 />
                {/* brand-area-end */}
            </section>

        </>
    )
}
