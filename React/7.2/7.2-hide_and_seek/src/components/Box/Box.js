import React from "react";
import './Box.css'

class Box extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            Color: 'white',
            Background: 'white'
        }
    }

    clickHandler = () => {
        this.setState({Background: this.state.Background === 'white' ? 'black' : 'white'});
    };

    render(){
        return(
            <div>
                <div style={{background: this.state.Background, color: this.state.Color}} className='Box'>Oh, Hello There!</div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default Box;