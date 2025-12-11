import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <nav
        className="fixed top-0 left-0 right-0 border-b-2 z-50 font-mono transition-colors"
        style={{
          backgroundColor: "var(--bg-primary)",
          borderColor: "var(--border-color)",
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="text-2xl font-semibold tracking-wide font-mono"
              style={{ color: "var(--color-blue)" }}
            >
              <span style={{ color: "var(--text-muted)" }}>$</span> Aadish Samir
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="sm:hidden transition-colors relative w-6 h-6"
              style={{ color: "var(--color-blue)", zIndex: 60 }}
              onClick={toggleMenu}
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <FaTimes size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <FaBars size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center space-x-8">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Projects", path: "/projects" },
                { name: "Blog", path: "https://blog.aadish.dev" },
              ].map((item) => (
                <div key={item.name} className="relative">
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                  >
                    {item.external ? (
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-medium transition-colors font-mono"
                        style={{
                          color: "var(--text-muted)",
                        }}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        className="text-base font-medium transition-colors font-mono"
                        style={{
                          color:
                            location.pathname === item.path
                              ? "var(--color-green)"
                              : "var(--text-muted)",
                        }}
                      >
                        {location.pathname === item.path
                          ? `[${item.name}]`
                          : item.name}
                      </Link>
                    )}
                    {!item.external && location.pathname === item.path && (
                      <motion.div
                        layoutId="navbar-underline"
                        className="absolute left-0 right-0 h-0.5 bg-green-400"
                        initial={false}
                        animate={{ opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Sidebar Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40"
                onClick={toggleMenu}
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 20, stiffness: 100 }}
                className="fixed top-0 right-0 w-full h-screen z-50 flex flex-col"
                style={{ backgroundColor: "var(--bg-primary)" }}
              >
                <div className="flex flex-col items-center justify-center h-full space-y-12 py-20">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold tracking-wide font-mono"
                    style={{ color: "var(--color-blue)" }}
                  >
                    <span style={{ color: "var(--text-muted)" }}>$</span> Aadish
                    Samir
                  </motion.div>

                  {[
                    { name: "Home", path: "/" },
                    { name: "About", path: "/about" },
                    { name: "Projects", path: "/projects" },
                    { name: "Blog", path: "https://blog.aadish.dev", external: true },
                  ].map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.external ? (
                        <a
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={toggleMenu}
                          className="text-2xl font-medium transition-all font-mono hover:scale-110"
                          style={{
                            color: "var(--text-muted)",
                          }}
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          to={item.path}
                          onClick={toggleMenu}
                          className="text-2xl font-medium transition-all font-mono hover:scale-110"
                          style={{
                            color:
                              location.pathname === item.path
                                ? "var(--color-green)"
                                : "var(--text-muted)",
                          }}
                        >
                          {location.pathname === item.path
                            ? `[${item.name}]`
                            : item.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
