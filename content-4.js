let plus = document.getElementById("plus");
let input = document.getElementById("input");
let remove = document.getElementById("remove");
let up = document.getElementById("sec-1");
let content = document.getElementById("container");

// let active = document.querySelector("green")
// active.on

plus.onclick = () => {
  let text = `


    <div id="sec-1" class="sec-1 glass  wow animate__backInDown" data-wow-duration="${2}s" >
        <span class="yellow"><i id="like" class="fa-sharp fa-solid fa-star"></i></span>
        <h2>${input.value}</h2>
        <div class="links">
            <span class="red"><i id="remove" class=" fa-solid fa-trash clock"></i></span>
            <span class=" green"><i id="click" class=" fa-solid fa-toggle-on"></i></span>
        </div>`;
  content.innerHTML += text;
};

content.addEventListener("click", (se) => {
  if (se.target.className == " fa-solid fa-trash clock") {
    se.target.parentElement.parentElement.parentElement.remove();
  }
});


let yes = `<i class=" true fa-solid fa-check"></i>`;

content.addEventListener("click", (ses) => {
  if (ses.target.className == " fa-solid fa-toggle-on") {
    ses.target.parentElement.parentElement.parentElement.innerHTML = yes;
  }
});

let mma = "Aber";
