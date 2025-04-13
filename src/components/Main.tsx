"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import itemSlider from "@/assets/images/common/itemslider.png";

//Swiper modules..........
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//AOS animation modules..............
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "./Typewriter";

export default function Main() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
        });
    }, []);
    return (
        <section className="page-title" id="home">
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                loop={false}
                spaceBetween={0}
                navigation={{
                    nextEl: ".btn-next-main",
                    prevEl: ".btn-prev-main",
                }}
                pagination={{
                    el: ".swiper-pagination",
                    clickable: true,
                }}
                breakpoints={{
                    1280: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                }}
                className="slider-main"
            >
                <SwiperSlide>
                    <div className="slider-st1">
                        <div className="overlay"></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="box-slider">
                                        <div className="content-box">
                                            <Typewriter
                                                toRotate={[
                                                    "Real World Assets.",
                                                    "Commodities.",
                                                    "Infrastructure.",
                                                    "Real Estate.",
                                                    "Collectibles.",
                                                    "Gold Bars.",
                                                    "Digital Assets.",
                                                    "Land.",
                                                    "Luxury Apartments.",
                                                    "Office Buildings.",
                                                ]}
                                                period={5000}
                                            />
                                            {/* <h1
                                                className="title typewrite"
                                                data-period="2000"
                                                data-type='[ "Real World Assets.", "Commodities.", "Infrastructure.", "Real Estate.", "Collectibles.", "Gold Bars.", "Digital Assets.", "Land.", "Luxury Apartments.", "Office Buildings."]'
                                            >
                                                <span className="wrap"></span>
                                            </h1> */}
                                            <p
                                                className="sub-title"
                                                style={{ fontSize: "24px" }}
                                            >
                                                Own a share of high-value Real
                                                World Assets with as low as{" "}
                                                <b>$100</b> through
                                                Tokenization.
                                            </p>
                                            <div className="wrap-btn">
                                                <a
                                                    href="#"
                                                    className="tf-button-st2 btn-effect"
                                                    data-toggle="#"
                                                    data-target="#popup_bid"
                                                >
                                                    <span className="effect">
                                                        Secure a Spot
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="image">
                                            <Image
                                                src={itemSlider}
                                                alt="Slide image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Add more <SwiperSlide> as needed */}

                {/* External Navigation */}
                <div className="btn-prev-main">Prev</div>
                <div className="btn-next-main">Next</div>
                <div className="swiper-pagination"></div>
            </Swiper>
        </section>
    );
}
