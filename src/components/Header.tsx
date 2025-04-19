"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo/logo.png";
import { useGlobalStore } from "@/store/global-store";

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
        setMobileMenuOpen(!mobileMenuOpen);
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
    const { theme, setTheme } = useGlobalStore();
    const handledThemeToggle = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        // Add a conditional "nav-open" class when the nav button is toggled.
        <header
            id="header_main"
            className={`header ${mobileMenuOpen === true ? "nav-open" : ""} ${
                isHeaderFixed ? "is-fixed is-small" : ""
            }`}
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

                                <li className={`menu-item`}>
                                    {/* <Link href="#">Theme</Link> */}
                                    <button
                                        className="cursor-pointer"
                                        aria-label="Theme Toggle"
                                        onClick={handledThemeToggle}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#fff"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="#fff"
                                            className="size-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                            />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    )}

                    {/* Mobile Navigation Button – rendered on mobile screens */}
                    {isMobile && (
                        <div className="mobile-buttonn absolute right-[15px]">
                            <button
                                onClick={toggleMobileMenu}
                                aria-label="Toggle mobile menu"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#fff"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="#fff"
                                    className="size-8 transition-all duration-300 ease-in-out"
                                >
                                    {mobileMenuOpen ? (
                                        <path
                                            className="transition-all duration-300 ease-in-out"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18 18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            className="transition-all duration-300 ease-in-out"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                        />
                                    )}
                                </svg>
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
                        <li className={`menu-item`}>
                            {/* <Link href="#">Theme</Link> */}
                            <a
                                className="cursor-pointer"
                                aria-label="Theme Toggle"
                                onClick={handledThemeToggle}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#000"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="#000"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                    />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
