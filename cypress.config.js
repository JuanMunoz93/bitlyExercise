const { defineConfig } = require("cypress");
const { rmdir, readdirSync } = require('fs')

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: 'https://www.qrcode-monkey.com/',
    specPattern: "**/*.feature",

    env:{
      refreshPageTime:15000,
      readFileTimeout:20000,
      validQRFormats:["png","svg","pdf","eps"],
      settingAccordions:["content","colors","logo","shape"],
      contentTabs:["url","text","email","phone","sms","vcard","mecard","maps","facebook","twitter","youtube","wifi","event","bitcoin"]
    },

    // prefix async
    async setupNodeEvents(on, config) {
      const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
      const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')


      await require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin(on, config)

      on('file:preprocessor',   createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));

      on('task', {
        deleteFolder(folderName) {
          console.log('deleting folder %s', folderName);
    
          return new Promise((resolve, reject) => {
            rmdir(folderName, { maxRetries: 10, recursive: true }, (err) => {
              if (err) {
                console.error(err)
              }
              resolve(null)
            })
          })
        },


      })
      // return any mods to Cypress
      return config
    }
  },
});
