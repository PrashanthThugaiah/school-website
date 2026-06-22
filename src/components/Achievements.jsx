import {
  FaTrophy,
  FaMedal,
  FaAward,
  FaStar,
} from "react-icons/fa";

export default function Achievements() {
  const achievements = [
    {
      icon: <FaTrophy />,
      title: "National Sports Championship",
      description:
        "Students won national level competitions.",
    },
    {
      icon: <FaMedal />,
      title: "Olympiad Winners",
      description:
        "Top performers in Mathematics & Science.",
    },
    {
      icon: <FaAward />,
      title: "Academic Excellence",
      description:
        "Consistent board toppers every year.",
    },
    {
      icon: <FaStar />,
      title: "Cultural Excellence",
      description:
        "Awards in music, dance and arts.",
    },
  ];

  return (
    <section
      id="achievements"
      className="achievements-section"
    >
      <div className="section-header">
        <span className="section-tag">
          Achievements
        </span>

        <h2>Our Proud Achievements</h2>

        <p>
          Celebrating excellence in academics,
          sports and co-curricular activities.
        </p>
      </div>

      <div className="achievement-grid">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="achievement-card"
          >
            <div className="achievement-icon">
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