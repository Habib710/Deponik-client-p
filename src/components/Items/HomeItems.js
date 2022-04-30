import React from 'react';
import { Link } from 'react-router-dom';
import './items.css';

const HomeItems = (props) => {

    const {id,name,pic,price,about,quantity}=props.data;
    
    return (
        <div>
            
            <div className='cart-css'>
            <img width='100%'  src={pic} alt="" />
            <div className='text-css p-2 my-4 '>

            <h4>{name}</h4>
            <h5>Price: {price}</h5>
            <p>{about}</p>

            </div>
            <div className='p-3'>
                <h4>In Stock : {quantity}</h4>
                <Link to='/inven'>
                <button className='details-css'>Details</button>
                
                </Link>
            
            </div>
            
                
            
            </div>
            
        </div>
    );
};

export default HomeItems;
