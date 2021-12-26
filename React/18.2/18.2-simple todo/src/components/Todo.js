import React, { useState } from "react";

const Todo = ({ items }) => {
    

    const [data, setData] = useState(items);
    const [toggle, setToggle] = useState(false);

    const toggleClick = (index) => {
        setToggle(!toggle);
        const dataCopy = [...data];
        
        dataCopy[index].completed = dataCopy[index].completed === true ? false : true;
        console.log(items)
        setData(dataCopy)

        console.log(dataCopy)
    }

    return (
        <div>
            <h1>{data[0].name} <span onClick={() => toggleClick(0)}>{data[0].completed ? "V" : "X" }</span></h1>
            <h1>{data[1].name} <span onClick={() => toggleClick(1)}>{data[1].completed ? "V" : "X" }</span></h1>
            <h1>{data[2].name} <span onClick={() => toggleClick(2)}>{data[2].completed ? "V" : "X" }</span></h1>
            <h1>{data[3].name} <span onClick={() => toggleClick(3)}>{data[3].completed ? "V" : "X" }</span></h1>
            <h1>{data[4].name} <span onClick={() => toggleClick(4)}>{data[4].completed ? "V" : "X" }</span></h1>
        </div>
    );
};

export default Todo;