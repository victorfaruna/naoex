"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function Partners() {
    return (
        <section
            className="tf-section partner bg-st1 pb-mobie-40"
            id="partners"
        >
            <div className="container">
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
                            <h4 className="title">
                                Compliance and Partnerships
                            </h4>
                        </div>
                    </div>

                    {/* Partners Carousel */}
                    <div className="col-md-12">
                        <div
                            className="item-parner"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            {/* First Swiper Carousel */}
                            <Swiper
                                slidesPerView={2}
                                loop={false}
                                spaceBetween={30}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    400: {
                                        slidesPerView: 2,
                                        spaceBetween: 60,
                                    },
                                    600: {
                                        slidesPerView: 3,
                                        spaceBetween: 60,
                                    },
                                    750: {
                                        slidesPerView: 4,
                                        spaceBetween: 60,
                                    },
                                    991: {
                                        slidesPerView: 5,
                                        spaceBetween: 60,
                                    },
                                    1280: {
                                        slidesPerView: 6,
                                        spaceBetween: 60,
                                    },
                                }}
                                className="swiper-container sl-parner"
                            >
                                <SwiperSlide>
                                    <div className="image">
                                        <Image
                                            src={require("@/assets/images/logo/logo1.png")}
                                            alt="Logo 1"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="image">
                                        <Image
                                            src={require("@/assets/images/logo/logo2.png")}
                                            alt="Logo 2"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="image">
                                        <Image
                                            src={require("@/assets/images/logo/logo3.png")}
                                            alt="Logo 3"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="image">
                                        <Image
                                            src={require("@/assets/images/logo/logo4.png")}
                                            alt="Logo 4"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="image">
                                        <Image
                                            src={require("@/assets/images/logo/logo5.png")}
                                            alt="Logo 5"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="image">
                                        <Image
                                            src={require("@/assets/images/logo/logo6.png")}
                                            alt="Logo 6"
                                        />
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                            {/* Second Swiper Carousel */}
                            <Swiper
                                slidesPerView={2}
                                loop={false}
                                spaceBetween={30}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    400: {
                                        slidesPerView: 2,
                                        spaceBetween: 60,
                                    },
                                    600: {
                                        slidesPerView: 3,
                                        spaceBetween: 60,
                                    },
                                    750: {
                                        slidesPerView: 4,
                                        spaceBetween: 60,
                                    },
                                    991: {
                                        slidesPerView: 5,
                                        spaceBetween: 60,
                                    },
                                    1280: {
                                        slidesPerView: 6,
                                        spaceBetween: 60,
                                    },
                                }}
                                className="swiper-container sl-parner"
                            >
                                <SwiperSlide>
                                    <div className="image">
                                        <Image
                                            src={require("@/assets/images/logo/logo7.png")}
                                            alt="Logo 7"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="image">
                                        <Image
                                            src={require("@/assets/images/logo/logo8.png")}
                                            alt="Logo 8"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="image">
                                        <Image
                                            src={require("@/assets/images/logo/logo9.png")}
                                            alt="Logo 9"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="image">
                                        <Image
                                            src={require("@/assets/images/logo/logo10.png")}
                                            alt="Logo 10"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="image">
                                        <Image
                                            src={require("@/assets/images/logo/logo11.png")}
                                            alt="Logo 11"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="image">
                                        <Image
                                            src={require("@/assets/images/logo/logo12.png")}
                                            alt="Logo 12"
                                        />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
