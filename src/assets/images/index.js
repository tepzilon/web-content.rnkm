const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const path = require('path');
const fs = require('fs');

const walkSync = (dir) => {
  const subDir =
    fs
      .readdirSync(dir)
      .filter(subdir => fs.statSync(dir + subdir).isDirectory())
  return subDir.reduce((list = [], subdir) =>
    list.concat(
      walkSync(dir + subdir + '/')
    ), [dir])
}

// console.log(walkSync("./"))

walkSync("./")
  .forEach(imgPath => {
    // const webpPath = imgPath.replace(/(?:.(?!\.))+$/, ".webp")
    imagemin([`${imgPath}*`], path.join('../webp', imgPath), {
      use: [
        imageminWebp({ quality: 80 })
      ]
    }).then(() => {
      console.log(`${imgPath} optimized`);
    });
  });