// Selectors
let id = document.querySelector('.id');
let h1 = document.querySelector('h1');
let btn = document.querySelector('.btn');
let audio = document.querySelector('audio');
let duration = 1.5;


// fetch API
async function get() {
  let url = "https://api.adviceslip.com/advice";
  let req = await fetch(url);
  let ob = await req.json();

  create(ob);
}


// DOM part
function create(ob) {
  let data = ob.slip;
  
  for (let i in data) {
    if (i == 'id') {
      id.textContent = `Advice #${data[i]}`;
    }else {
      h1.textContent = `"${data[i]}"`;
    }
  }

  rotateEle(h1.parentElement);
}


get();

// click event
btn.addEventListener('click', () => {
  get(); 
  rotateEle(h1.parentElement);
  setTimeout(() => {
    h1.parentElement.style.transform= "rotateY(0deg)";
  }, duration * 1000);
  audio.play();
});



// animation
function rotateEle(elemet) {
  gsap.fromTo(elemet, {rotationY: "0deg"}, {rotationY: "360deg", duration});
}