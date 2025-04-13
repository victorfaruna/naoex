"use client";
import React from "react";

export default function Contact() {
    return (
        <section className="tf-section tf-contact" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-12">
                        <div
                            className="content-about m-b50 mobie-40"
                            data-aos="fade-right"
                            data-aos-duration="800"
                        >
                            <div className="tf-title st2 m-b17">
                                <h4 className="title">Have a question </h4>
                            </div>
                            <p className="m-r-40">
                                Fill up the Form and we will revert back within
                                24 hrs.
                            </p>
                        </div>
                        <form
                            action="https://themesflat.co/html/cybox/contact/contact-process.php"
                            className="form-contact"
                            id="contactform"
                            data-aos="fade-right"
                            data-aos-duration="800"
                        >
                            <fieldset>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                />
                            </fieldset>
                            <fieldset>
                                <input
                                    type="email"
                                    name="mail"
                                    id="mail"
                                    placeholder="Email Address"
                                />
                            </fieldset>
                            <fieldset>
                                <input
                                    type="number"
                                    name="phone"
                                    id="phone"
                                    placeholder="Phone"
                                />
                            </fieldset>
                            <fieldset>
                                <textarea
                                    placeholder="Type your Messege"
                                    rows={5}
                                    tabIndex={4}
                                    name="message"
                                    className="message"
                                    id="message"
                                ></textarea>
                            </fieldset>
                            <button
                                className="tf-button btn-effect"
                                type="submit"
                            >
                                <span className="boder-fade"></span>
                                <span className="effect">Send Message</span>
                            </button>
                        </form>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-12">
                        <div
                            className="contact-details p-l150"
                            data-aos="fade-left"
                            data-aos-duration="800"
                        >
                            <div className="adress wrap-fx">
                                <div className="location">
                                    <h6>Location</h6>
                                    <ul>
                                        <li>
                                            Plot 208 Zakaria Maimalari Street,
                                            Central Area, Abuja.
                                        </li>
                                    </ul>
                                </div>
                                <div className="mail">
                                    <h6>Contact Us</h6>
                                    <ul>
                                        <li>+1 666 880 9988</li>
                                        <li>info@nanoex.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="flat-map wow fadeIn animated"
                                data-wow-delay="0.3ms"
                                data-wow-duration="1000ms"
                            >
                                <iframe
                                    className="map-content"
                                    src="https://www.google.com/maps/embed/v1/place?q=Plot+208+Zakaria+Maimalari+Street,+Abuja,+Nigeria&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                                    width="1720"
                                    height="655"
                                    style={{
                                        border: "0px",
                                        visibility: "visible",
                                        animationName: "fadeInUp",
                                    }}
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
