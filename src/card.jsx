import React from "react";
import "./figmastyle.css";

class Card extends React.Component {
  render() {
    return (
      <div className="box">
        <div className="buttons">
          <button className="one_button">FEATURED</button>
          <button className="two_button">FOR SALE</button>
        </div>
        <div className="user"></div>
        <div className="texts">
        <h1>New Apartment Nice Wiew</h1>
        <h3>Quincy St, Brooklyn, NY, USA</h3>
        </div>
        <div className="container">
          <div className="vector v">
            <p>4 Beds</p>
          </div>
          <div className="vector e">
            <p>5 Baths</p>
          </div>
          <div className="vector c">
            <p>1 Garage</p>
          </div>
          <div className="vector t">
            <p>1200 Sq Ft</p>
          </div>
        </div>
        <div className="bottom">
            <div className="text">
                <p><del>$2,800/mo</del></p>
                <b>$7,500/mo</b>
            </div>
            <div className="button">
                <img className="strelka" src="https://static.thenounproject.com/png/2649002-200.png" alt="" />
                <img className="yurak" src="https://cdn-icons-png.flaticon.com/512/60/60993.png" alt="" />
            </div>
        </div>
      </div>
    );
  }
}
export default Card;
