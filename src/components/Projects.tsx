import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    title: 'AI-Powered Chat Application',
    description: 'Real-time chat application with AI-powered features including sentiment analysis and automatic language translation.',
    technologies: ['React', 'Node.js', 'Socket.io', 'OpenAI API'],
    image: '/projects/chat-app.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce platform with product management, cart functionality, and secure payment integration.',
    technologies: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    image: '/projects/ecommerce.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management System',
    description: 'Collaborative task management system with real-time updates and team collaboration features.',
    technologies: ['React', 'Firebase', 'Material-UI', 'TypeScript'],
    image: '/projects/task-manager.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
]

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90"
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects