const fs = require("fs");
const path = require("path");

module.exports = function (eleventyConfig) {
    // Create a collection for events based on the 'events' tag
    eleventyConfig.addCollection("events", function (collectionApi) {
        return collectionApi.getFilteredByTag("events");
    });

    // Dynamically create collections for each EC directory in src/events
    const eventsDir = path.join(__dirname, 'src', 'events');
    try {
        const ecFolders = fs.readdirSync(eventsDir, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);

        ecFolders.forEach(folder => {
            const collectionName = `events_${folder}`;
            const tagName = folder.replace('EC', ' EC');
            eleventyConfig.addCollection(collectionName, function(collectionApi) {
                return collectionApi.getFilteredByTag(tagName);
            });
        });
    } catch (error) {
        console.error("Could not read EC directories for collections.", error);
    }


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