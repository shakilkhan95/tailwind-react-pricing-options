import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const Features = ({feat}) => {
    return (
      <p className='flex items-center gap-3 mt-2.5'>
        <CircleCheckBig></CircleCheckBig>
        {feat}
      </p>
    );
};

export default Features;