import React from 'react';

import Slider from '../../components/slider/Slider'
import SummarySlide from './SummarySlide'
import SoftwareEngineerSlide from './SoftwareEngineerSlide'
import ProductManagerSlide from './ProductManagerSlide'
import MountainManSlide from './MountainManSlide'
import WatermanSlide from './WatermanSlide'

import './HomeSlides.scss'

function Home() {

  const getSlides = () => {
    return [
      <SummarySlide/>,
      <SoftwareEngineerSlide/>,
      <ProductManagerSlide/>,
      <MountainManSlide/>,
      <WatermanSlide/>
    ]
  };

  return (
    <Slider
      slides={getSlides()}
    />
  );
}

export default Home;