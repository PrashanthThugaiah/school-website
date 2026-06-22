export default function Facilities() {
  const facilities = [
  "Smart Classrooms",
  "Science Lab",
  "Library",
  "Sports",
  "Transport",
  "Computer Lab",
];

  return (
    <section className="section">
      <h2>Facilities</h2>

      <div className="facility-grid">
      {facilities.map((item) => (
        <div className="facility-card">
          <h3>{item}</h3>
        </div>
      ))}
    </div>
    </section>
  );
}