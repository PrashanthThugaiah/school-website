export default function AboutSchool() {
  return (
    <section className="about-section">
      <div className="about-container">

        <div className="about-image">
          <img
            src="/campus.jpeg"
            alt="School Campus"
          />
        </div>

        <div className="about-content">
          <span className="section-tag">
            About Us
          </span>

          <h2>Building Future Leaders Through Excellence</h2>

          <p>
            ABC Public School is committed to nurturing
            academic excellence, character development,
            creativity and leadership qualities in every
            student.
          </p>

          <p>
            Our modern learning environment, experienced
            faculty and holistic approach ensure students
            achieve their highest potential.
          </p>

          <div className="about-stats">

            <div className="stat-card">
              <h3>2500+</h3>
              <span>Students</span>
            </div>

            <div className="stat-card">
              <h3>120+</h3>
              <span>Faculty</span>
            </div>

            <div className="stat-card">
              <h3>25+</h3>
              <span>Years</span>
            </div>

            <div className="stat-card">
              <h3>100%</h3>
              <span>Results</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}