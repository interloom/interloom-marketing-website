const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

const slugify = (s) =>
  s.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();

module.exports = function(eleventyConfig) {

  // Markdown with heading anchors (clean slugs, no special chars)
  const md = markdownIt({ html: true })
    .use(markdownItAnchor, { permalink: false, slugify });
  eleventyConfig.setLibrary("md", md);

  // Filter to extract h2 headings from rendered content for TOC
  eleventyConfig.addFilter("toc", (content) => {
    const matches = [...(content || "").matchAll(/<h2[^>]*id="([^"]*)"[^>]*>(.*?)<\/h2>/gi)];
    return matches.map(m => ({
      id: m[1],
      text: m[2].replace(/<[^>]+>/g, "")
    }));
  });
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

  // Short month + year filter (e.g., "Jan 2025")
  eleventyConfig.addFilter("monthYear", (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
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
