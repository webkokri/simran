import '../public/assets/css/style.css'
import '../public/assets/css/modal.css'
import "../public/assets/css/swiper-custom.css";
import React, { useEffect, useState } from "react";
import Preloader from '../components/elements/Preloader';
import Head from 'next/head';

import { BrowserRouter, Route, Routes } from 'next/router';
import ChatPage from '../pages/ChatPage';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  }, []);
  return (
    <>
      {!loading ? (
        <div>
        <Head>
          <title>Siman Infotech - Custom Software Development</title>
          <meta name="description" content="Siman Infotech offers custom software development services in Manitoba, Canada, including Winnipeg. Our expertise spans web designing, web development, SEO, SMO, social media marketing, digital marketing, graphic designing, and crypto software development." />
          <meta property="og:title" content="Siman Infotech - Custom Software Development in Canada, Custom Software Development in Manitoba, Custom Software Development in Winnipeg, Web Designing and Web Development, SEO, SMO, Social Media Marketing, Digital Marketing, Graphic Designing, Crypto Software Development etc." />
          <meta property="og:description" content="Siman Infotech offers custom software development services in Manitoba, Canada, including Winnipeg. Our expertise spans web designing, web development, SEO, SMO, social media marketing, digital marketing, graphic designing, and crypto software development." />
          <meta property="og:image" content="/promo.jpg" />
          <meta name="author" content="Siman Infotech" />
          <link rel="icon" href="favicon.ico" type="image/x-icon" />
          <meta name="keywords" content="Mobile and Web Applications, On Demand Technology Solutions, CRM, Customer Relationship Management, Sale and Purchase Software, Order Management Software, Billing Management Software, GST Invoicing, ERP, Software Development, Mobile App Development Company, Siman Infotech - Custom Software Development in Canada, Custom Software Development in Manitoba, Custom Software Development in Winnipeg, Web Designing and Web Development, SEO, SMO, Social Media Marketing, Digital Marketing, Graphic Designing, Crypto Software Development etc." />
        
          
        </Head>
        <Component {...pageProps} />
      </div>
      ) : (
        <Preloader />
      )}

    </>
  )
}

export default MyApp
