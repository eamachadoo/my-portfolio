import fs from 'fs';
import path from 'path';

const inputDir = 'src/assets/images/background/';
const outputDir = 'src/assets/images/background/optimized/';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const copyAndPrepareImages = () => {
  try {
    const files = fs.readdirSync(inputDir).filter(file => 
      file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')
    );

    console.log(`📁 Found ${files.length} images to prepare for optimization...`);

    files.forEach(file => {
      const inputPath = path.join(inputDir, file);
      const fileName = path.parse(file).name;
      const outputPath = path.join(outputDir, `${fileName}_opt.jpg`);
      
      // Copy original to optimized folder with new name
      fs.copyFileSync(inputPath, outputPath);
      
      const fileSizeMB = (fs.statSync(inputPath).size / 1024 / 1024).toFixed(2);
      console.log(`📋 Copied: ${file} (${fileSizeMB}MB) → ${fileName}_opt.jpg`);
    });

    console.log(`\n✅ All images copied to 'optimized' folder!`);
    console.log(`\n💡 Next steps:`);
    console.log(`1. Go to https://tinypng.com or https://www.iloveimg.com/compress-image`);
    console.log(`2. Upload all files from: ${outputDir}`);
    console.log(`3. Download compressed versions (aim for 70-80% smaller)`);
    console.log(`4. Replace the files in the optimized folder with compressed versions`);
    console.log(`5. Run 'npm run update-css' to update your CSS`);
    console.log(`\n🎯 Target: Reduce from ~${(files.length * 2).toFixed(1)}MB to ~${(files.length * 0.3).toFixed(1)}MB`);

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
};

copyAndPrepareImages();