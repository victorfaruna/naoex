import type { Metadata } from "next";
//fonts..........................
import {
    League_Spartan,
    DM_Sans,
    IBM_Plex_Mono,
    Urbanist,
} from "next/font/google";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";

//CSS module scripts..............
import "./globals.css";
import "@/utils/bootstrap/css/bootstrap.css";
import "@/utils/swiper/swiper-bundle.min.css";
import "@/utils/dist/app.css";

//fonts config....................
const leagueSpartan = League_Spartan({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    style: ["normal"],
    variable: "--font-league-spartan",
    display: "swap",
});

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    style: ["normal", "italic"],
    variable: "--font-dm-sans",
    display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    style: ["normal", "italic"],
    variable: "--font-ibm-plex-mono",
    display: "swap",
});

const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    variable: "--font-urbanist",
    display: "swap",
});

export const metadata: Metadata = {
    title: "NanoEx Real World Asset Exchange",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${leagueSpartan.variable} ${dmSans.variable} ${ibmPlexMono.variable} ${urbanist.variable}`}
        >
            <head>
                <link rel="icon" href="/favicon.png" sizes="any" />
                <link rel="stylesheet" href="/assets/font/font-awesome.css" />
                <link rel="apple-touch-icon-precomposed" href="/favicon.png" />
            </head>
            <body className="header-fixed main">
                <Preloader />
                {/* Header */}
                <Header />
                {/* wrapper */}
                <div id="wrapper"> {children}</div>
                <script src="/js/jquery.min.js"></script>
                <script src="/js/bootstrap.min.js"></script>
                <script src="/js/swiper-bundle.min.js"></script>
                <script src="/js/swiper.js"></script>
                <script src="/js/app.js"></script>
                <script src="/js/jquery.easing.js"></script>
            </body>
        </html>
    );
}
