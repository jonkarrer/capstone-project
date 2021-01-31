import React, {useState, useEffect} from 'react'
import { Link, withRouter } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  const [navbarPosition, setNavbar] = useState('0');
  const [scrollPosition, setPosition] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const currentPosition = window.pageYOffset;
      if (scrollPosition > currentPosition) {
        setNavbar('0');
      } else {
        setNavbar('-100px');
      }
      setPosition(currentPosition);
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollPosition]);
  return (
    <React.Fragment>
    <div className="NavBar" style={{top:`${navbarPosition}`}}>
      <section className="links">
        <Link id="order" to="/order"><h1>Order</h1></Link>
        <Link id="story" to="/story"><h1>Story</h1></Link>
        <Link className="faq" to="/"><h1>FAQs</h1></Link>
      </section>
    </div>
    </React.Fragment>
  )
}
export default withRouter(Navbar);