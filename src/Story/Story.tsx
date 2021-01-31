import React from 'react'
import './Story.css';
import background from './backgroundstory.jpg';
import cooking from './cooking.jpg';
import hefty from './hefty.jpg';
import dog from './new.jpg'
export default function Story() {
  return (
    <div className="Story">
      <div id="image-block" style={{backgroundImage:`url(${background})`}}>
        <div className="overlay">
          <h1>Our</h1>
          <h2>Story</h2>
        </div>
      </div>
      <section>
        <p>
          Looking down at the scale in 2015 I remember thinking, "I am too damn big". 
          I had been "big" and trying to lose weight since 2010. The mirror was always 
          there to remind me, too. Nothing wrong with being who I am, however, I knew 
          the consequences of being large. I had all the motivation to drop the fat but 
          none of the knowledge or support to achieve the goals. 
        </p>
      <div id="image-block" style={{backgroundImage:`url(${hefty})`}}></div>
      </section>
      <section>
        <p>
        That's when I discovered "meal prep". Fresh food meticulously cooked and 
        weighed every Sunday to meet my macros. I made myself pre portioned food for 
        6 months and the results were evident. 50 pounds of fat gone and 12 pounds of lean mass 
        gained. Success! Today I have lost even more by fasting and eating plant based foods.
        </p>
        <div id="image-block" style={{backgroundImage:`url(${dog})`}}></div>
      </section>
      <section>
        <p>
        Sadly, when I looked for a company to buy local meal prep from the choices 
        were overpriced, tiny portioned, and lacked flavor. It was nothing like the food 
        I was making. I wanted meal prep to be accessible, delicious, and portioned correctly. 
        I created Feed The Beast. I have made a several changes over the years to reflect how I 
        have matured as a chef, diet enthusiast, and business owner. Hope you enjoy our new plant 
        based and farm to table direction with Nu Leaf! 
        </p>
        <div id="image-block" style={{backgroundImage:`url(${cooking})`}}></div>
      </section>
    </div>
  )
}
