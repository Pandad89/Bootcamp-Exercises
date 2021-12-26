import React, {useState} from "react";

const Text = ({ items })=> {
    let myText = items.text.slice(0, items.maxLength);

    const [toggleClick, setToggleClick] = useState(false);
    const [text, setText] = useState(myText);

    const toggle = () => {
        setToggleClick(!toggleClick);
        myText = toggleClick === true ? items.text.slice(0, items.maxLength) : items.text;
        setText(myText);
    };

    return(
        <div>
            <h1>{text}<span className="readMore" onClick={toggle}>{toggleClick === true ? ' Read Less' : '...Read More'}</span></h1>
        </div>
        
    );
};

export default Text;