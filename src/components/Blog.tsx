"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function Blog() {
    return (
        <section
            className="tf-section item-post pb-mobie35 st3 bg-st1"
            id="blog"
        >
            <div className="container">
                <div className="row">
                    {/* Title and description */}
                    <div className="col-md-12">
                        <div
                            className="content-about m-b60 mobie-40"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <div className="tf-title">
                                <p className="h8 sub-title">NanoEX Blogs</p>
                                <h4 className="title">Latest News</h4>
                            </div>
                        </div>
                    </div>
                    {/* Swiper slider */}
                    <div className="col-md-12">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={false}
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            }}
                            breakpoints={{
                                500: {
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                },
                                750: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                991: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1280: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1300: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                },
                            }}
                            className="hv2 sl-post3 btn-style" // you can retain any classes from original markup
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="800"
                        >
                            {/* Slide 1 */}
                            <SwiperSlide>
                                <div className="post-item">
                                    <div className="wrap">
                                        <div className="tag">Asset</div>
                                        <div className="image">
                                            <Image
                                                src={require("@/assets/images/post/house.jpg")}
                                                alt="Why Choose NanoEx RWA?"
                                            />
                                        </div>
                                        <div className="content-item">
                                            <div className="content">
                                                <div className="h7 title">
                                                    <a href="#">
                                                        Why Choose NanoEx RWA?
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Slide 2 */}
                            <SwiperSlide>
                                <div className="post-item">
                                    <div className="tag">Asset</div>
                                    <div className="wrap">
                                        <div className="image">
                                            <Image
                                                src={require("@/assets/images/post/p2p.jpg")}
                                                alt="Up to 5x on ROI"
                                            />
                                        </div>
                                        <div className="content-item">
                                            <div className="content">
                                                <div className="h7 title">
                                                    <a href="#">
                                                        Up to 5x on ROI
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Slide 3 */}
                            <SwiperSlide>
                                <div className="post-item">
                                    <div className="tag">Collectible</div>
                                    <div className="wrap">
                                        <div className="image">
                                            <Image
                                                src={require("@/assets/images/post/house2.jpg")}
                                                alt="Luxury Service Units"
                                            />
                                        </div>
                                        <div className="content-item">
                                            <div className="content">
                                                <div className="h7 title">
                                                    <a href="#">
                                                        Luxury Service Units
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Slide 4 */}
                            <SwiperSlide>
                                <div className="post-item">
                                    <div className="wrap">
                                        <div className="tag">
                                            Infrastructure
                                        </div>
                                        <div className="image">
                                            <Image
                                                src={require("@/assets/images/post/office.jpg")}
                                                alt="Co-Working Fractional Spaces"
                                            />
                                        </div>
                                        <div className="content-item">
                                            <div className="content">
                                                <div className="h7 title">
                                                    <a href="#">
                                                        Co-Working Fractional
                                                        Spaces
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Add more <SwiperSlide> as needed */}
                        </Swiper>
                        {/* Custom navigation buttons */}
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
