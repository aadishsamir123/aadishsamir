import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  const [spinnerIndex, setSpinnerIndex] = useState(0);
  const spinnerFrames = [".", "..", "..."];
  const spinnerFrameCount = spinnerFrames.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setSpinnerIndex((prev) => (prev + 1) % spinnerFrameCount);
    }, 250);

    return () => clearInterval(interval);
  }, [spinnerFrameCount]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/10 px-6 text-[var(--text-primary)]"
    >
      <div className="glass-panel glass-panel--strong rounded-[2rem] px-8 py-10 text-center space-y-5 shadow-xl">
        <div
          className="text-5xl font-extrabold tracking-tight sm:text-6xl"
          style={{ color: "var(--color-blue)" }}
        >
          Loading{spinnerFrames[spinnerIndex]}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <motion.div
            className="h-2 w-52 overflow-hidden rounded-full"
            style={{ backgroundColor: "var(--bg-secondary)" }}
          >
            <motion.div
              className="h-full"
              style={{ backgroundColor: "var(--color-blue)" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 0.3,
                ease: "linear",
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
