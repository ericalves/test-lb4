const application = require('@loopback/dist-util').loadDist(__dirname);
// const path = require('path');
// const application = require(path.join(__dirname, 'compiled'));

// console.log('div >', path.join(__dirname, 'compiled'));

module.exports = application;

if (require.main === module) {
  // Run the application
  application.main().catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
