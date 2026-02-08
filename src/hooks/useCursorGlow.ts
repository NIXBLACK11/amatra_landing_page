"use client"

import { useEffect } from 'react';

export const useCursorGlow = () => {
  useEffect(() => {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    let mouseX = 0, mouseY = 0;
    let x = 0, y = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", move);

    const animate = () => {
      x += (mouseX - x) * 0.07;
      y += (mouseY - y) * 0.07;
      glow.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", move);
      glow.remove();
    };
  }, []);
};
