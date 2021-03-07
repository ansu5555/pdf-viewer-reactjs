exports.config = {
  runner: 'local',

  specs: ['./test/specs/**/*.js'],

  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 5,

      browserName: 'chrome',
      acceptInsecureCerts: true,
    },
  ],
  logLevel: 'warn', // Level of logging verbosity: trace | debug | info | warn | error | silent
  bail: 0,
  baseUrl: 'http://localhost:5000',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['chromedriver'],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
}
