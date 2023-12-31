import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from "../../components/Header/index.jsx"
import '../../App.css';
import { GiShoppingCart } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { IoColorPaletteOutline } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { GiBasketballJersey } from "react-icons/gi";
import { BsArrowThroughHeart } from "react-icons/bs";
import { PiTShirtDuotone } from "react-icons/pi";

import  Promo  from '../../assets/images/Home/Promo.png';



const Home = () => {
  return (
    <main style={{
    backgroundColor: 'black',
    color: 'white',
    }}>
        <Header />
        <div className="container mt-5">
        <h1 className='mb-2' style={{textShadow: '0 4px 8px rgba(0, 0, 0, 3.8)',
              fontSize:'3rem'}}>WELCOME!</h1>
              <br></br>
              <p className='px-4'
              style={{
                textShadow: '0 4px 8px rgba(0, 0, 0, 3.8)',
              }}>"Make a lasting visual impact with stunning graphics or build a powerful online presence               through web development. <br></br> <br></br>Our team of experts are here to bring your vision to life."</p>
              <br></br>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <h2>Team Shop</h2>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
              
              </div>
            </div>
            <h3>Team Shop</h3>
            <div className="row p-4 px-5 mt-3">
          <div className="roll-in-view4 col-sm-12 col-md-3 col-lg-3 ">
          <GiGraduateCap className='roll-in-view' style={{fontSize: '100px'}}/>
        <p>
                <a href="/team-shop" className='text-decoration-none text-light'>
                Senior Nights
                  <FaArrowRight className="ms-2" />
                </a>
        </p>
          </div>
          <div className="roll-in-view3 col-sm-12 col-md-3 col-lg-3 ">
          <PiTShirtDuotone className='roll-in-view'style={{fontSize: '100px'}}/>
        <p>
        <a href="/graphic-design/contact-form" className='text-decoration-none text-light'>
        Spirit Wear
                  <FaArrowRight className="ms-2" />
                </a>
        </p>
          </div>
          
          <div className="roll-in-view2 col-sm-12 col-md-3 col-lg-3 ">
          <GiBasketballJersey className='roll-in-view' style={{fontSize: '100px'}}/>
        <p>
        <a href="/graphic-design/contact-form" className='text-decoration-none text-light'>
        Team Drip
                  <FaArrowRight className="ms-2" />
                </a>
        </p>
          </div>
          <div className="roll-in-view1 col-sm-12 col-md-3 col-lg-3 ">
          <BsArrowThroughHeart className='roll-in-view' style={{fontSize: '100px'}}/>
        <p>
        <a href="/graphic-design/contact-form" className='text-decoration-none text-light'>
        Girlfriend Gear
                  <FaArrowRight className="ms-2" />
                </a>
        </p>
          </div>
            </div>

            <br></br>
<br></br>
            <h3>Custom Merchandise</h3>
            <div className="row p-5">
          <div className="col-sm-12 col-md-3 col-lg-2">
          <img src={Promo} alt="Promo" className='rounded mb-2' style={{width: "100%", height: "auto"}} />
     
        <p>
        <a href="/graphic-design/contact-form" className='text-decoration-none text-light'>
        Promo Items
                  <FaArrowRight className="ms-2" />
                </a>
        </p>
    </div>
     {/**     <div className="col-sm-12 col-md-3 col-lg-2">
        <p>
        <a href="/graphic-design/contact-form" className='text-decoration-none text-light'>
        Product Labels & Packaging
                  <FaArrowRight className="ms-2" />
                </a>
        </p>
          </div>
          */} 

          <div className="col-sm-12 col-md-3 col-lg-2">
        <p>
        <a href="/graphic-design/contact-form" className='text-decoration-none text-light'>
        Catalogs
                  <FaArrowRight className="ms-2" />
                </a>
        </p>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-2">
        <p>
        <a href="/graphic-design/contact-form" className='text-decoration-none text-light'>
        Signs
                  <FaArrowRight className="ms-2" />
                </a>
        </p>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-2">
        <p>
        <a href="/graphic-design/contact-form" className='text-decoration-none text-light'>
        Banners
                  <FaArrowRight className="ms-2" />
                </a>
        </p>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-2">
        <p>
        <a href="/graphic-design/contact-form" className='text-decoration-none text-light'>
        Digital Packages
                  <FaArrowRight className="ms-2" />
                </a>
        </p>
          </div>
            </div>
            <br></br>
<br></br>
            <h3>Business Essentials</h3>
            <div className="row p-5">
          <div className="col-sm-12 col-md-3 col-lg-2">
           <p>
           <a href="/graphic-design/contact-form" className='text-decoration-none text-light'>
           Business Cards
                  <FaArrowRight className="ms-2" />
                </a></p> 
          </div>
          <div className="col-sm-12 col-md-3 col-lg-2">
           <p>
           <a href="/graphic-design/contact-form" className='text-decoration-none text-light'>
           Post Cards
                  <FaArrowRight className="ms-2" />
                </a></p> 
          </div>
            <div className="col-sm-12 col-md-3 col-lg-2">
            <p>
            <a href="/graphic-design/contact-form" className='text-decoration-none text-light'>
            Banners
                  <FaArrowRight className="ms-2" />
                </a>
            </p>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-2">
            <p>
               <a href="/graphic-design/contact-form" className='text-decoration-none text-light'>
               Posters
                  <FaArrowRight className="ms-2" />
                </a>
            </p>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-2">
            <p>
               <a href="/graphic-design/contact-form" className='text-decoration-none text-light'>
               Stamps
                  <FaArrowRight className="ms-2" />
                </a>
            </p>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-2">
            <p>
               <a href="/graphic-design/contact-form" className='text-decoration-none text-light'>
               Stickers
                  <FaArrowRight className="ms-2" />
                </a>
            </p>
            </div>
            </div>
            <br></br>
<br></br>
            <h3>Services</h3>
            <div className="row p-5">
          <div className="col-sm-12 col-md-3 col-lg-3">
           <p>
           <a href="/graphic-design/contact-form" className='text-decoration-none text-light'>
           Web Design
                  <FaArrowRight className="ms-2" />
                </a></p> 
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3">
           <p>
             <a href="/graphic-design/contact-form" className='text-decoration-none text-light'>
             Software Solutions
                  <FaArrowRight className="ms-2" />
                </a></p> 
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3">
           <p>
             <a href="/graphic-design/contact-form" className='text-decoration-none text-light'>
             Custom Graphics
                  <FaArrowRight className="ms-2" />
                </a></p> 
          </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
            <p>
               <a href="/graphic-design/contact-form" className='text-decoration-none text-light'>
               Branding & Logo Design
                  <FaArrowRight className="ms-2" />
                </a>
            </p>
            </div>
            </div>
     
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
            <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-6">
          <GiShoppingCart style={{fontSize: '50px'}}/>
          Business Must Haves
          </div>
          <div className="col-sm-12 col-md-3 col-lg-6">
            <RiComputerLine style={{fontSize: '50px'}}/>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-6"
            style={{padding:'2rem'}}>
              <IoColorPaletteOutline style={{fontSize: '50px'}}/>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-6">
            <FaHandshake style={{fontSize: '50px'}}/>
            Services
            </div>
            </div>
          </div>
    
    </main>
  );
};

export default Home;
