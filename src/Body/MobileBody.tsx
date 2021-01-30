import React from 'react'
import './MobileBody.css';
import logo from './logo.png'
import background from './background3.jpg';
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
          <h1>My</h1>
          <h2>Story</h2>
          <p>
          Looking down at the scale in 2015 I remember thinking, 
          "I am too damn big". I had been "big" and trying to lose 
          weight since 2010. The mirror was always there to remind me, too. 
          Nothing wrong with being who I am, however, I knew the consequences 
          of being large. I had all the motivation to drop the fat 
          but none of the knowledge or support to achieve the goals. 
          That's when I discovered "meal prep". Fresh food meticulously 
          cooked and weighed every Sunday to meet my macros. I made myself 
          pre portioned food for 6 months and the results were evident. 
          50 pounds of fat gone and 12 pounds of lean mass gained. Success! 
          Today I have lost even more by fasting and eating plant based. 
          Sadly, when I looked for a company to buy local meal prep from the 
          choices were overpriced, tiny portioned, and lacked flavor. 
          It was nothing like the food I was making. I wanted meal prep 
          to be accessible, delicious, and portioned correctly. 
          I created Feed The Beast. I wear my art on my sleeve. 
          I have made a several changes over the years to reflect how 
          I have matured as a chef, diet enthusiast, and business owner. 
          Hope you enjoy our new plant based and farm to table direction 
          with Nu Leaf! 
          </p>
        </div>
      </section>
    </div>
  )
}
