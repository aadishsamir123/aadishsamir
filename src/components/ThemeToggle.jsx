import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="glass-button fixed bottom-6 right-6 z-40 rounded-full border p-3 shadow-lg"
      style={{
        borderColor: "var(--border-color)",
        color: "var(--color-blue)",
      }}
      whileHover={{
        scale: 1.08,
        borderColor: "var(--border-hover)",
      }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <FaSun size={20} className="text-yellow-400" />
        ) : (
          <FaMoon size={20} className="text-blue-600" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
