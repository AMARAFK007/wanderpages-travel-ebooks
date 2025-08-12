import { Helmet } from "react-helmet-async";
import React from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  jsonLd?: Record<string, any> | Record<string, any>[];
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords = [], canonical, jsonLd }) => {
  const href = canonical || (typeof window !== "undefined" ? window.location.href : "");
  const keywordString = keywords.join(", ");

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywordString && <meta name="keywords" content={keywordString} />}
      {href && <link rel="canonical" href={href} />}
      {jsonLd && (
        <script type="application/ld+json">
          {Array.isArray(jsonLd) ? JSON.stringify(jsonLd) : JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
