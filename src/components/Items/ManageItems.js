import { faAdd,  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageItemcart from './ManageItemcart';

const ManageItems = () => {

    const [Items,
        setitems] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/items")
            .then(res => res.json())
            .then(data => setitems(data))

    }, []);


    return (
        <div className='container py-5  my-4 text-center'>
            <h1 className='text-center my-3'>Manage Inventories</h1>

                         <button className='btn-slide my-4 '>
                            <Link to='/addnew'>Add New Items <FontAwesomeIcon icon={faAdd}/></Link>
                         </button>

            <div className=''>
                {
                    Items.map(item=><ManageItemcart key={item._id} data={item}></ManageItemcart>)
  
                }
            </div>
            
        </div>
    );
};

export default ManageItems;