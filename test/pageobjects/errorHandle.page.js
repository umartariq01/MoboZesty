// utils/errorHandler.js
import fs from 'fs';

class ErrorHandler {
    /**
     * Ensures that required directories exist
     */
    static ensureDirectories() {
        const dirs = ['./error-logs', './error-screenshots'];
        dirs.forEach(dir => {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }
        });
    }

    /**
     * Handles errors by capturing screenshot and logcat logs
     * @param {Error} error - The error object thrown
     * @param {WebdriverIO.Browser} browser - The WebDriverIO browser instance
     * @param {WebdriverIO.Browser} driver - The driver object to fetch logs
     */
    static async handleCrash(error, browser, driver) {
        console.log('❌ Test failed:', error.message);

        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const screenshotPath = `./error-screenshots/crash-${timestamp}.png`;

        try {
            await browser.saveScreenshot(screenshotPath);
            console.log(`📸 Screenshot saved at: ${screenshotPath}`);
        } catch (ssErr) {
            console.log('❌ Failed to capture screenshot:', ssErr.message);
        }

        try {
            const logs = await driver.getLogs('logcat');
            const logText = logs.map(entry => `[${entry.timestamp}] ${entry.level} - ${entry.message}`).join('\n');
            const logPath = `./error-logs/crash-log-${timestamp}.txt`;
            fs.writeFileSync(logPath, logText);
            console.log(`🪵 Log saved at: ${logPath}`);
        } catch (logErr) {
            console.log('❌ Failed to capture logs:', logErr.message);
        }

        throw error; // Rethrow the original error after handling
    }
}

export default ErrorHandler;
