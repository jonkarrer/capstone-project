import React from 'react'
import './Story.css';
import background from './cooking.jpg';

export default function Story() {
  return (
    <div className="Story">
      <div id="image-block" style={{backgroundImage:`url(${background})`}}>
        <div className="overlay">
          <h1>My</h1>
          <h2>Story</h2>
        </div> 
      </div>
      <section>

      </section>
    </div>
  )
}
