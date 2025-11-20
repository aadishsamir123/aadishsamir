import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaGlobe, FaGooglePlay, FaInfoCircle } from "react-icons/fa";
import Navbar from "./components/Navbar";
import SEOHead from "./components/SEOHead";
import NotFound from "./components/NotFound";
import OptimizedImage from "./components/OptimizedImage";
import LoadingScreen from "./components/LoadingScreen";
import ThemeToggle from "./components/ThemeToggle";
import PropTypes from "prop-types";
import WeatherFast from "./projects/WeatherFast.jsx";
import ShopSync from "./projects/ShopSync.jsx";
import QTick from "./projects/QTick.jsx";
import ShopSyncPrivacyPolicy from "./legal/projects/shopsync/ShopSyncPrivacyPolicy.jsx";
import ShopSyncDisclaimer from "./legal/projects/shopsync/ShopSyncDisclaimer.jsx";
import QRAttendancePrivacyPolicy from "./legal/projects/qrattendance/QRAttendancePrivacyPolicy.jsx";
import NammaKannadaPrivacyPolicy from "./legal/projects/nammakannada/NammaKannadaPrivacyPolicy.jsx";

const PageWrapper = ({ children }) => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

const Home = () => {
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Aadish Samir Portfolio",
    url: "https://aadish.dev",
    description:
      "Student portfolio showcasing hobby development projects built with React and Flutter",
    author: {
      "@type": "Person",
      name: "Aadish Samir",
      jobTitle: "Student & Hobby Developer",
      knowsAbout: [
        "React",
        "Flutter",
        "Firebase",
        "JavaScript",
        "Mobile Development",
        "Programming as a Hobby",
      ],
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://aadish.dev/projects",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <SEOHead
        title="Aadish Samir - Developer & Student"
        description="Welcome to Aadish Samir's portfolio. Student who codes as a hobby, building mobile and web apps with React, Flutter, and Firebase."
        keywords="Aadish Samir, Hobby Developer, Student Developer, React, Flutter, Mobile Apps, Portfolio, ASDev, ShopSync, QTick, WeatherFast, QR Attendance"
        url="https://aadish.dev/"
        structuredData={homeStructuredData}
      />
      <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <header>
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4 font-mono tracking-tight"
            style={{ color: "var(--color-blue)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ color: "var(--text-muted)" }}>$</span> Welcome to My
            Website
          </motion.h1>
          <motion.p
            className="text-xl font-mono mb-6"
            style={{ color: "var(--text-muted)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-green-400">&gt;</span> I&apos;m a student who
            codes as a hobby, building apps with modern tech.
          </motion.p>
        </header>
        <nav aria-label="Main navigation links">
          <motion.div
            className="grid gap-4 sm:grid-cols-2 w-full max-w-md font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/projects"
              className="border-2 py-3 px-6 transition-all flex items-center gap-2 justify-center hover:opacity-80"
              style={{
                borderColor: "var(--color-blue)",
                color: "var(--color-blue)",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(88, 166, 255, 0.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              <FaGlobe /> <span className="font-mono">[View Projects]</span>
            </Link>
            <Link
              to="/about"
              className="border-2 py-3 px-6 transition-all flex items-center gap-2 justify-center hover:opacity-80"
              style={{
                borderColor: "var(--color-green)",
                color: "var(--color-green)",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(58, 185, 80, 0.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              <FaInfoCircle /> <span className="font-mono">[About Me]</span>
            </Link>
          </motion.div>
        </nav>
      </main>
    </>
  );
};

const ProjectCard = ({ title, description, icon, links }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => navigate(`/projects/${links.project_page.url}`)}
      className="cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        layoutId={`card-container-${links.project_page}`}
        transition={{ delay: 0.01, duration: 0.3 }}
        className="border-2 p-4 sm:p-6 shadow-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 transition-colors"
        style={{
          borderColor: "var(--border-color)",
          backgroundColor: "var(--bg-secondary)",
        }}
      >
        <OptimizedImage
          layoutId={`card-image-${links.project_page}`}
          src={icon}
          alt={`${title} app icon - ${description}`}
          className="w-16 h-16 rounded-full flex-shrink-0"
          width={64}
          height={64}
          loading="eager"
        />
        <div className="flex-1 text-center sm:text-left w-full overflow-hidden">
          <motion.h2
            layoutId={`card-title-${links.project_page}`}
            transition={{ delay: 0.01, duration: 0.3 }}
            className="text-2xl font-bold font-mono break-words"
            style={{ color: "var(--color-blue)" }}
          >
            {title}
          </motion.h2>
          <motion.p
            layoutId={`card-description-${links.project_page}`}
            transition={{ delay: 0.01, duration: 0.3 }}
            className="font-mono mt-2 break-words"
            style={{ color: "var(--text-muted)" }}
          >
            <span className="text-green-400">//</span> {description}
          </motion.p>
          <motion.div
            className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            {links.web && (links.web.url || links.web.comingSoon) && (
              <button
                className="h-10 flex items-center gap-2 px-3 border-2 font-mono transition-all text-sm sm:text-base"
                style={{
                  borderColor: links.web.comingSoon
                    ? "var(--border-color)"
                    : "var(--color-blue)",
                  color: links.web.comingSoon
                    ? "var(--text-muted)"
                    : "var(--color-blue)",
                  cursor: links.web.comingSoon ? "not-allowed" : "pointer",
                  opacity: links.web.comingSoon ? 0.5 : 1,
                }}
                disabled={links.web.comingSoon}
                onClick={() =>
                  links.web.url && window.open(links.web.url, "_blank")
                }
                onMouseEnter={(e) =>
                  !links.web.comingSoon &&
                  (e.currentTarget.style.backgroundColor =
                    "rgba(88, 166, 255, 0.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                <FaGlobe className="flex-shrink-0" />
                <span className="whitespace-nowrap">
                  {links.web.comingSoon
                    ? "[Web Coming Soon]"
                    : "[View Website]"}
                </span>
              </button>
            )}

            {links.playStore &&
              (links.playStore.url || links.playStore.comingSoon) && (
                <button
                  className="transition-all text-sm sm:text-base font-mono"
                  style={{
                    height: links.playStore.comingSoon ? "40px" : "40px",
                    borderWidth: links.playStore.comingSoon ? "2px" : "0",
                    borderColor: links.playStore.comingSoon
                      ? "var(--border-color)"
                      : "transparent",
                    color: links.playStore.comingSoon
                      ? "var(--text-muted)"
                      : "inherit",
                    cursor: links.playStore.comingSoon
                      ? "not-allowed"
                      : "pointer",
                    opacity: links.playStore.comingSoon ? 0.5 : 1,
                  }}
                  disabled={links.playStore.comingSoon}
                  onClick={() =>
                    links.playStore.url &&
                    window.open(links.playStore.url, "_blank")
                  }
                  onMouseEnter={(e) =>
                    !links.playStore.comingSoon &&
                    (e.currentTarget.style.opacity = "0.8")
                  }
                  onMouseLeave={(e) =>
                    !links.playStore.comingSoon &&
                    (e.currentTarget.style.opacity = "1")
                  }
                >
                  {links.playStore.comingSoon ? (
                    <div className="flex items-center gap-2 px-3">
                      <FaGooglePlay className="flex-shrink-0" />
                      <span className="whitespace-nowrap">
                        [Android coming soon]
                      </span>
                    </div>
                  ) : (
                    <img
                      src="/assets/google-play-badge.png"
                      alt="Get it on Google Play"
                      className="h-full"
                    />
                  )}
                </button>
              )}

            {links.github && (links.github.url || links.github.comingSoon) && (
              <button
                className="h-10 flex items-center gap-2 px-3 border-2 font-mono transition-all text-sm sm:text-base"
                style={{
                  borderColor: links.github.comingSoon
                    ? "var(--border-color)"
                    : "var(--text-secondary)",
                  color: links.github.comingSoon
                    ? "var(--text-muted)"
                    : "var(--text-secondary)",
                  cursor: links.github.comingSoon ? "not-allowed" : "pointer",
                  opacity: links.github.comingSoon ? 0.5 : 1,
                }}
                disabled={links.github.comingSoon}
                onClick={() =>
                  links.github.url && window.open(links.github.url, "_blank")
                }
                onMouseEnter={(e) =>
                  !links.github.comingSoon &&
                  (e.currentTarget.style.backgroundColor =
                    "rgba(128, 128, 128, 0.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                <FaGithub className="flex-shrink-0" />
                <span className="whitespace-nowrap">
                  {links.github.comingSoon
                    ? "[Source Code Coming Soon]"
                    : "[View Source]"}
                </span>
              </button>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  links: PropTypes.shape({
    web: PropTypes.shape({
      url: PropTypes.string,
      comingSoon: PropTypes.bool,
    }),
    playStore: PropTypes.shape({
      url: PropTypes.string,
      comingSoon: PropTypes.bool,
    }),
    github: PropTypes.shape({
      url: PropTypes.string,
      comingSoon: PropTypes.bool,
    }),
    project_page: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
};

const About = () => {
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Aadish Samir",
      alternateName: "ASDev",
      description:
        "Student who codes as a hobby, creating mobile and web applications with React, Flutter, and Firebase",
      jobTitle: "Student & Hobby Developer",
      url: "https://aadish.dev/about",
      sameAs: ["https://github.com/aadishsamir123"],
      knowsAbout: [
        "React Development",
        "Flutter Development",
        "Firebase Integration",
        "Mobile App Development",
        "Web Development",
        "JavaScript",
        "Programming as a Hobby",
      ],
    },
  };

  return (
    <>
      <SEOHead
        title="About Aadish - Student & Developer"
        description="Learn about Aadish Samir, a student who codes as a hobby. Building mobile and web apps with React, Flutter, and Firebase."
        keywords="About Aadish Samir, Student Developer, Hobby Developer, React Flutter, Mobile App Developer, ASDev"
        url="https://aadish.dev/about"
        structuredData={aboutStructuredData}
      />
      <motion.div
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4 font-mono tracking-tight"
          style={{ color: "var(--color-blue)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span style={{ color: "var(--text-muted)" }}>$</span> About Me
        </motion.h1>
        <motion.p
          className="text-xl font-mono mb-6 max-w-2xl"
          style={{ color: "var(--text-muted)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-green-400">/*</span>
          <br />
          Hi! I&apos;m Aadish, a student who loves coding as a hobby and
          building cool apps.
          <br />
          <br />I enjoy working with React, Flutter, and Firebase to create fun
          projects and learn new things along the way.
          <br />
          <span className="text-green-400">*/</span>
        </motion.p>
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://github.com/aadishsamir123"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 py-3 px-6 transition-all flex items-center gap-2 justify-center font-mono hover:opacity-80"
            style={{
              borderColor: "var(--border-color)",
              color: "var(--text-secondary)",
            }}
          >
            <FaGithub /> [View GitHub Profile]
          </a>
        </motion.div>
      </motion.div>
    </>
  );
};

const Projects = () => {
  const projectsStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Aadish Samir's Projects",
    description:
      "Showcase of mobile and web applications developed by Aadish Samir",
    url: "https://aadish.dev/projects",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "SoftwareApplication",
          name: "ShopSync",
          description:
            "Share shopping lists with family and friends. Built using Flutter.",
          url: "https://aadish.dev/projects/shopsync",
          applicationCategory: "ProductivityApplication",
          operatingSystem: "Android, Web",
          author: {
            "@type": "Person",
            name: "Aadish Samir",
          },
        },
        {
          "@type": "SoftwareApplication",
          name: "QTick",
          description:
            "A smart and fast QR attendance tracking app. Built using Flutter.",
          url: "https://aadish.dev/projects/qtick",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Android, Web",
          author: {
            "@type": "Person",
            name: "Aadish Samir",
          },
        },
        {
          "@type": "SoftwareApplication",
          name: "WeatherFast",
          description: "A simple and clean weather app. Built using Flutter.",
          url: "https://aadish.dev/projects/weatherfast",
          applicationCategory: "WeatherApplication",
          operatingSystem: "Android",
          author: {
            "@type": "Person",
            name: "Aadish Samir",
          },
        },
      ],
    },
  };

  return (
    <>
      <SEOHead
        title="My Projects - Apps & Websites"
        description="Check out Aadish's hobby projects including ShopSync shopping list app, QTick QR attendance app, and WeatherFast weather app, built with React and Flutter."
        keywords="Aadish Projects, Hobby Projects, Mobile Apps, Web Apps, ShopSync, QTick, WeatherFast, QR Attendance, Flutter Apps, React Apps"
        url="https://aadish.dev/projects"
        structuredData={projectsStructuredData}
      />
      <div
        className="min-h-screen p-8 pt-24 font-mono"
        style={{ color: "var(--text-primary)" }}
      >
        <header>
          <h1
            className="text-4xl font-bold mb-6"
            style={{ color: "var(--color-blue)" }}
          >
            <span style={{ color: "var(--text-muted)" }}>$</span> My Projects
          </h1>
        </header>
        <main>
          <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="ShopSync"
              description="Share shopping lists with family and friends. Built using Flutter."
              icon="/assets/appicons/shopsync.png"
              links={{
                web: { url: "https://app.shopsync.aadish.dev" },
                playStore: {
                  url: "https://play.google.com/store/apps/details?id=com.aadishsamir.shopsync",
                },
                github: {
                  url: "https://github.com/aadishsamir123/asdev-shopsync",
                },
                project_page: { url: "shopsync" },
              }}
            />
            <ProjectCard
              title="QTick"
              description="A smart and fast QR attendance tracking app. Built using Flutter."
              icon="/assets/appicons/qtick.png"
              links={{
                playStore: {
                  url: "https://play.google.com/store/apps/details?id=com.aadishsamir.qr_attendance",
                },
                github: {
                  url: "https://github.com/aadishsamir123/asdev-qtick",
                },
                project_page: { url: "qtick" },
              }}
            />
            <ProjectCard
              title="WeatherFast"
              description="A simple and clean weather app. Built using Flutter."
              icon="/assets/appicons/weatherfast.png"
              links={{
                playStore: {
                  url: "https://play.google.com/store/apps/details?id=com.aadishsamir.weatherfast",
                },
                project_page: { url: "weatherfast" },
              }}
            />
          </section>
        </main>
      </div>
    </>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <div
        className="min-h-screen font-mono"
        style={{
          backgroundColor: "var(--bg-primary)",
          color: "var(--text-primary)",
        }}
      >
        <Navbar />
        <ThemeToggle />
        <main>
          <AnimatePresence mode="wait" initial={false}>
            <Routes>
              <Route
                path="/"
                element={
                  <PageWrapper>
                    <Home />
                  </PageWrapper>
                }
              />
              <Route
                path="/about"
                element={
                  <PageWrapper>
                    <About />
                  </PageWrapper>
                }
              />
              <Route
                path="/projects"
                element={
                  <PageWrapper>
                    <Projects />
                  </PageWrapper>
                }
              />
              <Route
                path="/projects/weatherfast"
                element={
                  <PageWrapper>
                    <WeatherFast />
                  </PageWrapper>
                }
              />
              <Route
                path="/projects/shopsync"
                element={
                  <PageWrapper>
                    <ShopSync />
                  </PageWrapper>
                }
              />
              <Route
                path="/projects/qtick"
                element={
                  <PageWrapper>
                    <QTick />
                  </PageWrapper>
                }
              />

              <Route
                path="/legal/projects/shopsync/privacypolicy"
                element={
                  <PageWrapper>
                    <ShopSyncPrivacyPolicy />
                  </PageWrapper>
                }
              />
              <Route
                path="/legal/projects/shopsync/disclaimer"
                element={
                  <PageWrapper>
                    <ShopSyncDisclaimer />
                  </PageWrapper>
                }
              />
              <Route
                path="/legal/projects/qrattendance/privacypolicy"
                element={
                  <PageWrapper>
                    <QRAttendancePrivacyPolicy />
                  </PageWrapper>
                }
              />
              <Route
                path="/legal/projects/nammakannada/privacypolicy"
                element={
                  <PageWrapper>
                    <NammaKannadaPrivacyPolicy />
                  </PageWrapper>
                }
              />

              {/* 404 Catch-all route */}
              <Route
                path="*"
                element={
                  <PageWrapper>
                    <NotFound />
                  </PageWrapper>
                }
              />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
