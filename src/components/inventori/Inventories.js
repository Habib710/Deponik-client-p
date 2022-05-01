import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventories = () => {
    const {id}=useParams();

    const [Items,
        setitems] = useState([]);
    useEffect(() => {
        fetch(`../../../public/data.json/${id}`)
            .then(res => res.json())
            .then(data => setitems(data))

    }, [id]);
    console.log(Items);

    return (
        <div>
            <h1 className='py-5 text-center'>Details About The Item</h1>
            
        </div>
    );
};

export default Inventories;