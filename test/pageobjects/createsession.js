// const { remote } = require('webdriverio');
import { remote } from 'webdriverio';

// Define your desired capabilities with vendor prefixes
const capabilities = {
    platformName: 'Android',
    'appium:platformVersion': '12',
    'appium:deviceName': 'Galaxy Note10',
    'appium:appPackage': 'com.myzesty',
    'appium:appActivity': 'com.myzesty.MainActivity',
    'appium:automationName': 'UiAutomator2',
    'appium:noReset': true,
    'appium:fullReset': false,
    'appium:autoLaunch': true
};

async function createSession() {
    try {
        // Create a session with WebdriverIO
        const client = await remote({
            hostname: '127.0.0.1',
            port: 4723,
            path: '/',
            capabilities: capabilities,
            logLevel: 'info'
        });

        return client; // Return the WebdriverIO client instance
    } catch (error) {
        console.error('Error creating session:', error);
        throw error; // Rethrow to handle it in main
    }
}

// module.exports = createSession()
export default createSession;
