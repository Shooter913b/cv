const fs = require('fs');
const path = require('path');

// Copy all images from project directories to the public root with unique names
function copyImagesWithUniqueNames() {
  const publicDir = path.join(process.cwd(), 'public');
  const projectsDir = path.join(publicDir, 'projects');

  if (!fs.existsSync(projectsDir)) {
    console.log('Projects directory not found, skipping image copy');
    return;
  }

  // Find all project directories
  const projectDirs = fs.readdirSync(projectsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  let copiedCount = 0;

  projectDirs.forEach(projectDir => {
    const projectPath = path.join(projectsDir, projectDir);
    const files = fs.readdirSync(projectPath);

    files.forEach(file => {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext)) {
        const sourcePath = path.join(projectPath, file);
        const filename = path.basename(file, ext);
        const uniqueFilename = `${projectDir}-${filename}${ext}`;
        const destPath = path.join(publicDir, uniqueFilename);

        fs.copyFileSync(sourcePath, destPath);
        copiedCount++;
        console.log(`Copied: ${file} → ${uniqueFilename}`);
      }
    });
  });

  console.log(`\n✅ Copied ${copiedCount} images to public root with unique names`);
}

copyImagesWithUniqueNames();
