const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

var index=0

function init() {
  document.body.addEventListener("keydown",konamiCodeChecker)
}

function konamiCodeChecker(e){
  const key=e.key
  if(key===codes[index]){
    index+=1
  } if (index===codes.length){
    alert("Hurray!")
    index=0
  } else {
    index=0
  }
}