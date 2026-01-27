import { useEffect, useState } from "react";

export const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; delay: string; duration: string }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 20}s`,
      duration: `${15 + Math.random() * 10}s`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
};
