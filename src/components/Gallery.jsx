const galleryImages = [
  {
    image:
      "campus.jpeg",
    title: "School Campus",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    title: "Smart Classroom",
  },
  {
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350",
    title: "Library",
  },
  {
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754",
    title: "Science Lab",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    title: "Sports Day",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    title: "Annual Day",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="section-header">
        <span className="section-tag">
          Gallery
        </span>

        <h2>Life At ABC Public School</h2>

        <p>
          Explore our vibrant campus life,
          events and student activities.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((item, index) => (
          <div key={index} className="gallery-card">
            <img
              src={item.image}
              alt={item.title}
            />

            <div className="gallery-overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}