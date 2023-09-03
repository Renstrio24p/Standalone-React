const fs = require('fs-extra');
const pathfile = require('path');

const srcImagesDir = pathfile.join(__dirname, 'src/images');
const srcVideosDir = pathfile.join(__dirname, 'src/videos');
const distImagesDir = pathfile.join(__dirname, 'dist/images');
const distVideosDir = pathfile.join(__dirname, 'dist/videos');

// Check if the source directories exist
const imagesExist = fs.existsSync(srcImagesDir);
const videosExist = fs.existsSync(srcVideosDir);

// Declare variables to store file lists
let sourceImageFiles = [];
let sourceVideoFiles = [];

// Delete files in destination directories that have no corresponding files in source directories
if (imagesExist) {
  sourceImageFiles = fs.readdirSync(srcImagesDir);
  const destImageFiles = fs.existsSync(distImagesDir) ? fs.readdirSync(distImagesDir) : [];

  for (const destFile of destImageFiles) {
    if (!sourceImageFiles.includes(destFile)) {
      const filePath = pathfile.join(distImagesDir, destFile);
      fs.unlinkSync(filePath);
      console.log(`Deleted: ${filePath}`);
    }
  }
}

if (videosExist) {
  sourceVideoFiles = fs.readdirSync(srcVideosDir);
  const destVideoFiles = fs.existsSync(distVideosDir) ? fs.readdirSync(distVideosDir) : [];

  for (const destFile of destVideoFiles) {
    if (!sourceVideoFiles.includes(destFile)) {
      const filePath = pathfile.join(distVideosDir, destFile);
      fs.unlinkSync(filePath);
      console.log(`Deleted: ${filePath}`);
    }
  }
}

// Copy the directories only if they exist and are not empty
if (imagesExist && sourceImageFiles.length > 0) {
  fs.copySync(srcImagesDir, distImagesDir);
}

if (videosExist && sourceVideoFiles.length > 0) {
  fs.copySync(srcVideosDir, distVideosDir);
}

// You must not alter this test configuration file for webpack unless you are a tester
