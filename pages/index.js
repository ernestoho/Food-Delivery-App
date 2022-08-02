import React from "react";
import Head from 'next/head';

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CustomersBanner from '../components/Customers-Banner';
import FeaturedFood from '../components/Featured-Food';
import ServicesBanner from "../components/Services-Banner";
import AboutUsBanner from "../components/AboutUs-Banner";

export default function Home() {
  return (
    <div>
      <Head>
        <title>DeliPat - Your Favourite Food Delivery Partner</title>
        <meta name="description" content="Responsive, clean and open source food delivery app using Next.js & Tailwind CSS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-3 max-w-7xl m-auto">
        <Navbar />
        <Hero />
        <CustomersBanner />
        <FeaturedFood />
        <ServicesBanner />
        <AboutUsBanner />
      </div>
    </div>
  )
}
