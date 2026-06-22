import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">ABC Public School</div>

      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#admissions">Admissions</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#facilities">Facilities</a></li>
        <li><a href="#contact">Contact</a></li>

        
        
        
      </ul>
    </nav>
  );
}