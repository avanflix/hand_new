import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.handngo.org'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],

    sitemap: `${baseUrl}/sitemap.xml`,

    host: baseUrl,
  }
}