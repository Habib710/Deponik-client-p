import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import 'animate.css';


const AddNewItems = () => {

    const [user] = useAuthState(auth);
    const [name,setname]=useState([]);
    const [spname,setspname]=useState([]);
    const [price,setprice]=useState([]);
    const [quantity,setquantity]=useState([]);
    const [about,setabout]=useState([]);
    const [pic,setimg]=useState([]);
    const [email,setemail]=useState([]);
  

    const newitems={name,about,price,pic,quantity,spname, email};
 
 
    const hendlename=event=>{
        const newname=event.target.value;
        if(newname){
        setname(newname)};
        
            setemail(user?.email)
        
    }
    const hendleprice=event=>{
        const newprice=event.target.value;
        if(newprice){
        setprice(newprice)}
        
    }
    const hendlequantity=event=>{
        const newquantity=event.target.value;
        
        if(newquantity){
        setquantity(newquantity)}
    }
    const hendlesuplier=event=>{
        const newsuplier=event.target.value;
        if(newsuplier){
        setspname(newsuplier)}
    }
    const hendleabout=event=>{
        const newabout=event.target.value;
        if(newabout){
        setabout( newabout)}
    }
    const hendleimage=event=>{
        const newimage=event.target.value;
        if(newimage){
        setimg(newimage)}
    }
   

    const Onsubmit=event=>{ 
        event.preventDefault();
        
        if(!newitems){
            return alert("input plz")
        }

        const url=`https://deponic.herokuapp.com/items`;
        fetch(url,{

            method:'POST',
            headers:{
                'authorization':`${user.email} ${localStorage.getItem('AccessToken')}`,
                
                'content-type':'application/json'
            },
            body:JSON.stringify(newitems)
        })
        .then(res=>res.json())
        .then(data=>{
           
            Swal.fire({
                icon:'success',
                title: 'Item Added Sucessfuly ',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        })

        event.target.reset();
    
      
        
    };

    
    return (
        <div className=''>
            <h1 className='text-center py-5'>Add New Items</h1>
            <div className='container main-add-css mb-5'>

            <div className=' mx-auto'>

            <form onSubmit={Onsubmit} className='form-add-css py-5 mb-5 container'>
            <h4 className='text-center'>Complete the form to Add New Item</h4>

                <label htmlFor="">Item Name</label><br />
                <input onBlur={hendlename}  type="text"required /><br /><br />
                <label htmlFor="">Supliar Name</label><br />
                <input onBlur={hendlesuplier} type="text" required/><br /><br />
                <label htmlFor="">Price</label><br />
                <input onBlur={hendleprice}  type="number" required/><br /><br />
                <label htmlFor="">Item Quantity</label><br />
                <input onBlur={hendlequantity} type="number"required /><br /><br />
                <label htmlFor="">About Item</label><br />
                <input onBlur={hendleabout} type="text"required /><br /><br />
                <label htmlFor="">Item Image url</label><br />
                <input onBlur={hendleimage} type="text" required/><br /><br />
                <label htmlFor="">Your Email</label>
                <input  type="email" value={user?.email} disabled /><br /><br />
                <br />
                <input   className='btn-add-new' value='Add Now' type="submit" />

            </form>
            </div>
            </div>         
        </div>
    );
};

export default AddNewItems;