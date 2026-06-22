import config from "../config/schoolConfig";

export default function Hero() {
  return (
    <section className="hero">
      <h1>{config.schoolName}</h1>

      <h2>{config.tagline}</h2>

      {config.admissionOpen && (
        <span className="badge">
          Admissions Open 2026-27
        </span>
      )}

      <a href={`tel:${config.phone}`}>
        Call Now
      </a>

      <a href={`https://wa.me/${config.whatsapp}`}>
        WhatsApp
      </a>
    </section>
  );
}