/* eslint-disable react/prop-types */
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGlobe, FaGithub, FaGooglePlay, FaInfoCircle } from 'react-icons/fa';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types';

const PageWrapper = ({ children }) => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

const Home = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
    <motion.h1
      className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Welcome to My Website
    </motion.h1>
    <motion.p
      className="text-xl text-gray-300 mb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      I develop mobile apps and websites using modern technologies.
    </motion.p>
    <motion.div
      className="grid gap-4 sm:grid-cols-2 w-full max-w-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <Link to="/projects" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full transition-colors flex items-center gap-2 justify-center">
        <FaGlobe /> View Projects
      </Link>
      <Link to="/about" className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full transition-colors flex items-center gap-2 justify-center">
        <FaInfoCircle /> About Me
      </Link>
    </motion.div>
  </div>
);

const ProjectCard = ({ 
  title, 
  description, 
  icon, 
  links = {
    web: { url: '', comingSoon: false },
    playStore: { url: '', comingSoon: false },
    github: { url: '', comingSoon: false},
  }
}) => (
  <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
    <img src={icon} alt="App Icon" className="w-16 h-16 rounded-full flex-shrink-0" />
    <div className="flex-1 text-center sm:text-left w-full overflow-hidden">
      <h2 className="text-2xl font-bold text-white break-words">{title}</h2>
      <p className="text-gray-400 mt-2 break-words">{description}</p>
      <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-2">
        {links.web && (links.web.url || links.web.comingSoon) && (
          <button
            className={`h-10 flex items-center gap-2 px-3 rounded-md ${
              links.web.comingSoon 
                ? 'bg-gray-700 cursor-not-allowed' 
                : 'bg-blue-500 hover:bg-blue-600'
            } transition-colors text-sm sm:text-base`}
            disabled={links.web.comingSoon}
            onClick={() => links.web.url && window.open(links.web.url, '_blank')}
          >
            <FaGlobe className="flex-shrink-0" /> 
            <span className="whitespace-nowrap">{links.web.comingSoon ? 'Web Coming Soon' : 'View Website'}</span>
          </button>
        )}
        
        {links.playStore && (links.playStore.url || links.playStore.comingSoon) && (
          <button
            className={`${
              links.playStore.comingSoon 
                ? 'h-10 bg-gray-700 cursor-not-allowed rounded-md' 
                : 'h-[40px] hover:opacity-80'
            } transition-all text-sm sm:text-base`}
            disabled={links.playStore.comingSoon}
            onClick={() => links.playStore.url && window.open(links.playStore.url, '_blank')}
          >
            {links.playStore.comingSoon ? (
              <div className="flex items-center gap-2 px-3">
                <FaGooglePlay className="flex-shrink-0" />
                <span className="whitespace-nowrap">Android coming soon</span>
              </div>
            ) : (
              <img 
                src="/assets/google-play-badge.png"
                alt="Get it on Google Play"
                className="h-full"
              />
            )}
          </button>
        )}

        {links.github && (links.github.url || links.github.comingSoon) && (
          <button
            className={`h-10 flex items-center gap-2 px-3 rounded-md ${
              links.github.comingSoon 
                ? 'bg-gray-700 cursor-not-allowed' 
                : 'bg-gray-600 hover:bg-gray-700'
            } transition-colors text-sm sm:text-base`}
            disabled={links.github.comingSoon}
            onClick={() => links.github.url && window.open(links.github.url, '_blank')}
          >
            <FaGithub className="flex-shrink-0" />
            <span className="whitespace-nowrap">
              {links.github.comingSoon ? 'Source Code Coming Soon' : 'View Source'}
            </span>
          </button>
        )}
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h1>
      <motion.p
        className="text-xl text-gray-300 mb-6 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Hi! I&apos;m Aadish, a passionate developer who builds modern web and mobile applications.
        <br />
        <br />
        I code in React, Flutter, and use Firebase as a backend to create high-performance, user-friendly apps.
      </motion.p>
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <a
          href="https://github.com/aadishsamir123"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-full transition-colors flex items-center gap-2 justify-center"
        >
          <FaGithub /> View GitHub Profile
        </a>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => (
  <div className="min-h-screen p-8 pt-24 text-gray-300">
    <h1 className="text-4xl font-bold mb-6">My Projects</h1>
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard 
        title="WeatherFast"
        description="A Weather app built using Flutter."
        icon="/assets/appicons/weatherfast.png"
        links={{
          web: { comingSoon: true },
          playStore: { comingSoon: true },
        }}
      />
      <ProjectCard 
        title="Todoey"
        description="A simple To-Do List app built using Flutter."
        icon="/assets/appicons/todoey.png"
        links={{
          web: { url: 'https://as-todoey.pages.dev' },
          playStore: { comingSoon: true },
          github: { comingSoon: true }
        }}
      />
      <ProjectCard 
        title="Multi AI"
        description="An AI chat application built using basic HTML/CSS/JS."
        icon="/assets/appicons/multi_ai.png"
        links={{
          web: { url: 'https://as-multi-ai.pages.dev' },
          github: { url: 'https://github.com/aadishsamir123/asdev-multi-ai' }
        }}
      />
      <ProjectCard 
        title="ShopSync"
        description="Allows users to share todo-lists with family and friends. Made using Flutter."
        icon="/assets/appicons/shopsync.png"
        links={{
          web: { url: 'https://as-shopsync.pages.dev' },
          playStore: { comingSoon: true },
          github: { url: 'https://github.com/aadishsamir123/asdev-shopsync' }
        }}
      />
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-gray-900 to-black text-white">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
            <Route path ="/about" element={<PageWrapper><About /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

export default App;