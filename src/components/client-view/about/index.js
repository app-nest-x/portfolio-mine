"use client";

import { motion } from "framer-motion";

export default function ClientAboutView({ data }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="py-20 bg-dark text-light relative overflow-hidden" id="about">
      <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary-400 to-accent bg-clip-text text-transparent"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          
          <motion.div 
            className="bg-dark/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-800"
            variants={itemVariants}
          >
            <motion.p 
              className="text-lg leading-relaxed mb-6 text-gray-300"
              variants={itemVariants}
            >
              {data?.aboutMe || "Loading..."}
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
              variants={itemVariants}
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary-400 mb-4">Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {data?.skills?.split(",").map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary-500/10 rounded-full text-primary-400 text-sm font-medium"
                    >
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary-400 mb-4">Details</h3>
                <div className="space-y-3">
                  {data?.email && (
                    <p className="flex items-center text-gray-300">
                      <span className="font-medium mr-2">Email:</span>
                      <a href={`mailto:${data.email}`} className="hover:text-primary-400 transition-colors">
                        {data.email}
                      </a>
                    </p>
                  )}
                  {data?.phoneNumber && (
                    <p className="flex items-center text-gray-300">
                      <span className="font-medium mr-2">Phone:</span>
                      <a href={`tel:${data.phoneNumber}`} className="hover:text-primary-400 transition-colors">
                        {data.phoneNumber}
                      </a>
                    </p>
                  )}
                  {data?.location && (
                    <p className="flex items-center text-gray-300">
                      <span className="font-medium mr-2">Location:</span>
                      {data.location}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
