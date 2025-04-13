"use client";
import React from "react";
import dynamic from "next/dynamic";
const Countdown = dynamic(() => import("@/components/Countdown"), {
    ssr: false,
});

export default function ComingSoon() {
    return (
        <section className="page-title comimg-soon" style={{ height: "30%" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12" style={{ paddingTop: "30px" }}>
                        <div className="featured-countdown">
                            <span className="slogan"></span>

                            {/* 🟢 Countdown React Component */}
                            <Countdown timer={1865550} />

                            <ul className="desc">
                                <li>Days</li>
                                <li>Hours</li>
                                <li>Minutes</li>
                                <li>Seconds</li>
                            </ul>
                        </div>
                        <div className="col-md-12">
                            <div className="sub-heading">
                                <span>JOIN</span>
                                <span>OUR</span>
                                <span>TOKEN LAUNCHLIST</span>
                            </div>
                        </div>
                        <form
                            action="#"
                            className="newlletter-form"
                            id="subscribe-form"
                        >
                            <span></span>
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                required
                                id="subscribe-email"
                            />
                            <div className="btn-pst">
                                <button
                                    className="tf-button-st2 btn-effect"
                                    type="submit"
                                    id="subscribe-button"
                                >
                                    <span className="effect">JOIN</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
