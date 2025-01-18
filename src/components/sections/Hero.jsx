import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import SplitType from 'split-type';

export default function Hero() {
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Split text into characters
    const text = new SplitType(textRef.current, { types: 'chars' });
    const chars = text.chars;

    // Animate characters
    gsap.fromTo(chars,
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 1,
        ease: 'power4.out'
      }
    );

    // Parallax effect on scroll
    gsap.to(containerRef.current, {
      yPercent: 50,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }, []);

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      {/* Main Content */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent mb-6 tracking-wider"
          >
            CREATIVE DEVELOPER
          </motion.p>

          <h1 
            ref={textRef}
            className="text-huge font-display font-bold leading-tight mb-8"
          >
            Crafting Digital
            <br />
            Experiences
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-secondary/80 text-xl max-w-2xl mx-auto mb-12"
          >
            I build innovative digital solutions that merge creativity with functionality
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center gap-6"
          >
            <a
              href="#work"
              className="px-8 py-4 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-secondary/20 rounded-full hover:bg-secondary/10 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-secondary/60">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-secondary/60 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
