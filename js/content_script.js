const soundResource = chrome.runtime.getURL("../resource/sound/neko.mp3");
// array.pushで同時再生できなかったのでこれで対応
const sound = new Audio(soundResource);
const sound2 = new Audio(soundResource);
const sound3 = new Audio(soundResource);
const sound4 = new Audio(soundResource);
const sound5 = new Audio(soundResource);
const sound6 = new Audio(soundResource);
const sound7 = new Audio(soundResource);
const sound8 = new Audio(soundResource);
const sound9 = new Audio(soundResource);
const sound10 = new Audio(soundResource);

let num = 0;

document.addEventListener('keyup', keyupEvent, false);

function keyupEvent() {
    if (num == 0) {
        sound.play();
        num++;
    }
    else if (num == 1) {
        sound2.play();
        num++;
    }
    else if (num == 2) {
        sound3.play();
        num++;
    }
    else if (num == 3) {
        sound4.play();
        num++;
    }
    else if (num == 4) {
        sound5.play();
        num++;
    }
    else if (num == 5) {
        sound6.play();
        num++;
    }
    else if (num == 6) {
        sound7.play();
        num++;
    }
    else if (num == 7) {
        sound8.play();
        num++;
    }
    else if (num == 8) {
        sound9.play();
        num++;
    }
    else if (num == 9) {
        sound10.play();
        num = 0;
    }
}