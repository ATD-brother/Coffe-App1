// karma.conf.js
module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
  
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('@angular-devkit/build-angular/plugins/karma')
      ],
  
      client: {
        clearContext: false // leave Jasmine Spec Runner output visible in browser
      },
  
      jasmineHtmlReporter: {
        suppressAll: true // Suppresses all Jasmine html reporter output
      },
  
      coverageIstanbulReporter: {
        dir: require('path').join(__dirname, './coverage/vini-coffee'),
        reports: ['html', 'lcovonly', 'text-summary'],
        fixWebpackSourcePaths: true
      },
  
      reporters: ['progress'],
  
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['ChromeHeadless'],
      singleRun: true, 
      restartOnFileChange: true
    });
  };
  