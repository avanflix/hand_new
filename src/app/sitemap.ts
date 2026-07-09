import { MetadataRoute } from "next";

const BASE_URL = "https://www.handngo.org";

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        {
            path: "",
            priority: 1,
            changeFrequency: "weekly" as const,
        },
        {
            path: "/about-us",
            priority: 0.9,
            changeFrequency: "monthly" as const,
        },
        {
            path: "/domains",
            priority: 0.9,
            changeFrequency: "monthly" as const,
        },
        // Domain Pages
        { path: "/domains/climate-change", priority: 0.9, changeFrequency: "monthly" as const },
        { path: "/domains/livelihood", priority: 0.9, changeFrequency: "monthly" as const },
        {
            path: "/partners",
            priority: 0.9,
            changeFrequency: "monthly" as const,
        },
        {
            path: "/volunteer",
            priority: 0.8,
            changeFrequency: "monthly" as const,
        },
        {
            path: "/donate",
            priority: 0.9,
            changeFrequency: "weekly" as const,
        },
        {
            path: "/contact",
            priority: 0.7,
            changeFrequency: "yearly" as const,
        },
        {
            path: "/privacy-policy",
            priority: 0.3,
            changeFrequency: "yearly" as const,
        },
        {
            path: "/terms-of-service",
            priority: 0.3,
            changeFrequency: "yearly" as const,
        },
        {
            path: "/cookie-policy",
            priority: 0.3,
            changeFrequency: "yearly" as const,
        },
    ];

    return routes.map((route) => ({
        url: `${BASE_URL}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}