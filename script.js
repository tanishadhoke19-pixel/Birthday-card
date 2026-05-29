function openCard(){

  document
    .getElementById("card")
    .classList.add("show");

  createConfetti();
}

function createConfetti(){

  for(let i=0;i<80;i++){

    let conf=document.createElement("div");

    conf.innerHTML="🎉";

    conf.classList.add("fall");

    conf.style.left=Math.random()*100+"vw";

    conf.style.fontSize=
      (20+Math.random()*20)+"px";

    conf.style.animationDuration=
      (2+Math.random()*3)+"s";

    document.body.appendChild(conf);

    setTimeout(()=>{
      conf.remove();
    },5000);
  }
}

document
.getElementById("title")
.addEventListener("click",()=>{

  for(let i=0;i<40;i++){

    let sparkle=document.createElement("div");

    sparkle.innerHTML="✨";

    sparkle.style.position="absolute";

    sparkle.style.left=
      (window.innerWidth/2+
      Math.random()*250-125)+"px";

    sparkle.style.top=
      (window.innerHeight/2+
      Math.random()*120-60)+"px";

    sparkle.style.fontSize="25px";

    document.body.appendChild(sparkle);

    setTimeout(()=>{
      sparkle.remove();
    },2000);
  }
});