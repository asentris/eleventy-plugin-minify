const filesMinifier = require("./src/files-minifier");

module.exports = (eleventyConfig, options = {}) => {
  eleventyConfig.addTransform("files-minifier", (content, outputPath) => {
    return filesMinifier(content, outputPath, options);
  });
};
