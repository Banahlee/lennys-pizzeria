import React from 'react';
import ingredients from './imgs/ingredients.jpg'

const Home = () => {
    var missionDesc = 'We have a passion for traditional Italian cooking passed down to us by our grand-parents. Our mission is to spread this passion across the United States. We are proud to bring only the best ingredients and techneques to your neighborhood.'
    var ingredientsDesc = "We only use localy farm raised meats and organic vegetables. Our dough is never frozen and made fresh in-house everyday. This effort is to ensure the best experience everytime you visit Lenny's."

    return(
    <div>
        <div className='heroImage'>
            <div className='heroText'>
                <h1 className='heroH1'>Lenny's Pizzeria</h1>
                <button id='menu-btn'><a id='menu-link' href= '/menu'>See Menu</a></button>
                <h2>Arizona's Finest Pizza</h2>
            </div>
        </div>
        <div className='ingredients container col-md-12 '>
            <div className='ingredients-text col-md-6 '>
                <p className='ingredients-caption'>local</p>
                <h1 className='ingredients-header'>fresh ingredients</h1>
                <p className='ingredients-desc'>{ingredientsDesc}</p>
            </div>
            <div className=' col-md-6'>
                <img src={ingredients} className='ingredients-image ' />
            </div>
        </div>
        <div className='mission-image'>
            <div className='mission container'>
                <div className='mission-text col-md-6'>
                    <p className='mission-caption'>about us</p>
                    <h1>our mission</h1>
                    <p className='mission-desc'>{missionDesc}</p>
                    <div>
                        <a href='/about'>Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home;
