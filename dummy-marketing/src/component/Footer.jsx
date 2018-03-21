import React, { Component } from 'react';

export default class Footer extends Component {

    render() {
        return (
            <footer>
                <div>
                    <img src="" alt="Start Ex" />
                    <p></p>
                    <p></p>
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
                        <input type="text" required />
                        <button type="submit"></button>
                    </form>
                    <ul>
                        <li><span></span></li>
                        <li><span></span></li>
                        <li><span></span></li>
                        <li><span></span></li>
                    </ul>
                </div>
            </footer>
        );
    }
}
