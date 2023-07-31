const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
    prodUrl:"https://www.mytheresa.com/de/en/men",
    stageUrl:"https://staging.mytheresa.com/de/en/men",
    testUrl:"https://test.mytheresa.com/de/en/men",
    localUrl:"https://local.mytheresa.com/de/en/men"

  },
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
