function changeBg(elemId) {
    colours = ['red', 'blue', 'green', 'yellow', 'red', 'violet', 'pink', 'indigo', 'orange']
    randomNumber = Math.floor(Math.random() * 10);
    elem = document.getElementById(elemId)
    elem.style.background = colours[randomNumber];
}