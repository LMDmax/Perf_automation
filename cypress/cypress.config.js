import { defineConfig } from "cypress";
import { downloadFile } from "cypress-downloadfile/lib/addPlugin";

export default defineConfig({
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
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // register downloadFile as a Cypress task
      on('task', { downloadFile });
      return config;
    }
  }
});
