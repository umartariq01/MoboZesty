// // import createSession from './test/pageobjects/createsession.js'; // Update the path as needed
// // const createSession = require('./test/pageobjects/createsession');
// import createSession from './createsession.js';



// (async () => {
//     try {
//         console.log('Starting session...');
//         const client = await createSession();

//         if (client) {
//             console.log('Session created successfully!');
//         }

//         // Perform any verification or action on the opened app
//         console.log('Waiting for 10 seconds to observe the app...');
//         await client.pause(10000); // Wait for 10 seconds

//         console.log('Closing session...');
//         await client.deleteSession();
//         console.log('Session closed.');
//     } catch (error) {
//         console.error('Error during session test:', error);
//     }
// })();
