import React, {useState, useEffect} from 'react'
import './Navbar.css';
export default function Navbar() {
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
        <div className="Order"><h1><a>Order</a></h1></div>
        <div className="faq"><h1><a>Story</a></h1></div>
        <div className="faq"><h1><a>FAQs</a></h1></div>
      </section>
    </div>
    </React.Fragment>
  )
}
