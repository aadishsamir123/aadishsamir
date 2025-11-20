import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaArrowRight } from "react-icons/fa";
import SEOHead from "../components/SEOHead";

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
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center font-mono">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto"
        >
          <motion.h1
            className="text-8xl font-bold mb-4"
            style={{ color: "var(--color-red)" }}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <span className="text-gray-500">ERROR:</span> 404
          </motion.h1>

          <motion.h2
            className="text-3xl font-bold mb-6"
            style={{ color: "var(--color-blue)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-red-500">//</span> Page Not Found
          </motion.h2>

          <motion.p
            className="text-lg mb-8"
            style={{ color: "var(--text-muted)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-green-400">/*</span>
            <br />
            Sorry, the page you're looking for doesn't exist. It might have been
            moved, deleted, or you entered the wrong URL.
            <br />
            <span className="text-green-400">*/</span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              to="/"
              className="border-2 border-blue-500 hover:bg-blue-500/20 text-blue-400 py-3 px-6 transition-colors flex items-center gap-2 justify-center"
            >
              <FaHome /> [Go Home]
            </Link>

            <Link
              to="/projects"
              className="border-2 border-green-500 hover:bg-green-500/20 text-green-400 py-3 px-6 transition-colors flex items-center gap-2 justify-center"
            >
              [View Projects] <FaArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;
