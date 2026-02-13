// src/hooks/useConfetti.js
import { useCallback } from "react";

export const useConfetti = () => {
  const triggerConfetti = useCallback((x = 0.5, y = 0.5) => {
    // Create confetti canvas
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    const particles = [];
    const particleCount = 100;
    const colors = [
      "#3b82f6", // blue
      "#6366f1", // indigo
      "#8b5cf6", // purple
      "#ec4899", // pink
      "#f59e0b", // amber
    ];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: x * canvas.width,
        y: y * canvas.height,
        vx: (Math.random() - 0.5) * 10,
        vy: (Math.random() - 0.5) * 10 - 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        gravity: 0.3,
        opacity: 1,
      });
    }

    // Animation loop
    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      let allParticlesDone = true;

      particles.forEach((p) => {
        if (p.opacity <= 0) return;
        
        allParticlesDone = false;

        // Update position
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.rotationSpeed;
        p.opacity -= 0.01;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      if (!allParticlesDone) {
        animationId = requestAnimationFrame(animate);
      } else {
        document.body.removeChild(canvas);
        cancelAnimationFrame(animationId);
      }
    };

    animate();
  }, []);

  return { triggerConfetti };
};
