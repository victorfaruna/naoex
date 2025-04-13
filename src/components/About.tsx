"use client";
import Image from "next/image";
import { useEffect } from "react";
import videoImage from "@/assets/images/common/video.jpg";
import { CountUp } from "countup.js";
import Logo from "@/assets/images/logo/x.svg";

export default function About() {
    const popupConfig = {
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    };
    useEffect(() => {
        const numbers = document.querySelectorAll("[data-count-to]");

        numbers.forEach((number) => {
            const ID = number.getAttribute("id") as string;
            const value = number.getAttribute("data-count-to") as string;

            let countUp;

            if (number.hasAttribute("data-decimal")) {
                const options = {
                    decimalPlaces: 1,
                };
                countUp = new CountUp(ID, 2.8, options);
            } else {
                countUp = new CountUp(ID, value as any);
            }

            if (!countUp.error) {
                countUp.start();
            } else {
                console.error(countUp.error);
                number.innerHTML = value;
            }
        });
    }, []);
    return (
        <>
            <section className="tf-section tf-video pb-mobie " id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="content-about m-b51 mobie-40">
                                <div
                                    className="tf-title pd22"
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                >
                                    <h3 className="title">
                                        Discover the Future of Real World Asset
                                        Ownership
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div
                            className="container flex flex-col mx-auto"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <div className="w-full draggable">
                                <div
                                    className="container flex flex-col items-center gap-16 mx-auto my-32 featured-countdown"
                                    style={{ margin: "4%", padding: "2%" }}
                                >
                                    <div className="grid w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-8">
                                        <div
                                            className="flex flex-col items-center slogan box corner-box"
                                            style={{
                                                margin: "4%",
                                                padding: "2%",
                                            }}
                                        >
                                            <h3 className="text-5xl font-extrabold leading-tight text-center text-light-grey-900">
                                                $
                                                <span
                                                    id="countto1"
                                                    data-count-to="250"
                                                ></span>
                                                B+
                                            </h3>
                                            <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
                                                Market Potential
                                            </p>
                                        </div>
                                        <div
                                            className="flex flex-col items-center box corner-box"
                                            style={{
                                                margin: "4%",
                                                padding: "2%",
                                            }}
                                        >
                                            <h3 className="text-5xl font-extrabold leading-tight text-center text-light-grey-900">
                                                <span
                                                    id="countto2"
                                                    data-count-to="9"
                                                ></span>
                                                +
                                            </h3>
                                            <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
                                                Asset Types
                                            </p>
                                        </div>
                                        <div
                                            className="flex flex-col items-center box corner-box"
                                            style={{
                                                margin: "4%",
                                                padding: "2%",
                                            }}
                                        >
                                            <h3 className="text-5xl font-extrabold leading-tight text-center text-light-grey-900">
                                                <span
                                                    id="countto3"
                                                    data-count-to="25"
                                                ></span>
                                                +
                                            </h3>
                                            <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
                                                Available Assets
                                            </p>
                                        </div>
                                        <div
                                            className="flex flex-col items-center box corner-box"
                                            style={{
                                                margin: "4%",
                                                padding: "2%",
                                            }}
                                        >
                                            <h3 className="text-5xl font-extrabold leading-tight text-center text-light-grey-900">
                                                <span
                                                    id="countto4"
                                                    data-count-to="2"
                                                ></span>
                                                x
                                            </h3>
                                            <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
                                                Potential Gain
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div
                                className="video"
                                data-aos="fade-up"
                                data-aos-duration="800"
                            >
                                <Image src={videoImage} alt="" />
                                <div className="wrap-video">
                                    <a
                                        className="popup-youtube"
                                        href="https://www.youtube.com/watch?v=i7EMACWuErA"
                                    >
                                        <svg
                                            width="27"
                                            height="35"
                                            viewBox="0 0 27 35"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M27 17.0001L0 0.500061V35.0001L27 17.0001Z"
                                                fill="#14C2A3"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tf-section tf-about pb-mobie">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div
                                className="content-about mobie-40"
                                data-aos="fade-up"
                                data-aos-duration="800"
                            >
                                <div className="tf-title st2">
                                    <p className="h8 sub-title">
                                        About NANOEX RWA
                                    </p>
                                    <h4 className="title">
                                        Redefining Asset Ownership.
                                    </h4>
                                </div>
                                <p>
                                    NanoEx RWA is a pioneering Real World Assets
                                    (RWA) platform, dedicated to bridging the
                                    gap between digital assets and real-world
                                    assets. Our platform enables users to trade,
                                    invest, and manage real-world assets
                                    tokenized on the blockchain, by minting NFTs
                                    that represent fractional ownership or full
                                    ownership, facilitating seamless
                                    transactions and liquidity.
                                </p>
                                <a
                                    className="tf-button st2 btn-effect"
                                    href="#"
                                >
                                    <span className="boder-fade"></span>
                                    <span className="effect">Know More</span>
                                </a>

                                <ul className="social">
                                    <li className="corner-box">
                                        <a href="#">
                                            <Image
                                                src={Logo}
                                                alt=""
                                                width="32"
                                                height="32"
                                            />
                                        </a>
                                    </li>
                                    <li className="corner-box">
                                        <a href="#">
                                            <svg
                                                width="32"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M0 15.9779C0.00184798 23.8392 5.68335 30.5327 13.3999 31.7647V20.5962H9.37059V15.9779H13.4047V12.4623C13.2244 10.7964 13.7899 9.13619 14.9479 7.93183C16.1059 6.72747 17.7364 6.10383 19.3971 6.23005C20.5891 6.24942 21.7782 6.35624 22.9548 6.54966V10.4792H20.9472C20.2561 10.3881 19.5613 10.6178 19.0585 11.1035C18.5557 11.5892 18.2993 12.2783 18.3616 12.9769V15.9779H22.7626L22.059 20.5978H18.3616V31.7647C26.7069 30.4377 32.559 22.7691 31.6782 14.3145C30.7974 5.8599 23.4921 -0.420988 15.0546 0.0220602C6.61716 0.465108 0.00134123 7.477 0 15.9779Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="corner-box">
                                        <a href="#">
                                            <svg
                                                width="36"
                                                height="33"
                                                viewBox="0 0 36 33"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M35.3202 0.445405C34.7061 -0.0697563 33.7416 -0.143466 32.7443 0.252625H32.7427C31.6938 0.668966 3.05306 12.8222 1.88712 13.3188C1.67506 13.3917 -0.177012 14.0753 0.0137627 15.5981C0.184068 16.9711 1.6726 17.5397 1.85437 17.6053L9.13574 20.0718C9.61882 21.6626 11.3997 27.5319 11.7935 28.7858C12.0391 29.5674 12.4395 30.5945 13.1412 30.8059C13.7569 31.0408 14.3694 30.8262 14.7656 30.5184L19.2173 26.4335L26.4037 31.978L26.5748 32.0792C27.0628 32.2931 27.5304 32.4 27.9766 32.4C28.3213 32.4 28.6521 32.336 28.9681 32.208C30.0448 31.7706 30.4755 30.7557 30.5205 30.6407L35.8884 3.03822C36.2159 1.56402 35.7607 0.813956 35.3202 0.445405ZM15.5574 21.0583L13.1011 27.5384L10.6447 19.4383L29.4766 5.6683L15.5574 21.0583Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="corner-box">
                                        <a href="#">
                                            <svg
                                                width="36"
                                                height="27"
                                                viewBox="0 0 36 27"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M31.0109 2.95086C27.8957 0.444067 22.9677 0.0191346 22.7568 0.0038487C22.4297 -0.0236647 22.1179 0.15976 21.9834 0.462409C21.9711 0.480751 21.8641 0.728374 21.7449 1.11356C23.8054 1.46207 26.3366 2.16214 28.6264 3.58367C28.9932 3.8099 29.1063 4.29291 28.8801 4.65976C28.7303 4.90127 28.4766 5.03272 28.2137 5.03272C28.073 5.03272 27.9293 4.99298 27.801 4.9135C23.8635 2.4709 18.9477 2.34862 18 2.34862C17.0523 2.34862 12.1335 2.4709 8.19905 4.9135C7.8322 5.14278 7.34918 5.02966 7.12296 4.66282C6.89368 4.29291 7.00679 3.81295 7.37364 3.58367C9.66338 2.16519 12.1946 1.46207 14.2551 1.11662C14.1359 0.728374 14.0289 0.483809 14.0197 0.462409C13.8821 0.15976 13.5734 -0.0297784 13.2432 0.0038487C13.0323 0.0191346 8.10428 0.444066 4.94633 2.98449C3.29857 4.50996 0 13.4244 0 21.1312C0 21.2688 0.0366848 21.4002 0.103941 21.5195C2.3784 25.5181 8.5873 26.5636 10.0027 26.6095C10.0088 26.6095 10.018 26.6095 10.0272 26.6095C10.2779 26.6095 10.5132 26.4903 10.66 26.2885L12.0907 24.3197C8.22962 23.3231 6.25781 21.6295 6.1447 21.5286C5.82065 21.2443 5.79008 20.7491 6.07745 20.425C6.36175 20.101 6.857 20.0704 7.18105 20.3547C7.2269 20.3975 10.8587 23.4791 18 23.4791C25.1535 23.4791 28.7853 20.3853 28.822 20.3547C29.1461 20.0735 29.6382 20.101 29.9256 20.4281C30.2099 20.7522 30.1793 21.2443 29.8553 21.5286C29.7422 21.6295 27.7704 23.3231 23.9093 24.3197L25.34 26.2885C25.4868 26.4903 25.7221 26.6095 25.9728 26.6095C25.982 26.6095 25.9912 26.6095 25.9973 26.6095C27.4127 26.5636 33.6216 25.5181 35.8961 21.5195C35.9633 21.4002 36 21.2688 36 21.1312C36 13.4244 32.7014 4.50996 31.0109 2.95086ZM12.913 18.0008C11.3998 18.0008 10.1739 16.6007 10.1739 14.8704C10.1739 13.1401 11.3998 11.7399 12.913 11.7399C14.4263 11.7399 15.6522 13.1401 15.6522 14.8704C15.6522 16.6007 14.4263 18.0008 12.913 18.0008ZM23.087 18.0008C21.5737 18.0008 20.3478 16.6007 20.3478 14.8704C20.3478 13.1401 21.5737 11.7399 23.087 11.7399C24.6002 11.7399 25.8261 13.1401 25.8261 14.8704C25.8261 16.6007 24.6002 18.0008 23.087 18.0008Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div
                                className="wrap-about p-l70"
                                data-aos="fade-up"
                                data-aos-duration="800"
                            >
                                <div className="box-text corner-box active">
                                    <div className="h7">
                                        Unique, AI-Powered Platform for Informed
                                        Ownership
                                    </div>
                                    <p>
                                        Harness the power of AI for data -driven
                                        decisions, ensuring smarter investment
                                        choices.
                                    </p>
                                </div>
                                <div className="box-text corner-box">
                                    <div className="h7">
                                        Transparent, Secure & Verifiable
                                        Transactions
                                    </div>
                                    <p>
                                        Experience peace of mind with
                                        transparent ownership processes and
                                        robust security measures.
                                    </p>
                                </div>

                                <div className="box-text corner-box">
                                    <div className="h7">
                                        Rigorous Due Diligence
                                    </div>
                                    <p>
                                        Rest assured knowing that every
                                        ownership opportunity undergoes thorough
                                        vetting and scrutiny.
                                    </p>
                                </div>

                                <div className="box-text corner-box mb-0">
                                    <div className="h7">
                                        24x7 Access to Open Marketplace
                                    </div>
                                    <p>
                                        Access investment opportunities anytime,
                                        anywhere, with our continuously open
                                        marketplace.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
