function pageFour(){
    var tl= gsap.timeline({
        scrollTrigger: {
            scroller: "body",
            trigger: "#page4",
            start: "0% top",
            end: "80% top",
          //  markers: true,
            pin:true,
            scrub:1,
        }
    })
    tl
    .to(" #center-img",{
        duration: 1,
        x:-550,
})
.to(" #center-img h6",{
    duration: 1,
    opacity:0,
},"a")
.to(" #center-img",{
    duration: 3,
   scale: 0,
   opacity:0
},"a")
.to(" h1",{
    duration: 3,
   y: 500,
},"a")
        .to(" #end2",{
            scale: 0,
            rotate: -170,
            duration: 2,
    },"a")
    .to(" #end",{
        scale: 0,
        duration: 2,
 },"a")
        .to(" #mid2",{
            scale: 0,
            rotate: -150,
            duration: 3,
    },"a")
    .to(" #mid",{
        scale: 0,
        duration: 3,
 },"a")
    .to(" #inner2",{
        scale: 0,
        rotate: -100,
        duration: 4,
},"a")
.to(" #inner",{
    scale: 0,
    duration: 4,
},"a")
.to(" #white-circle",{
    scale: 0,
    duration: 9,
},"a")
.to(" #bg-img",{
    scale: 1.1,
    duration: 5.7,
},"a")
.to(" h2",{
    rotate: 0,
    duration: 5.9,
   y: -400,
},"a")
.to(" #purple-circle",{
    scale:1,
    top: "50%",
    duration: 1,
},"a")
.to(" #purple-circle",{
    opacity: 0,
    duration: 9,
},"a")
.to(" #box",{
    top: "-80%",
    duration: 9.5,
},"a")
}
pageFour()

function pageFive(){
    var tl2= gsap.timeline({
        scrollTrigger: {
            scroller: "body",
            trigger: "#page5",
            start: "0% top",
            end: "400% top",
        //    markers: true,
            pin:true,
            scrub:1,
        }
    })
tl2
    .to(" #circle2",{
        top: "25%",
        duration: 1.5,
    },"a")
    .to(" #circle1",{
        top: "25%",
        duration: 3.5,
    },"a")
    .to(" #circle2",{
        left: "40%",
        duration: 6,
    },"b")
    .to(" #circle1",{
        left: "40%",
        duration: 6,
    },"b")
    .to(" #circle1",{
        scale: 0,
        duration: 12.5,
    },"c")
    .to(" #circle2",{
        scale: 0.3,
        duration: 12.5,
    },"c")
    .to(" #circle2",{
        scale: 7,
        duration: 14.5,
    })
    .to(" #elem1 h2",{
        opacity: 0,
        duration: 16,
    },"d")
    .to(" #elem1 h1",{
        opacity: 0,
        duration: 16,
    },"d")
    .to(" #elem2 h2",{
        opacity: 1,
        top: "140%",
        duration: 17,
    },"d")
    .to(" #elem2 h1",{
        opacity: 1,
        duration: 17,
    },"d")
    .to(" #elem1 #strip",{
        opacity: 0,
        duration: 17,
    },"d")
    .to(" #elem2 #strip",{
        opacity: 1,
        left: "0%",
        duration: 17,
    },"d")
    .to(" #elem2 #strip h6",{
        opacity: 1,
        duration: 17,
    },"d")
    .to(" #elem2 #strip .circle",{
        opacity: 1,
        duration: 17,
    },"d")
    .to(" #gradient ",{
        opacity: 1,
     },"e")
    .to(" #gradient h1",{
        left: "-90%",
        duration: 20,
    },"e")
    .to(" #gradient ",{
        backgroundColor: "rgb(220,240,207)",
         duration: 25,
     },"e")
     .to(" #elem2 h2",{
        opacity: 0,
        duration: 30,
    },"f")
    .to(" #elem3 h2",{
        opacity: 1,
        top: "140%",
        duration: 30,
    },"f")
    .to(" #elem2 #strip",{
        opacity: 0,
        duration: 30,
    },"f")
    .to(" #elem3 #strip",{
        opacity: 1,
        left: "0%",
        duration:30,
    },"f")
    .to(" #elem3 #strip h6",{
        opacity: 1,
        duration: 30,
    },"f")
    .to(" #elem3 #strip .circle",{
        opacity: 1,
        duration: 30,
    },"f")
    .to(" .column ",{
        top: "0",
        stagger:5,
         duration: 30,
     },"f")
     .to(".box1 ",{
        right: "0",
         duration: 75,
     },"g")
     .to(".box2 ",{
        right: "49%",
         duration: 85,
     },"g")

}
pageFive()

function pageSix(){
    var tl3= gsap.timeline({
        scrollTrigger: {
            scroller: "body",
            trigger: "#page6",
            start: "10% top",
            end: "100% top",
      //     markers: true,
            scrub:1,
        }
    })
    tl3
    .to("#big-img",{
        rotate: "180deg",
        duration: 1,
    },"ab")
    .to(" #pt3 #line",{
        left: "-50%",
        duration: 2,
    },"ab")

    var tl3= gsap.timeline({
        scrollTrigger: {
            scroller: "body",
            trigger: "#tri-img",
            start: "top 60%",
            end: "top -50%",
         //  markers: true,
            scrub:1,
        }
    })
    .to(" #strips",{
        width: "100%",
    },"ab")
    .to(" #text h1",{
        left: "30%",
    },"ab")
    .to(" #text h2",{
        left: "15%",
    },"ab")
    .to(" #text h3",{
        left: "30%",
    },"ab")
    .to(" #stripss ",{
        left: "-15%",
    },"ab")
    
}
pageSix()

function hex(){
    var topImg = document.querySelector("#pt2 #top-img");
    var btmImg = document.querySelector("#pt2 #btm-img");
    var hexImg = document.querySelector("#pt4 #hex-img");
    var pageSix = document.querySelector("#page6");

    btmImg.addEventListener("mousemove", function(){
        pageSix.style.backgroundColor = "#FEF0C5";
    })
    btmImg.addEventListener("mouseleave", function(){
        pageSix.style.backgroundColor = "#fff";
    })
    topImg.addEventListener("mousemove", function(){
        pageSix.style.backgroundColor = "#DCF0CF";
    })
    topImg.addEventListener("mouseleave", function(){
        pageSix.style.backgroundColor = "#fff";
    })
    hexImg.addEventListener("mousemove", function(){
        pageSix.style.backgroundColor = "#FFE9F3";
    })
    hexImg.addEventListener("mouseleave", function(){
        pageSix.style.backgroundColor = "#fff";
    })
}
hex()
