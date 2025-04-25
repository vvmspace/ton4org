const config = {
    testDir: './tests',
    timeout: 30000,
    retries: 2,
    workers: 1,
    use: {
        baseURL: 'http://localhost:1313',
        headless: true,
        viewport: { width: 1280, height: 720 },
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
    projects: [
        {
            name: 'Chromium',
            use: { browserName: 'chromium' },
        },
        {
            name: 'Firefox',
            use: { browserName: 'firefox' },
        },
        {
            name: 'WebKit',
            use: { browserName: 'webkit' },
        },
    ],
};

module.exports = config; 