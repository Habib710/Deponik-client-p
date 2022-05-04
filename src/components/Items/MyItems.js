import {  faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
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

            Swal.fire({
                title: 'Are you sure to delete?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
    
                    const url=`http://localhost:5000/items/${id}`;
                    fetch(url,{
                        method:'DELETE'
                    })
                    .then(res=>res.json())
                    .then(data=>{
                      const remain= Items.filter(item=> item._id !== id)
                      setitems(remain);
                     
                        
                    });
    
    
                  Swal.fire(
                    'Deleted!',
                    'Ihis Item has been deleted.',
                    'success'
                  )
                }
              })
    
        
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