export default function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    "@id": "https://www.handngo.org/#website",

    url: "https://www.handngo.org",

    name: "HAND NGO",

    description:
      "HAND NGO is a nonprofit organization working in climate action, education, livelihoods, women empowerment, healthcare and community development.",

    publisher: {
      "@id": "https://www.handngo.org/#organization",
    },

    inLanguage: "en-IN",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}