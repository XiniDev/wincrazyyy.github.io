import {fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';

// List of routes in your application
const routes = [
    '/',
    '/ibdp',
    '/a-level',
    '/igcse',
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateSitemap = () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
        .map(
            (route) => `
    <url>
        <loc>${`https://www.wsmath.com${route}`}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>0.80</priority>
    </url>`
        )
        .join('')}
</urlset>
`;

    fs.writeFileSync(path.resolve(__dirname, '../../public/sitemap.xml'), sitemap);
    console.log('Sitemap generated successfully!');
};

generateSitemap();
