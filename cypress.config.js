import { defineConfig } from 'cypress';
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
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // register downloadFile as a task instead of calling it directly
      // const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')
      on('task', { downloadFile });
      return config;
    },
  },
});
