/* ===========================================
   ROUNAK PAUL PREMIUM PORTFOLIO
   SCRIPT.JS
=========================================== */

// Loading Screen

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1800);

});

// Typing Effect

const typing = document.getElementById("typing");

const words = [

    "Writer ✍️",

    "Photographer 📸",

    "Lifelong Learner 📚",

    "Future Doctor 🩺"

];

let index = 0;

setInterval(() => {

    typing.style.opacity = 0;

    setTimeout(() => {

        index++;

        if(index >= words.length){

            index = 0;

        }

        typing.innerHTML = words[index];

        typing.style.opacity = 1;

    },300);

},2500);

// Scroll Reveal

const reveals = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    reveals.forEach(sec=>{

        const top = sec.getBoundingClientRect().top;

        const height = window.innerHeight;

        if(top < height-120){

            sec.style.opacity=1;

            sec.style.transform="translateY(0px)";

        }

    });

});

// Initial Style

reveals.forEach(sec=>{

    sec.style.opacity=0;

    sec.style.transform="translateY(60px)";

    sec.style.transition=".8s";

});

// Mouse Glow

const glow = document.createElement("div");

glow.style.position="fixed";

glow.style.width="25px";

glow.style.height="25px";

glow.style.borderRadius="50%";

glow.style.pointerEvents="none";

glow.style.background="rgba(255,0,70,.45)";

glow.style.filter="blur(15px)";

glow.style.zIndex="9999";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX-10+"px";

glow.style.top=e.clientY-10+"px";

});

// Back To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";

topBtn.style.right="25px";

topBtn.style.bottom="25px";

topBtn.style.width="55px";

topBtn.style.height="55px";

topBtn.style.borderRadius="50%";

topBtn.style.border="none";

topBtn.style.background="crimson";

topBtn.style.color="#fff";

topBtn.style.fontSize="22px";

topBtn.style.cursor="pointer";

topBtn.style.display="none";

topBtn.style.boxShadow="0 0 20px crimson";

window.addEventListener("scroll",()=>{

if(window.scrollY>350){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
