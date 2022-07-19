const { join } = require('path');
const { withGlobalCss } = require('next-global-css');

// temp. workaround 
// (https://github.com/vercel/next.js/discussions/27953#discussioncomment-2186310)
const withConfig = withGlobalCss();

module.exports = withConfig({
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  sassOptions: {
    includePaths: [join(__dirname, 'src/styles')],
  },

});
