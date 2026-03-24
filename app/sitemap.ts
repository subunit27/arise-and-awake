import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { courseLessons } from "@/lib/course";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ariseandawake.com";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/course`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/blueprint`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const courseRoutes: MetadataRoute.Sitemap = courseLessons.map((lesson) => ({
    url: `${baseUrl}/course/preview/${lesson.day}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...blogRoutes, ...courseRoutes];
}
