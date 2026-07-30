/* ==========================================
   ROUNAK PAUL PORTFOLIO V2
   SCRIPT.JS
========================================== */

// ==============================
// Loader
// ==============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.transition = "1s";

    }, 1800);

});

// ==============================
// AOS
// ==============================

AOS.init({

    duration:1000,
    once:true,
    easing:"ease-in-out"

});

// ==============================
// Typing Animation
// ==============================

const typing = document.getElementById("typing");

const words = [

"Writer ✍️",

"Photographer 📸",

"Lifelong Learner 📚",

"Future Doctor 🩺"

];

let wordIndex = 0;

function changeWord(){

    typing.style.opacity = "0";

    setTimeout(()=>{

        wordIndex++;

        if(wordIndex >= words.length){

            wordIndex = 0;

        }

        typing.innerHTML = words[wordIndex];

        typing.style.opacity = "1";

    },300);

}

setInterval(changeWord,2500);

// ==============================
// Navbar Shadow
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 60){

        header.style.background="rgba(0,0,0,.55)";
        header.style.boxShadow="0 10px 30px rgba(255,0,60,.18)";

    }

    else{

        header.style.background="rgba(0,0,0,.25)";
        header.style.boxShadow="none";

    }

});

// ==============================
// Mouse Glow
// ==============================

const glow = document.createElement("div");

glow.style.position="fixed";

glow.style.width="28px";

glow.style.height="28px";

glow.style.borderRadius="50%";

glow.style.pointerEvents="none";

glow.style.background="rgba(255,0,60,.35)";

glow.style.filter="blur(18px)";

glow.style.zIndex="99999";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX-14+"px";

    glow.style.top=e.clientY-14+"px";

});

// ==============================
// Scroll Progress Bar
// ==============================

const progress=document.createElement("div");

progress.style.position="fixed";

progress.style.top="0";

progress.style.left="0";

progress.style.height="4px";

progress.style.width="0%";

progress.style.background="#ff003c";

progress.style.zIndex="999999";

progress.style.boxShadow="0 0 15px crimson";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

let scroll=

document.documentElement.scrollTop;

let height=

document.documentElement.scrollHeight-

document.documentElement.clientHeight;

let percent=(scroll/height)*100;

progress.style.width=percent+"%";

});

// ==============================
// Back To Top
// ==============================

const topBtn=document.createElement("button");

topBtn.innerHTML="<i class='fa-solid fa-arrow-up'></i>";

topBtn.style.position="fixed";

topBtn.style.right="25px";

topBtn.style.bottom="25px";

topBtn.style.width="58px";

topBtn.style.height="58px";

topBtn.style.borderRadius="50%";

topBtn.style.border="none";

topBtn.style.background="#ff003c";

topBtn.style.color="#fff";

topBtn.style.fontSize="20px";

topBtn.style.cursor="pointer";

topBtn.style.display="none";

topBtn.style.boxShadow="0 0 30px crimson";

topBtn.style.transition=".35s";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>450){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ==============================
// Gallery Click Animation
// ==============================

const images=document.querySelectorAll(".gallery-grid img");

images.forEach((img)=>{

img.addEventListener("click",()=>{

img.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.08)"

},

{

transform:"scale(1)"

}

],{

duration:350

});

});

});

// ==============================
// Button Hover Glow
// ==============================

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow="0 0 60px crimson";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow="0 0 25px crimson";

});

});

console.log("✅ Rounak Portfolio Loaded Successfully");
