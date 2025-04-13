"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FeaturedSecond() {
    return (
        <section className="tf-section featured bg-st1">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div
                            className="tf-title st2 m-b50"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <p className="h8 sub-title">NANOEX Ecosystem</p>
                            <h4 className="title m-b17">
                                More Benefits through our Ecosystem
                            </h4>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div
                            className="featured-box"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <div className="img-box">
                                <Image
                                    src={require("@/assets/images/common/market.png")}
                                    alt=""
                                />
                                <div className="content">
                                    <a href="#">RWA Marketplace</a>
                                </div>
                            </div>
                            <div className="img-box">
                                <Image
                                    src={require("@/assets/images/common/paym.png")}
                                    alt=""
                                />
                                <div className="content">
                                    <Link href="#">NanoPay</Link>
                                </div>
                            </div>
                            <div className="img-box">
                                <Image
                                    src={require("@/assets/images/common/affiliate.jpg")}
                                    alt=""
                                />
                                <div className="content">
                                    <Link href="#">Affiliate Program</Link>
                                </div>
                            </div>
                            <div className="img-box">
                                <Image
                                    src={require("@/assets/images/common/p2p.jpg")}
                                    alt=""
                                />
                                <div className="content">
                                    <Link href="#">Fiat-to-Crypto (P2P)</Link>
                                </div>
                            </div>
                            <div className="img-box">
                                <Image
                                    src={require("@/assets/images/common/launch.png")}
                                    alt=""
                                />
                                <div className="content">
                                    <Link href="#">Launchpad</Link>
                                </div>
                            </div>
                            <div className="img-box">
                                <Image
                                    src={require("@/assets/images/common/card2.jpg")}
                                    alt=""
                                />
                                <div className="content">
                                    <Link href="#">Reward Hub</Link>
                                </div>
                            </div>
                            <div className="img-box">
                                <Image
                                    src={require("@/assets/images/common/asset2.png")}
                                    alt=""
                                />
                                <div className="content">
                                    <a href="#">Asset Management</a>
                                </div>
                            </div>
                            <div className="img-box">
                                <Image
                                    src={require("@/assets/images/common/card.png")}
                                    alt=""
                                />
                                <div className="content">
                                    <Link href="#">Debit Crypto Card</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
