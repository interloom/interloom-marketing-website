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

  // Normalize imported Webflow rich text blocks to semantic HTML.
  // - Converts YouTube thumbnail figures into real iframe embeds
  // - Unwraps Webflow image wrapper markup for cleaner styling hooks
  eleventyConfig.addFilter("normalizeImportedRichText", (content) => {
    if (!content) return content;
    let out = content;

    const toYouTubeEmbed = (href) => {
      const watch = href.match(/youtube\.com\/watch\?v=([^&#]+)/i);
      if (watch) return `https://www.youtube.com/embed/${watch[1]}`;
      const short = href.match(/youtu\.be\/([^?&#/]+)/i);
      if (short) return `https://www.youtube.com/embed/${short[1]}`;
      return null;
    };

    // Convert Webflow image figures to simple figures
    out = out.replace(
      /<figure[^>]*w-richtext-figure-type-image[^>]*>\s*<div>\s*(<img\b[^>]*>)\s*<\/div>\s*<\/figure>/gi,
      '<figure class="article-figure">$1</figure>'
    );

    // Convert linked image figures; embed YouTube links as iframe.
    out = out.replace(
      /<figure[^>]*w-richtext-figure-type-image[^>]*>\s*<a[^>]*href="([^"]+)"[^>]*>\s*<div>\s*(<img\b[^>]*>)\s*<\/div>\s*<\/a>\s*<\/figure>/gi,
      (_, href, imgTag) => {
        const embedUrl = toYouTubeEmbed(href);
        if (embedUrl) {
          return `<div class="video-embed"><iframe src="${embedUrl}" title="YouTube video player" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`;
        }
        return `<figure class="article-figure"><a href="${href}" target="_blank" rel="noopener noreferrer">${imgTag}</a></figure>`;
      }
    );

    return out;
  });
  // Copy static assets
  eleventyConfig.addPassthroughCopy({
    "src/images": "images",
    "src/videos": "videos",
    "src/css/main.generated.css": "css/main.generated.css"
  });

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

  // Collection for customer stories
  eleventyConfig.addCollection("customerStories", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/customer-stories/*.md")
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
