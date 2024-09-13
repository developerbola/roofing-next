import Link from "next/link"

export default function Banner3() {
    return (
        <>
            <section className="banner-area-three banner-two" data-background="/assets/img/banner/h4_banner_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="banner-content-three">
                                <h2 className="title wow fadeInUp" data-wow-delay=".2s">Looking For Smart Roofing  Fixing Consulting.</h2>
                                <p className="wow fadeInUp" data-wow-delay=".4s">Our goal is to make it as easy as possible for you to walk into the find like this away find with the solution that suits your needs.</p>
                                <Link href="/project" className="btn wow fadeInUp" data-wow-delay=".6s">Discover More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
