**Task 1 - SimpleLightbox library**

- Add the SimpleLightbox library as a project dependency using npm.
- Use your JavaScript code from the previous homework, but refactor it given
  that the library was installed via npm (import/export syntax).

**Task 2 - video player**

- Check out the documentation of the Vimeo player library.
- Add the library as a project dependency via npm.
- Initialize the player in the script file as described in the pre-existing
  player section, but note that you have added the player as an npm package, not
  via CDN.
- Read the documentation of the on() method and start tracking the timeupdate
  event - playback time update.
- Save playback time to local storage. Let the key for the storage be the
  "videoplayer-current-time" string.
- When reloading the page, use the setCurrentTime() method to resume playback
  from the saved position.
- Add the lodash.throttle library to the project and make sure that the playback
  time is updated in the storage once a second or less frequent.

**Task 3 - feedback form**

- Track the input event on the form, and each time write to local storage an
  object with the email and message fields, in which you save the current values
  of the form fields. Let the key for the storage be the "feedback-form-state"
  string.
- When loading the page, check the state of the storage, and if it stores some
  data, use it to fill in the form fields. Otherwise, the fields must be empty.
- When submitting the form, clear the storage and form fields, and also display
  the object with the email and message fields and their current values in the
  console.
- Make sure that the storage is updated no more than once every 500
  milliseconds. To do this, add to the project and use the lodash.throttle
  library.
