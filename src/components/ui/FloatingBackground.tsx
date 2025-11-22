import React, { useEffect, useState } from 'react';

const FloatingBackground: React.FC = () => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 3,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <>
      {/* Gradient Mesh Background */}
      <div className="gradient-mesh" />

      {/* Floating Orbs */}
      <div className="floating-orb floating-orb-1" />
      <div className="floating-orb floating-orb-2" />
      <div className="floating-orb floating-orb-3" />

      {/* Parallax Stars (visible in dark mode) */}
      <div className="stars">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Additional animated elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        <div className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-20 top-1/4 left-1/4 animate-float" />
        <div className="absolute w-3 h-3 bg-purple-500 rounded-full opacity-20 top-3/4 right-1/4 animate-float-reverse" />
        <div className="absolute w-2 h-2 bg-pink-500 rounded-full opacity-20 bottom-1/4 left-3/4 animate-float" />
        
        {/* Gradient lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5 dark:opacity-10">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5">
                <animate attributeName="stop-color" 
                  values="#3b82f6;#8b5cf6;#ec4899;#3b82f6" 
                  dur="10s" 
                  repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0">
                <animate attributeName="stop-color" 
                  values="#8b5cf6;#ec4899;#3b82f6;#8b5cf6" 
                  dur="10s" 
                  repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
          
          <path
            d="M0,100 Q250,50 500,100 T1000,100"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          >
            <animate
              attributeName="d"
              values="M0,100 Q250,50 500,100 T1000,100;M0,100 Q250,150 500,100 T1000,100;M0,100 Q250,50 500,100 T1000,100"
              dur="20s"
              repeatCount="indefinite"
            />
          </path>
          
          <path
            d="M0,200 Q350,150 700,200 T1400,200"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          >
            <animate
              attributeName="d"
              values="M0,200 Q350,150 700,200 T1400,200;M0,200 Q350,250 700,200 T1400,200;M0,200 Q350,150 700,200 T1400,200"
              dur="25s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
    </>
  );
};

export default FloatingBackground;