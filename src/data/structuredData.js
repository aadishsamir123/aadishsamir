// Website-wide structured data
export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Aadish Samir Portfolio",
  alternateName: "ASDev",
  url: "https://aadish.dev",
  description:
    "Full-stack developer portfolio showcasing React and Flutter applications",
  author: {
    "@type": "Person",
    name: "Aadish Samir",
    jobTitle: "Full Stack Developer",
    url: "https://aadish.dev",
    sameAs: ["https://github.com/aadishsamir123"],
    knowsAbout: [
      "React Development",
      "Flutter Development",
      "Firebase Integration",
      "JavaScript",
      "Mobile App Development",
      "Web Development",
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

// Organization structured data
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ASDev",
  alternateName: "Aadish Samir Development",
  url: "https://aadish.dev",
  logo: "https://aadish.dev/assets/favicon_io/android-chrome-512x512.png",
  description:
    "Mobile and web application development services specializing in React and Flutter",
  founder: {
    "@type": "Person",
    name: "Aadish Samir",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "asdev.feedback@gmail.com",
    contactType: "customer service",
  },
  sameAs: ["https://github.com/aadishsamir123"],
};

// Portfolio structured data
export const portfolioStructuredData = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Aadish Samir's Development Portfolio",
  description:
    "A collection of mobile and web applications developed using React, Flutter, and Firebase",
  url: "https://aadish.dev",
  creator: {
    "@type": "Person",
    name: "Aadish Samir",
    jobTitle: "Full Stack Developer",
  },
  hasPart: [
    {
      "@type": "SoftwareApplication",
      name: "ShopSync",
      description: "Collaborative shopping list application",
      url: "https://aadish.dev/projects/shopsync",
      applicationCategory: "ProductivityApplication",
    },
    {
      "@type": "SoftwareApplication",
      name: "WeatherFast",
      description: "Clean and simple weather application",
      url: "https://aadish.dev/projects/weatherfast",
      applicationCategory: "WeatherApplication",
    },
  ],
};

// Breadcrumb structured data generator
export const generateBreadcrumbStructuredData = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url,
    })),
  };
};
