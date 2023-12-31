import React from 'react';
import { Link } from 'react-router-dom';
// Import React Router Link component for internal hyperlinks
//import { Link } from 'react-router-dom';

import HomeBig from '../../assets/images/HomeBig.png';


const Header = () => {
  return (
    <header>
      <div
        id='intro-example'
        className='p-4 bg-image'
           style={{
          backgroundImage: `url(${HomeBig})`,
          backgroundSize: 'cover', // Set the background size to cover the entire viewport
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed', // Optional: Keep the background fixed while scrolling
        }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }}>
          <div className='d-flex h-110 '>
          <div className='col-md-5 text-white'
            ></div>
            <div className='col-md-7 text-center text-white p-2 px-5'>
              
            
              <h4 className='p-2 mt-4' style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}><i>"Make a lasting </i><span className='text-info' style={{fontSize:'3rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 3.5)'}}>VISUAL IMPACT</span><i> with stunning graphics..."</i></h4> 
           
              <h4 style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 3.5)'}}><i>"Build a powerful </i><span className='text-info' style={{fontSize:'3rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 3.5)'}}>ONLINE PRESENCE</span> <i>through web development."</i></h4>
              <br></br>
              <br></br>
              <h6 style={{fontFamily:'sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 3.5)'}} className='mb-4'>CHOOSE YOUR PATH TO GET STARTED...</h6>
              
              <Link to='/graphic-design'>
  <button
    type="button"
    className="btn btn-outline-info bg-black btn-sm m-1 px-5"
    data-mdb-ripple-init
  >
    <b>Graphic Design</b>
  </button>
</Link>

        
<Link to='/web-dev'>
  <button
    type="button"
    className="btn btn-outline-black bg-info text-black btn-sm m-1" 
    style={{paddingRight: '2.25rem', paddingLeft: '2.25rem'}}
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
