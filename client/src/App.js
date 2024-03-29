import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Home from "./views/Home/Home";
import TeamShop from "./components/HomeOptions/TeamShop.jsx";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import WebDev from "./views/WebDev/WebDev";
import GraphicDesign from "./views/GraphicDesign/GraphicDesign";
import Business from "./views/Business/Business";
import SoftwareDevelopment from "./views/SoftwareDevelopment/SoftwareDevelopment";
import DigitalMarketing from "./views/DigitalMarketing/DigitalMarketing"; 
import Ecommerce from "./views/Ecommerce/Ecommerce";  
import SignupTerms from "./components/Terms/signupTerms.js";
import Logo from "./views/Logo/Logo";
import Essentials from "./views/Essentials/Essentials";
import Branding from "./views/Branding/Branding";
import BusinessCards from "./views/BusinessCards/BusinessCards";
import ContactForm from "./components/GraphicDesign/ContactForm/index.js";
import Footer from "./components/Footer/index";
import Navbar from "./components/Navbar/index";
import Signup from "./views/Signup/Signup";
import PrivacyPolicy from "./components/Terms/privacyPolicy.js";
import Login from "./views/Login/Login";
import Test from "./views/Test/Test";
import GraphicBrief from "./components/GraphicDesign/GraphicBrief/index.jsx";
import "bootstrap/dist/css/bootstrap.css";

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* Wrap page elements in Router component to keep track of location state */}
      <Router>
        <Navbar />

        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/web-dev" element={<WebDev/>} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/business" element={<Business />} />
          <Route path="/test" element={<Test />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/essentials" element={<Essentials />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/business-cards" element={<BusinessCards />} />
          <Route path="/graphic-design/contact-form" element={<ContactForm />} />
          <Route path="/graphic-brief" element={<GraphicBrief />} />
          
          <Route path="/software-development" element={<SoftwareDevelopment />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          
          <Route path="/team-shop" element={<TeamShop />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/signup-terms" element={<SignupTerms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<Login />} />
          {/* Define a route that will take in variable data */}
        </Routes>

        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
