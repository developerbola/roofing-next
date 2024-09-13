
export default function Appointment3() {
    return (
        <>
            <section className="appointment-area pt-115">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title white-title mb-60">
                                <span className="sub-title">Your roof require professional attention</span>
                                <h2 className="title">Book Your Appointment</h2>
                            </div>
                        </div>
                    </div>
                    <div className="appointment-inner" style={{ backgroundImage: 'url("/assets/img/bg/appointment_bg.jpg")' }}>
                        <div className="row">
                            <div className="col-xl-7">
                                <div className="appointment-form">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input id="name" type="text" placeholder="Fast Name" />
                                                    <label htmlFor="name"><i className="fas fa-user" /></label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input id="lastName" type="text" placeholder="Last Name" />
                                                    <label htmlFor="lastName"><i className="fas fa-user" /></label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input id="phone" type="text" placeholder="Phone Number" />
                                                    <label htmlFor="phone"><i className="fas fa-phone-alt" /></label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input id="email" type="text" placeholder="Email Address" />
                                                    <label htmlFor="email"><i className="fas fa-envelope" /></label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-grp">
                                                    <input id="location" type="text" placeholder="Address" />
                                                    <label htmlFor="location"><i className="fas fa-map-marker-alt" /></label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp select-grp">
                                                    <select name="city" className="orderby">
                                                        <option value="City / Town">City / Town</option>
                                                        <option value="Dhaka, Bangladesh">Dhaka, Bangladesh</option>
                                                        <option value="Baltimore, MD">Baltimore, MD</option>
                                                        <option value="New York, NY">New York, NY</option>
                                                        <option value="New Orleans, LA">New Orleans, LA</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp select-grp">
                                                    <select name="state" className="orderby">
                                                        <option value="State">State</option>
                                                        <option value="Dhaka, Bangladesh">Dhaka, Bangladesh</option>
                                                        <option value="Baltimore, MD">Baltimore, MD</option>
                                                        <option value="New York, NY">New York, NY</option>
                                                        <option value="New Orleans, LA">New Orleans, LA</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-grp">
                                            <textarea name="message" placeholder="Message" />
                                        </div>
                                        <button type="submit" className="btn">Request Submit Now</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-5">
                                <div className="appointment-img">
                                    <img src="/assets/img/images/appointment_img.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
