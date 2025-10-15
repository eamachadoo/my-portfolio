import fs from 'fs';
import path from 'path';

const cssFilePath = 'src/components/sections/Hero.css';

const updateCSSWithOptimizedImages = () => {
  try {
    let cssContent = fs.readFileSync(cssFilePath, 'utf8');
    
    // Replace all instances of the original image paths with optimized ones
    const imageNames = [
      'IMG_0725', 'IMG_0384', 'IMG_1098', 'IMG_0542', 'IMG_0776',
      'IMG_0229', 'IMG_0976', 'IMG_0673', 'IMG_0358', 'IMG_0747',
      'IMG_0591', 'IMG_0423', 'IMG_0758', 'IMG_0243', 'IMG_0536',
      'IMG_0392', 'IMG_0597'
    ];

    let replacementCount = 0;

    imageNames.forEach(imageName => {
      const originalPath = `url('/src/assets/images/background/${imageName}.JPG')`;
      const optimizedPath = `url('/src/assets/images/background/optimized/${imageName}_opt.jpg')`;
      
      // Count occurrences before replacement
      const beforeCount = (cssContent.match(new RegExp(originalPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
      
      // Replace all instances (global replacement)
      cssContent = cssContent.split(originalPath).join(optimizedPath);
      
      if (beforeCount > 0) {
        console.log(`🔄 Replaced ${beforeCount} instances of ${imageName}.JPG`);
        replacementCount += beforeCount;
      }
    });

    // Write updated CSS back to file
    fs.writeFileSync(cssFilePath, cssContent);
    
    console.log(`\n✅ CSS updated successfully!`);
    console.log(`📊 Total replacements made: ${replacementCount}`);
    console.log(`🚀 Your carousel should now load optimized images!`);
    console.log(`\n💡 Next: Deploy your site and test the loading speed improvement!`);

  } catch (error) {
    console.error('❌ Error updating CSS:', error.message);
    
    if (error.code === 'ENOENT') {
      console.error('💡 Make sure the Hero.css file exists at the specified path');
    }
  }
};

updateCSSWithOptimizedImages();