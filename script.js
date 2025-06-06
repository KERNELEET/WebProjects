var cur = document.querySelector("#cursor");
var curBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets) {
        cur.style.left = dets.x+"px";
        cur.style.top = dets.y+"px";
        curBlur.style.left = dets.x-150+"px";
        curBlur.style.top = dets.y-150+"px";
})

gsap.from("#colon-1",{
    x:-70,
    y:-70,
    scrollTrigger:{
        trigger:"#colon-1",
        scroller:"body",
        start:"top 70%",
        end:"top 45%",
        scrub:1

    }
})
gsap.from("#colon-2",{
    x:70,
    y:70,
    scrollTrigger:{
        trigger:"#colon-1",
        scroller:"body",
        start:"top 70%",
        end:"top 45%",
        scrub:4

    }
})
gsap.to("#page4 h1",{
    y:-40,
        scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 80%",
        end:"top 45%",
        scrub:1

    }
    
})
gsap.to("#nav",{
    backgroundColor: "#000",
    height:"100px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:2.2
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2.2,

    }
})