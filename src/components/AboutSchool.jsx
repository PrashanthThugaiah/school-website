export default function AboutSchool() {
  return (
    <section className="about-section">
      {/* <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
          alt="School"
        />
      </div> */}

      <div className="about-content">
        <h2>About Our School</h2>

        <p>
          Our institution focuses on academic excellence,
          character development and leadership skills.
        </p>

        <div className="stats-grid">
          <div>
            <h3>2500+</h3>
            <span>Students</span>
          </div>

          <div>
            <h3>120+</h3>
            <span>Faculty</span>
          </div>

          <div>
            <h3>25+</h3>
            <span>Years</span>
          </div>
        </div>
      </div>
    </section>
  );
}