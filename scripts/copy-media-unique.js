const fs = require('fs');
const path = require('path');

// Copy all media files (images and videos) from project directories to the public root with unique names
function copyMediaWithUniqueNames() {
  const publicDir = path.join(process.cwd(), 'public');
  const projectsDir = path.join(publicDir, 'projects');

  if (!fs.existsSync(projectsDir)) {
    console.log('Projects directory not found, skipping media copy');
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
      // Include both image and video file extensions
      if (['.jpg', '.jpeg', '.png', '.gif', '.webp', '.mp4', '.mov', '.avi', '.webm'].includes(ext)) {
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

  console.log(`\n✅ Copied ${copiedCount} media files to public root with unique names`);
}

copyMediaWithUniqueNames();
