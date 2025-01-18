import { motion } from 'framer-motion';

const skills = [
  'JavaScript',
  'React',
  'Next.js',
  'Node.js',
  'TypeScript',
  'Tailwind CSS',
  'Three.js',
  'WebGL',
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              About Me
            </h2>
            <div className="space-y-6 text-secondary/80">
              <p>
                I'm a creative developer with a passion for building innovative digital experiences. 
                With expertise in both design and development, I bridge the gap between aesthetics and functionality.
              </p>
              <p>
                My approach combines clean code with creative problem-solving, 
                resulting in solutions that are both beautiful and efficient.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-accent/5 rounded-lg -z-10" />
            <div className="space-y-8">
              <h3 className="text-2xl font-display font-bold">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      type: "spring",
                    }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-secondary/10 rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-secondary/10">
                <div>
                  <div className="text-4xl font-display font-bold text-accent">
                    5+
                  </div>
                  <div className="text-secondary/60 mt-2">
                    Years of Experience
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-accent">
                    50+
                  </div>
                  <div className="text-secondary/60 mt-2">
                    Projects Completed
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
