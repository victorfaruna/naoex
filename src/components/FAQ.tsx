"use client";
import React, { useState } from "react";

const faqs = [
    {
        question: "What is NanoEx RWA?",
        answer: `NanoEx RWA is a blockchain-powered platform that enables tokenization, trading, and management of real-world assets (RWAs) like real estate, commodities, and collectibles. It provides fractional ownership, enhanced liquidity, and secure investment opportunities, allowing investors to access and trade tokenized assets seamlessly in a decentralized marketplace with global accessibility.`,
    },
    {
        question: "What assets can be tokenized on NanoEx RWA?",
        answer: `NanoEx RWA supports the tokenization of various asset classes, including real estate, fine art, commodities, intellectual property, luxury collectibles, infrastructure, and income-generating assets. By tokenizing these assets, investors can access previously illiquid markets, diversify their portfolios, and trade fractionalized ownership with ease, improving market efficiency and accessibility.`,
    },
    {
        question: "Who are the team behind the project?",
        answer: `Our team consists of industry leaders in blockchain, finance, cybersecurity, and real-world asset tokenization, driving innovation, security, and global adoption at NanoEx RWA.`,
    },
    {
        question: "What are the benefits of investing in tokenized assets?",
        answer: `Tokenized assets offer fractional ownership, 24/7 trading, increased liquidity, secure transactions, and reduced investment costs. Investors can trade globally without restrictions, earn passive income through staking, and benefit from blockchain’s transparent and immutable records. Tokenization eliminates intermediaries, reduces fraud, and provides a seamless, decentralized investment experience with enhanced market efficiency and financial inclusion.`,
    },
    {
        question: "How do I earn passive income with NanoEx RWA?",
        answer: `NanoEx RWA offers multiple passive income opportunities through staking, yield farming, governance participation, and revenue-sharing models. Token holders can stake nRWA tokens to earn high APY rewards, participate in ecosystem governance, and receive revenue from tokenized assets. These mechanisms ensure long-term profitability and sustainable financial growth for investors.`,
    },
    {
        question: "What is the role of the nRWA token?",
        answer: `The nRWA token is the utility and governance token of the NanoEx ecosystem. It provides trading fee discounts (up to 50%), governance voting rights, staking rewards, exclusive access to premium investment opportunities, and powers the platform's operations including tokenization processes and marketplace transactions.`,
    },
    {
        question: "Is NanoEx RWA compliant with regulations?",
        answer: `Yes, NanoEx RWA follows global financial regulations, ensuring that all tokenized assets meet legal, audit, and compliance standards. The platform incorporates identity verification (KYC), anti-money laundering (AML) policies, and smart contract security to maintain a legally compliant and trustworthy investment ecosystem, providing investors with secure and auditable investment opportunities.`,
    },
    {
        question: "How does Real-World Asset tokenization work?",
        answer: `Real-world asset tokenization involves converting physical assets into blockchain-based digital tokens, allowing them to be fractionally owned, traded, and managed securely. Each token represents a share of an asset, providing improved liquidity, transparency, and investment accessibility while ensuring verifiable ownership, automated transactions, and decentralized trading on the NanoEx RWA platform.`,
    },
];

export default function FAQ() {
    // active = index of open panel, or null if all closed
    const [active, setActive] = useState<number | null>(null);

    const toggle = (i: number) => {
        setActive(active === i ? null : i);
    };

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

                    {/* split faqs into two columns */}
                    {[faqs.slice(0, 4), faqs.slice(4)].map((group, col) => (
                        <div key={col} className="col-xl-6 col-lg-6 col-md-12">
                            {group.map((item, idx) => {
                                const i = col * 4 + idx; // global index
                                const isOpen = active === i;
                                return (
                                    <div
                                        key={i}
                                        className={`flat-toggle box-text corner-box${
                                            isOpen ? " active" : ""
                                        }`}
                                    >
                                        <div
                                            className={`h8 toggle-title${
                                                isOpen ? " active" : ""
                                            }`}
                                            onClick={() => toggle(i)}
                                        >
                                            {item.question}
                                        </div>
                                        <p
                                            className="toggle-content"
                                            style={{
                                                display: isOpen
                                                    ? "block"
                                                    : "none",
                                            }}
                                        >
                                            {item.answer}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    ))}

                    <div className="col-md-12">
                        <div
                            className="btn-about center mt-48"
                            data-aos="fade-in"
                            data-aos-duration="800"
                        >
                            <a className="tf-button st2 btn-effect" href="#">
                                <span className="boder-fade"></span>
                                <span className="effect">
                                    Not Satisfied? See more FAQs
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
