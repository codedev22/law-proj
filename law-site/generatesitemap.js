const path = require('path');

// Create generator
const generator = SitemapGenerator('https://highbrowslegal.in', {
  stripQuerystring: false,
  filepath: path.resolve(__dirname, 'public/sitemap.xml'), // Save in the React public folder
});

// Register event listeners
generator.on('done', () => {
  console.log('Sitemap successfully created!');
});

// Start the crawler
generator.start();