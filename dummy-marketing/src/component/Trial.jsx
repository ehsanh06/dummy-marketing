import React, { Component } from 'react';

export default class Trial extends Component {

    render() {
        return (
            <section className="trial">
                <div>
                    <h4>New features</h4>
                    <h2>Over 1000 designers are using ...</h2>
                    <span>30 days free trial for all.</span>
                </div>
                <form action="POST">
                    <input type="text" className="fullname" required/>
                    <input type="email" className="email" required/>
                    <input type="password" className="email" required/>

                    <button type="submit">Try now!</button>
                </form>
                <small>By Signing up you agree to our <a id="terms"><span>terms &amp; Services.</span></a></small>
            </section>
        );
    }
}
