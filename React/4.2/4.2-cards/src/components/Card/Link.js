import React from "react";

const Link = (props) => {
    return (
        <div>
            <a href={props.LinkDestination}>{props.LinkText}</a>
        </div>
    );
};

export default Link;