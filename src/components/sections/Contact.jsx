import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-secondary/60">
            Have a project in mind? I'd love to help you bring it to life.
            Let's create something amazing together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-secondary/5 border border-secondary/10 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-secondary/5 border border-secondary/10 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Your message"
                className="w-full px-4 py-3 bg-secondary/5 border border-secondary/10 rounded-lg focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-secondary/60 mb-4">Or reach out directly</p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:hello@example.com"
              className="text-secondary hover:text-accent transition-colors"
            >
              Email
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
