import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background gradient circles */}
      <div className="absolute top-20 left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/10 blur-[120px] animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 sm:p-12 max-w-4xl mx-auto text-center"
        >
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                Your Name
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl text-text-secondary">
                Full Stack Developer & AI Enthusiast
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto"
            >
              I create innovative web solutions and bring ideas to life through code.
              Passionate about AI, clean code, and user experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="btn-primary w-full sm:w-auto text-center min-w-[200px]"
              >
                View Projects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="btn-secondary w-full sm:w-auto text-center min-w-[200px]"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-4"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="glass-card p-2 rounded-full cursor-pointer hover:scale-110 transition-transform"
          >
            <svg
              className="w-6 h-6 text-text-secondary"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero