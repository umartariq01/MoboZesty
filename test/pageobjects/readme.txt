qcadv  = QCadv.page.js ---------> This flow go from QC to advance edit, sort, zoomin and zoomout
qcedit = QCedit.page.js --------> Thiis flow conayain QC edit like sort, replace images, check video's audio, replace audio from Music and brwose tab.
qcmain = QCmain.page.js --------> This flow conatains positive flow of images anf videos and then check filters.
qcimg  = QCimg.page.js ---------> This flow coantsins only images and check all 45 filters.
qcvid  = QCvid.page.js ---------> This flow conatains only videos and check few filters on videos.
qcadv = QCadv.page.js ----------> This flow go from QC to advance, zoomin, zoomout, sort, mute, unmute, add media, export

npm run test1 = QCtest1.page.js ----> Thsi flow go from QC to advance, verify audio in images & video then export
npm run test2 = QCtest2.page.js ----> This flow go from QC to advance, verify audio for videos only then export. (This is failing because video play and it fails)
npm run test3 = QCtest3.page.js ----> This flow go from QC to advance, verify audio for images only
npm run test4 = QCtest4.page.js ----> This flow go from QC to advance, add text, then export video.
npm run test5 = QCtest5.page.js ----> This flow go from QC to advance, edit effects, apply effect and stretch effect, then exxport.
npm run test6 = QCtest6.page.js ----> This flow go from QC to advance, add sticker, expand it and then export.

