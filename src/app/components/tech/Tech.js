import React from "react";
import "./Tech.css";
function Tech({ name, url }) {
    return (
        <div className="tech-contain">
            <div className="tech">
                <div className="tech-image">
                    <img className="img" src={url} alt="c++" />
                </div>
                <h3 className="tech-name">{name}</h3>
            </div>
        </div>
    );
}

export default Tech;
