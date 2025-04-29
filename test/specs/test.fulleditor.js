import Full_Editor from '../pageobjects/fulleditor.page.js';

describe('Full editor', () => {

    it('Should select images and video', async () => {

      try 
      {
        await Full_Editor.verify_Select_Media();
        console.log('✅ Test Passed: Select images and video');
      } 
      catch (error) 
      {
        console.error('❌ Test Failed: Select images and video');
        throw error; // 👉 THIS tells Mocha the test really failed
      }
      
    });


    it.skip('Should verify all music functionality', async () => {

      try
      {
        await Full_Editor.Verify_Music();
        console.log('✅ Test Passed: Verifu Music');
      }
      catch (error)
      {
        console.log('❌ Test Failed: Verify Music');
        throw error;
      }

    });

    it('should check the Text Functionality', async () => {

      try
      {
        await Full_Editor.Verify_Text();
        console.log('✅ Test Passed: Verifu Text');
      }
      catch (error)
      {
        console.log('❌ Test Failed: Verify Text');
        throw error;
      }
    });

    it('should check the Add Effects Functionality', async () => {

      try
      {
        await Full_Editor.Verify_Effects();
        console.log('✅ Test Passed: Verify Effects');
      }
      catch (error)
      {
        console.log('❌ Test Failed: Verify Effects');
        throw error;
      }
    });

    it('should check the Sticker Functionality', async () => {

      try
      {
        await Full_Editor.Verify_Add_Sticker();
        console.log('✅ Test Passed: Verify Stickers.');
      }
      catch (error)
      {
        console.log('❌ Test Failed: Verify Stickers.');
        throw error;
      }
    });

    it('should check the Sort Functionality', async () => {

      try
      {
        await Full_Editor.Verify_Sort();
        console.log('✅ Test Passed: Verify Sort.');
      }
      catch (error)
      {
        console.log('❌ Test Failed: Verify Sort.');
        throw error;
      }
    });

    it('should check the edit Functionality', async () => {

      try
      {
        await Full_Editor.Verify_Edit();
        console.log('✅ Test Passed: Verify Edit.');
      }
      catch (error)
      {
        console.log('❌ Test Failed: Verify Edit.');
        throw error;
      }
    });

    it('should check the Preset Functionality', async () => {

      try
      {
        await Full_Editor.Verify_Presets();
        console.log('✅ Test Passed: Verify Preset.');
      }
      catch (error)
      {
        console.log('❌ Test Failed: Verify Preset.');
        throw error;
      }
    });

    it('should check the Dehazer Functionality', async () => {

      try
      {
        await Full_Editor.Verify_Dehazer();
        console.log('✅ Test Passed: Verify Dehazer.');
      }
      catch (error)
      {
        console.log('❌ Test Failed: Verify Dehazer.');
        throw error;
      }
    });

    it.only('should check the Tune Functionality', async () => {

      try
      {
        await Full_Editor.Verify_Tune();
        console.log('✅ Test Passed: Verify Tune.');
      }
      catch (error)
      {
        console.log('❌ Test Failed: Verify Tune.');
        throw error;
      }
    });


  });
  