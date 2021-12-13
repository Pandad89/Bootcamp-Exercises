import React from "react";

const Cards = () => {
    return (
        <div className="Container">
            <div className="Card1">
                <img src="https://pasadenaantiquewarehouse.com/wp-content/uploads/2019/06/325_01.jpg"></img>
                <h3>Computer Getting old?</h3>
                <h5>Find your new computer today!</h5>
                <div className="Links1">
                    <a>Browse Desktops</a>
                    <a>Browse Laptops</a>
                </div>
            </div>
            <div className="Card2">
                <img src="https://i.stack.imgur.com/JgdLV.jpg"></img>
                <h3>With our tours the sky is the limit</h3>
                <h5>Ready to head out?</h5>
                <div className="Links2">
                    <a>Book a trip</a>
                    <a>Fly me to the moon</a>
                    <a>Contact us</a>
                </div>
            </div>
            <div className="Card3">
                <img src="https://bonzabfs.com.au/wp-content/uploads/2020/09/shutterstock_683897632_6527-5f6adbe64034b.jpg"></img>
                <h3>Need help on the road?</h3>
                <h5>Our mechanics are standing by!</h5>
                <div className="Links3">
                    <a>Request assistance</a>
                    <a>Our trust policy</a>
                </div>
            </div>
        </div>
    )
}

export default Cards;