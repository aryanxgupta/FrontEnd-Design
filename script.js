
function loadingAnimation(){
    let tl = gsap.timeline() ; 
    tl.from(".line h1 , .line h2",{
        y:150, 
        duration: 0.6,
        stagger: 0.3,
        ease: Power4,
        opacity: 0.5,
    })
    .from(".line1-part1 , .line h2",{
        opacity:0,
        onStart: function(){
            let timer = document.querySelector(".line h5"); 
            let grow = 0 ; 
            let timeint = setInterval(function(){
                if(grow<100){
                    timer.textContent = grow++ ;
                }else{
                    timer.textContent = grow
                    clearInterval(timeint); 
                }
            }, 25)
        }
    })
    .from(".loader p",{
        opacity: 0,
        duration: 2,
        duration: 1
    })
    .to(".line h1, .line h5, .line h6, .loader p",{
        opacity:0 , 
        delay: 2.6, 
        duration: 0.4
    },'a')
    .to(".your",{
        opacity: 0, 
        duration: 1,
        delay: 2.6
    },'a')
    .to(".webexp, .line h2",{
        opacity: 0, 
        duration: 0.7,
        delay: 2.6
    },'a')
    .to(".loader",{
        opacity: 0, 
    })
    .from(".page1",{
        y:800
    },'c')
    .to(".loader",{
        display: "none"
    })
    .from(".main-heading1 h1, .main-heading2 h1",{
        y: 200,
        delay: 0.3,
        stagger: 0.3,
    },'c')
    .from(".main-heading3 h1",{
        y: 200,
        delay: -0.3,
    })
    .from(".main-heading4 h1",{
        y: 200,
        stagger: 0.2,
        delay: -0.2
    })
        
}
function cursorAnimation(){
    let cursor = document.querySelector(".crsr") ; 
    document.addEventListener("mousemove",function(dets){
        gsap.to(cursor,{
            left: dets.x, 
            top: dets.y,
        })
    })

    let valright = document.querySelector(".right")
    let valleft = document.querySelector(".left .img-div")
    valright.addEventListener("mousemove",function(){
        gsap.to(cursor,{
            scale: 2,
        })
    })
    valright.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            scale: 1,
        })
    })

    valleft.addEventListener("mousemove",function(){
        gsap.to(cursor,{
            scale: 2,
        })
    })
    valleft.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            scale: 1,
        })
    })
    
    Shery.makeMagnet(".right h4" , {});
    Shery.makeMagnet(".left .img-div" , {});
}
function footerAnimation(){
    document.querySelectorAll(".handle ,.email-address").forEach(function(val){
        val.addEventListener("mouseenter",function(){
            val.querySelectorAll('h3').forEach(function(cont){
                gsap.to(cont,{
                    y:"-100%"
                })
            }) ; 
        })
        val.addEventListener("mouseleave",function(){
            val.querySelectorAll('h3').forEach(function(cont){
                gsap.to(cont,{
                    y:0
                })
            }) ; 
        })
    })
    
    
    document.querySelector('.create').addEventListener("mouseenter",function(){
        gsap.set('.create .overlay-heading',{opacity:0})
        let tl = gsap.timeline()
        tl.to('.create .overlay-heading',{
            opacity:1,
            duration: 0.6,
            width: "100%",
        },'a')
        .to('.create .page6-heading',{
            opacity:0,
            duration:0.6,
        },'a')
        gsap.set('.page6-heading',{
            width:"0%",
            zIndex: 10,
        })
        gsap.set('.overlay-heading',{
            zIndex: 9,
        })
    })
    document.querySelector('.create').addEventListener("mouseleave",function(){
        let tl = gsap.timeline()
        tl.to(".page6-heading",{
            opacity:1,
            duration: 0.6,
            width: "100%",
        },'a')
        tl.to('.create .overlay-heading',{
            opacity:0,
            duration:0.6,
            zIndex: 10,
        },'a')
        gsap.set('.overlay-heading',{
            width:"0%",
        })
        gsap.set('.page6-heading',{
            zIndex: 9,
        })
    })
}
function page2Animation(){
    let container = document.querySelector(".video-container")
    let btn = document.querySelector(".play-btn")
    container.addEventListener("mousemove",function(dets){
        gsap.to(btn,{
            top:dets.clientY - container.getBoundingClientRect().top,
            left: dets.clientX - container.getBoundingClientRect().left,
            ease:Power4
        })
    })
    container.addEventListener("mouseleave",function(dets){
        gsap.to(btn,{
            top: 0,
            left: "70%",
            ease:Power4
        })
    })
    container.addEventListener("click",function(){
        if(document.querySelector(".video-container video").paused){
            document.querySelector(".play-btn .pause").style.display = "block"
            document.querySelector(".play-btn .play").style.display = "none"
            document.querySelector(".video-container img").style.display = "none" 
            document.querySelector(".video-container video").play()
            gsap.to(btn,{
                scale: 0.5,
                ease: Power2
            })
        }else{
            document.querySelector(".play-btn .play").style.display = "block"
            document.querySelector(".play-btn .pause").style.display = "none"
            document.querySelector(".video-container img").style.display = "block" 
            document.querySelector(".video-container video").pause()
            document.querySelector(".video-container video").currentTime = 0 
            gsap.to(btn,{
                scale: 1,
                ease: Power2
            })
        }
    })
}
function flagAnimation(){
    let flag = document.querySelector(".heading-img-div")
    let box = document.querySelector("#flag-anime")
    let diff = 0  
    let prev = 0 
    box.addEventListener("mousemove",function(dets){
        diff = dets.clientX - prev ; 
        prev = dets.clientX ; 
        let rot = gsap.utils.clamp(-20,20,diff) 
        gsap.to(flag,{
            opacity:1,
            top: dets.clientY - box.getBoundingClientRect().top,
            left: dets.clientX,
            rotate: rot
        })
    })
    box.addEventListener("mouseleave",function(dets){
        gsap.to(flag,{
            opacity:0,
        })
    })
}
function textAnimation(){
    let clutter= '' ; 
    document.querySelector(".text-1 p").textContent.split(' ').forEach(function(letter){
        clutter += `<p>${letter}&nbsp;</p>`
    }) 
    document.querySelector(".text-1").innerHTML = clutter
    let parahs = document.querySelectorAll(".text-1 p") ; 
    gsap.set(parahs,{opacity:0.05}); 
    gsap.to(parahs,{
        scrollTrigger: {
            trigger: ".page4 .content",
            start: "top 30%", 
            end:"top -30%", 
            scrub: 2,
        },
        opacity: 1, 
        stagger: 0.1
    })
}

textAnimation()
flagAnimation()
page2Animation()
footerAnimation() 
loadingAnimation()
cursorAnimation()