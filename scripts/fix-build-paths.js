import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

console.log('Running post-build script to reorganize files...');

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const subsiteDir = path.join(distDir, 'subsite');
const publicDir = path.resolve(__dirname, '../public');

// Create subsite directory if it doesn't exist
if (!fs.existsSync(subsiteDir)) {
  fs.mkdirSync(subsiteDir, { recursive: true });
  console.log('Created subsite directory');
}

// Ensure subsite/assets directory exists
const subsiteAssetsDir = path.join(subsiteDir, 'assets');
if (!fs.existsSync(subsiteAssetsDir)) {
  fs.mkdirSync(subsiteAssetsDir, { recursive: true });
  console.log('Created subsite/assets directory');
}

// First, copy assets directly from dist/assets to subsite/assets
const distAssetsDir = path.join(distDir, 'assets');
if (fs.existsSync(distAssetsDir)) {
  const assetFiles = fs.readdirSync(distAssetsDir);
  for (const file of assetFiles) {
    const srcPath = path.join(distAssetsDir, file);
    const destPath = path.join(subsiteAssetsDir, file);
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${srcPath} to ${destPath}`);
  }
}

// Copy other static files to subsite directory
const files = fs.readdirSync(distDir);
for (const file of files) {
  // Skip directories, the subsite directory itself and any special files needed at root
  if (file === 'subsite' || file === 'index.html' || file === '_redirects' || file === 'netlify.toml' || file === 'assets') {
    continue;
  }
  
  const srcPath = path.join(distDir, file);
  const destPath = path.join(subsiteDir, file);
  
  // Only handle files, not directories
  if (!fs.statSync(srcPath).isDirectory()) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${srcPath} to ${destPath}`);
  }
}

// Copy the index.html to the subsite folder
const indexHtmlPath = path.join(distDir, 'index.html');
const subsiteIndexPath = path.join(subsiteDir, 'index.html');

if (fs.existsSync(indexHtmlPath)) {
  fs.copyFileSync(indexHtmlPath, subsiteIndexPath);
  console.log(`Copied index.html to subsite directory`);
  
  // Update the paths in the subsite index.html file if needed
  let indexContent = fs.readFileSync(subsiteIndexPath, 'utf8');
  
  // Fix asset paths to use relative paths instead of absolute
  indexContent = indexContent.replace(/href="\/assets\//g, 'href="./assets/');
  indexContent = indexContent.replace(/src="\/assets\//g, 'src="./assets/');
  
  // Fix paths that include /subsite/
  indexContent = indexContent.replace(/href="\/subsite\/assets\//g, 'href="./assets/');
  indexContent = indexContent.replace(/src="\/subsite\/assets\//g, 'src="./assets/');
  
  // Fix favicon and other static assets
  indexContent = indexContent.replace(/href="\/subsite\/([^/"]+\.(png|ico|jpg|jpeg|gif|svg))"/g, 'href="./$1"');
  
  // Also fix direct references to JS and CSS files
  indexContent = indexContent.replace(/(src|href)="\/(index-[^"]+\.js)"/g, '$1="./assets/$2"');
  indexContent = indexContent.replace(/(src|href)="\/(index-[^"]+\.css)"/g, '$1="./assets/$2"');
  
  // Also try with no leading slash
  indexContent = indexContent.replace(/(src|href)="(index-[^"]+\.js)"/g, '$1="./assets/$2"');
  indexContent = indexContent.replace(/(src|href)="(index-[^"]+\.css)"/g, '$1="./assets/$2"');
  
  // Fix specifically for your JS and CSS files
  const jsMatches = indexContent.match(/src="[^"]*index-[^"]+\.js"/g);
  if (jsMatches && jsMatches.length > 0) {
    // Extract the filename from the matched string
    const jsFilename = jsMatches[0].match(/index-[^"]+\.js/)[0];
    indexContent = indexContent.replace(/src="[^"]*index-[^"]+\.js"/g, `src="./assets/${jsFilename}"`);
  }
  
  const cssMatches = indexContent.match(/href="[^"]*index-[^"]+\.css"/g);
  if (cssMatches && cssMatches.length > 0) {
    // Extract the filename from the matched string
    const cssFilename = cssMatches[0].match(/index-[^"]+\.css/)[0];
    indexContent = indexContent.replace(/href="[^"]*index-[^"]+\.css"/g, `href="./assets/${cssFilename}"`);
  }
  
  // Fix specifically for favicon
  indexContent = indexContent.replace(/href="\/subsite\/logo-f\.png"/g, 'href="./logo-f.png"');
  indexContent = indexContent.replace(/href="[^"]*logo-f\.png"/g, 'href="./logo-f.png"');
  
  fs.writeFileSync(subsiteIndexPath, indexContent);
  console.log('Updated asset paths in subsite/index.html');
  
  // Also output the content for debugging
  console.log('Updated HTML content:');
  console.log(indexContent);
}

// Copy the root placeholder file if it exists
const rootPlaceholderSrc = path.join(publicDir, 'root-placeholder.html');
const rootPlaceholderDest = path.join(distDir, 'root-placeholder.html');

if (fs.existsSync(rootPlaceholderSrc)) {
  fs.copyFileSync(rootPlaceholderSrc, rootPlaceholderDest);
  console.log(`Copied root-placeholder.html to dist directory`);
}

// Copy the 404.html file if it exists
const notFoundSrc = path.join(publicDir, '404.html');
const notFoundDest = path.join(distDir, '404.html');

if (fs.existsSync(notFoundSrc)) {
  fs.copyFileSync(notFoundSrc, notFoundDest);
  console.log(`Copied 404.html to dist directory`);
}

// Ensure logo files are in the subsite directory
const logoFiles = ['logo.png', 'logo-white.png', 'logo-f.png'];
for (const logoFile of logoFiles) {
  // Check if the logo file exists in the public directory
  const publicLogoPath = path.join(publicDir, logoFile);
  const subsiteLogoPath = path.join(subsiteDir, logoFile);
  
  if (fs.existsSync(publicLogoPath) && !fs.existsSync(subsiteLogoPath)) {
    fs.copyFileSync(publicLogoPath, subsiteLogoPath);
    console.log(`Copied ${logoFile} to subsite directory`);
  }
}

// Add a debug function to list directory contents recursively
function listDirectoryContents(dir, level = 0) {
  const indent = '  '.repeat(level);
  console.log(`${indent}Directory: ${dir}`);
  
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const itemPath = path.join(dir, item);
    const stats = fs.statSync(itemPath);
    
    if (stats.isDirectory()) {
      listDirectoryContents(itemPath, level + 1);
    } else {
      console.log(`${indent}  File: ${item} (${stats.size} bytes)`);
    }
  }
}

// Check the HTML file for script and link tags
function analyzeHtmlContent(htmlPath) {
  console.log(`\nAnalyzing HTML content in ${htmlPath}:`);
  if (!fs.existsSync(htmlPath)) {
    console.log('  File does not exist!');
    return;
  }
  
  const content = fs.readFileSync(htmlPath, 'utf8');
  
  // Find all script tags
  const scriptMatches = content.match(/<script[^>]*src=["']([^"']+)["'][^>]*>/g);
  if (scriptMatches) {
    console.log('  Script tags found:');
    scriptMatches.forEach(match => {
      const src = match.match(/src=["']([^"']+)["']/)[1];
      console.log(`    - ${src}`);
      
      // Verify if the file exists at the specified path
      const srcPath = path.join(subsiteDir, src.replace(/^\.\//, ''));
      if (fs.existsSync(srcPath)) {
        console.log(`      File exists at: ${srcPath}`);
      } else {
        console.log(`      WARNING: File does not exist at: ${srcPath}`);
      }
    });
  } else {
    console.log('  No script tags found');
  }
  
  // Find all link tags (CSS)
  const linkMatches = content.match(/<link[^>]*href=["']([^"']+)["'][^>]*>/g);
  if (linkMatches) {
    console.log('  Link tags found:');
    const cssLinks = linkMatches.filter(link => link.includes('stylesheet'));
    cssLinks.forEach(match => {
      const href = match.match(/href=["']([^"']+)["']/)[1];
      console.log(`    - ${href}`);
      
      // Only verify local paths (not CDN links)
      if (!href.startsWith('http')) {
        const hrefPath = path.join(subsiteDir, href.replace(/^\.\//, ''));
        if (fs.existsSync(hrefPath)) {
          console.log(`      File exists at: ${hrefPath}`);
        } else {
          console.log(`      WARNING: File does not exist at: ${hrefPath}`);
        }
      }
    });
  } else {
    console.log('  No link tags (CSS) found');
  }
}

// Call the function on our HTML file
analyzeHtmlContent(subsiteIndexPath);

// Log the structure of the dist directory
console.log('\nFinal directory structure:');
listDirectoryContents(distDir);

console.log('Post-build file reorganization completed!'); 