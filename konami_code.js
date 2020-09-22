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
 if (e.key===codes[index]){
   console.log(index+codes[index])
   index++
   console.log(index)
   if (index===codes.length){
     console.log(codes.length)
     alert("Hurray!")
     index=0
   }
 } else{
   index=0
 }
}