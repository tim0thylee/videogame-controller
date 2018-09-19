import React, { Component }from "react";
import "./PadButtons.css";
import up from "../../assets/Upsound.mp3"

class PadButtons extends Component {
    constructor (props) {
        super(props);
        this.up = new Audio(up);
        this.handleClick.bind(this);
    }


    handleClick = () => {
        this.up.play();
    }
    render() {
        return (
            <div className="pad-buttons">
                <div className="individual-buttons button-1" onClick={this.handleClick}>
                    <div className="up-button">
                    </div>
                </div>
                <div className="middle-buttons">
                    <div className="individual-buttons button-2">
                        <div className="left-button">
                        </div>
                    </div>
                    <div className="individual-buttons button-3">
                        <div className="right-button">
                        </div>
                    </div>
                </div>
                <div className="individual-buttons button-4">
                    <div className="down-button">
                    </div>
                </div>
            </div>
        )
    }
}

export default PadButtons;