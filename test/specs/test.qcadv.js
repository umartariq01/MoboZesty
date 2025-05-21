import QC_Adv_Edit from '../pageobjects/QCadv.page.js' ;

describe('QC to Advance edit', () => {

    // it('should login with valid credentials', async () => {


    //     await QC_Adv_Edit.Adv_Edit_Run();

    // })

    it('It should validate QC Advance Edit Media Selection.', async () => {
          try
          {
            await QC_Adv_Edit.Adv_Edit_Media_Selection();
            console.log('✅ Test Passed: Adv_Edit_Media_Selection.');
          }
          catch (error)
          {
            console.log('❌ Test Failed: Adv_Edit_Media_Selection.');
            throw error;
          }
    });

    // ===========================================================================

    it('It should validate QC Advance Edit to Full_Editor_Add_Media.', async () => {
          try
          {
            await QC_Adv_Edit.Full_Editor_Add_Media();
            console.log('✅ Test Passed: Full_Editor_Add_Media.');
          }
          catch (error)
          {
            console.log('❌ Test Failed: Full_Editor_Add_Media.');
            throw error;
          }
    });

    // ===========================================================================

    it('It should validate  Full_Editor Zoom functionality.', async () => {
          try
          {
            await QC_Adv_Edit.Full_Editor_Zoom_Functionality();
            console.log('✅ Test Passed: Full_Editor Zoom Functionality.');
          }
          catch (error)
          {
            console.log('❌ Test Failed: Full_Editor Zoom Functionality.');
            throw error;
          }
    });
    // ===========================================================================

    it('It should validate  Full_Editor Audio functionality.', async () => {
          try
          {
            await QC_Adv_Edit.Full_Editor_Audio_Functionality();
            console.log('✅ Test Passed: Full_Editor Audio Functionality.');
          }
          catch (error)
          {
            console.log('❌ Test Failed: Full_Editor Audio Functionality.');
            throw error;
          }
    });

    // ===========================================================================

    it('It should validate  Full_Editor Undo, Redo & Export functionality.', async () => {
          try
          {
            await QC_Adv_Edit.Undo_Redo_Export();
            console.log('✅ Test Passed: Full_Editor Undo, Redo & Export Functionality.');
          }
          catch (error)
          {
            console.log('❌ Test Failed: Full_Editor Undo, Redo & Export Functionality.');
            throw error;
          }
    });


});