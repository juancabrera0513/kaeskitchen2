export default function robots() {
    return {
      rules: [{ userAgent: '*', disallow: ['/404'] }],
      sitemap: 'https://kaeskitchen.com/sitemap.xml',
    }
  }