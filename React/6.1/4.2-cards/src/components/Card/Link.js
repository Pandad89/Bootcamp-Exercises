import React from "react";

class Link extends React.Component {
    render(props) {
        return (
            <div>
                <a href={props.LinkDestination}>{props.LinkText}</a>
            </div>
        )
    }
}

export default Link;