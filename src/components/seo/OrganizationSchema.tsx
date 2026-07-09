export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NGO",

    "@id": "https://www.handngo.org/#organization",

    name: "HAND NGO",

    alternateName: "Human Action for Need and Development",

    url: "https://www.handngo.org",

    logo: "https://www.handngo.org/logo_bg.png",

    image: "https://www.handngo.org/og-image.jpg",

    description:
      "HAND NGO empowers communities through climate action, education, sustainable livelihoods, women empowerment, healthcare and community development.",

    email: "info@handngo.org",

    sameAs: [
      "https://www.instagram.com/handngo",
      "https://www.linkedin.com/company/handngo",
      "https://www.facebook.com/handngo"
    ],

    knowsAbout: [
      "Climate Change",
      "Education",
      "Healthcare",
      "Women Empowerment",
      "Community Development",
      "Livelihood",
      "Environmental Conservation",
      "CSR Partnerships",
      "Volunteering"
    ],

    areaServed: {
      "@type": "Country",
      name: "India"
    },

    nonprofitStatus: "Nonprofit",

    foundingLocation: {
      "@type": "Place",
      name: "Hyderabad"
    },

    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",

      email: "info@handngo.org",

      url: "https://www.handngo.org/contact",

      availableLanguage: [
        "English",
        "Telugu"
      ]
    },

    potentialAction: [
      {
        "@type": "DonateAction",
        target: "https://www.handngo.org/donate"
      },
      {
        "@type": "JoinAction",
        target: "https://www.handngo.org/volunteer"
      }
    ]
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