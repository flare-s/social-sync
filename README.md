# Social Sync challenge

## Build an advent calendar that shows small videos.


## Set up 
Make sure you have Git and Node installed.

1. Clone this repository to your machine, `cd` into it.
2. Run `npm install` to install all the dependencies.
3. Run `npm start` to start the local dev server.

## Notes:

- Images from Unsplash.
- Videos from Pexels.

## Goals:

- [x] Create a date input that allows you to simulate the current day of december.
- [x] Create 25 “windows” where each represents a day of the month. Behind which you can place random video clips or images (try to have a mix of both) that can only be seen after you “open” the door.
- [x] Videos should only play after you open the door.
- [x] If you want, you can animate the door ‘opening’, but that’s not mandatory!
- [x] Only allow the user to click on the window when the door representing the day of the month is exactly, or after, the simulated current date (i.e. you can only open the door for the 14th of December, if the simulated date is on or after the 14th of december).
- [x] Track which users have opened which doors between refreshes by loading and saving the state to the browser’s localStorage.
