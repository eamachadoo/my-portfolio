import fs from 'fs';
import path from 'path';

const inputDir = 'src/assets/images/background/';
const outputDir = 'src/assets/images/background/optimized/';
const cssFilePath = 'src/components/sections/Hero.css';

console.log('🚀 Starting comprehensive image optimization process...\n');

// Step 1: Create optimized directory and copy images
const prepareImages = () => {
  console.log('📁 Step 1: Preparing images for optimization...');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log('✅ Created optimized directory');
  }

  const files = fs.readdirSync(inputDir).filter(file => 
    file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')
  );

  console.log(`📊 Found ${files.length} images to optimize`);

  files.forEach(file => {
    const inputPath = path.join(inputDir, file);
    const fileName = path.parse(file).name;
    const outputPath = path.join(outputDir, `${fileName}_opt.jpg`);
    
    if (!fs.existsSync(outputPath)) {
      fs.copyFileSync(inputPath, outputPath);
      const fileSizeMB = (fs.statSync(inputPath).size / 1024 / 1024).toFixed(2);
      console.log(`📋 Copied: ${file} (${fileSizeMB}MB)`);
    } else {
      console.log(`⏭️  Skipped: ${file} (already exists)`);
    }
  });

  return files;
};

// Step 2: Check if images are optimized
const checkOptimization = (originalFiles) => {
  console.log('\n🔍 Step 2: Checking optimization status...');
  
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  let needsOptimization = false;

  originalFiles.forEach(file => {
    const originalPath = path.join(inputDir, file);
    const fileName = path.parse(file).name;
    const optimizedPath = path.join(outputDir, `${fileName}_opt.jpg`);
    
    if (fs.existsSync(optimizedPath)) {
      const originalSize = fs.statSync(originalPath).size;
      const optimizedSize = fs.statSync(optimizedPath).size;
      
      totalOriginalSize += originalSize;
      totalOptimizedSize += optimizedSize;
      
      const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
      
      if (optimizedSize >= originalSize * 0.8) { // Less than 20% reduction
        needsOptimization = true;
      }
      
      console.log(`📊 ${fileName}: ${reduction}% reduction`);
    }
  });

  const totalReduction = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
  console.log(`\n📈 Overall size reduction: ${totalReduction}%`);
  console.log(`📦 Original: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`📦 Optimized: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)}MB`);

  return { needsOptimization, totalReduction };
};

// Step 3: Update CSS
const updateCSS = () => {
  console.log('\n🎨 Step 3: Updating CSS with optimized image paths...');
  
  try {
    let cssContent = fs.readFileSync(cssFilePath, 'utf8');
    
    const imageNames = [
      'IMG_0725', 'IMG_0384', 'IMG_1098', 'IMG_0542', 'IMG_0776',
      'IMG_0229', 'IMG_0976', 'IMG_0673', 'IMG_0358', 'IMG_0747',
      'IMG_0591', 'IMG_0423', 'IMG_0758', 'IMG_0243', 'IMG_0536',
      'IMG_0392', 'IMG_0597'
    ];

    let replacementCount = 0;
    let alreadyOptimized = 0;

    imageNames.forEach(imageName => {
      const originalPath = `url('/src/assets/images/background/${imageName}.JPG')`;
      const optimizedPath = `url('/src/assets/images/background/optimized/${imageName}_opt.jpg')`;
      
      if (cssContent.includes(originalPath)) {
        const beforeCount = (cssContent.match(new RegExp(originalPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
        cssContent = cssContent.split(originalPath).join(optimizedPath);
        replacementCount += beforeCount;
        console.log(`🔄 Updated ${beforeCount} instances of ${imageName}`);
      } else if (cssContent.includes(optimizedPath)) {
        alreadyOptimized++;
      }
    });

    fs.writeFileSync(cssFilePath, cssContent);
    
    console.log(`✅ CSS update complete!`);
    console.log(`📊 Replacements made: ${replacementCount}`);
    console.log(`📊 Already optimized: ${alreadyOptimized}`);

  } catch (error) {
    console.error('❌ Error updating CSS:', error.message);
  }
};

// Run the complete process
const main = () => {
  try {
    const originalFiles = prepareImages();
    const { needsOptimization, totalReduction } = checkOptimization(originalFiles);
    
    if (needsOptimization && totalReduction < 50) {
      console.log('\n⚠️  Images need manual optimization!');
      console.log('\n🛠️  Manual optimization steps:');
      console.log('1. Go to https://tinypng.com or https://www.iloveimg.com/compress-image');
      console.log('2. Upload files from: ' + path.resolve(outputDir));
      console.log('3. Download compressed versions');
      console.log('4. Replace files in optimized folder');
      console.log('5. Run "npm run optimize-all" again');
      console.log('\n🎯 Target: 60-80% size reduction');
      console.log('\n📍 After manual optimization, the CSS will be updated automatically!');
    } else {
      console.log('\n✅ Images are well optimized!');
      updateCSS();
      console.log('\n🚀 Optimization complete! Your site should load much faster now.');
      console.log('\n📊 Performance improvement expected:');
      console.log(`   • Loading time: ${totalReduction}% faster`);
      console.log(`   • Bandwidth saved: ${((100 - parseFloat(totalReduction)) / 100 * 100).toFixed(1)}%`);
    }
    
  } catch (error) {
    console.error('❌ Process failed:', error.message);
  }
};

main();