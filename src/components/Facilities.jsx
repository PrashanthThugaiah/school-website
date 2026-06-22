import {
  FaBus,
  FaBook,
  FaLaptopCode,
  FaFlask,
  FaBasketballBall,
  FaChalkboardTeacher,
} from "react-icons/fa";

export default function Facilities() {
  const facilities = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Smart Classrooms",
      description:
        "Interactive digital learning with smart boards.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Computer Lab",
      description:
        "Modern computers with high-speed internet.",
    },
    {
      icon: <FaBook />,
      title: "Library",
      description:
        "Extensive collection of books and resources.",
    },
    {
      icon: <FaFlask />,
      title: "Science Lab",
      description:
        "Hands-on learning with advanced laboratory facilities.",
    },
    {
      icon: <FaBasketballBall />,
      title: "Sports",
      description:
        "Indoor and outdoor sports for holistic development.",
    },
    {
      icon: <FaBus />,
      title: "Transport",
      description:
        "Safe and reliable transportation across the city.",
    },
  ];

  return (
    <section id="facilities" className="facilities-section">
      <div className="section-header">
        <span className="section-tag">Facilities</span>

        <h2>World Class Infrastructure</h2>

        <p>
          Providing students with a safe, modern and
          inspiring environment for learning and growth.
        </p>
      </div>

      <div className="facilities-grid">
        {facilities.map((item, index) => (
          <div key={index} className="facility-card">
            <div className="facility-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}