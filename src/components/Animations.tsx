export const FloatingBalloons = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(13)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 10}s`,
          }}
        >
          🎈
        </div>
      ))}
    </div>
  );
};