


const loading = () => {
   const tl = gsap.timeline()

   tl.to("#yellow1", {
      top: "-100%",
      delay: 0.5,
      duration: 0.7,
      ease: "expo.out"
   })

   tl.from("#yellow2", {
      top: "100%",
      delay: 0.5,
      duration: 0.7,
      ease: "expo.out"
   }, 'same')

   tl.to("#loader h1", {
      delay: 0.6,
      duration: 0.7,
      color: "black"
   }, 'same')

   tl.to("#loader", {
      opacity: 0
   })
   tl.to("#loader", {
      display: 'none'
   })
}


loading()


let animation = false

function navAnimation() {
   const cross = document.querySelector('#icon i'),
      navLink = document.querySelector("#left-b"),
      project = document.querySelector("#projectLink")
   cross.addEventListener("click", () => {
      if (animation === false) {
         gsap.to(cross, {
            rotate: "45deg",
            duration: 1
         })

         gsap.to(navLink, {
            x: "120%",
            duration: 1,
            opacity: -0.5,
            zIndex: -10
         })

         gsap.to(project, {
            x: "250%",
            duration: 1,
         })

         animation = true
      }
      else {
         gsap.to(cross, {
            rotate: "0deg",
            duration: 1
         })

         gsap.to(navLink, {
            x: "0%",
            duration: 1,
            opacity: 1,
            // zIndex:-10
         })

         gsap.to(project, {
            x: "0%",
            duration: 1,
         })

         animation = false
      }
   })
}

navAnimation()

function loco() {
   const scroll = new LocomotiveScroll({
      el: document.querySelector('#main'),
      smooth: true
   });


   const elems = document.querySelectorAll(".elem")
   const page2 = document.querySelector("#page2")
   elems.forEach((e) => {
      e.addEventListener("mouseenter", () => {
         let bgimg = e.getAttribute("data-img")
         page2.style.backgroundImage = `url(${bgimg})`
      })
   })



   // footer

   const top = document.querySelector("#top i")

   top.addEventListener("click", () => {
      scroll.scrollTo(0)
   })

}


const arrow = document.querySelector(".arrow i")

arrow.addEventListener("click",() => {

   gsap.to("#page1", {
      duration: 1, // adjust duration as needed
      scrollTo: { y: "#yourElementId", autoKill: false },
   });
})

loco()



