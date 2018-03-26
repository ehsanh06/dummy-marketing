import React, { Component } from 'react';

export default class Responsive extends Component {

    render() {
        return (
            <section className="founders">
                <div>
                    <div className="founders-profile">
                        <div className="avatar"></div>
                        <h3>Jon Doe</h3>
                        <h4>Co Founder</h4>
                        <p class="testimonial">
                            Lorem Ipsum has been the industry's standard 
                            dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="founders-profile">
                        <div className="avatar"></div>
                        <h3>Jon Doe</h3>
                        <h4>Co Founder</h4>
                        <p class="testimonial">
                            Lorem Ipsum has been the industry's standard 
                            dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="founders-profile">
                        <div className="avatar"></div>
                        <h3>Jon Doe</h3>
                        <h4>Co Founder</h4>
                        <p class="testimonial">
                            Lorem Ipsum has been the industry's standard 
                            dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
                <div>
                    <ul class="brands">
                        <li>
                            <img src="/assets/images/section5-logo1.png" alt="brand-logo"/>
                        </li>
                        <li>
                            <img src="/assets/images/section5-logo2.png" alt="brand-logo"/>
                        </li>
                        <li>
                            <img src="/assets/images/section5-logo3.png" alt="brand-logo"/>
                        </li>
                        <li>
                            <img src="/assets/images/section5-logo4.png" alt="brand-logo"/>
                        </li>
                        <li>
                            <img src="/assets/images/section5-logo5.png" alt="brand-logo"/>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}
