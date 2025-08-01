
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
       document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity:0,
        ease: Expo.easeInOut,
        duration: 1.5
    })

    .to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 1,
        delay: -1,
        stagger: .2 /* for each separate animation */
    })

    .from("#herofooter", {
        y: '-10',
        opacity:0,
        delay: -1,
        ease: Expo.easeInOut,
        duration: 1.5
    })
}




circleMouseFollower();
firstPageAnim();

