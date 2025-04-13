"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

export default function Featured() {
    const images = [
        {
            src: require("@/assets/images/common/realestate.jpg"),
            label: "Real Estate",
        },
        {
            src: require("@/assets/images/common/commodity.jpg"),
            label: "Commodities",
        },
        {
            src: require("@/assets/images/common/infras.jpg"),
            label: "Infrastructure",
        },
        {
            src: require("@/assets/images/common/vehicle.jpg"),
            label: "Vehicles",
        },
        {
            src: require("@/assets/images/common/art.jpg"),
            label: "Art and Collectibles",
        },
        {
            src: require("@/assets/images/common/ip.jpg"),
            label: "Intellectual Property",
        },
    ];

    return (
        <section className="tf-section tf-project" id="featured">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div
                            className="tf-title st2 m-b50"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <p className="h8 sub-title">
                                Nanoex featured Assets
                            </p>
                            <h4 className="title m-b17">
                                Asset Ownership Across Diverse Asset Classes
                            </h4>
                        </div>
                    </div>
                </div>

                <Swiper
                    modules={[Autoplay, FreeMode]}
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    autoplay={{
                        delay: 1,
                        disableOnInteraction: false,
                    }}
                    freeMode={true}
                    speed={2000}
                    slidesPerView={1}
                    breakpoints={{
                        600: { slidesPerView: 3 },
                        991: { slidesPerView: 3 },
                        1200: { slidesPerView: 3 },
                    }}
                    className="mySwiper"
                    onSwiper={(swiper) => {
                        // Mouse events to stop/start autoplay
                        swiper.el.addEventListener("mouseenter", () =>
                            swiper.autoplay.stop()
                        );
                        swiper.el.addEventListener("mouseleave", () =>
                            swiper.autoplay.start()
                        );
                    }}
                >
                    {images.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="img-box">
                                <Image src={item.src} alt={item.label} />
                                <div className="content">
                                    <a href="#">{item.label}</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
