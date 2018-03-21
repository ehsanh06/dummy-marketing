import React, { Component } from 'react';

export default class Responsive extends Component {

    render() {
        return (
            <section className="responsive">
                <div>
                    <img src="" alt="Accent"/>
                    <img src="" alt="Laptop"/>
                </div>
                <div>
                    <h4>New design</h4>
                    <h3>Responsive design, just needs your tap <span class="elipsis">....</span></h3>

                    <p>
                        Lorem Ipsum has been the industry's standard 
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </section>
        );
    }
}
