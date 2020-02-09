// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
      jasmine: {
        random: false
      }
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/FC-angular'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};

// var ReportportalAgent = require('agent-js-jasmine');

// var agent = new ReportportalAgent({
//     // client settings
//     token: "",
//     endpoint: "",
//     launch: "",
//     project: "",
//     // agent settings
//     attachPicturesToLogs: true,
//     attributes: [
//         {
//             "key": "YourKey",
//             "value": "YourValue"
//         },
//         {
//             "value": "YourValue"
//         },
//     ]
// });

// jasmine.addReporter(agent.getJasmineReporter());

// agent.getExitPromise().then(() => {
//   console.log('finish work');
// })

// rpClient.checkConnect().then((response) => {
//   console.log('You have successfully connected to the server.');
//   console.log(`You are using an account: ${response.fullName}`);
// }, (error) => {
//   console.log('Error connection to server');
//   console.dir(error);
// });