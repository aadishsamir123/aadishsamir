import { motion } from "framer-motion";
import { FaArrowLeft, FaGlobe } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SEOHead from "../components/SEOHead";

const ShopSync = () => {
  const navigate = useNavigate();

  const shopsyncStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ShopSync",
    description:
      "Share shopping lists with family and friends. A collaborative shopping list app built with Flutter and Firebase.",
    url: "https://aadish.dev/projects/shopsync",
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
    screenshot: "https://aadish.dev/assets/screenshots/shopsync/screen1.png",
    downloadUrl:
      "https://play.google.com/store/apps/details?id=com.aadishsamir.shopsync",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "100",
    },
  };

  const screenshots = [
    "/assets/screenshots/shopsync/screen1.png",
    "/assets/screenshots/shopsync/screen2.png",
    "/assets/screenshots/shopsync/screen3.png",
    "/assets/screenshots/shopsync/screen4.png",
    "/assets/screenshots/shopsync/screen5.png",
    "/assets/screenshots/shopsync/screen6.png",
    "/assets/screenshots/shopsync/screen7.png",
    "/assets/screenshots/shopsync/screen8.png",
  ];

  return (
    <>
      <SEOHead
        title="ShopSync - Shopping List App"
        description="ShopSync lets you share shopping lists with family and friends. A hobby project built with Flutter and Firebase for real-time collaboration."
        keywords="ShopSync, Shopping List App, Flutter App, Family Shopping, Grocery List, Hobby Project, Aadish Samir"
        url="https://aadish.dev/projects/shopsync"
        image="https://aadish.dev/assets/screenshots/shopsync/screen1.png"
        structuredData={shopsyncStructuredData}
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
          layoutId="card-container-shopsync"
          className="flex flex-col md:flex-row items-start gap-8 mb-12 border-2 border-gray-700 p-6 shadow-lg"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          <motion.img
            layoutId="card-image-shopsync"
            src="/assets/appicons/shopsync.png"
            alt="shopsync"
            className="w-32 h-32 rounded-2xl shadow-lg"
          />

          <div>
            <motion.h1
              layoutId="card-title-shopsync"
              className="text-4xl font-bold mb-4"
              style={{ color: "var(--color-blue)" }}
            >
              <span className="text-gray-500">$</span> ShopSync
            </motion.h1>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="h-10 flex items-center gap-2 px-4 border-2 border-blue-500 hover:bg-blue-500/20 transition-all text-sm sm:text-base"
              style={{ color: "var(--color-blue)" }}
              onClick={() =>
                window.open("https://app.shopsync.aadish.dev", "_blank")
              }
            >
              <FaGlobe className="flex-shrink-0" />
              <span className="whitespace-nowrap">[View Website]</span>
            </motion.button>

            <br />

            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              src="/assets/google-play-badge.png"
              alt="Get it on Google Play"
              className="h-[40px] cursor-pointer hover:opacity-80 transition-opacity shadow-md"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.aadishsamir.shopsync",
                  "_blank"
                )
              }
            />

            <motion.div
              layoutId="card-description-shopsync"
              className="text-lg mb-6 max-w-4xl space-y-6 leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              <div className="space-y-4">
                <p
                  className="text-xl font-semibold"
                  style={{ color: "var(--color-blue)" }}
                >
                  <span className="text-green-400">//</span> ShopSync - Share
                  shopping lists with family and friends
                </p>

                <p>
                  Transform your shopping experience with ShopSync, the ultimate
                  collaborative shopping list app designed for families and
                  friends. Create, share, and manage shopping lists effortlessly
                  while keeping everyone synchronized and organized.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: "var(--color-blue)" }}
                  >
                    🛒 Smart Shopping Lists
                  </h3>
                  <p style={{ color: "var(--text-muted)" }}>
                    Create unlimited shopping lists with custom icons,
                    categories, and detailed descriptions. Add items with
                    counters, deadlines, and store locations. Our intuitive
                    interface makes grocery shopping planning a breeze.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: "var(--color-blue)" }}
                  >
                    👨‍👩‍👧‍👦 Family Collaboration
                  </h3>
                  <p style={{ color: "var(--text-muted)" }}>
                    Share lists instantly with family members and friends via
                    email. Set different permission levels - owners, editors, or
                    viewers. Real-time synchronization ensures everyone stays
                    updated on shopping progress.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: "var(--color-blue)" }}
                  >
                    📍 Location & Store Management
                  </h3>
                  <p style={{ color: "var(--text-muted)" }}>
                    Save frequently used store locations and organize items by
                    shopping destinations. Set specific stores for different
                    items to optimize your shopping routes.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: "var(--color-blue)" }}
                  >
                    ⏰ Smart Organization
                  </h3>
                  <p style={{ color: "var(--text-muted)" }}>
                    Set deadlines for urgent items, mark priorities, and track
                    completion status. Clear completed items with one tap or
                    restore them from the recycle bin when needed.
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
                    <li>Real-time collaborative shopping lists</li>
                    <li>Family sharing with role-based permissions</li>
                    <li>Custom icons and categories</li>
                    <li>Store location mapping</li>
                    <li>Task templates and saved locations</li>
                    <li>Deadline management</li>
                  </ul>
                  <ul
                    className="list-disc pl-5 space-y-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <li>Recycle bin for deleted items</li>
                    <li>Dark/light theme modes</li>
                    <li>Export functionality</li>
                    <li>Offline support</li>
                    <li>Cross-platform synchronization</li>
                    <li>Privacy & security focused</li>
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
                  Families managing household shopping, roommates coordinating
                  grocery runs, couples planning meals together, group events
                  and party planning, and small business inventory tracking.
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
                  alt={`ShopSync Screenshot ${index + 1}`}
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

export default ShopSync;
