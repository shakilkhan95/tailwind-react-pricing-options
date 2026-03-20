import React from 'react';
import Features from './Features';

const PricingCard = ({card}) => {
    const {name, price, description, features} = card;
    return (
      <div className="border bg-amber-100 p-4 rounded-2xl">
        <h3 className="text-5xl font-bold">{name}</h3>
        <h4 className="text-3xl font-semibold my-2">${price}</h4>
        <p className="text-[#707070]">{description}</p>
        <div className='mt-5 bg-amber-300 p-4 rounded-2xl space-y-2.5'>
          {features.map((feat, index) => (
            <Features key={index} feat={feat}></Features>
          ))}
        </div>
      </div>
    );
};

export default PricingCard;