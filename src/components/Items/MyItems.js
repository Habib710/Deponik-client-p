import { faAdd, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItems = () => {

    const [user] = useAuthState(auth);
    

    
    const [Items,
        setitems] = useState([]);

        useEffect(() => {
            fetch("http://localhost:5000/items")
                .then(res => res.json())
                .then(data => {

                    const datas=data.filter(myitem=>myitem.email===user?.email)
                    
                    setitems(datas);
                    
                })
               
    
        }, [user?.email]);
      
        const hendeleDelet=id=>{
            const sure=window.confirm('Are you sure to delete ??');
            if(sure){
            const url=`http://localhost:5000/items/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
              const remain= Items.filter(item=> item._id !== id)
              setitems(remain);
    
            })}
        
        }


    return (
        <div className='container py-5  my-4 text-center myadd-div-css'>
            <h1>My Added Items </h1>
            <div className=''>
               
                <h3 className='pb-3'> Items: {Items.length}</h3>
                {
                    Items.map(item=>   
                        {
                            return(
                        <div className='text-center'>
                <div  className='manage-cart row'>
                <div className='manage-img col-lg-3 '>
                    <img width='100%' src={item.pic} alt="" />
                </div>
                <div className='col-lg-6 p-2 manage-ditel-div'>
                <h4>{item.name}</h4>
                <h6>Price :{item.price}</h6>
                <br />
                <h5> Email : {item.email}</h5>
                <h4>Quantity: {item.quantity}</h4>

                </div>
                <div className='col-lg-3 text-center   p-5'>
                    <button onClick={()=>hendeleDelet(item._id)} className='btn-delete'>Delete <FontAwesomeIcon icon={faTrash}/></button>
                </div>
                </div>
                </div>
            
            )

        }

    )
                }
            </div>          
        </div>
    );
};

export default MyItems;