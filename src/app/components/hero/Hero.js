import React from "react";
import "./Hero.css";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

function Hero() {
    return (
        <div className="container hero-container">
            <div className="black-cover"></div>
            <div className="hero-part">
                <div className="hero-section">
                    <div className="left-part">
                        <div className="hero-title-div">
                            <h2 className="hero-title">
                                <span className="red">Build, </span>
                                <span className="purple">test, </span>
                                <span className="silver">and </span>
                                <span className="green">
                                    execute your ideas{" "}
                                </span>
                                <span className="silver">with our </span>
                                <span className="yellow">
                                    innovative solutions
                                </span>
                                <span className="purple">.</span>
                            </h2>
                            <div className="hero-btn">
                                <Link className="w-btn btn" href="">
                                    <BsWhatsapp className="icon" />{" "}
                                    <span> Chat now on Whatsapp</span>
                                </Link>
                                <Link className="e-btn btn" href="">
                                    Explore Our Services
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="right-part">
                        <div class="dancing-box-wrap">
                            <div class="dancing-box">
                                <div class="box-cube">
                                    <div class="box-faces box-front"></div>
                                    <div class="box-faces box-back"></div>
                                    <div class="box-faces box-top"></div>
                                    <div class="box-faces box-bottom"></div>
                                    <div class="box-faces box-left"></div>
                                    <div class="box-faces box-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
