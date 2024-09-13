import { useState } from "react"


export default function Work2() {
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
            <section className="work-area-two work-bg" data-background="/assets/img/bg/work_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="section-title text-center mb-60 tg-heading-subheading animation-style3">
                                <span className="sub-title tg-element-title">Meet Our Engineers</span>
                                <h2 className="title tg-element-title">How Our Engineers Work</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="work-inner" data-background="/assets/img/images/h3_work_img.jpg">
                                <div className="work-tooltip-wrap">
                                    <div className={isActive.key == 1 ? "tooltip-item top active" : "tooltip-item top"} onClick={() => handleToggle(1)}>
                                        <div className="tooltip-btn pulse">
                                            <i className="fas fa-plus" />
                                        </div>
                                        <div className="tooltip-content">
                                            <h2 className="title">Combustion Roof Vent</h2>
                                            <p>Suffered alteration in some a goody form, by injected humor, or into the randomized word.</p>
                                        </div>
                                    </div>
                                    <div className={isActive.key == 2 ? "tooltip-item top active" : "tooltip-item top"} onClick={() => handleToggle(2)}>
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
                                    <div className={isActive.key == 4 ? "tooltip-item active" : "tooltip-item"} onClick={() => handleToggle(4)}>
                                        <div className="tooltip-btn pulse">
                                            <i className="fas fa-plus" />
                                        </div>
                                        <div className="tooltip-content">
                                            <h2 className="title">Combustion Roof Vent</h2>
                                            <p>Suffered alteration in some a goody form, by injected humor, or into the randomized word.</p>
                                        </div>
                                    </div>
                                    <div className={isActive.key == 5 ? "tooltip-item active" : "tooltip-item"} onClick={() => handleToggle(5)}>
                                        <div className="tooltip-btn pulse">
                                            <i className="fas fa-plus" />
                                        </div>
                                        <div className="tooltip-content">
                                            <h2 className="title">Combustion Roof Vent</h2>
                                            <p>Suffered alteration in some a goody form, by injected humor, or into the randomized word.</p>
                                        </div>
                                    </div>
                                    <div className={isActive.key == 6 ? "tooltip-item active" : "tooltip-item"} onClick={() => handleToggle(6)}>
                                        <div className="tooltip-btn pulse">
                                            <i className="fas fa-plus" />
                                        </div>
                                        <div className="tooltip-content">
                                            <h2 className="title">Combustion Roof Vent</h2>
                                            <p>Suffered alteration in some a goody form, by injected humor, or into the randomized word.</p>
                                        </div>
                                    </div>
                                    <div className={isActive.key == 7 ? "tooltip-item active" : "tooltip-item"} onClick={() => handleToggle(7)}>
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
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
