import React, { Component } from 'react';

export default class Features extends Component {

    render() {
        return (
            <section className="features">
                <div>
                    <h4>New features</h4>
                    <h2>Some awesome features</h2>
                </div>
                <div>
                    <div>
                        <img src="/assets/images/section3-icon1.png" alt="Postcard"/>
                        <h3>Some awesome features</h3>
                        <p>
                            Lorem Ipsum has been the industry's standard 
                            dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div>
                        <img src="/assets/images/section3-icon2.png" alt="Travel"/>
                        <h3>Some awesome features</h3>
                        <p>
                            Lorem Ipsum has been the industry's standard 
                            dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div>
                        <img src="/assets/images/section3-icon3.png" alt="Lightbulb"/>
                        <h3>Some awesome features</h3>
                        <p>
                            Lorem Ipsum has been the industry's standard 
                            dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>

                </div>
            </section>
        );
    }
}
