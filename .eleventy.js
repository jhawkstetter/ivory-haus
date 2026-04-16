module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("main.js");
  eleventyConfig.addPassthroughCopy("marble-bg.jpg");
  eleventyConfig.addPassthroughCopy("dr-cohlmia.jpg");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("uploads");

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_includes",
      data: "_data"
    },
    templateFormats: ["njk"],
    htmlTemplateEngine: "njk"
  };
};
