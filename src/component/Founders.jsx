import React, { Component } from 'react';

export default class Responsive extends Component {

    render() {
        return (
            <section className="founders">
                <div className="container">
                    <div>
                        <div className="founders-profile">
                            <div className="avatar"></div>
                            <h3>Jon Doe</h3>
                            <h4>Co Founder</h4>
                            <p className="testimonial">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ornare nulla. Pellentesque nec turpis vel turpis eleifend convallis.
Etiam ac commodo urna.
                            </p>
                        </div>
                        <div className="founders-profile">
                            <div className="avatar"></div>
                            <h3>Jon Doe</h3>
                            <h4>Co Founder</h4>
                            <p className="testimonial">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ornare nulla. Pellentesque nec turpis vel turpis eleifend convallis. 
                                Etiam ac commodo urna.                       </p>
                        </div>
                        <div className="founders-profile">
                            <div className="avatar"></div>
                            <h3>Jon Doe</h3>
                            <h4>Co Founder</h4>
                            <p className="testimonial">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ornare nulla. Pellentesque nec turpis vel turpis eleifend convallis. 
                                Etiam ac commodo urna.                    </p>
                        </div>
                    </div>
                    <ul className="brands">
                        <li>
                            <img src="./assets/images/section5-logo1.png" alt="brand-logo" />
                        </li>
                        <li>
                            <img src="./assets/images/section5-logo2.png" alt="brand-logo" />
                        </li>
                        <li>
                            <img src="./assets/images/section5-logo3.png" alt="brand-logo" />
                        </li>
                        <li>
                            <img src="./assets/images/section5-logo4.png" alt="brand-logo" />
                        </li>
                        <li>
                            <img src="./assets/images/section5-logo5.png" alt="brand-logo" />
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}
