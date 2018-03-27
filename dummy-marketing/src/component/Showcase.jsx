import React, { Component } from 'react';

export default class Showcase extends Component {

    render() {
        return (
            <section className="showcase">
                <div>
                    <h4>New features</h4>
                    <h2>Some awesome features</h2>
                    <p>
                        Lorem Ipsum has been the industry's standard 
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <img src="/assets/images/section6-browser.png" alt="showcase"/>
            </section>
        );
    }
}
