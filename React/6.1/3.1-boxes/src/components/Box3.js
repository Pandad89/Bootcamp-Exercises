import React from "react";
import Box4 from "./Box4";

class Box3 extends React.Component {
    render() {
        return (
        <div className='Box3'>
            <Box4 />
            <Box4 />
        </div>
        )
    }
}

export default Box3;