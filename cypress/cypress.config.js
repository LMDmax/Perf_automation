const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'j7i5bp',
  e2e: {
    baseUrl: 'https://staging.performance.lmdmax.com/',
    downloadsFolder: "cypress/downloads",
    experimentalStudio: true,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: false,
      json: true
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
});
