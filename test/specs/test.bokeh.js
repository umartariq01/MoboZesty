// import Verify_Bokeh_templet from '../pageobjects/Bokeh.page.js' ;

// describe('Bokeh', () => {


//     it('should login with valid credentials', async () => {


//         await Verify_Bokeh_templet.Run_Bokeh_temp();
        

//     })
// })

import Verify_Bokeh_templet from '../pageobjects/Bokeh.page.js'; // import your page object
import assert from 'assert';  // assert to make sure we can handle tests

describe('Bokeh Template Flow', () => {

    it('should complete Bokeh template flow', async () => {
        const steps = [
            { name: 'Run Bokeh Template', fn: async () => await Verify_Bokeh_templet.Run_Bokeh_temp() }
        ];

        // Iterate through each step
        for (const step of steps) {
            try {
                console.log(`Starting: ${step.name}`);
                await step.fn(); // Run the function
                console.log(`✅ Passed: ${step.name}`);
            } catch (err) {
                console.error(`❌ Failed: ${step.name}`);
                console.error(err); // Log the error
                throw err; // Stop the test and mark it as failed
            }
        }
    });
});
