import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEOHead = ({
  title = "Aadish Samir - Developer & Student",
  description = "Student who codes as a hobby, creating mobile and web apps with React, Flutter, and Firebase. Creator of ShopSync and WeatherFast.",
  keywords = "Aadish Samir, Hobby Developer, Student Developer, React, Flutter, Mobile Apps, Web Apps, Firebase, JavaScript, ShopSync, WeatherFast, ASDev",
  url = "https://aadish.dev/",
  image = "https://aadish.dev/assets/favicon_io/android-chrome-512x512.png",
  type = "website",
  structuredData = null,
  noIndex = false
}) => {
  const fullTitle = title.includes('Aadish Samir') ? title : `${title} | Aadish Samir`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Aadish Samir Portfolio" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

SEOHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  structuredData: PropTypes.object,
  noIndex: PropTypes.bool
};

export default SEOHead;
