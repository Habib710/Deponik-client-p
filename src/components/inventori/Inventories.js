import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { faArrowRight, faPaperPlane, faPlus, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './invent.css';

const Inventories = () => {
    const {id}=useParams();

    const [Item,
        setitem] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/items/${id}`)
            .then(res => res.json())
            .then(data => setitem(data))

    }, [id]);
    

    return (
        <div className='main-invent text-center container'>
            <h1 className='py-5 text-center'>Details About The Item</h1>
            <div className=' row detail-cart mb-4 '>
                <div className='col-lg-4 m-2 ime-car-detail'>
                    <img width='100%' height='250px'  src={Item.pic} alt="img" />
                </div>
                <div className='col-lg-4 m-2'>
                <h2>{Item.name}</h2>
                <h5>Price : {Item.price}</h5>
                <h5>Supplier : {Item.spname}</h5>
                <p>Id : {Item._id}</p>
                <br />
                <p>{Item.about}</p>
                </div>
                <div className='col-lg-3 m-2'>
                    <h2>Quantity : {Item.quantity}</h2>

                    <button className='btn-deliver my-2'>Delivered <FontAwesomeIcon icon={faPaperPlane}/></button>

                    <div className='my-3 p-3'>
                        <form className='form-css'>
                            <h4>Restock the item</h4>
                            <input type="number" placeholder='Quantity' />
                            <br /><br />
                            <button className='btn-add'>
                                Restock <FontAwesomeIcon icon={faPlus}/></button>
                        </form>
                    </div>
                </div>
            </div>

            <div className=' text-center py-4'>
            <button className='btn-slide  '>
                            <Link to='/manageitems'>Manage Inventories <FontAwesomeIcon icon={faArrowRight}/></Link>
                        </button>

            </div>
                   
        </div>
    );
};

export default Inventories;