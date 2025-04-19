import Image from "next/image";
import React from "react";

export default function Ecosystem() {
    return (
        <section className="tf-section how-we-work style2 bg-st2 " id="works">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <div
                            className="tf-title m-b60"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <p className="h8 sub-title">Key Features of the </p>
                            <h4 className="m-b17">NanoEx Ecosystem</h4>
                            <p>
                                The NanoEx RWA ecosystem is designed to provide
                                a seamless and secure experience for tokenizing,
                                trading, and managing real-world assets. With
                                its advanced blockchain infrastructure, users
                                benefit from enhanced liquidity, fractional
                                ownership, and global accessibility.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <div
                            className="wrap-fx ml30-fx"
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
                                    Advanced RWA Tokenization
                                </div>
                                <p>
                                    Enables secure and seamless conversion of
                                    real-world assets into blockchain-based
                                    tokens, ensuring legal ownership
                                    verification, valuation, & regulatory
                                    compliance.
                                </p>
                            </div>
                            <div className="box-text st2 corner-box">
                                <Image
                                    className="eco-img"
                                    src={require("@/assets/images/common/asset3.png")}
                                    alt=""
                                />
                                <div className="h7">Dual Token Models</div>
                                <p>
                                    Supports BEP-20 fungible tokens for
                                    fractional ownership and BEP-721/BEP-1155
                                    non-fungible tokens for unique assets,
                                    offering flexibility in RWA asset
                                    tokenization.
                                </p>
                            </div>
                            <div className="box-text st2 mobie-mb-0 mobie-mb-30 corner-box ">
                                <Image
                                    className="eco-img"
                                    src={require("@/assets/images/common/asset3.png")}
                                    alt=""
                                />
                                <div className="h7">
                                    Secure & Transparent Transactions
                                </div>
                                <p>
                                    All transactions are recorded on the
                                    blockchain, ensuring immutability, fraud
                                    prevention, and verifiable ownership for
                                    secure asset trading, investment, &
                                    management.
                                </p>
                            </div>
                            <div className="box-text st2 mobie-mb-0 corner-box">
                                <Image
                                    className="eco-img"
                                    src={require("@/assets/images/common/asset3.png")}
                                    alt=""
                                />
                                <div className="h7">
                                    Global Liquidity Access
                                </div>
                                <p>
                                    Trade tokenized assets in a decentralized
                                    marketplace with market-making, staking
                                    incentives, and fiat-to-crypto conversion
                                    for seamless liquidity and accessibility.
                                </p>
                            </div>
                            <div className="box-text st2 corner-box active">
                                <Image
                                    className="eco-img"
                                    src={require("@/assets/images/common/asset3.png")}
                                    alt=""
                                />
                                <div className="h7">
                                    Comprehensive Platform Integration
                                </div>
                                <p>
                                    Features NFT marketplace, fiat-to-crypto
                                    gateway, governance portal, launchpad,
                                    trading bots, staking, reward hub, and a
                                    global crypto card for real-world
                                    transactions.
                                </p>
                            </div>
                            <div className="box-text st2 corner-box">
                                <Image
                                    className="eco-img"
                                    src={require("@/assets/images/common/asset3.png")}
                                    alt=""
                                />
                                <div className="h7">
                                    Exclusive Investment Opportunities
                                </div>
                                <p>
                                    Provides early access to premium assets,
                                    revenue-sharing models, and customized
                                    investment strategies, benefiting nRWA token
                                    holders and institutional investors.
                                </p>
                            </div>
                            <div className="box-text st2 mobie-mb-0 mobie-mb-30 corner-box ">
                                <Image
                                    className="eco-img"
                                    src={require("@/assets/images/common/asset3.png")}
                                    alt=""
                                />
                                <div className="h7">
                                    Scalable & Cross-Chain Compatibility
                                </div>
                                <p>
                                    Designed for multi-chain functionality,
                                    ensuring interoperability, scalability, and
                                    cross-border asset tokenization across
                                    global blockchain networks for efficiency.
                                </p>
                            </div>
                            <div className="box-text st2 mobie-mb-0 corner-box">
                                <Image
                                    className="eco-img"
                                    src={require("@/assets/images/common/asset3.png")}
                                    alt=""
                                />
                                <div className="h7">Diverse Asset Classes</div>
                                <p>
                                    Tokenizes real estate, commodities,
                                    infrastructure, vehicles, art, collectibles,
                                    and intellectual property, unlocking global
                                    investment accessibility and liquidity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
