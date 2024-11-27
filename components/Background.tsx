import React from 'react';
import { motion } from 'framer-motion';

const colors = ['#FF6347', '#DC143C', '#FF4500', '#FF8C00', '#FFA500', '#FFD700', '#FFFF00', '#ADFF2F', '#7FFF00', '#00FF00', '#008000', '#00FFFF', '#40E0D0', '#0000FF', '#8A2BE2', '#9400D3', '#FF00FF', '#FF1493', '#C71585', '#DB7093'];

const Background = () => {
  const shapes = Array.from({ length: 6 }, (_, i) => ({
    color: colors[Math.floor(Math.random() * colors.length)],
    x: Math.random() * 100,
    y: Math.random() * 100,
    scale: Math.random() * 0.5 + 0.5,
  }))

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {shapes.map((shape, index) => (
          <motion.path
            key={index}
            d="M25,25 C25,10 40,10 40,25 S55,40 55,25 S70,10 70,25 S85,40 85,25"
            fill={shape.color}
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{
              opacity: 0.1,
              pathLength: 1,
              x: shape.x,
              y: shape.y,
              scale: shape.scale,
            }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default Background;

