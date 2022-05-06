import React, {useEffect, useState} from 'react';
import {Carousel} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import HomeItems from '../Items/HomeItems';
import './Home.css';
import img1 from '../../img/cargo.jpg';
import img2 from '../../img/list.jpg';
import img3 from '../../img/saifty.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight, faBuilding, faEarth, faUsers,  } from '@fortawesome/free-solid-svg-icons';
import { faClock,} from '@fortawesome/free-regular-svg-icons';
import { CountUp } from 'use-count-up';
import logo1 from '../../img/logo_1.png';
import logo2 from '../../img/logo_2.png';
import logo3 from '../../img/logo_3.png';
import logo4 from '../../img/logo_4.png';
import logo5 from '../../img/logo_5.png';

const Home = () => {
    const [Items,
        setitems] = useState([]);
    useEffect(() => {
        fetch("https://deponic.herokuapp.com/items")
            .then(res => res.json())
            .then(data => setitems(data))

    }, []);

    const onComplete = () => {
      // do your stuff here
      return { shouldRepeat: 1, delay:3 }
    }
    
    const MyComponent = () => <CountUp  isCounting end={120}  duration={5.2} onComplete={onComplete}   />
    const MyComponent2 = () => <CountUp  isCounting end={1830}  duration={5.2} onComplete={onComplete}   />
    const MyComponent3 = () => <CountUp  isCounting end={27}  duration={5.2} onComplete={onComplete}   />
    const MyComponent4 = () => <CountUp  isCounting end={12}  duration={5.2} onComplete={onComplete}   />
    
    
    

    return (
        <div>
            <Carousel>
                <Carousel.Item className='slide1'>

                    <Carousel.Caption className='slide-title text-white  '>
                        <p className='titleof-slide'>Welcome To DEPO<span className='deponic'>NIC</span>
                        </p>
                        <p className='slide-paragraf'>Deponic Teamwork is the ability to work together
                            toward a common vision. The ability to direct individual accomplishments toward
                            organizational objectives. It is the fuel that allows common people to attain
                            uncommon results</p>
                        <button className='btn-slide'>
                            <Link to='/blog'>Learn More <FontAwesomeIcon icon={faArrowRight}/></Link>
                        </button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='slide2'>

                    <Carousel.Caption className='slide-title text-white '>
                        <p className='titleof-slide'>DEPO<span className='deponic'>NIC</span>
                            <br/>
                            Providing The Best Services</p>
                        <p className='slide-paragraf'>Deponic Teamwork is the ability to work together
                            toward a common vision. The ability to direct individual accomplishments toward
                            organizational objectives</p>
                        <button className='btn-slide'>
                            <Link to='/blog'>Learn More <FontAwesomeIcon icon={faArrowRight}/></Link>
                        </button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='slide3'>

                    <Carousel.Caption className='slide-title text-white'>
                        <p className='titleof-slide'>Our Helping
                            <br/>
                            Hand will Lead You to Get Best</p>
                        <p className='slide-paragraf'>
                            We use this information in order to improve and customize our browsing
                            experience .</p>
                        <button className='btn-slide'>
                            <Link to='/blog'>Learn More <FontAwesomeIcon icon={faArrowRight}/></Link>
                        </button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <section className='my-5 '>
            <h2 className='text-center mt-5'>
                Inventories Items</h2>
            <div className='home-cart-css container  py-5  px-1'>

                {Items
                    .slice(0, 6)
                    .map(item =>< HomeItems key = {
                        item._id
                    }
                    data = {
                        item
                    } > </HomeItems>)

}
                       

            </div>
            <div className=' text-center py-4'>
            <button className='btn-slide  '>
                            <Link to='/manageitems'>Manage Inventories <FontAwesomeIcon icon={faArrowRight}/></Link>
                        </button>

            </div>
              
            
            </section>
            <div className='my-5'>
                <h2 className='text-center'>
                    DEPO<span className='deponic'>NIC 
                    </span>  Services</h2>
                <div className='container service-main py-5 mt-4'>
                    <div className='service-div text-center'>
                        <img width='100%' src={img1} alt="img"/>
                        <h2 className='py-3'>
                            Transpoart</h2>
                        <p>
                            Nobis dignissimos eius voluptatum, dolores dolorem non sunt repellat
                            voluptatibus doloribus laboriosam adipisci, blanditiis labore molestiae quia.</p>
                    </div>
                    <div className='service-div text-center'>
                        <img width='100%' src={img2} alt="img"/>
                        <h2 className='py-3'>
                            Management</h2>
                        <p>Manage sit amet consectetur, adipisicing elit. Illum explicabo, optio
                            temporibus, ex error quam suscipit sapiente, cumque ducimus enim ipsum? Sit quia
                            quidem dicta nam non debitis, .</p>
                    </div>
                    <div className='service-div text-center'>
                        <img width='100%' src={img3} alt="img"/>
                        <h2 className='py-3'>
                            Careness</h2>
                        <p>
                            Aspernatur so eveniet, ipsa quia modi cum impedit neque illo atque molestias,
                            ipsum nisi tempora repellat non voluptates quos eos maxime.
                        </p>
                    </div>

                </div>
            </div>
            <section  className='count-section '>

              <div className='counter-main-div container'>
                <div className=' counter-div'>
                  <h1 ><FontAwesomeIcon className='mt-4 me-2' icon={faBuilding} />
                    {MyComponent()}
                   </h1>
                  <h4>Offices Worldwide</h4>
                </div>
                <div className=' counter-div'>
                  <h1><FontAwesomeIcon className='mt-4 me-2' icon={faUsers} />
                  {MyComponent2()} </h1>
                  <h4>Hardworking People</h4>
                </div>
                <div className=' counter-div'>
                  <h1><FontAwesomeIcon className='mt-4 me-2' icon={faEarth} />  {MyComponent3()}</h1>
                  <h4>Countries Covered</h4>
                </div>
                <div className=' counter-div'>
                  <h1><FontAwesomeIcon className='mt-4 me-2' icon={faClock} /> {MyComponent4()}</h1>
                  <h4>Years of Experiences</h4>
                </div>


              </div>
            </section>
            <section className='container partner-section '>
              <div className='partner-head-div row'>

                <div className='col-lg-4'><h1>OUR <span className='deponic'>PARTNERS</span></h1></div>
                <div className='col-lg-8 pt-2'><hr className='hr-css ' /></div>
              </div>

              {/* logo */}
              <div className='py-5 logo-div text-center mb-5'>

                <div className='logo-back '><img src={logo1} alt="img" /></div>
                <div><img src={logo2} alt="img" /></div>
                <div className='logo-back'><img src={logo3} alt="img" /></div>
                <div><img src={logo4} alt="img" /></div>
                <div className='logo-back'><img src={logo5} alt="img" /></div>
               


              </div>
            </section>

        </div>
    );
};

export default Home;