const photos = ["test", "java", "script"];

const main = document.querySelector("main");

let htmlString = "";

for (let i = 0; i < photos.length; i++) {
htmlString += `<div>${photos[i]}</div>`;
}

main.innerHTML = htmlString;