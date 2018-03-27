import React, { Component } from 'react';

export default class Responsive extends Component {

    render() {
        return (
            <section className="responsive">
                <div>
                    {/* Accent */}
                </div>
                
                <img src="/assets/images/section4-macbook.png" alt="Macbook"/>
                
                <div>
                    <h4>New design</h4>
                    <h2>Responsive design, just needs your tap <span className="elipsis">....</span></h2>

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
