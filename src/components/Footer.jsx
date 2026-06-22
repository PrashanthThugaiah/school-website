import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* School Info */}
        <div className="footer-column">
          <div className="footer-logo">
            ABC Public School
          </div>

          <p>
            Empowering students through academic
            excellence, innovation, values and
            holistic development.
          </p>

          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaYoutube />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#admissions">Admissions</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Academics */}
        <div className="footer-column">
          <h3>Academics</h3>

          <ul>
            <li>Pre-KG</li>
            <li>LKG & UKG</li>
            <li>Primary School</li>
            <li>Middle School</li>
            <li>High School</li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-column">
          <h3>Contact</h3>

          {/* <div className="footer-contact">
            <FaPhoneAlt />
            <span>+91 8892873594</span>
          </div>

          <div className="footer-contact">
            <FaEnvelope />
            <span>info@abcschool.com</span>
          </div>

          <div className="footer-contact">
            <FaMapMarkerAlt />
            <span>
              Chikkabanavara,
              Bangalore - 560090
            </span>
          </div> */}
          <div className="footer-contact">
            <FaPhoneAlt />
            <div>
              <strong>Phone</strong>
              <p>+91 8892873594</p>
            </div>
          </div>

          <div className="footer-contact">
            <FaEnvelope />
            <div>
              <strong>Email</strong>
              <p>info@abcschool.com</p>
            </div>
          </div>

          <div className="footer-contact">
            <FaMapMarkerAlt />
            <div>
              <strong>Address</strong>
              <p>
                Chikkabanavara<br />
                Bangalore - 560090
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 ABC Public School. All Rights Reserved.
        </p>

        <p>
          Designed & Developed by TownMitra
        </p>
      </div>

    </footer>
  );
}