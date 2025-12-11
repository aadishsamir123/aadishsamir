/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [spinnerIndex, setSpinnerIndex] = useState(0);
  const spinnerFrames = ["/", "|", "\\", "-"];

  useEffect(() => {
    const interval = setInterval(() => {
      setSpinnerIndex((prev) => (prev + 1) % spinnerFrames.length);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center font-mono bg-[var(--bg-primary)] text-[var(--text-primary)]"
      >
        <div className="text-center space-y-4">
          <div
            className="text-6xl font-bold"
            style={{ color: "var(--color-blue)" }}
          >
            <span className="text-[var(--text-muted)]">$</span> Loading
          </div>

          <div className="flex items-center justify-center gap-2 text-2xl">
            <span className="text-green-400">&gt;</span>
            <span className="text-[var(--text-muted)]">Please wait</span>
            <motion.span
              key={spinnerIndex}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-[var(--color-blue)] font-bold"
            >
              {spinnerFrames[spinnerIndex]}
            </motion.span>
          </div>

          <div className="mt-8 flex flex-col items-center gap-2">
            <motion.div
              className="h-1 w-48 border border-[var(--border-color)]"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              <motion.div
                className="h-full"
                style={{ backgroundColor: "var(--color-blue)" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 0.8,
                  ease: "linear",
                }}
              />
            </motion.div>
            <p className="text-sm text-[var(--text-muted)]">
              <span className="text-green-400">//</span> Initializing
              website...
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
