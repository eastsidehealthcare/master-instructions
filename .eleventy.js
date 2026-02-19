module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Watch for changes in assets
  eleventyConfig.addWatchTarget("src/assets/");

  // Add a readable date filter
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // Add ISO date filter for sitemap
  eleventyConfig.addFilter("date", (dateObj) => {
    const d = new Date(dateObj);
    return d.toISOString().split('T')[0];
  });

  // Add year shortcode for copyright
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html", "txt"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
