"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const TEAM_DATA = [
    {
        name: "Michael Briggs",
        title: "Chief Executive Officer (CEO)",
        image: require("@/assets/images/common/leader-2.png"),
    },
    {
        name: "Rotimi Micheal",
        title: "Chief Operations Officer (COO)",
        image: require("@/assets/images/common/leader-10.png"),
    },
    {
        name: "Dancharles Tonye",
        title: "Chief Technical Officer (CTO)",
        image: require("@/assets/images/common/leader-11.png"),
    },
    {
        name: "Gabriel Idakolo",
        title: "Chief Financial Officer (CFO)",
        image: require("@/assets/images/common/leader-7.png"),
    },
    {
        name: "Pius Onoja",
        title: "Chief Marketing Officer (CMO)",
        image: require("@/assets/images/common/leader-9.png"),
    },
    {
        name: "Goni Musa Tijjani",
        title: "Head of Customer Support (HCS)",
        image: require("@/assets/images/common/leader-3.png"),
    },
    {
        name: "Muhammad Tahiri",
        title: "Chief Cyber Security Officer (CSO)",
        image: require("@/assets/images/common/leader-1.png"),
    },
    {
        name: "Samuel Bright",
        title: "Assist. Operations Officer (ACOO)",
        image: require("@/assets/images/common/leader-5.png"),
    },
    {
        name: "Salimon Sarafadeen",
        title: "Chief Compliance Officer (CCO)",
        image: require("@/assets/images/common/leader-6.png"),
    },
    {
        name: "Olanrewaju Hussein",
        title: "Deputy Compliance Officer (DCCO)",
        image: require("@/assets/images/common/leader-12.png"),
    },
    {
        name: "Idowu Olayemi",
        title: "Deputy of Customer Service (DHCS)",
        image: require("@/assets/images/common/leader-13.png"),
    },
    {
        name: "Olowu Azeez Babs",
        title: "Deputy Marketing Officer (DCMO)",
        image: require("@/assets/images/common/leader-8.png"),
    },
    {
        name: "Omega Igbudu",
        title: "Deputy Operations Officer (DCOO)",
        image: require("@/assets/images/common/leader-4.png"),
    },
];

export default function OurTeam() {
    return (
        <section className="tf-section tf-team style2 bg-st1" id="team">
            <div className="container">
                <div className="row">
                    {/* Left column with text and custom navigation buttons */}
                    <div className="col-xl-5 col-lg-5 col-md-6 col-12">
                        <div
                            className="tf-title st2 m-b61"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <p className="h8 sub-title">Nanoex Leadership</p>
                            <h4 className="title">Meet the TEAM</h4>
                        </div>
                        <div
                            className="content mobie-30"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <p>
                                Our team consists of industry leaders in
                                blockchain, finance, cybersecurity, and
                                real-world asset tokenization, driving
                                innovation, security, and global adoption at
                                NanoEx RWA.
                            </p>
                        </div>
                        <div
                            className="button-fx m-t60"
                            data-aos="fade-in"
                            data-aos-duration="800"
                        >
                            {/* These are the custom navigation elements referenced in Swiper configuration */}
                            <div className="btn-prev button-prev-team">
                                <i className="far fa-chevron-left"></i>
                            </div>
                            <div className="btn-next button-next-team">
                                <i className="far fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>

                    {/* Right column with Swiper slider */}
                    <div className="col-xl-7 col-lg-7 col-md-6 col-12">
                        <div
                            className="wrap-team"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={false}
                                navigation={{
                                    nextEl: ".button-next-team",
                                    prevEl: ".button-prev-team",
                                }}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        spaceBetween: 30,
                                    },
                                    700: {
                                        slidesPerView: 1,
                                        spaceBetween: 30,
                                    },
                                    991: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    1280: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                }}
                            >
                                {TEAM_DATA.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="team-box">
                                            <div className="image">
                                                <Image
                                                    src={item.image}
                                                    alt="Michael Briggs"
                                                />
                                            </div>
                                            <div className="content">
                                                <div className="h8">
                                                    {item.name}
                                                </div>
                                                <p>{item.title}</p>
                                                <ul className="social">
                                                    <li>
                                                        <Link href="#">
                                                            <Image
                                                                src={require("@/assets/images/logo/linkedin.svg")}
                                                                width="14"
                                                                height="12"
                                                                alt="LinkedIn"
                                                            />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            <Image
                                                                src={require("@/assets/images/logo/x.svg")}
                                                                width="14"
                                                                height="12"
                                                                alt="X"
                                                            />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            <svg
                                                                width="18"
                                                                height="16"
                                                                viewBox="0 0 18 16"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M17.0824 0.50766C16.7958 0.267252 16.3457 0.232854 15.8803 0.417696H15.8795C15.3901 0.611989 2.02437 6.28352 1.48027 6.51523C1.3813 6.54925 0.517004 6.86829 0.606032 7.57893C0.685508 8.21964 1.38016 8.485 1.46498 8.51561L4.86296 9.66663C5.08839 10.409 5.91945 13.148 6.10324 13.7332C6.21787 14.0979 6.40471 14.5772 6.73217 14.6759C7.0195 14.7855 7.30531 14.6853 7.49024 14.5417L9.5677 12.6354L12.9213 15.2229L13.0012 15.2701C13.2289 15.3699 13.4471 15.4198 13.6554 15.4198C13.8162 15.4198 13.9706 15.3899 14.1181 15.3302C14.6205 15.1261 14.8215 14.6525 14.8425 14.5988L17.3475 1.71764C17.5004 1.02968 17.2879 0.679651 17.0824 0.50766ZM7.85973 10.127L6.71344 13.151L5.56716 9.37103L14.3554 2.94501L7.85973 10.127Z"
                                                                    fill="white"
                                                                />
                                                            </svg>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}

                                {/* Continue adding additional slides for all team members as in your original HTML */}
                            </Swiper>
                        </div>
                    </div>

                    {/* Optional extra navigation buttons if needed (you can remove these if you already have them in your text column) */}
                    <div className="col-md-12">
                        <div className="swiper-button-next btn-slide-next"></div>
                        <div className="swiper-button-prev btn-slide-prev active"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
