const path = require('path');
const extPath = path.join(__dirname, './extension');

module.exports = {
  launch: {
    dumpio: true,
    headless: false,
    args: [
      '--disable-infobars',
      `--disable-extensions-except=${extPath}`,
      `--load-extension=${extPath}`,
    ],
  },
  browser: 'chromium',
  browserContext: 'default',
};
