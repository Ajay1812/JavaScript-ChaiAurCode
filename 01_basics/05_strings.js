const name = "Ajay "
const gitRepo = 20

// console.log(name + gitRepo + " Count");

// console.log(`Hello, my name is ${name.toUpperCase()} and my repo count is ${gitRepo}`);

const discordName = new String("CodeNFInite")

// console.log(discordName[0]);

// console.log(discordName.__proto__);
console.log(discordName.concat(` WELCOME :  ${name}`));
console.log(discordName.length);
// console.log(discordName.toUpperCase());

// console.log(discordName.charAt(5));
// console.log(discordName.indexOf("F"));

// console.log(discordName.substring(0, 4));
// console.log(discordName.substring(5));

const anotherStr = discordName.slice(-8,7)
console.log(anotherStr)

const newStringOne = "        Ajay      "
console.log(newStringOne.length); // length -> 18
let lengthStr = newStringOne.trim();
console.log(lengthStr.length); // length -> 4

const url = "https://code%20nfinite.streamlit.app"

console.log(url.replace("%20","")) // https://codenfinite.streamlit.app

console.log(url.includes("hello")) // false

console.log(discordName.split("n"));

// console.log(discordName.blink());  // Deprecated: This feature is no longer recommended.
console.log(discordName.charCodeAt(5));