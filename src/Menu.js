import React from 'react';

const Menu = () => {
    const margDesc = 'Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, and extra-virgin olive oil.';
    const whtDesc = 'Pizza made with alfredo sauce and topped with ricotta and mozzarella cheese';
    const italDesc = 'Our classic home-made sauce topped with italian sausage, mozzarella and parmesaen cheese';

    function reserveSeat(){
        alert('Sorry, we are not taking reservations at the moment!')
    }

        return (
            <div className='menu-page'>
                <div className='menu-hero-text'>
                    <p>pizzas</p>
                </div>
                <div className='menu-title'>
                    <h3>top selection of our customer favorites:</h3>
                </div>
                <div className='menu '>
                    <div>
                        <h3>Margherita Pizza</h3>
                        <p>{margDesc}</p>
                    </div>
                    <div>
                        <h3>White Pizza</h3>
                        <p>{whtDesc}</p>
                    </div>
                    <div>
                        <h3>Italian Sausage</h3>
                        <p>{italDesc}</p>
                    </div>
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
                    <button onClick={reserveSeat} className='res-button'><div>reserve seat</div></button>
                </div> 
            </div>
           
        )
    }

export default Menu;