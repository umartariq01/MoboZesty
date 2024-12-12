// const { remote } = require('webdriverio');
import { remote } from 'webdriverio';
import Browse from '../pageobjects/scroll.page.js'

describe('Scroll Up Test', function () {
    let driver;

    before(async function () {
        driver = await remote({
            logLevel: 'info',
            path: '/wd/hub',
            capabilities: {
                platformName: 'Android',
                deviceName: 'Galaxy Note10', // Replace with your device name
                appPackage: 'com.myzesty', // Replace with your app package
                appActivity: 'com.myzesty.MainActivity', // Replace with your app activity
                automationName: 'UiAutomator2'
            }
        });
    });

    it('should scroll up', async function () {

        await  Browse.run_browse(); 
        const windowSize = await driver.getWindowRect();
        const { width, height } = windowSize;

        await driver.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: width / 2, y: height * 0.8 },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 500 },
                    { type: 'pointerMove', duration: 1000, origin: 'pointer', x: 0, y: -height * 0.6 },
                    { type: 'pointerUp', button: 0 }
                ]
            }
        ]);

        // Pause to see the effect
        await driver.pause(1000);
    });

    after(async function () {
        console.log("Session terminated")
        // await driver.deleteSession();
    });
});
