import React from "react";

const Buttons = (props) => {
    return (
        <div className="Buttons">
            <button style={{fontWeight: props.font}}>{props.text}</button>
        </div>
    )
}

export default Buttons;