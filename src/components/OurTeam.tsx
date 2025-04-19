"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Team data
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
                    <div className="col-md-12">
                        <div
                            className="tf-title st2"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <p className="h8 sub-title">NanoEx Leadership</p>
                            <h4 className="title">Meet the TEAM</h4>
                        </div>
                        <div
                            className="content mobie-30"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <p className="m-b50">
                                Our team consists of industry leaders in
                                blockchain, finance, cybersecurity, and
                                real-world asset tokenization, driving
                                innovation, security, and global adoption at
                                NanoEx RWA.
                            </p>
                        </div>
                    </div>

                    <div
                        className="col-12"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                nextEl: ".button-next-team",
                                prevEl: ".button-prev-team",
                            }}
                            spaceBetween={30}
                            slidesPerView={4}
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                500: { slidesPerView: 3 },
                                1024: { slidesPerView: 4 },
                            }}
                        >
                            {TEAM_DATA.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="team-box">
                                        <div className="image">
                                            <Image
                                                className="object-cover"
                                                src={item.image}
                                                alt={item.name}
                                            />
                                        </div>
                                        <div className="content">
                                            <div className="h8">
                                                {item.name}
                                            </div>
                                            <p>{item.title}</p>
                                            <ul className="social">
                                                <li>
                                                    <a href="#">
                                                        <Image
                                                            alt=""
                                                            src={require("@/assets/images/logo/linkedin.svg")}
                                                            width={14}
                                                            height={12}
                                                        />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <Image
                                                            alt=""
                                                            className="object-fit"
                                                            src={require("@/assets/images/logo/x.svg")}
                                                            width={14}
                                                            height={12}
                                                        />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="col-md-12">
                        <div
                            className="button-fx m-t20"
                            data-aos="fade-in"
                            data-aos-duration="800"
                        >
                            <div className="btn-prev button-prev-team">
                                <i className="far fa-chevron-left"></i>
                            </div>
                            <div className="btn-next button-next-team">
                                <i className="far fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
