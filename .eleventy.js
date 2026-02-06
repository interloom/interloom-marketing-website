module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/images");

  // Tell Eleventy's dev server to watch and serve the Tailwind output
  eleventyConfig.setServerOptions({
    domDiff: false,
    watch: ["_site/css/**/*.css"]
  });

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

  // Collection for documentation
  eleventyConfig.addCollection("docs", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/docs/*.md")
      .filter(item => !item.inputPath.includes("index.md"))
      .sort((a, b) => {
        return (a.data.order || 0) - (b.data.order || 0);
      });
  });

  const config = {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };

  // Only add pathPrefix for GitHub Pages deploys
  if (process.env.PATH_PREFIX) {
    config.pathPrefix = process.env.PATH_PREFIX;
  }

  return config;
};
