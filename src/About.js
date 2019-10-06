import React from 'react';
import hands from './imgs/hands.jpg';
import oven from './imgs/oven.jpg';
import pizza from './imgs/pizza.jpg';

const About = () => (
    <div>
        <div className='about-hero-image'>
            <div className='about-hero-text'>
                <h1>About Us</h1>
                <p>Learn what makes us, us</p>
            </div>
        </div>
        <div className='about-story'>
            <h1>our motto:</h1>
            <h2>Eat Good and Relax.</h2>
            <div className='about-story-content '>
                <div className='s container'>
                    <p className=''>Founded in 1983, Lenny's has always been about one thing, quality.
                        Since then we've been the staple "go-to" place in our community a for great atmoshpere, and even better pizzas.
                    </p>
                </div>
            </div>
            <div className='about-img-list'>
                <ul>
                    <li><img src={pizza} height='400px' width='450px'/></li>
                    <li><img src={hands} height='400px' width='450px'/></li>
                    <li><img src={oven} height='400px' width='450px'/></li>
                </ul>
            </div>
        </div>
    </div>
)

export default About;