import React, { Component } from 'react'
import App from '../App.js'
import Navigation from './Navigation.js';

const Home = ({coins = []}) => {

    function priceWild(item){
        return 1 / item.current_price;
    }

    return (
        <>
        <div className='text-white'>
            {coins.map((item, index) => (
                <div key={index}>
                    <p>
                        Smash: {priceWild(item)} 
                    </p>
                </div>

       ))}
        </div>
       
        </>
      
        
    )
        

}
    

    

export default Home



