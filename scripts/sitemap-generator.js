const fs = require('fs');
const fg = require('fast-glob');

async function addPage(page) {
    const path = page.replace('pages', '').replace('.md', '').replace('/', '').replace("content", "");
    const route = path === '/index' ? '' : path;
    return `  <url>
    <loc>${`https://www.ebesucher.com${route}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`;
}

async function generateSitemap() {
    const pages = await fg([
        'content/**/*{.js,.md}',
        '!content/_*.js',
        '!content/api',
    ]);
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${(await Promise.all(pages.map(addPage))).join('\n')}
</urlset>`;

    fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSitemap();