import { getAllPosts } from "@/lib/posts";

export async function GET() {
  const baseUrl = "https://ariseandawake.com";
  const posts = getAllPosts();

  const rssItems = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <category><![CDATA[${post.category}]]></category>
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Arise &amp; Awake — Philosophy for the Modern Pioneer</title>
    <description>Rooted in the teachings of Swami Vivekananda. Essays on ancient wisdom and modern ambition.</description>
    <link>${baseUrl}</link>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-US</language>
    <managingEditor>hello@ariseandawake.com (Shubh Singh)</managingEditor>
    <webMaster>hello@ariseandawake.com (Shubh Singh)</webMaster>
    <image>
      <url>${baseUrl}/favicon.ico</url>
      <title>Arise &amp; Awake</title>
      <link>${baseUrl}</link>
    </image>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
