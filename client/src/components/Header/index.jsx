import React from 'react';
import { Link } from 'react-router-dom';
// Import React Router Link component for internal hyperlinks
//import { Link } from 'react-router-dom';

import HomeHeader from '../../assets/images/HomeHeader.png';


const Header = () => {
  return (
    <header>


      <div
        id='intro-example'
        className='p-5 text-center bg-image'
           style={{
          backgroundImage: `url(${HomeHeader})`,
          backgroundSize: 'cover', // Set the background size to cover the entire viewport
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed', // Optional: Keep the background fixed while scrolling
        }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='col-md-4 text-white'>
              <h1 className='mb-3'>WELCOME!</h1>
              <p>"Make a lasting visual impact with stunning graphics or build a powerful online presence through web development. Our team of experts are here to bring your vision to life. Choose your path below to get started."</p>
              <Link to='/graphic-design'>
  <button
    type="button"
    className="btn btn-outline-info btn-md m-2"
    data-mdb-ripple-init
  >
    Graphic Design
  </button>
</Link>

        
<Link to='/web-dev'>
  <button
    type="button"
    className="btn btn-info text-white btn-md m-2"
    data-mdb-ripple-init
  >
    Web Development
  </button>
</Link>
           
            
            </div>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
