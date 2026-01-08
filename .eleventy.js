module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  // Date formatting filter
  eleventyConfig.addFilter("dateFormat", (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // Collection for blog posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md")
      .filter(item => !item.inputPath.includes("index.md"))
      .sort((a, b) => {
        return b.date - a.date;
      });
  });

  // Collection for release notes
  eleventyConfig.addCollection("releases", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/releases/*.md")
      .filter(item => !item.inputPath.includes("index.md"))
      .sort((a, b) => {
        return b.date - a.date;
      });
  });

  // Collection for pitches
  eleventyConfig.addCollection("pitches", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/pitches/*.md")
      .filter(item => !item.inputPath.includes("index.md"))
      .sort((a, b) => {
        return b.date - a.date;
      });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    pathPrefix: "/interloom-website-3/"
  };
};
