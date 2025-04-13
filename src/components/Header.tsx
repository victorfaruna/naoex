"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo/logo.png";

export default function Header() {
    const headerRef = useRef(null);
    const [isFixed, setIsFixed] = useState(false);
    const [isSmall, setIsSmall] = useState(false);
    const [showSpacer, setShowSpacer] = useState(false);
    const [spacerHeight, setSpacerHeight] = useState(0);

    useEffect(() => {
        // Only run if <body> contains the "header-fixed" class
        if (!document.body.classList.contains("header-fixed")) return;

        const headerEl = headerRef.current as unknown as HTMLElement;
        if (!headerEl) return;

        // Function to update header classes based on scroll position
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            if (scrollTop > 200) {
                setIsFixed(true);
                setShowSpacer(true);
            } else {
                setIsFixed(false);
                setShowSpacer(false);
            }

            if (scrollTop > 300) {
                setIsSmall(true);
            } else {
                setIsSmall(false);
            }
        };

        // Set spacer height based on the header element height
        const updateSpacerHeight = () => {
            if (headerEl) {
                setSpacerHeight(headerEl.offsetHeight);
            }
        };

        // Update spacer height on initial load
        updateSpacerHeight();

        // Attach the event handlers
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("load", handleScroll);
        window.addEventListener("resize", updateSpacerHeight);

        // Cleanup on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("load", handleScroll);
            window.removeEventListener("resize", updateSpacerHeight);
        };
    }, []);

    return (
        <>
            <header
                id="header_main"
                ref={headerRef}
                className={`header ${isFixed ? "is-fixed" : ""} ${
                    isSmall ? "is-small" : ""
                }`}
            >
                <div className="container">
                    <div id="site-header-inner">
                        <div className="header__logo">
                            <Link href="/">
                                <Image src={Logo} alt="Logo" />
                            </Link>
                        </div>
                        <nav id="main-nav" className="main-nav">
                            <ul id="menu-primary-menu" className="menu">
                                <li className="menu-item current-menu-item">
                                    <Link href="/#home">Home</Link>
                                </li>
                                <li className="menu-item">
                                    <Link href="/#about">About</Link>
                                </li>
                                <li className="menu-item">
                                    <Link href="/#featured">Features</Link>
                                </li>
                                <li className="menu-item">
                                    <Link href="/#works">How it works</Link>
                                </li>
                                <li className="menu-item menu-item-has-children">
                                    <Link href="#">More Details</Link>
                                    <ul className="sub-menu">
                                        <li className="menu-item">
                                            <Link href="#">Whitepaper</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="/#token">
                                                Tokenomics
                                            </Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="/#private">
                                                Investors' Club
                                            </Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="/#roadmap">
                                                Roadmap
                                            </Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="/#team">
                                                Meet the Team
                                            </Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="/#partners">
                                                Compliance &amp; Partners
                                            </Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="/#blog">Blog</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="/#faqs">FAQs</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <Link href="/#contact">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="mobile-button">
                            <span></span>
                        </div>
                    </div>
                </div>
            </header>
            {/* Spacer div to preserve layout when header is fixed */}
            {showSpacer && <div style={{ height: spacerHeight }} />}
        </>
    );
}
