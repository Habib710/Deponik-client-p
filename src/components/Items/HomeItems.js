import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link,   } from 'react-router-dom';
import './items.css';
import {  faArrowRight} from '@fortawesome/free-solid-svg-icons';

const HomeItems = (props) => {

    const {_id,name,pic,price,about,quantity,spname}=props.data;
    
    
    
    return (
        <div>
            
            <div className='cart-css'>
            <img width='100%'  src={pic} alt="" />
            <div className='text-css p-2 my-4 '>

            <h4>{name}</h4>
            <h5>Price: {price}</h5>
            <h5>Supplier: {spname}</h5>
            <p>{about}</p>
            

            </div>
            
            <div className='p-3'>
                <h4>Quantity : {quantity}</h4>
                <Link to={'/inven/'+_id}>
                <button  className='details-css'>Stock update <FontAwesomeIcon icon={faArrowRight}/></button>
                
                </Link>
            
            </div>
            
                
            
            </div>
            
        </div>
    );
};

export default HomeItems;
