import React, { Component } from 'react'

const Market = ({coins = []}) => {
    
    function priceWild(item){
        return Math.trunc(1 / item.current_price);
    }

        return (
            <div className="tex-white">
                <div className=''>
                {coins.map((item, index) => (
                <div key={index}>
                    <p className='text-white'>
                        Smash: {priceWild(item)} WILD
                    </p>
                </div>

       ))}
                </div>
                   
               
            </div>


        )
   
}
export default Market;
