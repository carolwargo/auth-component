import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './views/Home/Home';
import About from './views/About/About';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Navbar from './components/Navbar/index';
import Signup from './views/Signup/Signup';
import Login from './views/Login/Login';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* Wrap page elements in Router component to keep track of location state */}
      <Router>
        <Navbar />
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            {/* Wrap Route elements in a Routes component */}
            <Routes>
              {/* Define routes using the Route component to render different page components at different paths */}
              {/* Define a default route that will render the Home component */}
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route
              path='/about'
              element={<About />}
              />
              <Route
              path='/signup'
              element={<Signup />}
              />
              <Route
              path='/login'
              element={<Login />}
              />
              {/* Define a route that will take in variable data */}
           
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
