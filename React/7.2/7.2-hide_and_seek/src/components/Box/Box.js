import React from "react";
import './Box.css'

class Box extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            Color: 'blueviolet'
        }
    }

    clickHandler = () => {
        this.setState({Color: this.state.Color === 'blueviolet' ? 'yellow' : 'blueviolet'});
    };

    render(){
        return(
            <div>
                <div style={this.state.Color} className='Box'></div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default Box;