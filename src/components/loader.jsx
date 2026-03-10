import { useEffect, useState } from "react";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setExiting(true);
            setTimeout(() => onComplete?.(), 700);
          }, 400);
          return 100;
        }
        const increment =
          prev < 40 ? Math.random() * 3 + 1.5 :
          prev < 75 ? Math.random() * 1.5 + 0.5 :
          Math.random() * 4 + 1.5;
        return Math.min(prev + increment, 100);
      });
    }, 55);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      background: "#ffffff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      opacity: exiting ? 0 : 1,
      transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    }}>

      {/* Name */}
      <p style={{
        fontFamily: "-apple-system, 'SF Pro Display', 'Helvetica Neue', sans-serif",
        fontSize: "15px",
        fontWeight: 400,
        letterSpacing: "0.04em",
        color: "#1d1d1f",
        marginBottom: "28px",
        margin: "0 0 28px 0",
      }}>
        Yuthila Banuka
      </p>

      {/* Progress bar */}
      <div style={{
        width: "160px",
        height: "1.5px",
        background: "#e0e0e0",
        borderRadius: "2px",
        overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          width: `${progress}%`,
          background: "#1d1d1f",
          borderRadius: "2px",
          transition: "width 0.08s linear",
        }} />
      </div>

    </div>
  );
};

export default Loader;