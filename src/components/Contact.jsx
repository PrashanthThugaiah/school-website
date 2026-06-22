import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <span className="section-tag">
          Contact Us
        </span>

        <h2>Get In Touch</h2>

        <p>
          We'd love to answer your questions and help
          you with admissions.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <div className="contact-card">
            <FaPhoneAlt />
            <div>
              <h4>Phone</h4>
              <p>+91 8892873594</p>
            </div>
          </div>

          <div className="contact-card">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>info@abcschool.com</p>
            </div>
          </div>

          <div className="contact-card">
            <FaMapMarkerAlt />
            <div>
              <h4>Address</h4>
              <p>
                Chikkabanavara,
                Bangalore - 560090
              </p>
            </div>
          </div>

          <div className="contact-card">
            <FaClock />
            <div>
              <h4>Office Hours</h4>
              <p>
                Mon - Sat
                <br />
                8:00 AM - 5:00 PM
              </p>
            </div>
          </div>

        </div>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Parent Name"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <select>
            <option>Select Class</option>
            <option>Pre-KG</option>
            <option>LKG</option>
            <option>UKG</option>
            <option>Class 1-10</option>
          </select>

          <textarea
            rows="4"
            placeholder="Message"
          ></textarea>

          <button type="submit">
            Send Enquiry
          </button>
        </form>

      </div>

      <div className="map-container">
        <iframe
          title="school-location"
          src="https://www.google.com/maps?q=Bangalore&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>
    </section>
  );
}