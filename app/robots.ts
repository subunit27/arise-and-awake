import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/course/preview/"],
      },
    ],
    sitemap: "https://ariseandawake.com/sitemap.xml",
    host: "https://ariseandawake.com",
  };
}
