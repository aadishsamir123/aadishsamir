import { motion } from "framer-motion";
import { FaArrowLeft, FaGlobe, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SEOHead from "../components/SEOHead";

const WeatherFast = () => {
  const navigate = useNavigate();

  const weatherfastStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "WeatherFast",
    description:
      "A simple and clean weather app with accurate forecasts and intuitive design. Built with Flutter for Android devices.",
    url: "https://aadish.dev/projects/weatherfast",
    applicationCategory: "WeatherApplication",
    operatingSystem: "Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: "Aadish Samir",
    },
    screenshot: "https://aadish.dev/assets/screenshots/weatherfast/screen1.png",
    downloadUrl:
      "https://play.google.com/store/apps/details?id=com.aadishsamir.weatherfast",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      ratingCount: "50",
    },
  };

  const screenshots = [
    "/assets/screenshots/weatherfast/screen1.png",
    "/assets/screenshots/weatherfast/screen2.png",
  ];

  return (
    <>
      <SEOHead
        title="WeatherFast - Simple Weather App"
        description="WeatherFast is a clean weather app with accurate forecasts. A hobby project built with Flutter for Android devices."
        keywords="WeatherFast, Weather App, Android Weather, Flutter Weather App, Simple Weather, Hobby Project, Aadish Samir"
        url="https://aadish.dev/projects/weatherfast"
        image="https://aadish.dev/assets/screenshots/weatherfast/screen1.png"
        structuredData={weatherfastStructuredData}
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
          layoutId="card-container-weatherfast"
          className="glass-panel glass-panel--strong mb-12 flex flex-col items-start gap-8 rounded-3xl border border-gray-700 p-6 shadow-lg md:flex-row"
        >
          <motion.img
            layoutId="card-image-weatherfast"
            src="/assets/appicons/weatherfast.png"
            alt="WeatherFast"
            className="w-32 h-32 rounded-2xl shadow-lg"
          />

          <div>
            <motion.h1
              layoutId="card-title-weatherfast"
              className="text-4xl font-bold mb-4"
              style={{ color: "var(--color-blue)" }}
            >
              WeatherFast
            </motion.h1>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="glass-button flex h-10 items-center gap-2 rounded-full border border-blue-500 px-4 text-sm transition-all hover:bg-blue-500/20 sm:text-base"
              style={{ color: "var(--color-blue)" }}
              onClick={() =>
                window.open("https://weatherfast.aadish.dev", "_blank")
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
                  "https://play.google.com/store/apps/details?id=com.aadishsamir.weatherfast",
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
                window.open("https://github.com/ASDev-Official/weatherfast", "_blank")
              }
            >
              <FaGithub className="flex-shrink-0" />
              <span className="whitespace-nowrap">View Source</span>
            </motion.button>

            <br />

            <motion.p
              layoutId="card-description-weatherfast"
              className="text-lg mb-6 max-w-2xl space-y-4 leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              <span className="block">
                WeatherFast is a fast and easy-to-use weather app with a
                beautiful and familiar design.
              </span>

              <span
                className="block font-medium"
                style={{ color: "var(--color-blue)" }}
              >
                Features include:
              </span>
              <ul className="list-disc pl-5 space-y-1">
                <li>Live weather details</li>
                <li>Forecasts</li>
                <li>
                  AI-powered insights on the weather so you can plan ahead
                </li>
              </ul>

              <span className="block mt-4">
                There are no subscriptions or ads, so you can check the weather
                without unnecessary distractions.
              </span>
            </motion.p>
          </div>
        </motion.div>

        <h2
          className="text-2xl font-bold mb-6"
          style={{ color: "var(--color-blue)" }}
        >
          Screenshots
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-fit">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.5,
                  duration: 0.5,
                }}
                className="flex items-center justify-start rounded-2xl border border-gray-700 p-2 shadow-md transition-all hover:border-blue-500"
                style={{ backgroundColor: "var(--glass-bg)" }}
              >
                <img
                  src={screenshot}
                  alt={`WeatherFast Screenshot ${index + 1}`}
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

export default WeatherFast;
