import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  height: '460px',
  width: '60px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};



 
const Slide = () => 
  

(
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img src="s1.jpg"  alt="pics"/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="s2.jpg" alt="pics"/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="s3.jpg" alt="pics"/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="s4.jpg" alt="pics"/></h3>
        
    </div>
  </Carousel>
);

export default Slide ;