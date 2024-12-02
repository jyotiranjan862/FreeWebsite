import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../CSS/404.css";

const NotFound = () => {
  const navigate = useNavigate();

  const callAstronaut = (number) => {
    window.location.href = `tel:${number}`;
  };

  const goBackToEarth = () => {
    navigate("/"); // Redirects to the homepage or desired route
  };

  return (
    <div className="not-found-page">
      <motion.div
        className="error-text"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 120,
        }}
      >
        <h1>404</h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="error-message"
      >
        It seems we’ve lost connection to Earth! Call our astronauts for help.
      </motion.p>

      <motion.div
        className="ufo-container"
        initial={{ y: -300 }}
        animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
      >
        <UFO />
      </motion.div>

      <div className="astronaut-section">
        <Astronaut
          name="Astronaut Shibam"
          number="8458024651"
          onCall={() => callAstronaut("8458024651")}
        />
        <Astronaut
          name="Astronaut Jyotiranjan"
          number="9827778066"
          onCall={() => callAstronaut("9827778066")}
        />
      </div>

      <motion.button
        className="back-to-earth-button"
        onClick={goBackToEarth}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        🪐 Back to Earth
      </motion.button>
    </div>
  );
};

// UFO SVG Component
const UFO = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="ufo-svg">
    {/* UFO Body */}
    <ellipse cx="100" cy="60" rx="80" ry="30" fill="#7f8c8d" />
    <ellipse cx="100" cy="65" rx="60" ry="20" fill="#bdc3c7" />
    {/* Lights */}
    <circle cx="60" cy="65" r="5" fill="#ffcc00" />
    <circle cx="80" cy="65" r="5" fill="#ff4500" />
    <circle cx="100" cy="65" r="5" fill="#00ff00" />
    <circle cx="120" cy="65" r="5" fill="#ff4500" />
    <circle cx="140" cy="65" r="5" fill="#ffcc00" />
    {/* Beam */}
    <polygon
      points="60,90 140,90 100,200"
      fill="rgba(255, 255, 0, 0.3)"
      className="ufo-beam"
    />
  </svg>
);

// Realistic Astronaut SVG Component
const Astronaut = ({ name, number, onCall }) => (
  <motion.div
    className="astronaut"
    initial={{ x: -50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" className="astronaut-svg">
      {/* Helmet */}
      <circle cx="100" cy="60" r="50" fill="#fff" stroke="#000" strokeWidth="3" />
      <circle cx="100" cy="60" r="45" fill="lightblue" />
      {/* Visor */}
      <ellipse cx="100" cy="60" rx="40" ry="20" fill="rgba(0, 0, 0, 0.5)" />
      {/* Suit */}
      <rect x="60" y="100" width="80" height="100" fill="#00f7ff" />
      {/* Life Support Pack */}
      <rect x="60" y="210" width="80" height="40" fill="#2f4f4f" />
      <circle cx="80" cy="240" r="8" fill="#fff" />
      <circle cx="120" cy="240" r="8" fill="#fff" />
      {/* Arms */}
      <line x1="60" y1="120" x2="40" y2="140" stroke="#000" strokeWidth="4" />
      <line x1="140" y1="120" x2="160" y2="140" stroke="#000" strokeWidth="4" />
      {/* Legs */}
      <line x1="80" y1="200" x2="80" y2="240" stroke="#000" strokeWidth="4" />
      <line x1="120" y1="200" x2="120" y2="240" stroke="#000" strokeWidth="4" />
    </svg>
    <p>{name}</p>
    <button onClick={onCall}>
      Call {name.split(" ")[1]} 📞
    </button>
  </motion.div>
);

export default NotFound;
