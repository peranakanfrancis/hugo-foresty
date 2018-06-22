// Configures gulp build
// See gulpfile.babel.js for build pipeline
const { resolve } = require("path")
const hugo = require("hugo-bin")

module.exports = function(env) {
  return {
    generator: {
      label: "Hugo",
      command: hugo,
      args: {
        default: [
          "-v",
          "--themeDir",
          resolve("site/themes"),
          "--config",
          resolve("site/config.toml"),
          "--contentDir",
          resolve("site/content"),
          "--source",
          resolve("site/"),
          "--destination",
          resolve("dist/"),
          "--theme",
          resolve("hugo-elate-theme"),
        ],
        development: [
          "-b",
          "--cleanDestinationDir"
          "http://localhost:3000",
          "--buildDrafts",
          "--buildFuture",
          "--buildExpired",
        ],
        preview: ["-b", "http://localhost:3000"],
        production: [],
      },
    },
  }
}
