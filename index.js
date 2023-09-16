
// ==================== Gasp =================================



let tl = gsap.timeline();

tl.to('.boundingElm', {
      y: 0,
      ease : Expo.easeInOut,
      delay:1,
      duration: 2,
      stagger: .3
})





gsap.from('.projectTravel .projectImgCon',{
    x: '-110%',
    duration:2,
    scrollTrigger:{
        trigger:'.projectTravel',
        scroller:'body',
        // markers:true,
        start: 'top 70%'
    }
})

gsap.from('.projectTravel .projectInfo',{
    x: '+110%',
    duration:2,
    scrollTrigger:{
        trigger:'.projectTravel',
        scroller:'body',
        // markers:true,
        start: 'top 70%'
        // end: 'top 90%'
    }
})















// ================== Space X =================

gsap.from('.projectSpaceX .projectInfo',{
    x: '-110%',
    duration:2,
    scrollTrigger:{
        trigger:'.projectSpaceX',
        scroller:'body',
        // markers:true,
        start: 'top 60%'
    }
})

gsap.from('.projectSpaceX .projectImgCon',{
    x: '+110%',
    duration:2,
    scrollTrigger:{
        trigger:'.projectSpaceX',
        scroller:'body',
        // markers:true,
        start: 'top 60%'
        // end: 'top 90%'
    }
})


// ========== About --===============
  

gsap.from('#AboutSection',{
  // x:'+110%',
  // scale:1,
  opacity:0,
  duration:2,
  scrollTrigger:{
    trigger: '#AboutSection',
    scroller: 'body',
    // markers:true,
    start: 'top 70%'
  }
})

// ========== footer ===============
gsap.from('#FooterSection',{
    y: 100,
    duration:1
})













//=========== Fro Form Submition====================

const scriptURL = 'https://script.google.com/macros/s/AKfycbwnu_lku38dAv9UOhaB3sEl3RBMnbIZ57fVJsqmwz3BNdF6Cd4H3Rrhrmyoo-j7VZqe/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    // .then(response => console.log('Success!', response))
    .then(response =>{ 
        msg.innerHTML = 'Message Submitted'
        setTimeout(()=>{
            msg.innerHTML = ''
        }, 3000)
        form.reset()
    } )
    .catch(error => console.error('Error!', error.message))
})





// ================ Show Menu =====================
let navMenuEl = document.getElementById("navMenu");
let Humbtn = document.getElementById("humBtn");
let closeBtn = document.getElementById("closeBtn");

if (Humbtn) {
  Humbtn.addEventListener("click", () => {
    navMenuEl.classList.add("showMenu");
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    navMenuEl.classList.remove("showMenu");
  });
}




// ================ Remove Menu =====================

const navLinks = document.querySelectorAll('.navLink')
const linkAction=()=>{
    const navMenu = document.getElementById('navMenu')
    navMenu.classList.remove('showMenu')
}
navLinks.forEach( ekLink => ekLink.addEventListener('click', linkAction) )




//=================  for Heading Blur =============== 
const blurHeader=()=>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blurHeader')
                      : header.classList.remove('blurHeader')
}

window.addEventListener('scroll', blurHeader)



// ============ for Time in Footer =============== 
let TimeElm = document.querySelector('#time')
console.log(TimeElm.innerHTML);

function time(){
    let time = new Date()
    let curTime = time.toLocaleTimeString()
    TimeElm.textContent = curTime + ' IST'
}

setInterval(() => {
    time()
}, 1000);




// ============= For MiniCursor ===========================
// function circleMAkeFollow(){
//   window.addEventListener('mousemove',function(e){
//       document.querySelector('.miniCursor').style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//   })
// }
// circleMAkeFollow()



const cursor = document.querySelector(".miniCursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Listen for scroll events and adjust the cursor position accordingly
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    cursor.style.transform = `translate(-50%, -50%) translateY(${scrollTop}px)`;
});