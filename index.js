import { colorPicker } from "./index2.js";
import greetSomeone from "./b.js";
import { test, b } from "./a.js";

const btn = document.getElementById("btn");
const container = document.querySelector(".container");
const squares = container.querySelectorAll(".square");

btn.addEventListener("click", RenameMeWithF2);

// btn.onclick = () => handleChange()

function RenameMeWithF2() {
	let length = squares.length;

	let square = squares[Math.floor(Math.random() * length)];

	square.style.backgroundColor = colorPicker();
	square.style.transform = `scale(1.2)`;
}

const title = document.createElement("h1");
title.textContent = greetSomeone;
container.append(title);

console.log(test, b);
