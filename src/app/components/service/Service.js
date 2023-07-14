import React from "react";
import "./Service.css";
import Courses from "../courses/Courses";


function Service() {
    return (
        <div className="service-container">
            <div className="header">
                <h1 className="header-title">
                    Customised Solutions for All Your Business Needs
                </h1>
                <p className="header-subtitle">
                    Take Your Business to the Next Level with Our
                    Industry-Leading Services
                </p>
            </div>
            <div className="courses">
                <div className="course-div">
                    <Courses
                        name={"Software & App Development"}
                        url={
                            "https://www.xzect.com/assets/images/services/software-and-app-dev.jpg"
                        }
                    />
                    <Courses
                        name={"Website Development & SEO"}
                        url={
                            "https://www.xzect.com/assets/images/services/website-dev-and-seo.jpg"
                        }
                    />
                    <Courses
                        name={"Cloud Service"}
                        url={
                            "https://www.xzect.com/assets/images/services/cloud-services.jpg"
                        }
                    />
                    <Courses
                        name={"Robotics & Automation"}
                        url={
                            "https://www.xzect.com/assets/images/services/robotics.jpg"
                        }
                    />
                    <Courses
                        name={"3D Printing & Prototyping"}
                        url={
                            "https://www.xzect.com/assets/images/services/3d-printing-and-prototyping.jpg"
                        }
                    />
                    <Courses
                        name={"Data Science & Analytics"}
                        url={
                            "https://www.xzect.com/assets/images/services/data-science.jpg"
                        }
                    />
                    <Courses
                        name={"AI & Machine Learning"}
                        url={
                            "https://www.xzect.com/assets/images/services/machine-learning.jpg"
                        }
                    />
                    <Courses
                        name={"IOT, AR & VR"}
                        url={
                            "https://www.xzect.com/assets/images/services/ar-vr.jpg"
                        }
                    />
                    <Courses
                        name={"Blockchain"}
                        url={
                            "https://www.xzect.com/assets/images/services/blockchain.jpg"
                        }
                    />
                    <Courses
                        name={"Tech Consultancy"}
                        url={
                            "https://www.xzect.com/assets/images/services/tech-consultancy.jpg"
                        }
                    />
                    <Courses
                        name={"Research & Development"}
                        url={
                            "https://www.xzect.com/assets/images/services/research-and-dev.jpg"
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default Service;
