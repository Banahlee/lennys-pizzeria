import React from 'react';

const Menu = () => {
    const margDesc = 'Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, and extra-virgin olive oil.';
    const whtDesc = 'Pizza made with alfredo sauce and topped with ricotta and mozzarella cheese';
    const italDesc = 'Our classic home-made sauce topped with italian sausage, mozzarella and parmesaen cheese';

        return (
            <div className='menu-page'>
                <div className='menu-hero-text'>
                    <p>pizzas</p>
                </div>
                <div className='menu-title'>
                    <h3>top selection of our customer favorites:</h3>
                </div>
                <div className='menu'>
                    <ul className='menu-list row'>
                        <li className='col-md-4 mp'>
                            <h3>~ Margherita Pizza ~</h3>
                            <p className='pizza-desc'>{margDesc}</p>
                        </li>
                        <li className='col-md-4 wp'>
                            <h3>~ White Pizza ~</h3>
                            <p className='pizza-desc'>{whtDesc}</p>
                        </li>
                        <li className='col-md-4 is'>
                            <h3>~ Italian Sausage ~</h3>
                            <p className='pizza-desc'>{italDesc}</p>
                        </li>
                    </ul>
                </div>
                <div className='container'>
                        <ul className='price-list row'>
                        <li className='col-md-4'>
                            <h4>Small</h4>
                            <p className='pizza-price'>$9.97</p>
                        </li>
                        <li className='col-md-4'>
                            <h4>Medium</h4>
                            <p className='pizza-price'>$11.97</p>
                        </li>
                        <li className='col-md-4'>
                            <h4>Large</h4>
                            <p className='pizza-price'>$14.97</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className='res-button'><a href=''>reserve seat</a></button>
                </div>
            </div>
        )
    }

export default Menu;