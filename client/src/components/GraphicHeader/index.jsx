import React from "react";
import { motion } from "framer-motion";
import {
  MDBBtn
 
} from 'mdb-react-ui-kit';
import Graffiti2 from '../../assets/images/Graffiti2.png'

const GraphicDesignHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
      <header>


<div
  id='intro-example'
  className='p-5 text-center bg-image'
     style={{
    backgroundImage: `url(${Graffiti2})`,
    backgroundSize: 'cover', // Set the background size to cover the entire viewport
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', // Optional: Keep the background fixed while scrolling
  }}
>
  <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }}>
    <div className='d-flex justify-content-center align-items-center h-100'>
      <div className='text-white'>
        <h5>GRAPHIC DESIGN SERVICES</h5>
        <h1 className='mb-3'>Let's Get Started</h1>
     
        <MDBBtn
          className='m-2'
          tag='a'
          outline
          size='lg'
          rel='nofollow'
          target='_blank'
          href='https://www.youtube.com/watch?v=c9B4TPnak1A'
        >
          Learn More
        </MDBBtn>
        <MDBBtn
          className='m-2'
          tag='a'
          outline
          size='lg'
          target='_blank'
          href='./Contact'
        >
          Get Inspired
        </MDBBtn>
      </div>
    </div>
  </div>
</div>
</header>
       
      </div>
    </motion.div>
  );
};

export default GraphicDesignHeader;
