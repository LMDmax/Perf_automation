const { defineConfig } = require("cypress");
module.exports = defineConfig({
  projectId: 'j7i5bp',
  e2e: {
    baseUrl: 'https://staging.performance.lmdmax.com/',
    downloadsFolder: "cypress/downloads", // Specify the downloads folder
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true,  //enable cypress studio
  },
});
