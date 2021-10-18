console.log("👋");

import { getRandomEmoji } from "./emojis.js";

const socket = io();
const composeForm = document.querySelector("form#compose");
const newMsg = document.querySelector("#new-msg");
const msgList = document.querySelector("#msg-list");

const user = getRandomEmoji();

document.querySelector("#username").innerText = user;

document.addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = newMsg.value.toLowerCase();
    socket.emit("msg", msg, user);
    insertMsg(msg, user);
    newMsg.value = "";
});

socket.emit("hi", user);
userJoined(user);

socket.on("hi", (user) => {
    userJoined(user);
});

socket.on("bye", (username) => {
    insertMsg(`${username} left.`);
});

socket.on("msg", (txt, user) => {
    insertMsg(txt, user);
});

function userJoined(username) {
    const msgElement = document.createElement("div");
    msgElement.classList.add("msg");
    msgElement.innerText =
        username == user
            ? `you joined as ${user}. be kind.`
            : `${username} joined`;
    msgList.appendChild(msgElement);
}

function insertMsg(txt, user) {
    const msgElement = document.createElement("div");
    msgElement.classList.add("msg");
    msgElement.innerText = user ? `${user}: ${txt}` : `${txt}`;
    msgList.appendChild(msgElement);
    msgElement.scrollIntoView({ behavior: "smooth" });
}
