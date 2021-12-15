import React from "react";

const Card = (props) => {
    return <div className="Card">
        <div className="titles">
            {props.title}
            {props.subtitle}
            {props.text}
        </div>
        <div className="links">
            {props.links}
        </div>
    </div>
}

export default Card;