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
      <div className="min-h-screen p-8 pt-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/projects")}
          className="flex items-center gap-2 text-white mb-8 hover:text-gray-300 transition-colors"
        >
          <FaArrowLeft /> Back to Projects
        </motion.button>

        <motion.div
          layoutId="card-container-qtick"
          transition={{ delay: 0.01, duration: 0.3 }}
          className="flex flex-col md:flex-row items-start gap-8 mb-12 bg-gray-800 p-6 rounded-xl shadow-lg"
        >
          <motion.img
            layoutId="card-image-qtick"
            transition={{ delay: 0.01, duration: 0.3 }}
            src="/assets/appicons/qtick.png"
            alt="qtick"
            className="w-32 h-32 rounded-2xl shadow-lg"
          />

          <div>
            <motion.h1
              layoutId="card-title-qtick"
              transition={{ delay: 0.01, duration: 0.3 }}
              className="text-4xl font-bold text-white mb-4"
            >
              QTick
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
              transition={{ delay: 0.01, duration: 0.3 }}
              className="text-gray-300 text-lg mb-6 max-w-4xl space-y-6 leading-relaxed"
            >
              <div className="space-y-4">
                <p className="text-xl font-semibold text-white">
                  QTick - A smart and fast QR Attendance app
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
                  <h3 className="text-lg font-semibold text-white mb-2">
                    📱 QR Code Scanning
                  </h3>
                  <p className="text-gray-300">
                    Fast and accurate QR code scanning for attendance tracking.
                    Instant audio and visual feedback confirms successful scans.
                    Records both arrival and departure times automatically.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    💾 Offline Support
                  </h3>
                  <p className="text-gray-300">
                    Works perfectly without internet connection using SQLite
                    local storage. All attendance records are stored safely on
                    your device, ensuring data persistence even when offline.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    📊 Data Export & Reporting
                  </h3>
                  <p className="text-gray-300">
                    Export attendance records to CSV format for easy analysis
                    and record-keeping. Generate detailed reports of arrival and
                    departure times for any time period.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    ⚡ Real-time Validation
                  </h3>
                  <p className="text-gray-300">
                    Instant attendance validation with animated success and
                    error notifications. Battery optimization awareness ensures
                    smooth operation without draining your device.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    💬 WhatsApp Business Integration
                  </h3>
                  <p className="text-gray-300">
                    Send automatic arrival and departure notifications via
                    WhatsApp Business. Keep parents, managers, or administrators
                    instantly informed with real-time attendance updates
                    delivered directly to their WhatsApp.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  ✨ Key Features:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>QR code scanning for attendance tracking</li>
                    <li>Arrival and departure time recording</li>
                    <li>WhatsApp Business notification integration</li>
                    <li>Automatic arrival/departure alerts via WhatsApp</li>
                    <li>Offline data storage with SQLite</li>
                    <li>Audio and visual feedback for successful scans</li>
                  </ul>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>Animated success/error notifications</li>
                    <li>Local data persistence for attendance records</li>
                    <li>Battery optimization awareness</li>
                    <li>Real-time attendance validation</li>
                    <li>CSV export functionality for attendance data</li>
                    <li>In-app update support</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Perfect For:
                </h3>
                <p className="text-gray-300">
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

        <h2 className="text-2xl font-bold text-white mb-6">Screenshots</h2>
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
                className="flex items-center justify-start bg-gray-700 p-2 rounded-xl shadow-md hover:shadow-lg transition-shadow"
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
