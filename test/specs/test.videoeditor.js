import { addTestId } from '@wdio/allure-reporter';
import Video_Editor from '../pageobjects/videoeditor.page.js';

describe ("video editor", () => {

    it('should check the Media Mute Toggle Button Functionality', async () => {
    
        try
        {
          await Video_Editor.Verify_Wizard_Mute_Toggle()
          console.log('✅ Test Passed: Verify Wizard Mute Toggle.');
        }
        catch (error)
        {
          console.log('❌ Test Failed: Verify Wizard Mute Toggle.');
          throw error;
        }
        });


        it('should check the Media Selection Functionality', async () => {
    
        try
        {
          await Video_Editor.Verify_Media_Selection();
          console.log('✅ Test Passed: Verify Media Selection.');
        }
        catch (error)
        {
          console.log('❌ Test Failed: Verify Media Selection.');
          throw error;
        }
        });


        it('should check the Wizard Sticker Functionality', async () => {
    
        try
        {
          await Video_Editor.Verify_Wizard_Stickers();
          console.log('✅ Test Passed: Verify Wizard sticker.');
        }
        catch (error)
        {
          console.log('❌ Test Failed: Verify Wizard Sticker.');
          throw error;
        }
        });


        it('should check the Wizard Effect Functionality', async () => {
    
        try
        {
          await Video_Editor.Verify_Wizard_Effect();
          console.log('✅ Test Passed: Verify Wizard Effect.');
        }
        catch (error)
        {
          console.log('❌ Test Failed: Verify Wizard Effect.');
          throw error;
        }
        });


        it('should check the Wizard Audio Functionality', async () => {
    
        try
        {
          await Video_Editor.Verify_Wizard_Audio();
          console.log('✅ Test Passed: Verify Wizard Audio.');
        }
        catch (error)
        {
          console.log('❌ Test Failed: Verify Wizard Audio.');
          throw error;
        }
        });


        it('should check the Wizard Preset Functionality', async () => {
    
        try
        {
          await Video_Editor.Verify_Wizard_Preset();
          console.log('✅ Test Passed: Verify Wizard Preset.');
        }
        catch (error)
        {
          console.log('❌ Test Failed: Verify Wizard Preset.');
          throw error;
        }
        });



        it('should check the Wizard Magic Functionality', async () => {
    
        try
        {
          await Video_Editor.Verify_Wizard_Magic();
          console.log('✅ Test Passed: Verify Wizard Magic.');
        }
        catch (error)
        {
          console.log('❌ Test Failed: Verify Wizard Magic.');
          throw error;
        }
        });


        it('should check the Wizard Text Functionality', async () => {
    
        try
        {
          await Video_Editor.Verify_Wizard_Text();
          console.log('✅ Test Passed: Verify Wizard Text.');
        }
        catch (error)
        {
          console.log('❌ Test Failed: Verify Wizard Text.');
          throw error;
        }
        });


        it('should check the Wizard Draft & Export Functionality', async () => {
    
        try
        {
          await Video_Editor.Verify_Draft_Export();
          console.log('✅ Test Passed: Verify Wizard Draft & Export.');
        }
        catch (error)
        {
          console.log('❌ Test Failed: Verify Wizard Draft & Export.');
          throw error;
        }
        });
} )