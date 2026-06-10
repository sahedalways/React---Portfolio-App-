import fs from 'fs';
import { allProjects } from './src/Components/Portfolio/PortfolioData.js';

const headers = ['id', 'title', 'image', 'category', 'authorName', 'desc', 'use', 'github', 'demo'];

const escapeCSV = (value) => {
    if (!value) return '';
    return `"${String(value).replace(/"/g, '""')}"`;
};

const rows = allProjects.map((p) => {
    return [p.id, p.title, p.image, p.category, p.authorName, p.desc, p.use, p.github, p.demo]
        .map(escapeCSV)
        .join(',');
});

const csvContent = [headers.join(','), ...rows].join('\n');

fs.writeFileSync('projects.csv', csvContent);

console.log('CSV generated successfully!');
