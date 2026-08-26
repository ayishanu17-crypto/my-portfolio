// Generates a clean, valid placeholder résumé PDF into /public/resume.pdf.
// Replace the file with your real résumé whenever you're ready — the site
// already links to it. Re-run: `node scripts/generate-resume.mjs`
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUT = resolve(dirname(fileURLToPath(import.meta.url)), '../public/resume.pdf');
const fresh = resolve(dirname(fileURLToPath(import.meta.url)), '../public');

const esc = (s) => s.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');

const PAGE_W = 612;
const M = 56; // margin

const GROUPS = [
  {
    heading: 'PROFILE',
    items: [
      'Engineering-oriented CSE undergraduate building production web apps and ML',
      'models under hackathon deadlines. Full-stack on React and TypeScript; Python',
      'and TensorFlow when the problem calls for it.',
    ],
  },
  {
    heading: 'EXPERIENCE',
    items: [
      'Full-Stack Developer - KVANTUM ROOM (hackathon build) | Feb 2026',
      '  o Engineered real-time Firebase sync supporting 10+ concurrent users <100ms',
      '  o Shipped 5+ modules: live chat, AI doubt solver, shared whiteboard',
      'ML Engineer - CROP CARE | Jan 2026',
      '  o Trained a CNN on ~3,000 labeled leaf images across 5 disease classes',
      '  o Deployed a web app that diagnoses a leaf photo in seconds',
      'Developer & Architect - DEBUGIQUE | Feb 2026',
      '  o Multi-language static analysis with custom AST engines (JS/Py/C++/Java)',
      '  o Hybrid persistence: MongoDB Atlas + local JSON fallback',
    ],
  },
  {
    heading: 'SKILLS',
    items: [
      'Languages: Python, Java, C, JavaScript, TypeScript, SQL, HTML/CSS',
      'Frameworks & Platforms: React, Tailwind CSS, Vite, Firebase, MongoDB, Node.js',
      'Tools: Git, GitHub, VS Code, Eclipse, Google Cloud Platform',
    ],
  },
  {
    heading: 'EDUCATION',
    items: [
      'B.Tech in Computer Science and Engineering',
      'PBR Visvodaya Institute of Technology and Science - Kavali, AP',
      'July 2024 - Present | Coursework: Data Structures, AI, DBMS',
    ],
  },
];

let stream = '';
let y = 740;

const text = (str, size, font, indent = 0, leading = null) => {
  stream += `BT /${font} ${size} Tf ${M + indent} ${y} Td (${esc(str)}) Tj ET\n`;
  y -= leading ?? size + 5;
};

const rule = () => {
  stream += `0.25 0.27 0.3 RG 0.8 w ${M} ${y} m ${PAGE_W - M} ${y} l S\n`;
  y -= 12;
};

const bullet = (str) => text(`- ${str}`, 10, 'F2', 16, 14);

// Name + tagline
text('AYISHA SHAIK', 26, 'F1');
text('Full-Stack Developer · CSE Undergraduate · AI/ML', 12, 'F2');
y -= 8;
text('ayishashaik1979@gmail.com  |  github.com/ayishanu17-crypto  |  linkedin.com/in/ayisha-shaik-60018a354', 10, 'F2');
y -= 10;

for (const g of GROUPS) {
  if (y < 120) break; // simple overflow guard
  text(g.heading, 13, 'F1');
  rule();
  for (const it of g.items) {
    if (y < 110) break;
    // bullets vs plain lines
    if (it.startsWith('- ')) bullet(it.slice(2));
    else if (it.startsWith('  o ')) text(it.slice(5), 10, 'F3', 24, 14);
    else text(it, 10, /^[A-Z]/.test(it.trim()) && !g.heading.includes('EDUCATION') ? 'F1' : 'F2', 0, 14);
  }
  y -= 8;
}

const contentLen = Buffer.byteLength(stream);

const objects = {};
objects[1] = '<< /Type /Catalog /Pages 2 0 R >>';
objects[2] = '<< /Type /Pages /Kids [3 0 R] /Count 1 >>';
objects[3] =
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] ' +
  '/Resources << /Font << /F1 4 0 R /F2 5 0 R /F3 6 0 R >> >> /Contents 7 0 R >>';
objects[4] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>';
objects[5] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>';
objects[6] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>';
objects[7] = `<< /Length ${contentLen} >>\nstream\n${stream}endstream`;

let pdf = '%PDF-1.4\n';
const offsets = [0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 1; i <= 7; i++) {
  offsets[i] = Buffer.byteLength(pdf);
  pdf += `${i} 0 obj\n${objects[i]}\nendobj\n`;
}
const xref = Buffer.byteLength(pdf);
pdf += `xref\n0 8\n0000000000 65535 f \n`;
for (let i = 1; i <= 7; i++) {
  pdf += offsets[i].toString().padStart(10, '0') + ' 00000 n \n';
}
pdf += `trailer\n<< /Size 8 /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;

mkdirSync(fresh, { recursive: true });
writeFileSync(OUT, pdf);
console.log(`Wrote ${OUT} (${Buffer.byteLength(pdf)} bytes)`);