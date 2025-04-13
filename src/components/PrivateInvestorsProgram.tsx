"use client";
import Link from "next/link";
import React from "react";

export default function PrivateInvestorsProgram() {
    return (
        <section className="tf-section tf-about" id="private">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="content-about m-b60 mobie-40">
                            <div
                                className="tf-title"
                                data-aos="fade-up"
                                data-aos-duration="800"
                            >
                                <p className="h8 sub-title">NanoEX</p>
                                <h4 className="title m-b17">
                                    Private Investors' Program
                                </h4>
                            </div>
                            <p className="pd30 center">
                                Designed for strategic investors seeking premium
                                token allocations and early access to RWA
                                Assets.
                            </p>
                        </div>
                    </div>

                    <div
                        className="col-xl-4 col-lg-4 col-md-6"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="800"
                        style={{ marginBottom: "2%" }}
                    >
                        <div className="box-text corner-box active tabl-mb-30">
                            <div className="h7">Platinum</div>
                            <p>
                                Limited to 10 subscribers @ $15,000, receiving
                                0.75% (750,000 nRWA) of the token supply each.
                            </p>
                        </div>
                    </div>
                    <div
                        className="col-xl-4 col-lg-4 col-md-6"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="800"
                    >
                        <div className="box-text corner-box tabl-mb-30">
                            <div className="h7">Diamond</div>
                            <p>
                                Limited to 20 subscribers @ $10,000, receiving
                                0.5% (500,000 nRWA) of the token supply each.
                            </p>
                        </div>
                    </div>
                    <div
                        className="col-xl-4 col-lg-4 col-md-6"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="800"
                    >
                        <div className="box-text corner-box tabl-mb-30">
                            <div className="h7">Gold</div>
                            <p>
                                Limited to 30 subscribers @ $5,000, receiving
                                0.25% (250,000 nRWA) of the token supply each.
                            </p>
                        </div>
                    </div>
                    <div
                        className="col-xl-4 col-lg-4 col-md-6"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="800"
                    >
                        <div className="box-text corner-box tabl-mb-30">
                            <div className="h7">Silver</div>
                            <p>
                                Limited to 50 subscribers @ $3,000, receiving
                                0.15% (150,000 nRWA) of the token supply each.
                            </p>
                        </div>
                    </div>
                    <div
                        className="col-xl-4 col-lg-4 col-md-6"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="800"
                    >
                        <div className="box-text corner-box tabl-mb-30">
                            <div className="h7">Bronze</div>
                            <p>
                                Limited to 100 subscribers @ $2,000, receiving
                                0.1% (100,000 nRWA) of the token supply each.
                            </p>
                        </div>
                    </div>
                    <div
                        className="col-xl-4 col-lg-4 col-md-6"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="800"
                    >
                        <div className="box-text corner-box tabl-mb-30">
                            <div className="h7">Regular</div>
                            <p>
                                Limited to 150 subscribers @ $1,000, receiving
                                0.05% (50,000 nRWA) of the token supply each.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div
                            className="btn-about center mt-48"
                            data-aos="fade-in"
                            data-aos-duration="800"
                        >
                            <Link className="tf-button st2 btn-effect" href="#">
                                <span className="boder-fade"></span>
                                <span className="effect">Secure a Spot</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
