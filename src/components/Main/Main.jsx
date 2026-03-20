import React, { Suspense } from 'react';
import PricingOptions from './PricingOptions/PricingOptions';

const fetchPricingData = async () => {
    const res = await fetch('pricingData.json');
    return res.json();
}

const Main = () => {
    const pricingDataPromise = fetchPricingData();
    
    return (
      <main className="w-11/12 mx-auto mt-16">
        <h1 className="text-7xl">Pricing Data cards</h1>
        <Suspense
          fallback={
            <div className='flex justify-center py-40'>
              <span class="loading loading-spinner loading-xl"></span>
            </div>
          }
        >
          <PricingOptions pricingDataPromise={pricingDataPromise}>
            {" "}
          </PricingOptions>
        </Suspense>
      </main>
    );
};

export default Main;