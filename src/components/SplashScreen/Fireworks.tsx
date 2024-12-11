import React from "react";

const Firework = ({ delay }: { delay: number }) => {
  const colors = ["#ff0000", "#ffd700", "#ff69b4", "#00ff00", "#ff4500"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div
      className="firework"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        "--color": randomColor,
      } as React.CSSProperties}
    >
      <div className="explosion">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="spark"
            style={{
              transform: `rotate(${i * 30}deg)`,
              "--color": randomColor,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  );
};

export const Fireworks = () => {
  return (
    <>
      <style>{`
        /* Fullscreen container for fireworks */
        .fireworks-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          z-index: 1000; /* Ensures it appears above other content */
          pointer-events: none; /* Makes the container non-interactive */
        }

        /* Firework launcher */
        .firework {
          position: absolute;
          bottom: 0; /* Launch from the bottom of the screen */
          width: 5px;
          height: 5px;
          background: var(--color);
          border-radius: 50%;
          animation: firework-launch 2s ease-out forwards;
        }

        /* Explosion container */
        .explosion {
          position: absolute;
          width: 20px;
          height: 20px;
          animation: explosion-expand 1s ease-out forwards;
          transform-origin: center;
        }

        /* Individual sparks */
        .spark {
          position: absolute;
          width: 2px;
          height: 10px;
          background: var(--color);
          border-radius: 2px;
          transform-origin: top center;
          animation: spark-fly 1s ease-out forwards;
        }

        /* Launch animation */
        @keyframes firework-launch {
          0% {
            transform: translateY(0);
          }
          80% {
            transform: translateY(-80vh);
          }
          100% {
            opacity: 0;
          }
        }

        /* Explosion expansion */
        @keyframes explosion-expand {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }

        /* Spark fly animation */
        @keyframes spark-fly {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
      `}</style>
      <div className="fireworks-container">
        {[...Array(12)].map((_, i) => (
          <Firework key={i} delay={i * 0.3} />
        ))}
      </div>
    </>
  );
};
