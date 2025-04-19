"use client";
import React from "react";
import Main from "@/components/Main";
import ComingSoon from "@/components/ComingSoon";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Works from "@/components/Works";
import FeaturedSecond from "@/components/FeaturedSecond";
import Roadmap from "@/components/Roadmap";
import Token from "@/components/Token";
import PrivateInvestorsProgram from "@/components/PrivateInvestorsProgram";
import OurTeam from "@/components/OurTeam";
import Blog from "@/components/Blog";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HowWeWork from "@/components/HowWeWork";
import Ecosystem from "@/components/Ecosystem";
export default function HomePage() {
    return (
        <>
            <Main />
            <ComingSoon />
            <About />
            <HowWeWork />
            <Featured />
            <Works />
            <FeaturedSecond />
            <Ecosystem />
            <Roadmap />
            <Token />
            <PrivateInvestorsProgram />
            <OurTeam />
            <Blog />
            <Partners />
            <FAQ />
            <Contact />
            <Footer />
        </>
    );
}
