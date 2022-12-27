// INNcheking

const InnInput = document.querySelector(".InnInput");
const InnCheck = document.querySelector(".InnCheck");
const InnResult = document.querySelector(".InnResult");

const Inn = /^[0,1]\d{13}$/;

InnCheck.addEventListener("click", () => {
  if (Inn.test(InnInput.value)) {
    InnResult.innerText = "Correct";
    InnResult.style.color = "green";
  } else {
    InnResult.innerText = "Incorrect";
    InnResult.style.color = "red";
  }
});

// Cube

const block = document.querySelector(".block")

let position = 0;

const motion = () => {
  if (position <= 40){
    position += 10;
    block.style.left = `${position}px`;
    motion();
  }
  else if (position >400){
    position = 0;
    block.style.left = `${position}px`;
  }
  else {
    position += 40
    block.style.left = `${position}px`;
  }
}
block.addEventListener("click",()=> motion())