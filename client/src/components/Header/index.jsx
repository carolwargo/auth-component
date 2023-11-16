import React from 'react';
// Import React Router Link component for internal hyperlinks
//import { Link } from 'react-router-dom';
import {
  MDBBtn
 
} from 'mdb-react-ui-kit';
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
            <div className='text-white'>
              <h1 className='mb-3'>Graphic Design</h1>
              <h5 className='mb-4'>Best &amp; free guide of responsive web design</h5>
              <MDBBtn
                className='m-2'
                tag='a'
                outline
                size='lg'
                rel='nofollow'
                target='_blank'
                href='https://www.youtube.com/watch?v=c9B4TPnak1A'
              >
                Start tutorial
              </MDBBtn>
              <MDBBtn
                className='m-2'
                tag='a'
                outline
                size='lg'
                target='_blank'
                href='./Contact'
              >
                Start Now
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
