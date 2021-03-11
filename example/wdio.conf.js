exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  runner: 'local',
  specs: ['./test/specs/**/*.js'],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      'bstack:options': {
        projectName: 'PDF-Viewer-reactjs example test',
        os: 'Windows',
      },
      browserVersion: 'latest',
      acceptInsecureCerts: true,
      browserName: 'firefox',
    },
    {
      'bstack:options': {
        projectName: 'PDF-Viewer-reactjs example test',
        os: 'Windows',
      },
      browserVersion: 'latest',
      acceptInsecureCerts: true,
      browserName: 'edge',
    },
    {
      'bstack:options': {
        projectName: 'PDF-Viewer-reactjs example test',
        os: 'OS X',
      },
      browserVersion: 'latest',
      acceptInsecureCerts: true,
      browserName: 'chrome',
    },
    {
      'bstack:options': {
        projectName: 'PDF-Viewer-reactjs example test',
        os: 'OS X',
      },
      browserVersion: 'latest',
      acceptInsecureCerts: true,
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
