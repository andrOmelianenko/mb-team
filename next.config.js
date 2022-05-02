const { join } = require("path");

module.exports = {
  // others ...
  sassOptions: {
    includePaths: [join(__dirname, "src/styles/theme")],
  },
};
