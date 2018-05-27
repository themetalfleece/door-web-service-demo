## Simple security door web service demonstration

This app demonstrates a simple security door, which authorizes the users with API calls, using `node.js` and the `express` module.

1) When a user gets near the door, the door reads their id (could be a RFID - here we use simple integers)
2) The door does an API call to the server and gets a response whether they got authorized or not - `post to /goIn`
3) If they were authorized, the door opens (green) and the user enters the building
4) If they were not autorized, the door remains shut (red) and the user leaves
5) If they want to go out, the door ddoes an API call to the server and gets the same response, whether the user is authorized to go out - `post to /goOut`
6) There is a panic button on the inside of the building, which always opens the door, but performs an API call to notify the server. The status of this call does not affect the door opening - `post to /button`

The entire API server is in `app.js`. The html code is in `/client/index.html`

For simplicity, the server does not perform any database calls. However, if it were to do so:
1) The authorized user ids would be fetched from a database call. Here, we just use a `allowedIds` variable.
2) The logs (who entered/exited and when, etc) should be stored in a database. Here, we just log them into the console, with `console.log`

## How to run
1) Install [`node.js`](https://nodejs.org/en/download/)
2) Clone this repo
3) Navigate to its directory and run `npm install` to install the node modules
4) Run `npm start` to start the server
5) Navigate to `http://localhost:8080/`