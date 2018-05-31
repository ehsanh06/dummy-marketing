import React, { Component } from 'react';

export default class Footer extends Component {

    render() {
        return (
            <footer>
                <div className="container">
                    <div>
                        <img src="./assets/images/section7-logo.png" alt="Start Ex" />
                        <p>123 Some Address Street</p>
                        <p>AB1 1234</p>
                    </div>
                    <div>
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Get Started</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>About US</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Terms Of Use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Get Newsletter</h4>
                        <form action="POST">
                            <input type="text" placeholder="EMAIL" required />
                            <button type="submit"></button>
                        </form>
                    </div>
                </div>
            </footer>
        );
    }
}
