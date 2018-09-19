import React from "react";
import "./LetterButtons.css";

const LetterButtons = (props) => {
    return (
        <div className="pad-buttons letter-buttons">
            <div className="individual-buttons" onClick={props.toggle}>
                X          
            </div>
            <div className="middle-buttons">
                <div className="individual-buttons">
                    Y
                </div>
                <div className="individual-buttons"> 
                    A   
                </div>
            </div>
            <div className="individual-buttons">
                B
            </div>
        </div>
    )
}

export default LetterButtons;