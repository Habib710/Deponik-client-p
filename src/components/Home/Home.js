import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeItems from '../Items/HomeItems';
import './Home.css';

const Home = () => {
    const [Items,setitems]=useState([]);
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setitems(data))



    },[])
   
    return (
        <div>
            <Carousel>
  <Carousel.Item className='slide1'>
    
    <Carousel.Caption className='slide-title text-white  '>
      <p className='titleof-slide'>Welcome To  DEPO<span className='deponic'>NIC</span> </p>
      <p className='slide-paragraf'>Deponic Teamwork is the ability to work together toward a common vision. The ability to direct individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results</p>
      <button className='btn-slide'><Link to='/blog'>Learn More</Link></button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className='slide2'>
    

    <Carousel.Caption className='slide-title text-white '>
      <p className='titleof-slide'>DEPO<span className='deponic'>NIC</span> <br /> Providing The Best Services</p>
      <p className='slide-paragraf'>Deponic Teamwork is the ability to work together toward a common vision. The ability to direct individual accomplishments toward organizational objectives</p>
      <button className='btn-slide'><Link to='/blog'>Learn More</Link></button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className='slide3' >
    

    <Carousel.Caption className='slide-title text-white'>
      <p className='titleof-slide'>Our Helping <br /> Hand will Lead You to Get Best</p>
      <p className='slide-paragraf'> We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media. To find out more about .</p>
      <button className='btn-slide'><Link to='/blog'>Learn More</Link></button>
    </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
   <div className='home-cart-css container py-5 my-5'>
{
    Items.map(item=><HomeItems key={item.id} data={item}></HomeItems>)
}

   </div>
          
        </div>
    );
};

export default Home;