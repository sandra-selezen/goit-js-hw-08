import Player from "@vimeo/player";
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(currentTime, 1000));

function currentTime(data) {
  localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
}

let selectedTime = localStorage.getItem(LOCALSTORAGE_KEY);

player.setCurrentTime(selectedTime).then(function(seconds) {
  // seconds = the actual time that the player seeked to
}).catch(function(error) {
  switch (error.name) {
    case 'RangeError':
      // the time was less than 0 or greater than the video’s duration
      break;

    default:
      // some other error occurred
      break;
  }
});

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
