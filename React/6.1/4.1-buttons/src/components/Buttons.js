import React from "react";

class Buttons extends React.Component {
    render(props) {
        return (
            <div className="Buttons">
                <button style={{fontWeight: props.font}}>{props.text}</button>
            </div> 
        )
    }
}

export default Buttons;