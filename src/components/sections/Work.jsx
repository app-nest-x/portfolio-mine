import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Project One',
    description: 'Web Development',
    image: '/project1.jpg',
    link: '#'
  },
  {
    title: 'Project Two',
    description: 'UI/UX Design',
    image: '/project2.jpg',
    link: '#'
  },
  {
    title: 'Project Three',
    description: 'Mobile App',
    image: '/project3.jpg',
    link: '#'
  }
];

export default function Work() {
  const containerRef = useRef(null);

  return (
    <section id="work" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Selected Work
          </h2>
          <p className="text-secondary/60 max-w-2xl mx-auto">
            A collection of projects that showcase my expertise in design and development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/3] overflow-hidden bg-secondary/5 rounded-lg"
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-primary/90 transition-opacity group-hover:opacity-100" />
              
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8 translate-y-4 transition-transform group-hover:translate-y-0">
                <h3 className="text-2xl font-display font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-secondary/80 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-accent"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
