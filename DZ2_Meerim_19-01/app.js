const block = document.querySelector(".block")

let position = 0;
let topPosition = 0;

const motion = () => {
 if (position <= 440 && topPosition == 0) {
  position += 16;
  block.style.left = `${position}px`;
  setTimeout(motion, 100);
 }
 else if (position >= 440 && topPosition <= 440) {
  topPosition += 16;
  block.style.top = `${topPosition}px`;
  setTimeout(motion, 100);
 } else if (topPosition >= 440 && position != 0) {
  position -= 16;
  block.style.left = `${position}px`;
  setTimeout(motion, 100);
 } else if (position == 0 && topPosition != 0) {
  topPosition -= 16;
  block.style.top = `${topPosition}px`;
  setTimeout(motion, 100);
 }
};

motion();

// Таймер


const interval = setInterval (() => {
    console.log('seconds');
}, 1000);

setTimeout (() => {
    clearInterval(interval);
}, 60000);



