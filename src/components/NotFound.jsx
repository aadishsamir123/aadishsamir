import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaArrowRight } from 'react-icons/fa';
import SEOHead from '../components/SEOHead';

const NotFound = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found - 404 Error"
        description="Sorry, the page you are looking for doesn't exist. Return to Aadish Samir's portfolio homepage to explore projects and learn more."
        keywords="404, Page Not Found, Error, Aadish Samir"
        url="https://aadish.dev/404"
        noIndex={true}
      />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto"
        >
          <motion.h1 
            className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500 mb-4"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            404
          </motion.h1>
          
          <motion.h2
            className="text-3xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Page Not Found
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              to="/"
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full transition-colors flex items-center gap-2 justify-center"
            >
              <FaHome /> Go Home
            </Link>
            
            <Link
              to="/projects"
              className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full transition-colors flex items-center gap-2 justify-center"
            >
              View Projects <FaArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;
