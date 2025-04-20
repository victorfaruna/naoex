"use client";
import React from "react";
import Image from "next/image";

export default function Partners() {
    const LOGOS = [
        require("@/assets/images/logo/logo1.png"),
        require("@/assets/images/logo/logo9.png"),
        require("@/assets/images/logo/logo3.png"),
        require("@/assets/images/logo/logo4.png"),
        require("@/assets/images/logo/logo5.png"),
        require("@/assets/images/logo/logo6.png"),

        require("@/assets/images/logo/logo10.png"),
        require("@/assets/images/logo/logo11.png"),
        require("@/assets/images/logo/logo12.png"),
    ];
    return (
        <section
            className="tf-section partner bg-st1 pb-mobie-40"
            id="partners"
        >
            <div className="container mb-[40px]">
                <div className="row">
                    {/* Title */}
                    <div className="col-md-12">
                        <div
                            className="tf-title"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <p className="h8 sub-title">
                                Compliance and Partners
                            </p>
                            <h4 className="title mb-[30px]">
                                Compliance and Partnerships
                            </h4>
                        </div>
                    </div>

                    {/* Partners Carousel */}
                    <div className="partners flex justify-center gap-[40px] flex-wrap items-center px-[30px]">
                        {LOGOS.map((logo, index) => (
                            <div className="item w-[100px]" key={index}>
                                <Image
                                    src={logo}
                                    className="w-full object-contain"
                                    alt="logo"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
