import React, { Component } from 'react';

export default class Showcase extends Component {

    render() {
        return (
            <section className="showcase">
                <div className="container">            
                    <div>
                        <h4>New features</h4>
                        <h2>Some awesome features</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ornare nulla. Pellentesque nec turpis vel turpis eleifend convallis. 
                            Etiam ac commodo urna. Aenean dapibus imperdiet pellentesque. Nullam quis lacus eleifend, consequat orci eleifend, vehicula velit. 
                            Etiam ultrices enim et diam dignissim dapibus. Morbi ipsum ipsum, malesuada nec diam in, suscipit condimentum ipsum. Nullam interdum ante dolor, 
                            porttitor fermentum tortor feugiat vel. Morbi non sapien nisl. Maecenas id vehicula erat. Donec eros nisi, maximus in ornare nec, 
                            efficitur eu ante.                            
                        </p>
                    </div>
                    <img src="/assets/images/section6-browser.png" alt="showcase"/>
                </div>
            </section>
        );
    }
}
