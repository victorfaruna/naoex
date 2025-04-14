"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo/logo.png";

// Define your menu data so you can easily iterate over it.
const menuItems = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Features", href: "/#featured" },
    { label: "How it works", href: "/#works" },
    {
        label: "More Details",
        href: "#",
        submenu: [
            { label: "Whitepaper", href: "#" },
            { label: "Tokenomics", href: "/#token" },
            { label: "Investors' Club", href: "/#private" },
            { label: "Roadmap", href: "/#roadmap" },
            { label: "Meet the Team", href: "/#team" },
            { label: "Compliance & Partners", href: "/#partners" },
            { label: "Blog", href: "/#blog" },
            { label: "FAQs", href: "/#faqs" },
        ],
    },
    { label: "Contact", href: "/#contact" },
];

export default function Header() {
    // Manage if mobile view is active based on window width.
    const [isMobile, setIsMobile] = useState(false);
    // Manage whether the main mobile menu is open.
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // Manage open/close state of submenus.
    const [submenuOpen, setSubmenuOpen] = useState<Record<number, boolean>>({});

    // State to track if header is fixed (scrolled past threshold).
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

    // Update isMobile state based on viewport width.
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 991px)");
        const handleMediaChange = (e: any) => {
            setIsMobile(e.matches);
            if (!e.matches) {
                setMobileMenuOpen(false);
                setSubmenuOpen({});
            }
        };
        handleMediaChange(mediaQuery);
        mediaQuery.addEventListener("change", handleMediaChange);
        return () => {
            mediaQuery.removeEventListener("change", handleMediaChange);
        };
    }, []);

    // Toggle the main mobile menu.
    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    // Toggle a submenu by its menu index.
    const toggleSubmenu = (index: any) => {
        setSubmenuOpen((prev: any) => ({ ...prev, [index]: !prev[index] }));
    };

    // Fixed header functionality.
    useEffect(() => {
        // Only apply the fixed header behavior if the body has the "header-fixed" class.
        if (!document.body.classList.contains("header-fixed")) return;

        const nav = document.getElementById("header_main") as HTMLElement;
        if (!nav) return;

        // Create an injected space element after the header for layout preservation.
        const injectSpace = document.createElement("div");
        nav.parentNode!.insertBefore(injectSpace, nav.nextSibling);

        const handleScroll = () => {
            const scrollPos = window.scrollY;

            // When scrolling past 200px, add the fixed class and update state.
            if (scrollPos > 200) {
                nav.classList.add("is-fixed");
                injectSpace.style.display = "block";
                setIsHeaderFixed(true);
            } else {
                nav.classList.remove("is-fixed");
                injectSpace.style.display = "none";
                setIsHeaderFixed(false);
            }

            // Change header style further if scrolling beyond 300px.
            if (scrollPos > 300) {
                nav.classList.add("is-small");
            } else {
                nav.classList.remove("is-small");
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("load", handleScroll);

        handleScroll(); // initial check on mount

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("load", handleScroll);
            if (injectSpace && injectSpace.parentNode) {
                injectSpace.parentNode.removeChild(injectSpace);
            }
        };
    }, []);

    return (
        // Add a conditional "nav-open" class when the nav button is toggled.
        <header
            id="header_main"
            className={`header ${mobileMenuOpen ? "nav-open" : ""}`}
        >
            <div className="container">
                <div id="site-header-inner">
                    <div className="header__logo">
                        <Link href="/">
                            <Image src={Logo} alt="Logo" />
                        </Link>
                    </div>
                    {/* Desktop Navigation – always visible when not in mobile view */}
                    {!isMobile && (
                        <nav id="main-nav" className="main-nav">
                            <ul id="menu-primary-menu" className="menu">
                                {menuItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`menu-item ${
                                            item.submenu
                                                ? "menu-item-has-children"
                                                : ""
                                        } ${
                                            index === 0
                                                ? "current-menu-item"
                                                : ""
                                        }`}
                                    >
                                        <Link href={item.href}>
                                            {item.label}
                                        </Link>
                                        {item.submenu && (
                                            <ul className="sub-menu">
                                                {item.submenu.map(
                                                    (sub, subIndex) => (
                                                        <li
                                                            key={subIndex}
                                                            className="menu-item"
                                                        >
                                                            <Link
                                                                href={sub.href}
                                                            >
                                                                {sub.label}
                                                            </Link>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}

                    {/* Mobile Navigation Button – rendered on mobile screens */}
                    {isMobile && (
                        <div className="mobile-button">
                            <button
                                onClick={toggleMobileMenu}
                                aria-label="Toggle mobile menu"
                            >
                                <span
                                    className={mobileMenuOpen ? "active" : ""}
                                ></span>
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Navigation – this nav will display when the user clicks the nav button.
          With the header now having a "nav-open" class (when mobileMenuOpen is true),
          you can control its appearance via CSS, even when the header is fixed after scrolling. */}
            {isMobile && mobileMenuOpen && (
                <nav id="main-nav-mobi" className="main-nav mobile-nav">
                    <ul id="menu-primary-menu" className="menu">
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className={`menu-item ${
                                    item.submenu ? "menu-item-has-children" : ""
                                } ${index === 0 ? "current-menu-item" : ""}`}
                            >
                                {item.submenu ? (
                                    <>
                                        <Link href={item.href}>
                                            {item.label}
                                        </Link>
                                        <span
                                            className="arrow"
                                            onClick={() => toggleSubmenu(index)}
                                            style={{ cursor: "pointer" }}
                                        ></span>
                                        <ul
                                            className="sub-menu"
                                            style={{
                                                display: submenuOpen[index]
                                                    ? "block"
                                                    : "none",
                                            }}
                                        >
                                            {item.submenu.map(
                                                (sub, subIndex) => (
                                                    <li
                                                        key={subIndex}
                                                        className="menu-item"
                                                    >
                                                        <Link href={sub.href}>
                                                            {sub.label}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </>
                                ) : (
                                    <Link href={item.href}>{item.label}</Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}
