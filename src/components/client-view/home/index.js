"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Scene from "../../3d/Scene";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ClientHomeView({ data }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = textRef.current.querySelectorAll('.word');
      
      gsap.from(words, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
      });

      gsap.to(".scroll-indicator", {
        y: 20,
        repeat: -1,
        duration: 1.5,
        ease: "power1.inOut",
        yoyo: true
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black overflow-hidden">
      {/* 3D Scene Background */}
      <div className="absolute inset-0 opacity-60">
        <Scene />
      </div>

      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4"
      >
        <div ref={textRef} className="text-center">
          <h1 className="mb-8 text-7xl md:text-9xl font-bold tracking-tighter">
            {(data?.heading || "Digital Craftsman").split(" ").map((word, i) => (
              <span key={i} className="word inline-block mr-4 bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text">
                {word}
              </span>
            ))}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 word">
            {data?.summary || "Creating digital experiences that inspire"}
          </p>
          
          <motion.div 
            className="word flex gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-full text-white hover:bg-opacity-20 transition-all duration-300"
            >
              Get in Touch
            </a>
            <a
              href="#work"
              className="px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              View Work
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="scroll-indicator absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
}
