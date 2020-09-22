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



function init() {
  document.body.addEventListener("keydown",konamiCodeChecker)
}

let index=0

function konamiCodeChecker(e){
  const key=e.key
  console.log(key)
  if(key===codes[index]){
    index++
    console.log(index)
  } if (index===codes.length){
    alert("Hurray!")
    console.log("index=codes triggered")
    index=0
  } else {
    index=0
    console.log("else triggered")
  }
}