// Plugins
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  // OPT-OUT OF USING .gitignore to prevent reload issue when css change
  eleventyConfig.setUseGitIgnore(false);

  // Merge data instead of overriding
  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);

  // Filters
  eleventyConfig.addFilter("slice", require("./src/_filters/slice.js"));
  eleventyConfig.addFilter("slugify", require("./src/_filters/slugify.js"));
  eleventyConfig.addFilter("htmlDate", require("./src/_filters/html-date.js"));
  eleventyConfig.addFilter("formatDate", require("./src/_filters/format-date.js"));
  eleventyConfig.addFilter("jsmin", require("./src/_filters/minify-js.js"));

  // Running only in prod
  if (process.env.ELEVENTY_ENV == "production") {
    eleventyConfig.addTransform(
      "htmlmin",
      require("./src/_filters/minify-html.js")
    );
  }

  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);

  // Static assets to pass through
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "dist",
    },
    passthroughFileCopy: true,
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
