import React, {Component} from "react";
import "./Container.css";
import Toggle from "../Toggle/Toggle";
import PadButtons from "../PadButtons/PadButtons";
import LetterButtons from "../LetterButtons/LetterButtons";
import Rectangle from "../Rectangle/Rectangle";
import Square from "../Square/Square";
import Cross from "../Cross/Cross";
import SmallCircle from "../SmallCircle/SmallCircle"

class Container extends Component {
    constructor(props){
        super(props)
        this.state = {
            toggle: false
        }

        this.toggle = this.toggle.bind(this);
        
    }

    toggle = () => {
        this.setState({toggle: !this.state.toggle});
    }



    render () {
        return (
            <div className="main-container">
                <div className="container">
                    <div id="leftSide">
                        <Rectangle />
                        <Toggle />
                        <PadButtons />
                        <Square />
                    </div>
                    <div id="rightSide">
                        <Cross />
                        <LetterButtons toggle={this.toggle} />
                        <Toggle />
                        <SmallCircle />
                    </div>
                </div>
                <div className={this.state.toggle ? "modal show" : "modal"} >
                    <span className="exit-out" onClick={this.toggle}>X</span>
                    <iframe width="500" height="315" src="https://www.youtube.com/embed/DvodCgyiAt8" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
                    </iframe>
                </div>
                <footer>
                    Made with React, Flex-Box, and CSS
                </footer> 
            </div>
        )
    }
}

export default Container;
