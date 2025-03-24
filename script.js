let cl = document.querySelector(".clock");
let mn = document.querySelector(".main");

function Updateclock(){
  let now = new Date();

let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();

cl.innerHTML = `${hour}:${minute}:${second}`;

}

Updateclock();
setInterval(Updateclock, 1000);

//improved code(ChatGPT)
function ImageUpdate() {
  let newImage = new Image();
  newImage.src = `https://picsum.photos/1920/1080?random=${Math.random()}`;

  newImage.onload = () => {
    mn.style.transition = "background-image 1s ease-in-out";
    mn.style.backgroundImage = `url('${newImage.src}')`;
  };
}

ImageUpdate();
setInterval(ImageUpdate, 10000);




