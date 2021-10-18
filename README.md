# lowkey-chat

A minimalistic chat app I built for playing around with socket.io. It chooses a random emoji for the username. You can send lower case messages only.
I used expressjs with socket.io as a server. Client-side it's vanilla JavaScript with socket.io served by express.

## Getting started

It's deployed on heroku, so you can check it out (Disclaimer: I cannot guarantee, that people will behave so be careful)
https://lowkey-chat.herokuapp.com/

If you want to deployed it locally instead, follow these instructions:

Clone this repo. Then install the dependencies:

```sh
npm install
```

Start the server (default port 3000):

```sh
npm start
```

visit `http://localhost:3000` to chat locally. Find a friend that will chat with you or open a second browser to chat with yourself 🥲

### Note:

I coded this as an afternoon exercise session, so you probably shouldn't use it in production. Feel free to contribute though :)
