import React from 'react';
import './Shop.css'
const Shop = (props) => {
    const {id,title,image_480x270, display_name,money} = props.data
    const handler=props.handleAddProduct
    return (
        <div className='all-components'>
            
            <div className="image-component">
                <img src={image_480x270} alt="" />
            </div>
            <div className="title-component">
                <h4>{title}</h4>
                <h6>{ display_name}</h6>
                <h3>${money}</h3>
                <button onClick={() =>handler(props.data)}>Add to cart</button>
            </div>
        </div>
    );
};

export default Shop;