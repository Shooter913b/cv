const fs = require('fs');
const path = require('path');

// Copy all images from project directories to the root of the static export
function copyImagesToRoot() {
  const outDir = path.join(process.cwd(), 'out');
  const projectsDir = path.join(outDir, 'projects');
  
  if (!fs.existsSync(projectsDir)) {
    console.log('Projects directory not found, skipping image copy');
    return;
  }

  // Find all image files in project directories
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  const projectDirs = fs.readdirSync(projectsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  let copiedCount = 0;

  projectDirs.forEach(projectDir => {
    const projectPath = path.join(projectsDir, projectDir);
    const files = fs.readdirSync(projectPath);
    
    files.forEach(file => {
      const ext = path.extname(file).toLowerCase();
      if (imageExtensions.includes(ext)) {
        const sourcePath = path.join(projectPath, file);
        const destPath = path.join(outDir, file);
        
        // Only copy if the file doesn't already exist in root (to avoid overwriting)
        if (!fs.existsSync(destPath)) {
          fs.copyFileSync(sourcePath, destPath);
          copiedCount++;
          console.log(`Copied: ${file}`);
        }
      }
    });
  });

  console.log(`\n✅ Copied ${copiedCount} images to root of static export`);
}

copyImagesToRoot();
