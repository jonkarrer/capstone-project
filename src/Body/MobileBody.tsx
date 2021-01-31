import React from 'react'
import './MobileBody.css';
import logo from './logo.png'
import background from './background.jpg';

export default function MobileBody() {
  return (
    <div className="MobileBody">
      <div id="image-block" style={{backgroundImage:`url(${background})`}}>
        <div className="overlay">
          <img src={logo} alt="logo"/>
        </div> 
      </div>
      <section>
        <div className="block">
          <h1>Order</h1>
          <h2>Now</h2>
          <p>
            We have been cooking, packaging, 
            and delivering fresh foods for 3+ 
            years. Order all your food for the week 
            by clicking below.
          </p>
          <button>Order</button>
        </div>
      </section>
      <section>
        <div className="block">
          <h1>Turn a</h1>
          <h2>Nu Leaf</h2>
          <p>
          Most food companies are not concerned about 
          our community's health. Our purpose is to provide 
          access to fresh, delicious, and nutrient rich meals that 
          anyone will enjoy through the week. We do all the shopping, 
          cooking, and packaging for you so you can simply heat and eat 
          healthy food. We have partnered with local Louisiana farms 
          to bring the best tasting ingredients available.
          </p>
        </div>
      </section>
      <section>
        <div className="block">
          <h1>You</h1>
          <h2>Matter</h2>
          <p>
          This is not your typical cookie cutter, 
          tiny portion, flavorless meal prep. 
          Your food is cooked by experienced chefs 
          that use local ingredients. We offer low-sodium, 
          low glycemic, vegan, paleo, and gluten free foods. 
          We make healthy food taste good again and not cost a fortune. 
          All of our food is whole, from farm to plate, with very 
          little processing. Enjoy the best meal prep available by 
          ordering above!
          </p>
        </div>
      </section>
    </div>
  )
}
