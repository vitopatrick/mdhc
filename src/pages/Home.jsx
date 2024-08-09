/*eslint-disable */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TickerTape } from "react-tradingview-embed";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Newsletter from "../components/Newsletter/Newsletter";
import Reason from "../components/Reason/Reason";
import Start from "../components/Start/Start";
import Work from "../components/Work/Work";
import Plan from "../components/Plan/Plan";
import Testimonials from "../components/testimonials/Testimonials";

const Home = () => {
  useEffect(() => {
    // Function to load Tidio Chat
    const loadTidioChat = () => {
      const tidioScript = document.createElement("script");
      tidioScript.src = "//code.jivosite.com/widget/2Vdujj5j9s";
      tidioScript.async = true;
      document.body.appendChild(tidioScript);
    };

    // Load Tidio Chat when component mounts
    loadTidioChat();

    // Clean up function to remove Tidio Chat when component unmounts
    return () => {
      const tidioElement = document.getElementById("tidio-chat");
      if (tidioElement) {
        tidioElement.remove();
      }
    };
  }, []);

  return (
    <React.Fragment>
      <Header />
      <TickerTape />
      <About />
      <Start />
      <Work />
      <Reason />
      <Plan />
      <Testimonials />
      <Newsletter />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
