"use client";
import { usePathname } from "next/navigation";
import Navbar from "../navbar";
import { motion, AnimatePresence } from "framer-motion";

export default function CommonLayout({ children }) {
  const pathName = usePathname();

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: -20
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {pathName !== "/admin" ? (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
        </motion.div>
      ) : null}
      <AnimatePresence mode="wait">
        <motion.main
          key={pathName}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="container mx-auto px-4 py-8 max-w-7xl"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
