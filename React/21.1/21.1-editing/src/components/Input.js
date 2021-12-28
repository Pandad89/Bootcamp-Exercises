import React, { useState, useEffect } from 'react'

function Input() {
    const [text, setText] = useState('Edit');
    const [toggle, setToggle] = useState(false);

    const toggleClick = () => {
        setToggle(!toggle);
        setText(toggle === false ? 'Save' : 'Edit')
    }

    return (
        <div>
            {toggle && <input autoFocus></input>}
            <button onClick={toggleClick}>{text}</button>
        </div>
    )
}

export default Input;