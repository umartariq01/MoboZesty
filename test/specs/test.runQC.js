import QucikCutSample from '../pageobjects/testQC.page.js';

describe('Quick Cut Images', () => {


    const expectedSongs = [
        "Spin It Right.mp3",          // index 0
        "Celebration Jam.mp3",        // 1
        "Good Vibes Only.mp3",        // 2
        "Forest Whisper.mp3",         // 3
        "Raise the Roof.mp3",         // 4
        "Jump and Jive.mp3",          // 5
        "Happy Hearts.mp3",           // 6
        "Morning Chorus.mp3",         // 7
        "Good Vibes Only.mp3",        // 8 (same as 2)
        "Vibe All Night.mp3",         // 9
        "Groove On.mp3",              // 10
        "Shine On.mp3",               // 11
        "Rustling Leaves.mp3",        // 12
        "Electric Energy.mp3",        // 13
        "Electric Energy.mp3",        // 14 (same as 13)
        "Shake It Up.mp3",            // 15
        "Dance Floor Fever.mp3",      // 16
        "Calm Waters.mp3",            // 17
        "Starlit Dreams.mp3",         // 18
        "Cloud Nine.mp3",             // 19
        "Dance All Night.mp3",        // 20
        "Bright Side.mp3",            // 21
        "Waves Crashing.mp3",         // 22
        "Forest Whisper.mp3",         // 23 (same as 3)
        "Celebrate Today.mp3",        // 24
        "Sunset Breeze.mp3",          // 25
        "Jump and Jive.mp3",          // 26 (same as 5)
        "Groove On.mp3",              // 27 (same as 10)
        "Carefree.mp3",               // 28
        "Happy Hearts.mp3",           // 29 (same as 6)
        "Bass Drop.mp3",              // 30
        "Bass Drop.mp3",              // 31 (same as 30)
        "Dancing in the Sun.mp3",     // 32
        "Shake It Up.mp3",            // 33 (same as 15)
        "Joyful Journey.mp3",         // 34
        "Feel the Rhythm.mp3",        // 35
        "Electric Energy.mp3",        // 36 (same as 13)
        "Celebration Jam.mp3",        // 37 (same as 1)
        "Calm Waters.mp3",            // 38 (same as 17)
        "Sunset Breeze.mp3",          // 39 (same as 25)
        "Raindrop Symphony.mp3",      // 40
        "Vibrant Nights.mp3",         // 41
        "Waves Crashing.mp3",         // 42 (same as 22)
        "Celebrate Today.mp3",        // 43 (same as 24)
        "Dancing in the Sun.mp3"      // 44 (same as 32)
    ];

    it('should login with valid credentials', async() => {

        await QucikCutSample.QC_Run_Image(expectedSongs)

    })
})