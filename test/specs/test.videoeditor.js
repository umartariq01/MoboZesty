import Video_Editor from '../pageobjects/videoeditor.page.js';

describe ("video editor", () => {

    it("should login with valid credentials.", async () => {

        await Video_Editor.Run_Video_Editor_Img_Case();
    })

    // it("Video editor video case", async () => {

    //     await Video_Editor.Run_Video_Editor_Vid_Case()
    // })
} )