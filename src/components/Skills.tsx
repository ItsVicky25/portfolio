import { motion } from 'framer-motion'

const Skills = () => {
  const skills = {
    'Frontend': [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Next.js',
      'HTML5/CSS3',
      'JavaScript',
    ],
    'Backend': [
      'Node.js',
      'Express.js',
      'Python',
      'Django',
      'RESTful APIs',
      'GraphQL',
    ],
    'Tools & Others': [
      'Git',
      'Docker',
      'AWS',
      'MongoDB',
      'PostgreSQL',
      'Redis',
    ],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Skills & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive list of my technical skills and areas of expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div
              key={category}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card"
            >
              <h3 className="text-xl font-semibold mb-6 text-center bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                {category}
              </h3>
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 gap-4"
              >
                {skillList.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="glass-card p-3 text-center text-sm"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-500/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-pink-500/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
    </section>
  )
}

export default Skills