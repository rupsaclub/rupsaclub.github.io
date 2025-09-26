module.exports = function (eleventyConfig) {
    // Create a collection for events based on the 'events' tag
    eleventyConfig.addCollection("events", function (collectionApi) {
        return collectionApi.getFilteredByTag("events");
    });

    eleventyConfig.addCollection("events_2ndEC", function (collectionApi) {
        return collectionApi.getFilteredByTag("2nd EC");
    });

    eleventyConfig.addCollection("events_3rdEC", function (collectionApi) {
        return collectionApi.getFilteredByTag("3rd EC");
    });

    eleventyConfig.addCollection("events_4thEC", function (collectionApi) {
        return collectionApi.getFilteredByTag("4th EC");
    });

    // Passthrough copy for static assets
    eleventyConfig.addPassthroughCopy("src/css/");
    eleventyConfig.addPassthroughCopy("src/contents/");
    eleventyConfig.addPassthroughCopy("src/events/**/*.jpg");
    eleventyConfig.addPassthroughCopy("src/events/**/*.png");
    eleventyConfig.addPassthroughCopy("src/events/**/*.avif");
    eleventyConfig.addPassthroughCopy("src/committee/");

    // Return configuration options
    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "site"
        },
        templateFormats: ["njk", "md", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk"
    };
};