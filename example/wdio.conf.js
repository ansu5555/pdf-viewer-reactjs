exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  runner: 'local',
  specs: ['./test/specs/**/*.js'],
  exclude: [],
  maxInstances: 10,
  commonCapabilities: {
    'bstack:options': {
      projectName: 'PDF-Viewer-reactjs example test',
    },
    browserVersion: 'latest',
    acceptInsecureCerts: true,
  },
  capabilities: [
    {
      'bstack:options': {
        os: 'Windows',
      },
      browserName: 'firefox',
    },
    {
      'bstack:options': {
        os: 'Windows',
      },
      browserName: 'edge',
    },
    {
      'bstack:options': {
        os: 'OS X',
      },
      browserName: 'chrome',
    },
    {
      'bstack:options': {
        os: 'OS X',
      },
      browserName: 'safari',
    },
  ],
  logLevel: 'warn', // Level of logging verbosity: trace | debug | info | warn | error | silent
  coloredLogs: true,
  bail: 0,
  baseUrl: 'http://localhost:3000',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [['browserstack', { browserstackLocal: true }]],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
}
