import Image_Editor from '../pageobjects/Imgeditor.page.js';
import ErrorHandler from '../pageobjects/errorHandle.page.js';

describe('Image Editor', () => {

  before(() =>{
    
   ErrorHandler.ensureDirectories();

  });


    it('It should validate Presets', async () => {
    
      try
      {
        await Image_Editor.Verify_Photo_Presets();
        console.log('✅ Test Passed: Verify Photo Editor Presets');
      }
      catch (error)
      {

        await ErrorHandler.handleCrash(error, browser, driver) ;
        throw error;
        // console.log('❌ Test Failed: Verify Photo Editor Presets');
        // throw error;
      }
      });

    // ===================================================================

    it('It should validate Custom Tool', async () => {
  
      try
      {
        await Image_Editor.Verify_Photo_Custom();
        console.log('✅ Test Passed: Verify Photo Editor Custom Tool.');
      }
      catch (error)
      {
        await ErrorHandler.handleCrash(error, browser, driver) ;
        throw error;
        // console.log('❌ Test Failed: Verify Photo Editor Custom Tool.');
        // throw error;
      }
      }); 

    // ====================================================================
      
    it('It should validate Magic Tool', async () => {

      try
      {
        await Image_Editor.Verify_Photo_Magic();
        console.log('✅ Test Passed: Verify Photo Editor Magic Tool.');
      }
      catch (error)
      {
        await ErrorHandler.handleCrash(error, browser, driver) ;
        throw error;
        // console.log('❌ Test Failed: Verify Photo Editor Magic Tool.');
        // throw error;
      }
      }); 

    // ====================================================================

    it('It should validate Tune Tool', async () => {
      try
      {
        await Image_Editor.Verify_Photo_Tune();
        console.log('✅ Test Passed: Verify Photo Editor Tune Tool.');
      }
      catch (error)
      {
        await ErrorHandler.handleCrash(error, browser, driver) ;
        throw error;
        // console.log('❌ Test Failed: Verify Photo Editor Tune Tool.');
        // throw error;
      }
      }); 

    // ====================================================================

    it('It should validate Color Tool', async () => {
      try
      {
        await Image_Editor.Verify_Photo_Color();
        console.log('✅ Test Passed: Verify Photo Editor Color Tool.');
      }
      catch (error)
      {
        await ErrorHandler.handleCrash(error, browser, driver) ;
        throw error;
        // console.log('❌ Test Failed: Verify Photo Editor Color Tool.');
        // throw error;
      }
      });
    
    // ====================================================================

    it('It should validate Crop Tool', async () => {
      try
      {
        await Image_Editor.Verify_Photo_Crop();
        console.log('✅ Test Passed: Verify Photo Editor Crop Tool.');
      }
      catch (error)
      {
        await ErrorHandler.handleCrash(error, browser, driver) ;
        throw error;
        // console.log('❌ Test Failed: Verify Photo Editor Crop Tool.');
        // throw error;
      }
      });

    // ====================================================================

    it('It should validate Neon Tool', async () => {
      try
      {
        await Image_Editor.Verify_Photo_Neon();
        console.log('✅ Test Passed: Verify Photo Editor Neon Tool.');
      }
      catch (error)
      {
        await ErrorHandler.handleCrash(error, browser, driver) ;
        throw error;
        // console.log('❌ Test Failed: Verify Photo Editor Neon Tool.');
        // throw error;
      }
      });

    // ====================================================================

  it('It should validate Fade Tool', async () => {
      try
      {
        await Image_Editor.Verify_Photo_Fade();
        console.log('✅ Test Passed: Verify Photo Editor Fade Tool.');
      }
      catch (error)
      {
        await ErrorHandler.handleCrash(error, browser, driver) ;
        throw error;
        // console.log('❌ Test Failed: Verify Photo Editor Fade Tool.');
        // throw error;
      }
      });

    //====================================================================

  it('It should validate Sticker Tool', async () => {
      try
      {
        await Image_Editor.Verify_Photo_Sticker();
        console.log('✅ Test Passed: Verify Photo Editor Sticker Tool.');
      }
      catch (error)
      {
        await ErrorHandler.handleCrash(error, browser, driver) ;
        throw error;
        // console.log('❌ Test Failed: Verify Photo Editor Sticker Tool.');
        // throw error;
      }
      });

    // ===================================================================

  it('It should validate Text Tool', async () => {
      try
      {
        await Image_Editor.Verify_Photo_Text();
        console.log('✅ Test Passed: Verify Photo Editor Text Tool.');
      }
      catch (error)
      {
        await ErrorHandler.handleCrash(error, browser, driver) ;
        throw error;
        // console.log('❌ Test Failed: Verify Photo Editor Text Tool.');
        // throw error;
      }
      });

    // ===================================================================

  it('It should validate Draw Tool', async () => {
      try
      {
        await Image_Editor.Verify_Photo_Draw();
        console.log('✅ Test Passed: Verify Photo Editor Draw Tool.');
      }
      catch (error)
      {
        await ErrorHandler.handleCrash(error, browser, driver) ;
        throw error;
        // console.log('❌ Test Failed: Verify Photo Editor Draw Tool.');
        // throw error;
      }
      });

  // ===================================================================== 

  it('It should validate Flip Tool', async () => {
      try
      {
        await Image_Editor.Verify_Photo_Flip();
        console.log('✅ Test Passed: Verify Photo Editor Flip Tool.');
      }
      catch (error)
      {
        await ErrorHandler.handleCrash(error, browser, driver) ;
        throw error;
        // console.log('❌ Test Failed: Verify Photo Editor Flip Tool.');
        // throw error;
      }
      });

  // =====================================================================

  it('It should validate Blur Tool', async () => {
      try
      {
        await Image_Editor.Verify_Photo_Blur();
        console.log('✅ Test Passed: Verify Photo Editor Blur Tool.');
      }
      catch (error)
      {
        await ErrorHandler.handleCrash(error, browser, driver) ;
        throw error;
        // console.log('❌ Test Failed: Verify Photo Editor Blur Tool.');
        // throw error;
      }
      });

  // =====================================================================

  it('It should validate Overlay Tool', async () => {
      try
      {
        await Image_Editor.Verify_Photo_Overlay();
        console.log('✅ Test Passed: Verify Photo Editor Overlay Tool.');
      }
      catch (error)
      {
        await ErrorHandler.handleCrash(error, browser, driver) ;
        throw error;
        // console.log('❌ Test Failed: Verify Photo Editor Overlay Tool.');
        // throw error;
      }
      });

  // ====================================================================

  it('It should validate Blend Tool', async () => {
      try
      {
        await Image_Editor.Verify_Photo_Blend();
        console.log('✅ Test Passed: Verify Photo Editor Blend Tool.');
      }
      catch (error)
      {
        await ErrorHandler.handleCrash(error, browser, driver) ;
        throw error;
        // console.log('❌ Test Failed: Verify Photo Editor Blend Tool.');
        // throw error;
      }
      });

  // ===================================================================

  it('It should validate White Balance Tool', async () => {
      try
      {
        await Image_Editor.Verify_Photo_White_Balance();
        console.log('✅ Test Passed: Verify Photo Editor White Balance Tool.');
      }
      catch (error)
      {
        await ErrorHandler.handleCrash(error, browser, driver) ;
        throw error;
        // console.log('❌ Test Failed: Verify Photo Editor White Balance Tool.');
        // throw error;
      }
      });

  // ===================================================================

  it('It should validate White Curves Tool', async () => {
      try
      {
        await Image_Editor.Verify_Photo_Curves();
        console.log('✅ Test Passed: Verify Photo Editor Curves Tool.');
      }
      catch (error)
      {
        await ErrorHandler.handleCrash(error, browser, driver) ;
        throw error;
        // console.log('❌ Test Failed: Verify Photo Editor Curves Tool.');
        // throw error;
      }
      });

  //  ==================================================================

  it('It should validate White Vintage Tool', async () => {
      try
      {
        await Image_Editor.Verify_Photo_Vintage();
        console.log('✅ Test Passed: Verify Photo Editor Vintage Tool.');
      }
      catch (error)
      {
        await ErrorHandler.handleCrash(error, browser, driver) ;
        throw error;
        // console.log('❌ Test Failed: Verify Photo Editor Vintage Tool.');
        // throw error;
      }
      });

  // ===================================================================

  it('It should validate White Fisheye Tool', async () => {
      try
      {
        await Image_Editor.Verify_Photo_Fisheye();
        console.log('✅ Test Passed: Verify Photo Editor Fisheye Tool.');
      }
      catch (error)
      {
        await ErrorHandler.handleCrash(error, browser, driver) ;
        throw error;
        // console.log('❌ Test Failed: Verify Photo Editor Fisheye Tool.');
        // throw error;
      }
      });

});