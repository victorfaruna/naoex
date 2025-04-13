"use client";
import React, { useEffect } from "react";

export default function Preloader() {
    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".preload")?.remove();
        }, 1000);
    }, []);
    return (
        <div className="preload preload-container">
            <div className="preload-logo"></div>
        </div>
    );
}
