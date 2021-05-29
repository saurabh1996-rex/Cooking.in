const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.to('.text1,.text2,.text3',{y: "0%", duration: 1, stagger:0.25});
tl.to('.slider',{y:'-100%', duration: 1.5, delay: 0.5});
tl.to('.intro',{y:'-100%', duration: 1},"-=1");
tl.fromTo("nav,.big-text",{opacity:0},{opacity:1,duration: 1});

const el = document.getElementById("introText");
const sl =document.querySelector(".slider")
el.addEventListener('click',(e)=>{
    el.style.display= 'none';
});
sl.addEventListener('click',(s)=>{
    sl.style.display='none';
});

const toggleBtn = document.getElementsByClassName('fas')[0];
const navLinks = document.getElementsByClassName('nav-links')[0];

toggleBtn.addEventListener('click', (g)=> {
    if(navLinks.style.display=='flex'){
        navLinks.style.display ='none';
    }else{
        navLinks.style.display ='flex';
    }
});