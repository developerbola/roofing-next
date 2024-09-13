
export default function Appointment2() {
    return (
        <>
            <section className="appointment-area-two pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appointment-inner-two tg-heading-subheading animation-style3" data-background="/assets/img/bg/appointment_bg.jpg">
                                <h2 className="title tg-element-title">Book Your Appointment</h2>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-grp">
                                                <input type="text" placeholder="Your Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-grp">
                                                <input type="text" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-grp">
                                                <input type="text" placeholder="Location" />
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="form-grp">
                                                <textarea name="message" placeholder="Message" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <button type="submit" className="btn">Book for Inspection</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
