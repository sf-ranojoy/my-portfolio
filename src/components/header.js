import * as React from "react"
import { Link } from "gatsby"
import profileIcon from "../images/PixarMe.jpg"

const Header = ({ siteTitle = "Ranojoy Deb" }) => {
  return (
    <header style={{ background: '#5F6A6A', padding: '0.5%' }}>
      <div style={{ margin: 'auto', minWidth:'100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1rem' }}>
        <h2 style={{ margin: 0, display: 'flex', alignItems: 'center', fontSize: '1', alignItems:'center', whiteSpace:'nowrap' }}>
        <img src={profileIcon}   style={{ maxWidth: '32px', maxHeight: '32px', marginRight: '5%', marginTop:'auto', marginBottom:'auto' }} />
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            {siteTitle}
          </Link>
        </h2>
        <nav>
          <Link to="/profile" style={{ color: 'white', marginRight: '0.5rem', textDecoration: 'none' }}>Profile</Link>
          <Link to="/projects" style={{ color: 'white', marginRight: '0.5rem', textDecoration: 'none' }}>Projects</Link>
          <Link to="/blog" style={{ color: 'white', marginRight: '0.5rem', textDecoration: 'none' }}>Blog</Link>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header
