import QucikCut from '../pageobjects/QCimg.page.js';

describe('Quick Cut Images', () => {

    it('should login with valid credentials', async() => {

        const expected_song1 = "Spin It Right.mp3" ;
        const expected_song2 = "Celebration Jam.mp3" ;
        const expected_song3 = "Good Vibes Only.mp3" ;
        const expected_song4 = "Forest Whisper.mp3" ;
        const expected_song5 = "Raise the Roof.mp3" ;
        const expected_song6 = "Jump and Jive.mp3" ;
        const expected_song7 = "Happy Hearts.mp3" ;
        const expected_song8 = "Morning Chorus.mp3" ;
        const expected_song9 =  expected_song3;
        const expected_song10 = "Vibe All Night.mp3" ;
        const expected_song11 = "Groove.mp3" ;
        const expected_song12 = "Shine On.mp3" ;
        const expected_song13 = "Rustling Leaves.mp3" ;
        const expected_song14 = "Electric Energy.mp3" ;
        const expected_song15 =  expected_song14;
        const expected_song16 = "Shake It Up.mp3" ;
        const expected_song17 = "Dance Floor Fever.mp3" ;
        const expected_song18 = "Calm Waters.mp3" ;
        const expected_song19 = "Starlit Dreams.mp3" ;
        const expected_song20 = "Cloud Nine.mp3" ;
        const expected_song21 = "Dance All Night.mp3" ;
        const expected_song22 = "Bright Side.mp3" ; 
        const expected_song23 = "Waves Crashing.mp3" ;
        const expected_song24 = expected_song4 ;
        const expected_song25 = "Celebrate Today.mp3" ;
        const expected_song26 = "Sunset Breeze.mp3" ;
        const expected_song27 = expected_song6 ;
        const expected_song28 = "Groove On.mp3" ;
        const expected_song29 = "Carefree.mp3" ;
        const expected_song30 = expected_song7 ;
        const expected_song31 = "Bass Drop.mp3" ;
        const expected_song32 = expected_song31 ;
        const expected_song33 = "Dancing in the Sun.mp3" ;
        const expected_song34 = expected_song16 ;
        const expected_song35 = "Joyful Journey.mp3" ;
        const expected_song36 = "Feel the Rhythm.mp3" ;
        const expected_song37 = expected_song14 ;
        const expected_song38 = expected_song2 ;
        const expected_song39 = expected_song18 ;
        const expected_song40 = expected_song26 ;
        const expected_song41 = "Raindrop Symphony.mp3" ;
        const expected_song42 = "Vibrant Nights.mp3" ;
        const expected_song43 = expected_song23 ;
        const expected_song44 = expected_song25 ;
        const expected_song45 = expected_song33 ;






        // await QucikCut.QC_Run_Video(expected_song1);
        await QucikCut.QC_Run_Image(
            expected_song1, expected_song2, expected_song3, 
            expected_song4, expected_song5, expected_song6,
            expected_song7, expected_song8, expected_song9,
            expected_song10, expected_song11, expected_song12,
            expected_song13, expected_song14, expected_song15,
            expected_song16, expected_song17, expected_song18,
            expected_song19, expected_song20, expected_song21,
            expected_song22, expected_song23, expected_song24,
            expected_song25, expected_song26, expected_song27,
            expected_song28, expected_song29, expected_song30,
            expected_song31, expected_song32, expected_song33,
            expected_song34, expected_song35, expected_song36,
            expected_song37, expected_song38, expected_song39,
            expected_song40, expected_song41, expected_song42,
            expected_song43, expected_song44, expected_song45

        )

    })
})