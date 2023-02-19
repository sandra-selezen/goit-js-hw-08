/*
1. Check out the documentation of the Vimeo player library.
2. Add the library as a project dependency via npm.
3. Initialize the player in the script file as described in the pre-existing player section, 
but note that you have added the player as an npm package, not via CDN.
4. Read the documentation of the on() method and start tracking the timeupdate event - playback time update.
5. Save playback time to local storage. 
Let the key for the storage be the "videoplayer-current-time" string.
6. When reloading the page, use the setCurrentTime() method 
to resume playback from the saved position.
7. Add the lodash.throttle library to the project and make sure that the playback time is updated
in the storage once a second or less frequent.
*/
