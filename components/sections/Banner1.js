import Link from "next/link"
import { useState } from "react"
import Brand1 from "./Brand1"

export default function Banner1() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <section className="banner-area">
                <div className="banner-shape" data-background="/assets/img/banner/banner_shape.jpg" />
                <div className="banner-bg" data-background="/assets/img/banner/banner_bg.jpg">
                    <div className="banner-content">
                        <h2 className="title wow fadeInDown" data-wow-delay=".2s">Best Roofing Services and Consulting</h2>
                        <p className="wow fadeInUp" data-wow-delay=".2s">There are many variations of passages of Lorem as Ipsumoff available, but the majority have suffered alt.</p>
                        <Link href="/project" className="btn wow fadeInUp" data-wow-delay=".4s">Discover More</Link>
                    </div>
                    <div className="banner-tooltip-wrap">
                        <div className={isActive.key == 1 ? "tooltip-item top active" : "tooltip-item top"} onClick={() => handleToggle(1)}>
                            <div className="tooltip-btn pulse">
                                <i className="fas fa-plus" />
                            </div>
                            <div className="tooltip-content">
                                <h2 className="title">Combustion Roof Vent</h2>
                                <p>Suffered alteration in some a goody form, by injected humor, or into the randomized word.</p>
                            </div>
                        </div>
                        <div className={isActive.key == 2 ? "tooltip-item active" : "tooltip-item"} onClick={() => handleToggle(2)}>
                            <div className="tooltip-btn pulse">
                                <i className="fas fa-plus" />
                            </div>
                            <div className="tooltip-content">
                                <h2 className="title">Combustion Roof Vent</h2>
                                <p>Suffered alteration in some a goody form, by injected humor, or into the randomized word.</p>
                            </div>
                        </div>
                        <div className={isActive.key == 3 ? "tooltip-item active" : "tooltip-item"} onClick={() => handleToggle(3)}>
                            <div className="tooltip-btn pulse">
                                <i className="fas fa-plus" />
                            </div>
                            <div className="tooltip-content">
                                <h2 className="title">Combustion Roof Vent</h2>
                                <p>Suffered alteration in some a goody form, by injected humor, or into the randomized word.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* brand-area */}
                <Brand1 />
                {/* brand-area-end */}
            </section>

        </>
    )
}
