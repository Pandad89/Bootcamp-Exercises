import React from 'react'

const Card = (props) => {
    return (
        <div className='Card'>
            <img src={props.Image}></img>
            <h1>{props.Title}</h1>
            <h2>{props.Description}</h2>
            <div className='Links'>
                <a href='/'>{props.LinkText1}</a>
                <a href='/'>{props.LinkText2}</a>
            </div>
        </div>
    );
};

export default Card;