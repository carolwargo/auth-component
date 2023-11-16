import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import CoreCards from '../../components/CoreCards/index.jsx'; 
import AdditionalCards from '../../components/AdditionalCards/index.js';
import Header from "../../components/Header/index.jsx"
import '../../App.css';

const Home = () => {
  return (
    <main style={{
    backgroundColor: '#f5f5f5',
    }}>
        <Header />
      <CoreCards />
      <AdditionalCards />
    
    </main>
  );
};

export default Home;
