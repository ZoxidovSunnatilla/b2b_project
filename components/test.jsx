import React, { useState } from 'react';
import { Carousel } from '@mantine/carousel';




const test = () => {
 

  return (
    <div> 
    <h2>NextJs Carousel - GeeksforGeeks</h2> 
    <Carousel withIndicators height={200}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
    </Carousel>
  </div> 
  )
}

export default test