const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Configuration
const SOURCE_DIR = path.join(__dirname, 'amboss_local_library');
const DIST_DIR = path.join(__dirname, 'dist');
const ARTICLES_DIR = path.join(DIST_DIR, 'articles');
const MEDIA_DIR = path.join(DIST_DIR, 'media');

const SAMPLE_EIDS = ['480353', '-E0Dy3', 'Wj0Pzf', 'En08Eg', '580iM3'];

// Initialize dist folders
[DIST_DIR, ARTICLES_DIR, MEDIA_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// Load original manifest
const originalManifestPath = path.join(SOURCE_DIR, 'manifest.json');
const originalManifest = JSON.parse(fs.readFileSync(originalManifestPath, 'utf-8'));

// Initialize outputs
const newManifest = {};
const searchIndex = {};

// We will process all articles in the manifest
const allEids = Object.keys(originalManifest);
let processedCount = 0;

for (const eid of allEids) {
  const data = originalManifest[eid];
  if (!data) continue;

  const localPath = path.join(SOURCE_DIR, data.locations[0].localPath);
  if (!fs.existsSync(localPath)) {
    console.error(`Missing file for EID: ${eid} at ${localPath}`);
    continue;
  }

  processedCount++;
  if (processedCount % 100 === 0) {
    console.log(`Processed ${processedCount} / ${allEids.length} articles...`);
  }

  let markdown = fs.readFileSync(localPath, 'utf-8');

  // Extract Headings
  const headings = [];
  const headingRegex = /^#{1,6}\s+(.*)/gm;
  let match;
  while ((match = headingRegex.exec(markdown)) !== null) {
    // Skip H1 (the main title) since we already have it in the metadata
    if (match[0].startsWith('# ')) continue;

    let cleanHeading = match[1].trim();
    // Strip AMBOSS citation links like [[15]](url)
    cleanHeading = cleanHeading.replace(/\[\[\d+\]\]\([^)]+\)/g, '').trim();
    // Strip markdown links and reference tags (e.g., [text](url))
    cleanHeading = cleanHeading.replace(/\[([^\]]*)\]\([^)]+\)/g, '$1').trim();
    // Also strip literal reference brackets if left behind like [[15]]
    cleanHeading = cleanHeading.replace(/\[\[\d+\]\]/g, '').trim();
    headings.push(cleanHeading);
  }

  // Extract Outgoing Links
  const outgoingLinks = new Set();
  const linkRegex = /https:\/\/coursology-qbank\.com\/amboss\/article\/([a-zA-Z0-9_-]+)/g;
  while ((match = linkRegex.exec(markdown)) !== null) {
    const matchedEid = match[1];
    // Do not include self-references (like the Original Article Link at the top)
    if (matchedEid !== eid) {
      outgoingLinks.add(matchedEid);
    }
  }

  // Normalize Images
  // Original format: ![caption](../../../../../media/filename.jpg)
  // New format: ![caption](media/filename.jpg)
  markdown = markdown.replace(/!\[(.*?)\]\((?:\.\.\/)+media\/(.*?)\)/g, '![$1](media/$2)');

  // Normalize Links for Next.js / Raycast
  // From: [text](https://coursology-qbank.com/amboss/article/EID?from=...)
  // To: [text](https://coursology-qbank.com/amboss/article/EID)
  markdown = markdown.replace(/\]\(https:\/\/coursology-qbank\.com\/amboss\/article\/([a-zA-Z0-9_-]+)(?:\?.*?)?\)/g, '](https://coursology-qbank.com/amboss/article/$1)');

  // Extract Category Path
  // In original manifest, categories might be ["Clinical knowledge", "Internal medicine", "Gastroenterology"]
  const categoryPath = data.locations[0].categories || [];

  // Build New Manifest Entry
  newManifest[eid] = {
    id: eid, // Using string EID
    title: data.title,
    slug: `/library/${eid}`,
    path: categoryPath,
    aliases: [], // Placeholder, can be derived later
    tags: [], // Placeholder
    headings: headings,
    outgoingLinks: Array.from(outgoingLinks),
    lastUpdated: new Date().toISOString().split('T')[0] // Using today's date
  };

  // Build Search Index Entry
  searchIndex[eid] = {
    id: eid,
    title: data.title,
    tokens: [
      data.title.toLowerCase(),
      ...categoryPath.map(c => c.toLowerCase()),
      ...headings.map(h => h.toLowerCase()) // Add headings to search tokens
    ]
  };

  // Write Processed Markdown
  fs.writeFileSync(path.join(ARTICLES_DIR, `${eid}.md`), markdown);

  // Images are no longer copied to dist/media because they exceed Cloudflare Pages file limits.
  // They must be uploaded to Cloudflare R2 instead via upload-to-r2.js
}

// Generate version.json
const versionData = {
  version: crypto.randomBytes(4).toString('hex'), // Simulate a git SHA
  buildDate: new Date().toISOString()
};

fs.writeFileSync(path.join(DIST_DIR, 'version.json'), JSON.stringify(versionData, null, 2));
fs.writeFileSync(path.join(DIST_DIR, 'manifest.json'), JSON.stringify(newManifest, null, 2));
fs.writeFileSync(path.join(DIST_DIR, 'search-index.json'), JSON.stringify(searchIndex, null, 2));

console.log(`Successfully ran full pipeline for ${allEids.length} articles.`);
console.log(`Processed: ${processedCount} valid articles.`);
console.log('Outputs saved to dist/');
console.log('Images are NO LONGER copied to dist/media. Run upload-to-r2.js to sync images to Cloudflare R2.');
