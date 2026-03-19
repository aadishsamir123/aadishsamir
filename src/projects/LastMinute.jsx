import { motion } from "framer-motion";
import { FaArrowLeft, FaGlobe, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SEOHead from "../components/SEOHead";

const LastMinute = () => {
  const navigate = useNavigate();

  const lastminuteStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "LastMinute",
    description:
      "LastMinute helps students beat last-minute stress by keeping homework, deadlines, and schedules in one clean, focused place. Built with Flutter and Firebase.",
    url: "https://aadish.dev/projects/lastminute",
    applicationCategory: "ProductivityApplication",
    operatingSystem: ["Android", "Web"],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: "Aadish Samir",
    },
    screenshot: "https://aadish.dev/assets/screenshots/lastminute/screen1.png",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "100",
    },
  };

  const screenshots = [
    "/assets/screenshots/lastminute/screen1.png",
    "/assets/screenshots/lastminute/screen2.png",
    "/assets/screenshots/lastminute/screen3.png",
    "/assets/screenshots/lastminute/screen4.png",
  ];

  return (
    <>
      <SEOHead
        title="LastMinute - Homework & Deadline Tracker App"
        description="LastMinute helps students beat last-minute stress by keeping homework, deadlines, and schedules in one clean, focused place. Add assignments quickly, view a unified calendar, get smart reminders, and use Study Mode. Built with Flutter."
        keywords="LastMinute, Homework Tracker, Deadline Tracker, Student App, Study App, Assignment Tracker, Calendar View, Smart Reminders, Study Mode, Flutter App, Firebase, Student Productivity, Aadish Samir"
        url="https://aadish.dev/projects/lastminute"
        image="https://aadish.dev/assets/screenshots/lastminute/screen1.png"
        structuredData={lastminuteStructuredData}
      />
      <div
        className="min-h-screen p-8 pt-24"
        style={{
          color: "var(--text-primary)",
        }}
      >
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/projects")}
          className="glass-button mb-8 flex items-center gap-2 rounded-full border border-gray-600 px-4 py-2 transition-colors hover:border-blue-500 hover:bg-blue-500/20"
          style={{ color: "var(--text-muted)" }}
        >
          <FaArrowLeft /> Back to Projects
        </motion.button>

        <motion.div
          layoutId="card-container-lastminute"
          className="glass-panel glass-panel--strong mb-12 flex flex-col items-start gap-8 rounded-3xl border border-gray-700 p-6 shadow-lg md:flex-row"
        >
          <motion.img
            layoutId="card-image-lastminute"
            src="/assets/appicons/lastminute.png"
            alt="lastminute"
            className="w-32 h-32 rounded-2xl shadow-lg"
          />

          <div>
            <motion.h1
              layoutId="card-title-lastminute"
              className="text-4xl font-bold mb-4"
              style={{ color: "var(--color-blue)" }}
            >
              LastMinute
            </motion.h1>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="glass-button flex h-10 items-center gap-2 rounded-full border border-blue-500 px-4 text-sm transition-all hover:bg-blue-500/20 sm:text-base"
              style={{ color: "var(--color-blue)" }}
              onClick={() =>
                window.open(
                  "https://lastminute.aadish.dev",
                  "_blank"
                )
              }
            >
              <FaGlobe className="flex-shrink-0" />
              <span className="whitespace-nowrap">View Website</span>
            </motion.button>

            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              src="/assets/google-play-badge.png"
              alt="Get it on Google Play"
              className="h-[40px] cursor-pointer hover:opacity-80 transition-opacity shadow-md"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.aadishsamir.lastminute",
                  "_blank"
                )
              }
            />

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="glass-button flex h-10 items-center gap-2 rounded-full border border-gray-500 px-4 text-sm transition-all hover:bg-gray-500/20 sm:text-base"
              style={{ color: "var(--text-secondary)" }}
              onClick={() =>
                window.open("https://github.com/ASDev-Official/lastminute", "_blank")
              }
            >
              <FaGithub className="flex-shrink-0" />
              <span className="whitespace-nowrap">View Source</span>
            </motion.button>

            <motion.div
              layoutId="card-description-lastminute"
              className="text-lg mb-6 max-w-4xl space-y-6 leading-relaxed mt-6"
              style={{ color: "var(--text-muted)" }}
            >
              <div className="space-y-4">
                <p
                  className="text-xl font-semibold"
                  style={{ color: "var(--color-blue)" }}
                >
                  LastMinute helps students beat last-minute stress and stay on track.
                </p>

                <p>
                  Keep homework, deadlines, and schedules in one clean, focused place. Add assignments in seconds, see everything laid out on a unified calendar, and stay on track with timely reminders and a distraction-light Study Mode. With secure Google sign-in and cloud sync, your tasks are backed up and available whenever you need them.
                </p>
                <p>
                  Stay organized, plan smarter, and turn crunch time into calm, consistent progress.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: "var(--color-blue)" }}
                  >
                    ⚡ Fast Homework Tracker
                  </h3>
                  <p style={{ color: "var(--text-muted)" }}>
                    Add title, details, subject, and due date quickly. Capture assignments without friction so you spend less time tracking and more time learning.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: "var(--color-blue)" }}
                  >
                    📅 Unified Calendar View
                  </h3>
                  <p style={{ color: "var(--text-muted)" }}>
                    See upcoming assignments alongside your schedule in a single, integrated calendar view. Understand your workload at a glance and plan your study time effectively.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: "var(--color-blue)" }}
                  >
                    🔔 Smart Reminders
                  </h3>
                  <p style={{ color: "var(--text-muted)" }}>
                    Get timely notifications so you never miss important deadlines. Stay aware of upcoming tasks without being overwhelmed by excessive alerts.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: "var(--color-blue)" }}
                  >
                    🎯 Study Mode
                  </h3>
                  <p style={{ color: "var(--text-muted)" }}>
                    A minimal, focus-first screen that keeps your display awake when you need it. Reduce distractions and concentrate on what matters most during study sessions.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: "var(--color-blue)" }}
                  >
                    🔐 Secure Sync
                  </h3>
                  <p style={{ color: "var(--text-muted)" }}>
                    Google Sign-In and Firebase backup for peace of mind. Your data stays yours — you choose what to sync and can keep things local if you prefer.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: "var(--color-blue)" }}
                  >
                    ✨ Polished, Modern UI
                  </h3>
                  <p style={{ color: "var(--text-muted)" }}>
                    Built with Flutter for speed and reliability. Enjoy a beautiful, responsive interface optimized for your phone and desktop.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: "var(--color-blue)" }}
                  >
                    🗓️ Optional Calendar Integration
                  </h3>
                  <p style={{ color: "var(--text-muted)" }}>
                    Calendar access lets you visualize tasks next to events and schedule study blocks your way. Keep your academic and personal schedules perfectly aligned.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: "var(--color-blue)" }}
          >
            Screenshots
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="rounded-2xl overflow-hidden shadow-lg border border-gray-700 glass-panel"
              >
                <img
                  src={screenshot}
                  alt={`LastMinute screenshot ${index + 1}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default LastMinute;
