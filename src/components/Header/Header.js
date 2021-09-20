import React from 'react';

const Header = (props) => {
   const x=props.cart
    let totalPopulations = 0;
    for (let i = 0; i < x.length; i++) {
        const country = x[i];
        totalPopulations += country.money 
        
    }
//    const totalPopulations = x.reduce((sum,country)=>sum+country.population,0);
    return (
        <div>
            
            <h1>You Ordered: {x.length}</h1>
            <h3 >Total of coasters:{totalPopulations}</h3>
        </div>
    );
};

export default Header;