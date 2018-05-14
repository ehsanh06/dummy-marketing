import React, { Component } from 'react';

export default class Trial extends Component {

    render() {
        return (
            <section className="trial" id="trial">
                <div className="container">
                    <div>
                        <h4>New features</h4>
                        <h2>Over 1000 designers are using ...</h2>
                        <span>30 days free trial for all.</span>
                    </div>
                    <form action="POST">
                        <input type="text" placeholder="Full Name" className="fullname" required />
                        <input type="email" placeholder="Your Email" className="email" required />
                        <input type="password" placeholder="Password" className="email" required />

                        <button type="submit">Try now!</button>
                    </form>
                    <span>By Signing up you agree to our <a id="terms" href="#"><span>terms &amp; Services.</span></a></span>
                </div>
            </section>
        );
    }
}
