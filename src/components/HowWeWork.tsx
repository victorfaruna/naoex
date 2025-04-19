import Image from "next/image";
import React from "react";

export default function HowWeWork() {
    return (
        <section className="tf-section how-we-work style2 bg-st2 " id="works">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-12">
                        <div
                            className="tf-title st2 m-b60"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <p className="h8 sub-title">NanoEx RWA</p>
                            <h4 className="title m-b17">
                                Transforming Real-World Assets into Digital
                                Investments!
                            </h4>
                            <p>
                                Welcome to NanoEx RWA, the ultimate platform for
                                tokenizing real-world assets (RWAs) and
                                unlocking a new era of liquidity, accessibility,
                                and security in the investment landscape. The
                                nRWA token is the backbone of the NanoEx RWA
                                ecosystem, providing utility, governance, and
                                exclusive investment opportunities for
                                investors. By transforming traditionally
                                illiquid assets—like real estate, fine art,
                                commodities, and infrastructure—into
                                fractionalized digital tokens, NanoEx RWA
                                enables seamless trading, transparency, and
                                enhanced liquidity.
                            </p>
                            <a className="tf-button st2 btn-effect" href="#">
                                <span className="boder-fade"></span>
                                <span className="effect">
                                    Enter Marketplace
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-12">
                        <div
                            className="wrap-fx ml30-fx p-l70"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <div className="box-text st2 corner-box active">
                                <Image
                                    className="eco-img"
                                    src={require("@/assets/images/common/asset3.png")}
                                    alt=""
                                />
                                <div className="h7">
                                    Up to 50% Fee Discounts
                                </div>
                                <p>
                                    Reduced trading, tokenization, and custody
                                    fees.
                                </p>
                            </div>
                            <div className="box-text st2 corner-box">
                                <Image
                                    className="eco-img"
                                    src={require("@/assets/images/common/asset3.png")}
                                    alt=""
                                />
                                <div className="h7">
                                    Governance & Voting Rights
                                </div>
                                <p>
                                    Influence platform upgrades, fees, and asset
                                    listings.
                                </p>
                            </div>
                            <div className="box-text st2 mobie-mb-0 mobie-mb-30 corner-box ">
                                <Image
                                    className="eco-img"
                                    src={require("@/assets/images/common/asset3.png")}
                                    alt=""
                                />
                                <div className="h7">
                                    Exclusive Investment Access
                                </div>
                                <p>
                                    Early participation in premium tokenized
                                    assets.
                                </p>
                            </div>
                            <div className="box-text st2 mobie-mb-0 corner-box">
                                <Image
                                    className="eco-img"
                                    src={require("@/assets/images/common/asset3.png")}
                                    alt=""
                                />
                                <div className="h7">Staking & Rewards</div>
                                <p>
                                    Earn high APY staking rewards and platform
                                    incentives.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
