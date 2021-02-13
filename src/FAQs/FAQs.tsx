import React from 'react';
import './FAQs.css';

export default function FAQs() {
  return (
    <div className="FAQs">
     <h1>Fequently Asked Questions</h1> 
     <div className="questions-container-grid">
       <div className="grid-row">
         <h2 style={{paddingBottom: "10px"}}>What is meal prep?</h2>
         <p>Meal prep is the process of preparing all your food for the week in one day. The meals are precisely weighed for portion control and designed to fit your diet. This prevents you from eating out, cheating on your diet, fighting the lunch crowd, and cooking every day.</p>
       </div>
       <div className="grid-row">
         <h2 style={{paddingBottom: "10px"}}>What am i getting?</h2>
         <p>Once you have selected the items you wanted and submitted your order, we take care of the rest. We will be sending your freshly cooked meals individually packaged in a 24 oz. recyclable container, perfect for on the go. Our meals are fresh, never frozen and are prepared locally.</p>
       </div>
       <div className="grid-row">
         <h2 style={{paddingBottom: "10px"}}>Is this healthy food?</h2>
         <p>Everyone has a different standard for healthy food. All of our food is low sodium and portion controlled. We offer low glycemic, vegan, paleo, high protein, and gluten free options.</p>
       </div>
       <div className="grid-row">
         <h2 style={{paddingBottom: "10px"}}>How often do I need to order?</h2>
         <p>Ordering is on a week to week basis. You order once per week. There’s no contract or commitments, just simply order when you need it!</p>
       </div>
       <div className="grid-row">
         <h2 style={{paddingBottom: "10px"}}>When can I place an order?</h2>
         <p>A new menu is opened up every Sunday and you have until midnight on Wednesday’s to place an order.</p>
       </div>
       <div className="grid-row">
         <h2 style={{paddingBottom: "10px"}}>Is there a minimum order?</h2>
         <p>There is a minimum of $40 to place an order for delivery. There is no minimum for pickup orders.</p>
       </div>
       <div className="grid-row">
         <h2 style={{paddingBottom: "10px"}}>Where do you deliver?</h2>
         <p>We deliver to Gonzales, Geismar, Prairieville, St. Gabriel, Baton Rouge, and Denham Springs. There’s a more detailed map with our specific delivery zone highlighted on our ordering page.</p>
       </div>
       
     </div>
    </div>
  )
}
