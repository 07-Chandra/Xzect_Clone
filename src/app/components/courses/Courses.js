import Link from "next/link";
import React from "react";
import "./Courses.css";

function Courses({ name, url }) {
    return (
        <div className="course-container container">
            <div className="course">
                <div className="course-image">
                    <div className="image-div">
                        <img className="img" src={url} alt={name} />
                    </div>
                </div>
                <div className="about-course">
                    <h3 className="name">{name}</h3>
                    <Link className="link course-link" href={url}>
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Courses;
