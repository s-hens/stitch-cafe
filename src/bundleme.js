const main = document.querySelector("main");

function welcome() {
    const div = document.createElement("div");
    div.innerText = "Hello, welcome to the Stitch Cafe!";
    main.appendChild(div);
}

function greeting() {
    const div = document.createElement("div");
    div.innerText = "Please, grab a warm cup of tea and browse our menu of sweet crochet stitch tutorials.";
    main.appendChild(div);
}

export {
    main,
    welcome,
    greeting
};