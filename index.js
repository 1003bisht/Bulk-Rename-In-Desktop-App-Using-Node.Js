const fs = require('node:fs');
const path = require('path');

const replacethis = "anny";
const replacewith = "ash";
const preview = false;
const folder = __dirname;

try {
  fs.readdir(folder, (err, data) => {
    if (err) throw err;

    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      const oldFile = path.join(folder, item);
      const newFile = path.join(folder, item.replaceAll(replacethis, replacewith));

      if (!preview) {
        fs.rename(oldFile, newFile, (err) => {
          if (err) console.error(`Rename failed: ${err}`);
          else console.log(`Rename successful: ${item} -> ${newFile}`);
        });
      } else {
        if (oldFile !== newFile) {
          console.log(`${oldFile} will be renamed to ${newFile}`);
        }
      }
    }
  });
} catch (err) {
  console.error(`Error: ${err}`);
}
