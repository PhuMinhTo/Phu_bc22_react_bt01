import React from 'react';
import Carousel from './Carousel';
import Smartphone from './Smartphone';
import Laptop from './Laptop';
import Promotion from './Promotion';

export default function Content() {
  return (
    <div>
        <Carousel/>
        <Smartphone/>
        <Laptop/>
        <Promotion/>
    </div>
  )
}
