import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const ManageItemcart = (props) => {

    const{_id,name,pic,quantity,price}=(props.data);
    
     
    const hendeleDelet=id=>{
       

        const url=`https://deponic.herokuapp.com/items/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
           if(data.deleteCount>0){
             
           }

        })

    }

    return (
        <div className='text-center'>
            <div  className='manage-cart row'>
                <div className='manage-img col-lg-3 '>
                    <img width='100%' src={pic} alt="" />
                </div>
                <div className='col-lg-6 p-2 manage-ditel-div'>
                <h4>{name}</h4>
                <h6>Price :{price}</h6>
                <br />
                <h4>Quantity: {quantity}</h4>

                </div>
                <div className='col-lg-3 text-center   p-5'>
                    <button onClick={()=>hendeleDelet(_id)} className='btn-delete'>Delete <FontAwesomeIcon icon={faTrash}/></button>
                </div>
            

            </div>
            
            
        </div>
    );
};

export default ManageItemcart;