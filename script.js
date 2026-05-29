function openCard(){

  document
  .getElementById("card")
  .classList.add("show");

  document
  .querySelector(".envelope")
  .style.display="none";

  createConfetti();
}

/* CONFETTI */

function createConfetti(){

  let emojis=["🎉","✨","💙","🧸","🍫"];

  for(let i=0;i<120;i++){

    let conf=document.createElement("div");

    conf.innerHTML=
    emojis[Math.floor(
    Math.random()*emojis.length)];

    conf.classList.add("confetti");

    conf.style.left=
    Math.random()*100+"vw";

    conf.style.fontSize=
    (20+Math.random()*30)+"px";

    conf.style.animationDuration=
    (3+Math.random()*4)+"s";

    document.body.appendChild(conf);

    setTimeout(()=>{
      conf.remove();
    },7000);
  }
}

/* GLITTER EVERYWHERE */

document
.getElementById("title")
.addEventListener("click",()=>{

  for(let i=0;i<150;i++){

    let sparkle=
    document.createElement("div");

    sparkle.innerHTML="✨";

    sparkle.style.position="absolute";

    sparkle.style.left=
    Math.random()*100+"vw";

    sparkle.style.top=
    Math.random()*100+"vh";

    sparkle.style.fontSize=
    (15+Math.random()*25)+"px";

    sparkle.style.pointerEvents="none";

    document.body.appendChild(sparkle);

    setTimeout(()=>{
      sparkle.remove();
    },2500);
  }
});
