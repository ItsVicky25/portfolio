import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600">
              Hello! I'm a passionate developer with a strong foundation in both frontend
              and backend technologies. My journey in software development started with
              a curiosity about how things work on the web, and it has evolved into a
              professional career building innovative solutions.
            </p>
            <p className="text-lg text-gray-600">
              I specialize in creating responsive, user-friendly applications using
              modern technologies like React, TypeScript, and Node.js. I'm particularly
              interested in AI and machine learning applications in web development.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90"
              >
                Get in Touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: 'Projects', value: '20+' },
              { label: 'Experience', value: '3+ Years' },
              { label: 'Clients', value: '15+' },
              { label: 'Awards', value: '5' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <h3 className="text-3xl font-bold text-primary">{stat.value}</h3>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About