import React from 'react';
import { Link } from 'react-router-dom';
// Import React Router Link component for internal hyperlinks
//import { Link } from 'react-router-dom';

import HomeHeaderBlack2 from '../../assets/images/HomeHeaderBlack2.png';


const Header = () => {
  return (
    <header>
      <div
        id='intro-example'
        className='p-5 text-center bg-image'
           style={{
          backgroundImage: `url(${HomeHeaderBlack2})`,
          backgroundSize: 'cover', // Set the background size to cover the entire viewport
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed', // Optional: Keep the background fixed while scrolling
        }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='col-md-8 text-white'
            >
              <h1 className='mb-2' style={{textShadow: '0 4px 8px rgba(0, 0, 0, 3.8)',
              fontSize:'3rem'}}>WELCOME!</h1>
              <br></br>
              <p className='px-4'
              style={{
                fontFamily:'monospace',
                textShadow: '0 4px 8px rgba(0, 0, 0, 3.8)',
              }}>"Make a lasting visual impact with stunning graphics or build a powerful online presence               through web development. <br></br> <br></br>Our team of experts are here to bring your vision to life."</p>
              <br></br>
              <h6 style={{fontFamily:'sans-serif'}}>CHOOSE YOUR PATH TO GET STARTED...</h6>
              <Link to='/graphic-design'>
  <button
    type="button"
    className="btn btn-outline-info btn-md m-2"
    data-mdb-ripple-init
  >
    <b>Graphic Design</b>
  </button>
</Link>

        
<Link to='/web-dev'>
  <button
    type="button"
    className="btn btn-info text-black btn-md m-2"
    data-mdb-ripple-init
  >
    <b>Web Development</b>
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
