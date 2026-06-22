export default function Facilities() {
  const facilities = [
    "Smart Classrooms",
    "Computer Lab",
    "Library",
    "Sports Ground",
    "Transport",
    "Science Lab"
  ];

  return (
    <section className="section">
      <h2>Facilities</h2>

      <div className="grid">
        {facilities.map((item) => (
          <div key={item} className="card">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}