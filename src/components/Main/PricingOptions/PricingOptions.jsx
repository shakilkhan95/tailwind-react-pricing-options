import React, { use } from 'react';
import PricingCard from './PricingCard';

const PricingOptions = ({ pricingDataPromise }) => {
    const pricingData = use(pricingDataPromise);
    
  return (
    <div className='grid md:grid-cols-3 gap-5 mt-10'>
    {pricingData.map(card => <PricingCard key={card.id} card={card}></PricingCard>)}
  </div>
  )
};

export default PricingOptions;