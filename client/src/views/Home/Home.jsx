import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Link } from "react-router-dom";  
import Header from "../../components/Header/index.jsx";
import "../../App.css";
import { GiShoppingCart } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { IoColorPaletteOutline } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { GiBasketballJersey } from "react-icons/gi";
import { BsArrowThroughHeart } from "react-icons/bs";
import { PiTShirtDuotone } from "react-icons/pi";
import Business from "../../assets/images/Business.png";
import Promo from "../../assets/images/Home/Promo.png";
import Organizations from "../../assets/images/Organizations.png";

const Home = () => {
  return (
    <main
     
    >
      <Header />
      <div className="container mt-5">
      <div className="row d-flex justify-content-center align-items-center">
      <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
          <img src={Business} alt="Business" className="mb-2 border border-black" style={{width: '80%', height: 'auto'}}/> 
         </div>
        <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-bottom">
            <div className="business-essentials-body p-5 justify-content-center align-bottom">
              <div className="business-essentials-title">
                <p>SHOP SINGLE ITEMS OR PACKAGE OPTIONS</p>
              <h1>BUSINESS ESSENTIALS</h1>
              </div>
              <p className="business-essentials-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi perspiciatis consequatur magnam, aperiam alias saepe reprehenderit id animi soluta quae, neque commodi ratione dolor. Dolorum ut assumenda inventore ratione nesciunt!
              </p>
              <p className="mt-5">
              <a
                href="/graphic-design/contact-form"
                className="text-decoration-none"
              >
              See Business Essentials
                <FaArrowRight className="ms-2" />
              </a>
           
              </p>
             
            </div>
          </div>
       
      </div>
      </div>



      <div className="container mt-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center ">
            <div className="organizations-body p-5 justify-content-center align-items-center">
              <div className="organizations-title">
              <p>SHOP SINGLE ITEMS OR PACKAGE OPTIONS</p>
              <h1>ORGANIZATIONS</h1>
              </div>
              <p className="organizations-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi perspiciatis consequatur magnam, aperiam alias saepe reprehenderit id animi soluta quae, neque commodi ratione dolor. Dolorum ut assumenda inventore ratione nesciunt!
              </p>
              <p className="mt-5">
              <a
                href="/graphic-design/contact-form"
                className="text-decoration-none"
              >
              See Organization Items
                <FaArrowRight className="ms-2" />
              </a>
              </p>
          </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
          <img src={Organizations} alt="Organizations" className="mb-2 border border-black" style={{width: '80%', height: 'auto'}}/> 
         </div>
      </div>
      </div>


     
      <div className="container mt-5">
      <div className="row d-flex justify-content-center align-items-center">
      <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
          <img src={Business} alt="Business" className="mb-2 border border-black" style={{width: '80%', height: 'auto'}}/> 
         </div>
        <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-bottom">
            <div className="spacial-event-body p-5 justify-content-center align-bottom">
              <div className="spacial-event-title">
                <p>SHOP FOR THAT SPECIAL DAY</p>
              <h1>SPECIAL EVENTS</h1>
              </div>
              <p className="spacial-event-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi perspiciatis consequatur magnam, aperiam alias saepe reprehenderit id animi soluta quae, neque commodi ratione dolor. Dolorum ut assumenda inventore ratione nesciunt!
              </p>
              <p className="mt-5">
              <a
                href="/graphic-design/contact-form"
                className="text-decoration-none"
              >
              See Special Event Items
                <FaArrowRight className="ms-2" />
              </a>
           
              </p>
             
            </div>
          </div>
       
      </div>
      </div>





      <div className="container mt-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center ">
            <div className="service-body p-5 justify-content-center align-items-center">
              <div className="service-title">
              <p>SHOP BY SERVICE BASED NEED.</p>
              <h1>SERVICES</h1>
              </div>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi perspiciatis consequatur magnam, aperiam alias saepe reprehenderit id animi soluta quae, neque commodi ratione dolor. Dolorum ut assumenda inventore ratione nesciunt!
              </p>
              <p className="mt-5">
              <a
                href="/graphic-design/contact-form"
                className="text-decoration-none"
              >
              See Services Offered
                <FaArrowRight className="ms-2" />
              </a>
              </p>
          </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
          <img src={Organizations} alt="Organizations" className="mb-2 border border-black" style={{width: '80%', height: 'auto'}}/> 
         </div>
      </div>
      </div>







      
      
        <br></br>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6"></div>
        </div>
        <h3>Team Shop</h3>
        <div className="row p-4 px-5 mt-3">
          <div className="roll-in-view4 col-sm-12 col-md-3 col-lg-3 ">
            <GiGraduateCap
              className="roll-in-view"
              style={{ fontSize: "100px" }}
            />
            <p>
              <a href="/team-shop" className="text-decoration-none text-light">
                Senior Nights
                <FaArrowRight className="ms-2" />
              </a>
            </p>
          </div>
          <div className="roll-in-view3 col-sm-12 col-md-3 col-lg-3 ">
            <PiTShirtDuotone
              className="roll-in-view"
              style={{ fontSize: "100px" }}
            />
            <p>
              <a
                href="/graphic-design/contact-form"
                className="text-decoration-none text-light"
              >
                Spirit Wear
                <FaArrowRight className="ms-2" />
              </a>
            </p>
          </div>

          <div className="roll-in-view2 col-sm-12 col-md-3 col-lg-3 ">
            <GiBasketballJersey
              className="roll-in-view"
              style={{ fontSize: "100px" }}
            />
            <p>
              <a
                href="/graphic-design/contact-form"
                className="text-decoration-none text-light"
              >
                Team Drip
                <FaArrowRight className="ms-2" />
              </a>
            </p>
          </div>
          <div className="roll-in-view1 col-sm-12 col-md-3 col-lg-3 ">
            <BsArrowThroughHeart
              className="roll-in-view"
              style={{ fontSize: "100px" }}
            />
            <p>
              <a
                href="/graphic-design/contact-form"
                className="text-decoration-none text-light"
              >
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
            <img
              src={Promo}
              alt="Promo"
              className="rounded mb-2"
              style={{ width: "100%", height: "auto" }}
            />

            <p>
              <a
                href="/graphic-design/contact-form"
                className="text-decoration-none text-light"
              >
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
              <a
                href="/graphic-design/contact-form"
                className="text-decoration-none text-light"
              >
                Catalogs
                <FaArrowRight className="ms-2" />
              </a>
            </p>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-2">
            <p>
              <a
                href="/graphic-design/contact-form"
                className="text-decoration-none text-light"
              >
                Signs
                <FaArrowRight className="ms-2" />
              </a>
            </p>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-2">
            <p>
              <a
                href="/graphic-design/contact-form"
                className="text-decoration-none text-light"
              >
                Banners
                <FaArrowRight className="ms-2" />
              </a>
            </p>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-2">
            <p>
              <a
                href="/graphic-design/contact-form"
                className="text-decoration-none text-light"
              >
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
              <a
                href="/graphic-design/contact-form"
                className="text-decoration-none text-light"
              >
                Business Cards
                <FaArrowRight className="ms-2" />
              </a>
            </p>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-2">
            <p>
              <a
                href="/graphic-design/contact-form"
                className="text-decoration-none text-light"
              >
                Post Cards
                <FaArrowRight className="ms-2" />
              </a>
            </p>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-2">
            <p>
              <a
                href="/graphic-design/contact-form"
                className="text-decoration-none text-light"
              >
                Banners
                <FaArrowRight className="ms-2" />
              </a>
            </p>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-2">
            <p>
              <a
                href="/graphic-design/contact-form"
                className="text-decoration-none text-light"
              >
                Posters
                <FaArrowRight className="ms-2" />
              </a>
            </p>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-2">
            <p>
              <a
                href="/graphic-design/contact-form"
                className="text-decoration-none text-light"
              >
                Stamps
                <FaArrowRight className="ms-2" />
              </a>
            </p>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-2">
            <p>
              <a
                href="/graphic-design/contact-form"
                className="text-decoration-none text-light"
              >
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
              <a
                href="/graphic-design/contact-form"
                className="text-decoration-none text-light"
              >
                Web Design
                <FaArrowRight className="ms-2" />
              </a>
            </p>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3">
            <p>
              <a
                href="/graphic-design/contact-form"
                className="text-decoration-none text-light"
              >
                Software Solutions
                <FaArrowRight className="ms-2" />
              </a>
            </p>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3">
            <p>
              <a
                href="/graphic-design/contact-form"
                className="text-decoration-none text-light"
              >
                Custom Graphics
                <FaArrowRight className="ms-2" />
              </a>
            </p>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3">
            <p>
              <a
                href="/graphic-design/contact-form"
                className="text-decoration-none text-light"
              >
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
            <GiShoppingCart style={{ fontSize: "50px" }} />
            Business Must Haves
          </div>
          <div className="col-sm-12 col-md-3 col-lg-6">
            <RiComputerLine style={{ fontSize: "50px" }} />
          </div>
          <div
            className="col-sm-12 col-md-3 col-lg-6"
            style={{ padding: "2rem" }}
          >
            <IoColorPaletteOutline style={{ fontSize: "50px" }} />
          </div>
          <div className="col-sm-12 col-md-3 col-lg-6">
            <FaHandshake style={{ fontSize: "50px" }} />
            Services
          </div>
        </div>
    </main>
  );
};

export default Home;
