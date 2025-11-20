import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
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
          layoutId="card-container-weatherfast"
          transition={{ delay: 0.01, duration: 0.3 }}
          className="flex flex-col md:flex-row items-start gap-8 mb-12 border-2 border-gray-700 p-6 shadow-lg"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          <motion.img
            layoutId="card-image-weatherfast"
            transition={{ delay: 0.01, duration: 0.3 }}
            src="/assets/appicons/weatherfast.png"
            alt="WeatherFast"
            className="w-32 h-32 rounded-2xl shadow-lg"
          />

          <div>
            <motion.h1
              layoutId="card-title-weatherfast"
              transition={{ delay: 0.01, duration: 0.3 }}
              className="text-4xl font-bold mb-4"
              style={{ color: "var(--color-blue)" }}
            >
              <span className="text-gray-500">$</span> WeatherFast
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
                  "https://play.google.com/store/apps/details?id=com.aadishsamir.weatherfast",
                  "_blank"
                )
              }
            />
            <motion.p
              layoutId="card-description-weatherfast"
              transition={{ delay: 0.01, duration: 0.3 }}
              className="text-lg mb-6 max-w-2xl space-y-4 leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              <span className="block">
                <span className="text-green-400">//</span> WeatherFast is a fast
                and easy-to-use weather app with a beautiful and familiar
                design.
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
                  Recommended advice for staying safe and dry in the weather
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
          <span className="text-gray-500">$</span> Screenshots
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-fit">
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
