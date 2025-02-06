import { useState } from 'react'

interface HeaderProps {
  theme: string
  toggleTheme: () => void
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 glass-nav">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2" onClick={(e) => {
            e.preventDefault();
            const chatBox = document.getElementById('chat-box');
            if (chatBox) {
              chatBox.classList.toggle('hidden');
            }
          }}>
            <svg className="w-8 h-8 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span className="text-xl font-bold"></span>
          </a>
          <div id="chat-box" className="hidden fixed bottom-0 left-0 w-full bg-background-glass p-2">
            <div className="flex flex-col space-y-1">
              <h2 className="text-sm font-bold">AI Assistant</h2>
              <p className="text-xs">Type your message here and I'll respond with some information.</p>
              <textarea className="w-full p-1" rows={3} placeholder="Type here..."></textarea>
              <button className="bg-primary-color text-white p-1 rounded-md text-xs">Send</button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-primary-color transition-colors">About</a>
            <a href="#skills" className="hover:text-primary-color transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary-color transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary-color transition-colors">Contact</a>
            
            {/* Theme Toggle Button */}
            <button
              onClick={() => toggleTheme()}
              className="bg-background-glass rounded-full p-2 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-color"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <span aria-hidden="true">🌞</span> : <span aria-hidden="true">🌙</span>}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#about"
                className="hover:text-primary-color transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#skills"
                className="hover:text-primary-color transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="hover:text-primary-color transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:text-primary-color transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <button
                onClick={() => {
                  toggleTheme()
                  setIsMenuOpen(false)
                }}
                className="p-2 rounded-full hover:bg-background-glass transition-colors inline-flex items-center"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? ' ' : ' '}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}