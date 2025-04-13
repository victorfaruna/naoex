"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Token() {
    return (
        <section className="tf-section tf-item-details pb-mobie" id="token">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div
                            className="tf-title st2 m-b50"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <h4 className="title m-b17">Tokenomics</h4>
                            <p className="h8 sub-title">NANOEX Utility Token</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div
                            className="image-details"
                            data-aos="fade-right"
                            data-aos-duration="800"
                        >
                            <Image
                                src={require("@/assets/images/common/nanoexchart.png")}
                                alt=""
                            />

                            <a className="tf-button st2 btn-effect" href="#">
                                <span className="boder-fade"></span>
                                <span className="effect">View Whitepaper</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div
                            className="item-details"
                            data-aos="fade-left"
                            data-aos-duration="800"
                        >
                            <h5>$nRWA</h5>
                            <p className="sub">NANOEX UTILITY TOKEN</p>

                            <p className="desc">
                                Welcome to NanoEx RWA, the ultimate platform for
                                tokenizing real-world assets (RWAs) and ushering
                                in a new era of liquidity, accessibility, and
                                security to the investment environment. The
                                NanoEx RWA ecosystem is built on the nRWA token,
                                which provides utility, governance, and
                                exclusive investment opportunities to investors.
                                NanoEx RWA allows for smooth trade,
                                transparency, and increased liquidity by
                                converting traditionally illiquid assets such as
                                real estate, fine art, commodities, and
                                infrastructure into fractionalized digital
                                tokens.
                            </p>
                            <Link href="#" className="tf-button btn-effect">
                                <span className="boder-fade"></span>
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12.8771 4.39102H13.0567C15.4181 4.39102 17.3346 6.26602 17.3346 8.56602V13.166C17.3346 15.466 15.4181 17.3327 13.0567 17.3327H4.94586C2.58446 17.3327 0.667969 15.466 0.667969 13.166V8.56602C0.667969 6.26602 2.58446 4.39102 4.94586 4.39102H5.12553C5.14264 3.39102 5.54477 2.45768 6.27201 1.75768C7.00781 1.04935 7.94894 0.691016 9.00986 0.666016C11.1317 0.666016 12.8514 2.33268 12.8771 4.39102ZM7.17038 2.64935C6.69125 3.11602 6.42602 3.73268 6.40891 4.39102H11.5937C11.5681 3.02435 10.4216 1.91602 9.00987 1.91602C8.35108 1.91602 7.66661 2.17435 7.17038 2.64935ZM12.2525 7.59935C12.6118 7.59935 12.8942 7.31601 12.8942 6.97435V6.00768C12.8942 5.66601 12.6118 5.38268 12.2525 5.38268C11.9017 5.38268 11.6108 5.66601 11.6108 6.00768V6.97435C11.6108 7.31601 11.9017 7.59935 12.2525 7.59935ZM6.31476 6.97435C6.31476 7.31601 6.03242 7.59935 5.67308 7.59935C5.32229 7.59935 5.0314 7.31601 5.0314 6.97435V6.00768C5.0314 5.66602 5.32229 5.38268 5.67308 5.38268C6.03242 5.38268 6.31476 5.66602 6.31476 6.00768V6.97435Z"
                                        fill="white"
                                    />
                                </svg>
                                <span className="effect">Buy $nRWA</span>
                            </Link>
                            <div className="list-product">
                                <div className="box corner-box">
                                    <p>Total Supply</p>
                                    <h6 className="h7">100M $nRWA</h6>
                                </div>
                                <div className="box corner-box">
                                    <p>Initial Circulating Supply</p>
                                    <h6 className="h7">10M $nRWA</h6>
                                </div>

                                <div className="box corner-box">
                                    <p>Private Sale Price</p>
                                    <h6 className="h7">$0.10</h6>
                                </div>

                                <div className="box corner-box">
                                    <p>Public Sale Price</p>
                                    <h6 className="h7">$0.50</h6>
                                </div>
                                <div className="box corner-box">
                                    <p>Token Standard</p>
                                    <h6 className="h7">BEP-20</h6>
                                    <p>Token Decimals</p>
                                    <h6 className="h7">18</h6>
                                </div>
                                <div className="box corner-box">
                                    <p>Blockchain Network</p>
                                    <h6 className="h7">Binance Smart Chain</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
