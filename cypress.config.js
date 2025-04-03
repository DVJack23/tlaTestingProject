const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  watchForFileChanges: false,
  e2e: {
    baseUrl: 'https://ud-fe-1242.k8stage.ulovdomov.cz/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});