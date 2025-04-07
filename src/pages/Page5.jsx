
import React from "react";



import d4 from '../assets/d4.webp';
import back from '../assets/back.webp';
import d3 from '../assets/d3.webp';
import d5 from '../assets/d5.webp';
import d6 from '../assets/d6.webp';
import d2 from '../assets/d2.webp';
import b1 from '../assets/b1.jpg';

function Page5() {
  return (
    <div>
      <div className='shop'>
<h1>Welcome to our shoping page</h1>
<p>Here you chose your product to shop </p>

<div className='picture'>
    <div className='im1'>
      <img src={d4} alt=""/>
      <p>This is picture 1</p>
     
    </div>

    <div className='im1'>
      <img src={d5} alt=""/>
      <p>This is picture 2</p>
    </div>

    <div className='im1'>
      <img src={d6} alt=""/>
      <p>This is picture 3</p>
    </div>


    <div className='im1'>
      <img src={back} alt=""/>
      <p>This is picture 4</p>
    </div>


    <div className='im1'>
      <img src={d3} alt=""/>
      <p>This is picture 5</p>
    </div>


    <div className='im1'>
      <img src={d2} alt=""/>
      <p>This is picture 6</p>
    </div>

    <div className='im1'>
      <img src={b1} alt=""/>
      <p>This is picture 7</p>
    </div>
</div>
      </div>
    </div>
  )
  }
  
  export default Page5;
  