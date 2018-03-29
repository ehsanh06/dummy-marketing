import React, { Component } from 'react';

export default class Footer extends Component {

    render() {
        return (
            <footer>
                <div>
                    <img src="/assets/images/section7-logo.png" alt="Start Ex" />
                    <p>123 Some Address Street</p>
                    <p>AB1 1234</p>
                </div>
                <div>
                    <h4>Support</h4>
                    <ul>
                        <li>Help Center</li>
                        <li>Get Started</li>
                        <li>Contact US</li>
                    </ul>
                </div>
                <div>
                    <h4>About US</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Terms Of Use</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <h4>Get Newsletter</h4>
                    <form action="POST">
                        <input type="text" placeholder="EMAIL" required />
                        <input type="submit" />
                    </form>
                    <ul>
                        <li><span></span></li>
                        <li><span></span></li>
                        <li><span></span></li>
                        <li><span></span></li>
                    </ul>
                </div>
                <img src="/assets/images/decorationBox.png" alt="Accent" />
            </footer>
        );
    }
}
