class Sliders
{

    async Slider(driver, startX, endX, startY, endY, desiredPercentage) {
        // Validate percentage is between 0 and 1
        if (desiredPercentage < 0 || desiredPercentage > 1) {
            throw new Error('desiredPercentage must be between 0 and 1.');
        }
    
        // Calculate centerY based on startY and endY
        const centerY = Math.floor((startY + endY) / 2);
    
        // Calculate target position for the desired percentage
        const targetX = Math.floor(startX + (endX - startX) * desiredPercentage);
    
        console.log(`Sliding from ${startX}, ${centerY} to ${targetX}, ${centerY}`);
    
        // Perform sliding action
        await driver.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: startX, y: centerY }, // Start at slider
                    { type: 'pointerDown', button: 0 }, // Press down
                    { type: 'pointerMove', duration: 500, x: targetX, y: centerY }, // Slide to target
                    { type: 'pointerUp', button: 0 } // Release
                ]
            }
        ]);
    
        console.log(`Slider moved to ${desiredPercentage * 100}% position.`);
    }



    async Drag_Drop(driver, dragX, dragY, dropX, dropY) {
        try {
    
            await driver.performActions([
                {
                    type: 'pointer',
                    id: 'finger1',
                    parameters: { pointerType: 'touch' },
                    actions: [
                        { type: 'pointerMove', duration: 1000, x: dragX, y: dragY },
                        { type: 'pointerDown', button: 0 },
                        { type: 'pause', duration: 500 },
                        { type: 'pointerMove', duration: 500, x: dropX, y: dropY },
                        { type: 'pointerUp', button: 0 }
                    ]
                }
            ]);
    
            console.log(`Drag and drop completed.`);
        } catch (error) {
            console.error('Error during drag and drop:', error);
        }
    }


    async scrollScreen(startX, startY, endX, endY, duration = 1000) {
            await browser.performActions([{
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: startX, y: startY }, // Move to the start position
                    { type: 'pointerDown', button: 0 }, // Press down
                    { type: 'pointerMove', duration: duration, x: endX, y: endY }, // Move to the end position over the specified duration
                    { type: 'pointerUp', button: 0 } // Release
                ]
            }]);
            await browser.releaseActions();
        }
   

    async Single_slide(startX, endX, y, duration = 300) {
            // Horizontal swipe: startX -> endX at a fixed vertical position (y)
            await browser.performActions([{
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: startX, y: y }, // Move to the starting horizontal position
                    { type: 'pointerDown', button: 0 }, // Press down
                    { type: 'pointerMove', duration: duration, x: endX, y: y }, // Slide horizontally to the end position
                    { type: 'pointerUp', button: 0 } // Release
                ]
            }]);
            await browser.releaseActions();
        }


    async zoomin(startX1, startY1, startX2, startY2, endX1, endY1, endX2, endY2, repetitions = 2) {
                console.log('Zoom-in Start Coordinates:', { startX1, startY1, startX2, startY2 });
                console.log('Zoom-in End Coordinates:', { endX1, endY1, endX2, endY2 });
                console.log(`Number of repetitions: ${repetitions}`);
            
                for (let i = 0; i < repetitions; i++) {
                    console.log(`Performing zoom-in gesture ${i + 1} of ${repetitions}`);
                    
                    await browser.performActions([
                        {
                            type: 'pointer',
                            id: 'finger1',
                            parameters: { pointerType: 'touch' },
                            actions: [
                                { type: 'pointerMove', duration: 0, x: startX1, y: startY1 }, // Initial position of finger 1
                                { type: 'pointerDown' }, // Press finger 1
                                { type: 'pause', duration: 0 }, // Pause for a short time
                                { type: 'pointerMove', duration: 500, x: endX1, y: endY1 }, // Move finger 1 outward
                                { type: 'pointerUp' } // Release finger 1
                            ]
                        },
                        {
                            type: 'pointer',
                            id: 'finger2',
                            parameters: { pointerType: 'touch' },
                            actions: [
                                { type: 'pointerMove', duration: 0, x: startX2, y: startY2 }, // Initial position of finger 2
                                { type: 'pointerDown' }, // Press finger 2
                                { type: 'pause', duration: 0 }, // Pause for a short time
                                { type: 'pointerMove', duration: 500, x: endX2, y: endY2 }, // Move finger 2 outward
                                { type: 'pointerUp' } // Release finger 2
                            ]
                        }
                    ]);
            
                    // Optional: Pause briefly between repetitions
                    await browser.pause(500);
                }
            
                console.log('Zoom-in gesture performed successfully for all repetitions.');
        }


    async zoomout(startX1, startY1, startX2, startY2, endX1, endY1, endX2, endY2, repetitions = 2) {
                    console.log('Zoom-in Start Coordinates:', { startX1, startY1, startX2, startY2 });
                    console.log('Zoom-in End Coordinates:', { endX1, endY1, endX2, endY2 });
                    console.log(`Number of repetitions: ${repetitions}`);
                
                    for (let i = 0; i < repetitions; i++) {
                        console.log(`Performing zoom-in gesture ${i + 1} of ${repetitions}`);
                        
                        await browser.performActions([
                            {
                                type: 'pointer',
                                id: 'finger1',
                                parameters: { pointerType: 'touch' },
                                actions: [
                                    { type: 'pointerMove', duration: 0, x: startX1, y: startY1 }, // Initial position of finger 1
                                    { type: 'pointerDown' }, // Press finger 1
                                    // { type: 'pause', duration: 0 }, // Pause for a short time
                                    { type: 'pointerMove', duration: 500, x: endX1, y: endY1 }, // Move finger 1 outward
                                    { type: 'pointerUp' } // Release finger 1
                                ]
                            },
                            {
                                type: 'pointer',
                                id: 'finger2',
                                parameters: { pointerType: 'touch' },
                                actions: [
                                    { type: 'pointerMove', duration: 0, x: startX2, y: startY2 }, // Initial position of finger 2
                                    { type: 'pointerDown' }, // Press finger 2
                                    // { type: 'pause', duration: 0 }, // Pause for a short time
                                    { type: 'pointerMove', duration: 500, x: endX2, y: endY2 }, // Move finger 2 outward
                                    { type: 'pointerUp' } // Release finger 2
                                ]
                            }
                        ]);
                
                        // Optional: Pause briefly between repetitions
                        await browser.pause(1000);
                    }
                
                    console.log('Zoom-in gesture performed successfully for all repetitions.');
        }

        get text_expander()
            {
                return $('//android.view.ViewGroup[@resource-id="com.myzesty:id/range_slider"]/android.view.View[2]');
            }

    async dragSliderWithBounds(sliderXpath, dragDistance, sliderBounds) {
                // Locate the slider element using XPath
                const sliderElement = await $(sliderXpath);
                await sliderElement.waitForDisplayed({ timeout: 5000 });
              
                let currentBounds = sliderBounds; // Initialize bounds
                let currentX = (await sliderElement.getLocation()).x; // Start X position of the slider
                const startY = (await sliderElement.getLocation()).y; // Y-coordinate remains constant
              
                // Perform the drag action two times
                for (let i = 0; i < 2; i++) {
                  // Get the current boundaries dynamically
                  const [minX, maxX] = currentBounds;
              
                  // Calculate the endX for the current drag and ensure it stays within bounds
                  let endX = currentX + dragDistance;
                  if (endX > maxX) {
                    endX = maxX; // Cap the drag to the maximum X bound
                  } else if (endX < minX) {
                    endX = minX; // Cap the drag to the minimum X bound
                  }
                  const endY = startY; // Y-coordinate remains the same for horizontal dragging
              
                  console.log(`Dragging ${i + 1}: from (${currentX}, ${startY}) to (${endX}, ${endY}) within bounds [${minX}, ${maxX}]`);
              
                  // Perform the drag action using the W3C Actions API
                  await driver.performActions([
                    {
                      type: 'pointer',
                      id: 'finger1',
                      parameters: { pointerType: 'touch' },
                      actions: [
                        { type: 'pointerMove', duration: 0, x: currentX, y: startY }, // Move to the start position
                        { type: 'pointerDown', button: 0 }, // Press down
                        { type: 'pause', duration: 200 }, // Wait for 200 ms
                        { type: 'pointerMove', duration: 500, x: endX, y: endY }, // Drag to the end position
                        { type: 'pointerUp', button: 0 }, // Release
                      ],
                    },
                  ]);
              
                  console.log(`Drag ${i + 1} action completed successfully!`);
              
                  // Update currentX to the new position for the next drag
                  currentX = endX;
              
                  // Fetch new bounds dynamically after the first drag
                  if (i === 0) {
                    const newBounds = await sliderElement.getAttribute('bounds'); // Adjust according to how you fetch bounds in your app
                    const boundsArray = newBounds.match(/\d+/g).map(Number); // Parse bounds into [minX, maxX]
                    currentBounds = [boundsArray[0], boundsArray[2]]; // Extract minX and maxX
                    console.log(`Updated slider bounds: [${currentBounds[0]}, ${currentBounds[1]}]`);
                  }
              
                  // Break the loop if the slider reaches the maximum boundary
                  if (currentX >= currentBounds[1]) {
                    console.log('Slider reached the maximum boundary.');
                    break;
                  }
                }
              }


    async Sound_slide(driver, desiredPercentage, startX, endX, startY, endY) {
                // Validate percentage is between 0 and 1
                if (desiredPercentage < 0 || desiredPercentage > 1) {
                    throw new Error('desiredPercentage must be between 0 and 1.');
                }
            
                // Validate boundaries
                if (startX >= endX || startY >= endY) {
                    throw new Error('Invalid boundaries: Ensure startX < endX and startY < endY.');
                }
            
                // Calculate vertical center
                const centerY = Math.floor((startY + endY) / 2);
            
                // Calculate target position
                const targetX = Math.floor(startX + (endX - startX) * desiredPercentage);
            
                console.log(`Sliding from ${startX}, ${centerY} to ${targetX}, ${centerY}`);
            
                // Perform sliding action
                await driver.performActions([
                    {
                        type: 'pointer',
                        id: 'finger1',
                        parameters: { pointerType: 'touch' },
                        actions: [
                            { type: 'pointerMove', duration: 0, x: startX, y: centerY }, // Start at slider
                            { type: 'pointerDown', button: 0 }, // Press down
                            { type: 'pointerMove', duration: 500, x: targetX, y: centerY }, // Slide to target
                            { type: 'pointerUp', button: 0 } // Release
                        ]
                    }
                ]);
            
                console.log(`Slider moved to ${desiredPercentage * 100}% position.`);
            }
            
            // Example usage
            // await Sound_slide(driver, 0.5, 124, 929, 1669, 1779);
            
              


              
        
}

export default new Sliders();