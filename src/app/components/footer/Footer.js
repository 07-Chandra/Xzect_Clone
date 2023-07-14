import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer">
                <div className="intro-section">
                    <h2 className="title">Xzect Labs Pvt. Ltd.</h2>
                    <p className="paragraph">
                        Xzect provides a diverse array of services that enable
                        both businesses and individuals to bring their vision to
                        life . Our specialties include software development,
                        website design and SEO, cloud services, robotics and
                        automation, 3D printing and prototyping, data science
                        and analytics, AI and machine learning, IOT, AR and VR,
                        blockchain, and other tech-related services. Our team of
                        experienced professionals is available to assist with
                        the design and development of new products, exploration
                        of robotics and automation possibilities, or any other
                        requirements.
                    </p>

                    <p className="para">
                        <span className="span"> Registered Address : </span>{" "}
                        203, 2-A/3, Asaf Ali Road, Delhi - 110002
                    </p>

                    <p className="para">
                        <span className="span">CIN :</span>{" "}
                        U72200DL2022PTC408714{" "}
                    </p>
                    <p className="para">
                        <span className="span">GST :</span> 07AAACX4373J1Z2
                    </p>

                    <div className="icons">
                        <div className="img-div">
                            <img
                                className="img"
                                src={
                                    "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/800px-Facebook_f_logo_%282021%29.svg.png"
                                }
                            ></img>
                        </div>
                        <div className="img-div">
                            <img
                                className="img"
                                src={
                                    "https://icones.pro/wp-content/uploads/2021/02/instagram-logo-icone4.png"
                                }
                            ></img>
                        </div>
                        <div className="img-div">
                            <img
                                className="img"
                                src={
                                    "https://static-00.iconduck.com/assets.00/linkedin-icon-1024x1024-z5dvl47c.png"
                                }
                            ></img>
                        </div>
                        <div className="img-div">
                            <img
                                className="img"
                                src={"https://shorturl.at/gjnzO"}
                            ></img>
                        </div>
                        <div className="img-div">
                            <img
                                className="img"
                                src={
                                    "https://pbs.twimg.com/profile_images/1450214707147669506/GlANsi6H_400x400.png"
                                }
                            ></img>
                        </div>
                        <div className="img-div">
                            <img
                                className="img"
                                src={
                                    "https://image.similarpng.com/very-thumbnail/2020/07/Youtube-logo-on-transparent-background-PNG.png"
                                }
                            ></img>
                        </div>
                    </div>
                </div>

                <div className="right-part">
                    <div className="services">
                        <h3 className="title"> Services</h3>
                        <ul className="service-links">
                            <Link className="footer-links" href="#">
                                Software and App Development
                            </Link>
                            <Link className="footer-links" href="#">
                                Website Development & SEO
                            </Link>
                            <Link className="footer-links" href="#">
                                Cloud Services
                            </Link>
                            <Link className="footer-links" href="#">
                                Robotics & Automation
                            </Link>
                            <Link className="footer-links" href="#">
                                3D Printing & prototyping
                            </Link>
                            <Link className="footer-links" href="#">
                                Data Science & Analytics
                            </Link>
                            <Link className="footer-links" href="#">
                                AI & Machine Learning
                            </Link>
                            <Link className="footer-links" href="#">
                                IOT, AR & VR
                            </Link>
                            <Link className="footer-links" href="#">
                                Blockchain
                            </Link>
                            <Link className="footer-links" href="#">
                                Tech Consultancy
                            </Link>
                            <Link className="footer-links" href="#">
                                Research & Development
                            </Link>
                            <Link className="footer-links" href="#">
                                View all Services
                            </Link>
                        </ul>
                    </div>
                    <div className="services" style={{marginTop:'3px'}}>
                        <h3 className="title"> Industries</h3>
                        <ul className="service-links">
                            <Link className="footer-links" href="#">
                                eCommerce
                            </Link>
                            <Link className="footer-links" href="#">
                                Hyperlocal
                            </Link>
                            <Link className="footer-links" href="#">
                                Healthcare
                            </Link>
                            <Link className="footer-links" href="#">
                                Finance
                            </Link>
                            <Link className="footer-links" href="#">
                                Education
                            </Link>
                            <Link className="footer-links" href="#">
                                Gaming
                            </Link>
                            <Link className="footer-links" href="#">
                                Social Networking
                            </Link>
                            <Link className="footer-links" href="#">
                                Agriculture
                            </Link>
                            <Link className="footer-links" href="#">
                                Travel & Aviation
                            </Link>
                            <Link className="footer-links" href="#">
                                Logistics
                            </Link>
                            <Link className="footer-links" href="#">
                                Restaurant
                            </Link>
                            <Link className="footer-links" href="#">
                                Real Estate
                            </Link>
                        </ul>
                    </div>

                    <div className="resources">
                        <h3 className="title">Resource</h3>
                        <div className="resource-links">
                            <Link className="footer-links" href="#">
                                About
                            </Link>
                            <Link className="footer-links" href="#">
                                Tech Stack
                            </Link>
                            <Link className="footer-links" href="#">
                                Contact Us
                            </Link>
                            <Link className="footer-links" href="#">
                                Careers
                            </Link>
                            <Link className="footer-links" href="#">
                                Webinars
                            </Link>
                            <Link className="footer-links" href="#">
                                Terms & Condition
                            </Link>
                            <Link className="footer-links" href="#">
                                Privacy Policy
                            </Link>
                            <Link className="footer-links" href="#">
                                Legal Information
                            </Link>
                            <Link className="footer-links" href="#">
                                Blog
                            </Link>
                            <Link className="footer-links" href="#">
                                Youtube (@xzect_labs)
                            </Link>
                            <Link className="footer-links" href="#">
                                Github (@xzect)
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p className="para">
                    © 2018 - 2023. Xzect Labs Pvt. Ltd. All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default Footer;
