import React, { Component } from 'react';

export default class Header extends Component {

    scrollToElement = () => {
            let elmnt = document.getElementById("trial");
            elmnt.scrollIntoView({ behavior: 'smooth' });
    }
    

    render() {
        return (
            <header className="landing">
                <div id="heading-container">
                    <h1>There is no other platforms for you as like</h1>
                </div>
                <div id="play-button-container">
                    <img src="./assets/images/header-icon-play.png" alt="Play"/>
                </div>
                <div>
                    <button type="button" onClick={this.scrollToElement.bind(this)}>Try Now</button>
                    <p>&#42; No need to add card details</p>
                </div>
            </header>
        );
    }
}
