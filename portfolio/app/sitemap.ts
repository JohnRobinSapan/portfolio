import { getBlogPosts } from 'app/db/blog';

export default async function sitemap() {

  let blogs = getBlogPosts().map((post) => ({
    url: `https://johnsapan.com/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = [
    '',
    // '/blog',
    // '/guestbook',
    // '/uses',
    '/work',
    '/resume',
  ].map((route) => ({
    url: `https://johnsapan.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [
    ...routes,
    // ...blogs,
  ];
}
