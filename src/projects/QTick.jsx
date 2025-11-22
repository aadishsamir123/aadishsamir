import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SEOHead from "../components/SEOHead";

const QTick = () => {
  const navigate = useNavigate();

  const qtickStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "QTick",
    description:
      "A smart and fast QR attendance tracking app with WhatsApp Business notifications, offline support, and CSV export. Track arrival and departure times using QR code scanning with automatic WhatsApp alerts. Built with Flutter and Firebase.",
    url: "https://aadish.dev/projects/qtick",
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
    screenshot: "https://aadish.dev/assets/screenshots/qtick/screen1.png",
    downloadUrl:
      "https://play.google.com/store/apps/details?id=com.aadishsamir.qtick",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "100",
    },
  };

  const screenshots = [
    "/assets/screenshots/qtick/screen1.png",
    "/assets/screenshots/qtick/screen2.png",
    "/assets/screenshots/qtick/screen3.png",
    "/assets/screenshots/qtick/screen4.png",
  ];

  return (
    <>
      <SEOHead
        title="QTick - QR Attendance Tracking App"
        description="QTick is a smart QR attendance tracking app with WhatsApp Business notifications, offline support, CSV export, and audio/visual feedback. Track student or employee attendance effortlessly. Built with Flutter."
        keywords="QTick, QR Attendance App, Attendance Tracking, WhatsApp Business, WhatsApp Notifications, Flutter App, Employee Attendance, Student Attendance, Offline Attendance, QR Code Scanner, Hobby Project, Aadish Samir"
        url="https://aadish.dev/projects/qtick"
        image="https://aadish.dev/assets/screenshots/qtick/screen1.png"
        structuredData={qtickStructuredData}
      />
      <div
        className="min-h-screen p-8 pt-24 font-mono"
        style={{
          backgroundColor: "var(--bg-primary)",
          color: "var(--text-primary)",
        }}
      >
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/projects")}
          className="flex items-center gap-2 mb-8 transition-colors border-2 border-gray-600 hover:border-blue-500 hover:bg-blue-500/20 px-4 py-2"
          style={{ color: "var(--text-muted)" }}
        >
          <FaArrowLeft /> [Back to Projects]
        </motion.button>

        <motion.div
          layoutId="card-container-qtick"
          className="flex flex-col md:flex-row items-start gap-8 mb-12 border-2 border-gray-700 p-6 shadow-lg"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          <motion.img
            layoutId="card-image-qtick"
            src="/assets/appicons/qtick.png"
            alt="qtick"
            className="w-32 h-32 rounded-2xl shadow-lg"
          />

          <div>
            <motion.h1
              layoutId="card-title-qtick"
              className="text-4xl font-bold mb-4"
              style={{ color: "var(--color-blue)" }}
            >
              <span className="text-gray-500">$</span> QTick
            </motion.h1>

            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              src="/assets/google-play-badge.png"
              alt="Get it on Google Play"
              className="h-[40px] cursor-pointer hover:opacity-80 transition-opacity shadow-md"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.aadishsamir.qr_attendance",
                  "_blank"
                )
              }
            />

            <motion.div
              layoutId="card-description-qtick"
              className="text-lg mb-6 max-w-4xl space-y-6 leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              <div className="space-y-4">
                <p
                  className="text-xl font-semibold"
                  style={{ color: "var(--color-blue)" }}
                >
                  <span className="text-green-400">//</span> QTick - A smart and
                  fast QR Attendance app
                </p>

                <p>
                  Transform your attendance tracking with QTick, the ultimate QR
                  code-based attendance app designed for schools, businesses,
                  and events. Track arrival and departure times effortlessly
                  with offline support, audio/visual feedback, and comprehensive
                  attendance reporting.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: "var(--color-blue)" }}
                  >
                    📱 QR Code Scanning
                  </h3>
                  <p style={{ color: "var(--text-muted)" }}>
                    Fast and accurate QR code scanning for attendance tracking.
                    Instant audio and visual feedback confirms successful scans.
                    Records both arrival and departure times automatically.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: "var(--color-blue)" }}
                  >
                    💾 Offline Support
                  </h3>
                  <p style={{ color: "var(--text-muted)" }}>
                    Works perfectly without internet connection using SQLite
                    local storage. All attendance records are stored safely on
                    your device, ensuring data persistence even when offline.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: "var(--color-blue)" }}
                  >
                    📊 Data Export & Reporting
                  </h3>
                  <p style={{ color: "var(--text-muted)" }}>
                    Export attendance records to CSV format for easy analysis
                    and record-keeping. Generate detailed reports of arrival and
                    departure times for any time period.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: "var(--color-blue)" }}
                  >
                    ⚡ Real-time Validation
                  </h3>
                  <p style={{ color: "var(--text-muted)" }}>
                    Instant attendance validation with animated success and
                    error notifications. Battery optimization awareness ensures
                    smooth operation without draining your device.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: "var(--color-blue)" }}
                  >
                    💬 WhatsApp Business Integration
                  </h3>
                  <p style={{ color: "var(--text-muted)" }}>
                    Send automatic arrival and departure notifications via
                    WhatsApp Business. Keep parents, managers, or administrators
                    instantly informed with real-time attendance updates
                    delivered directly to their WhatsApp.
                  </p>
                </div>
              </div>

              <div>
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ color: "var(--color-blue)" }}
                >
                  ✨ Key Features:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <ul
                    className="list-disc pl-5 space-y-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <li>QR code scanning for attendance tracking</li>
                    <li>Arrival and departure time recording</li>
                    <li>WhatsApp Business notification integration</li>
                    <li>Automatic arrival/departure alerts via WhatsApp</li>
                    <li>Offline data storage with SQLite</li>
                    <li>Audio and visual feedback for successful scans</li>
                  </ul>
                  <ul
                    className="list-disc pl-5 space-y-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <li>Animated success/error notifications</li>
                    <li>Local data persistence for attendance records</li>
                    <li>Battery optimization awareness</li>
                    <li>Real-time attendance validation</li>
                    <li>CSV export functionality for attendance data</li>
                    <li>In-app update support</li>
                  </ul>
                </div>
              </div>

              <div
                className="border-2 border-green-500 p-4"
                style={{ backgroundColor: "var(--bg-secondary)" }}
              >
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "var(--color-green)" }}
                >
                  <span className="text-green-400">&gt;</span> Perfect For:
                </h3>
                <p style={{ color: "var(--text-muted)" }}>
                  Schools tracking student attendance, businesses monitoring
                  employee check-ins and check-outs, event organizers managing
                  participant attendance, coworking spaces tracking member
                  visits, and organizations requiring contactless attendance
                  management with offline capability and detailed reporting.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <h2
          className="text-2xl font-bold mb-6"
          style={{ color: "var(--color-blue)" }}
        >
          <span className="text-gray-500">$</span> Screenshots
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-fit">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.5,
                  duration: 0.5,
                }}
                className="flex items-center justify-start border-2 border-gray-700 hover:border-blue-500 p-2 shadow-md transition-all"
                style={{ backgroundColor: "var(--bg-secondary)" }}
              >
                <img
                  src={screenshot}
                  alt={`QTick Screenshot ${index + 1}`}
                  className="max-h-[500px] w-auto object-contain rounded-lg"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default QTick;
