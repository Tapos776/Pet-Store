import React from 'react';
import { useParams } from 'react-router';

const ApplyShop = () => {
    const params =useParams()
    console.log(params);
    
    return (
        <div>
            <h2>Apply Card</h2>
        </div>
    );
};

export default ApplyShop;