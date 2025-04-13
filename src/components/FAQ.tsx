"use client";
import React from "react";

export default function FAQ() {
    return (
        <section
            className="tf-section faq style3 bg-st2 flat-accordion"
            data-aos="fade-up"
            data-aos-duration="800"
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tf-title m-b60">
                            <p className="h8 sub-title">FAQs</p>
                            <h4 className="title">Looking for answers?</h4>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="flat-toggle box-text corner-box active">
                            <div className="h7 toggle-title active">
                                What is NanoEx RWA?
                            </div>
                            <p className="toggle-content">
                                {" "}
                                NanoEx RWA is a blockchain-powered platform that
                                enables tokenization, trading, and management of
                                real-world assets (RWAs) like real estate,
                                commodities, and collectibles. It provides
                                fractional ownership, enhanced liquidity, and
                                secure investment opportunities, allowing
                                investors to access and trade tokenized assets
                                seamlessly in a decentralized marketplace with
                                global accessibility.
                            </p>
                        </div>
                        <div className="flat-toggle box-text corner-box">
                            <div className="h7 toggle-title">
                                What assets can be tokenized on NanoEx RWA?
                            </div>
                            <p className="toggle-content">
                                NanoEx RWA supports the tokenization of various
                                asset classes, including real estate, fine art,
                                commodities, intellectual property, luxury
                                collectibles, infrastructure, and
                                income-generating assets. By tokenizing these
                                assets, investors can access previously illiquid
                                markets, diversify their portfolios, and trade
                                fractionalized ownership with ease, improving
                                market efficiency and accessibility.
                            </p>
                        </div>
                        <div className="flat-toggle box-text corner-box">
                            <div className="h7 toggle-title">
                                Who are the team behind the project?
                            </div>
                            <p className="toggle-content">
                                Our team consists of industry leaders in
                                blockchain, finance, cybersecurity, and
                                real-world asset tokenization, driving
                                innovation, security, and global adoption at
                                NanoEx RWA.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="flat-toggle box-text corner-box">
                            <div className="h7 toggle-title">
                                What are the benefits of investing in tokenized
                                assets?
                            </div>
                            <p className="toggle-content">
                                Tokenized assets offer fractional ownership,
                                24/7 trading, increased liquidity, secure
                                transactions, and reduced investment costs.
                                Investors can trade globally without
                                restrictions, earn passive income through
                                staking, and benefit from blockchain’s
                                transparent and immutable records. Tokenization
                                eliminates intermediaries, reduces fraud, and
                                provides a seamless, decentralized investment
                                experience with enhanced market efficiency and
                                financial inclusion.
                            </p>
                        </div>
                        <div className="flat-toggle box-text corner-box">
                            <div className="h7 toggle-title">
                                What is the role of the nRWA token?
                            </div>
                            <p className="toggle-content">
                                The nRWA token is the utility and governance
                                token of the NanoEx ecosystem. It provides
                                trading fee discounts (up to 50%), governance
                                voting rights, staking rewards, exclusive access
                                to premium investment opportunities, and powers
                                the platform's operations including tokenization
                                processes and marketplace transactions.
                            </p>
                        </div>
                        <div className="flat-toggle box-text corner-box">
                            <div className="h7 toggle-title">
                                Is NanoEx RWA compliant with regulations?
                            </div>
                            <p className="toggle-content">
                                Yes, NanoEx RWA follows global financial
                                regulations, ensuring that all tokenized assets
                                meet legal, audit, and compliance standards. The
                                platform incorporates identity verification
                                (KYC), anti-money laundering (AML) policies, and
                                smart contract security to maintain a legally
                                compliant and trustworthy investment ecosystem,
                                providing investors with secure and auditable
                                investment opportunities
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
