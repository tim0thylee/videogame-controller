import React from "react";
import "./Toggle.css"

const Toggle = () => {
    return (
        <div id="mainToggle">
            <div className="vertical-blocks">
            </div>
            <div className="middle-toggle-row">
                <div className="horizontal-blocks"></div>
                <div id="toggleInside"></div>
                <div className="horizontal-blocks"></div>
            </div>
            <div className="vertical-blocks">
            </div>
        </div>
    )
}

export default Toggle;