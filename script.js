gsap.from(".p3-boy img",{
    y :"-100%",
    scale  :4,
    x: " -120%",
    scrollTrigger :{
        trigger : ".p3-boy img",
        scroller : "body",
        start: " top 50%",  
        end :'80% 50%',
        // markers : true, 
        scrub : 1,
    },
})



gsap.from(".page2 .p2-text ",{
    opacity : 0,
    duration :1,
    y:"-30%",
 
    scrollTrigger :{
        trigger : ".page2 .p2-text",
        scroller : "body",
        // markers : true,
        // scrub : 3,
        // start : " top  50%"
    },
})



// --------.page6---------

gsap.from(".page6 h1,.p6boxes",{
    x:"10%",
    rotate : 5,
    // duration:.5,
   
    scrollTrigger: {
        trigger:".page6 ",
        scroller : "body",
        // markers: true,
        start :"top 50%",
        end : "bottom 60% ",
        scrub : 1,

    },

})