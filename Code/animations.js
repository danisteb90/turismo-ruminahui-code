window.addEventListener("DOMContentLoaded", (event) => {
  // Split text into spans
  let typeSplit = new SplitType("[text-split]", {
    types: "words, chars",
    tagName: "span"
  });

  const createScrollTrigger = (triggerElement, timeline) => {
    ScrollTrigger.create({
        trigger: triggerElement,
        start: "top bottom",
        onLeaveBack: () => {
            timeline.progress(0).pause();
        }
    })

    ScrollTrigger.create({
        trigger: triggerElement,
        start: "bottom 90%",
        onEnter: () => timeline.play(),
    })
  }

  document.querySelectorAll("[words-slide-up]").forEach((el) => {
    let tl = gsap.timeline({ paused: true });
    tl.from(el.querySelectorAll(".word"), { 
      opacity: 0, 
      yPercent: 100, 
      duration: 0.5, 
      ease: "back.out(2)", 
      stagger: { amount: 0.5 } 
    });
    createScrollTrigger(el, tl);
  });

  document.querySelectorAll("[words-rotate-in]").forEach((el) => {
    let tl = gsap.timeline({ paused: true });
    tl.set(el.querySelectorAll(".word"), { transformPerspective: 1000 });
    tl.from(el.querySelectorAll(".word"), { 
      rotationX: -90, 
      duration: 0.6, 
      ease: "power2.out", 
      stagger: { amount: 0.6 } 
    });
    createScrollTrigger(el, tl);
  });

  document.querySelectorAll("[words-slide-from-right]").forEach((el) => {
    let tl = gsap.timeline({ paused: true });
    tl.from(el.querySelectorAll(".word"), { 
      opacity: 0, 
      x: "1em", 
      duration: 0.6, 
      ease: "power2.out", 
      stagger: { amount: 0.2 } 
    });
    createScrollTrigger(el, tl);
  });

  document.querySelectorAll("[letters-slide-up]").forEach((el) => {
    let tl = gsap.timeline({ paused: true });
    tl.from(el.querySelectorAll(".char"), { 
      yPercent: 100, 
      duration: 0.2, 
      ease: "power1.out", 
      stagger: { amount: 0.6 } 
    });
    createScrollTrigger(el, tl);
  });

  document.querySelectorAll("[letters-slide-down]").forEach((el) => {
    let tl = gsap.timeline({ paused: true });
    tl.from(el.querySelectorAll(".char"), { 
      yPercent: -120, 
      duration: 0.3, 
      ease: "power1.out", 
      stagger: { amount: 0.7 } 
    });
    createScrollTrigger(el, tl);
  });

  document.querySelectorAll("[letters-fade-in]").forEach((el) => {
    let tl = gsap.timeline({ paused: true });
    tl.from(el.querySelectorAll(".char"), { 
      opacity: 0, 
      duration: 0.2, 
      ease: "power1.out", 
      stagger: { amount: 0.8 } 
    });
    createScrollTrigger(el, tl);
  });

  document.querySelectorAll("[letters-fade-in-random]").forEach((el) => {
    let tl = gsap.timeline({ paused: true });
    tl.from(el.querySelectorAll(".char"), { 
      opacity: 0, 
      duration: 0.05, 
      ease: "power1.out", 
      stagger: { amount: 0.4, from: "random" } 
    });
    createScrollTrigger(el, tl);
  });

  document.querySelectorAll("[scrub-each-word]").forEach((el) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        end: "top center",
        scrub: true
      }
    });
    tl.from(el.querySelectorAll(".word"), { 
        opacity: 0.1, 
        duration: 0.2, 
        ease: "power1.out", 
        stagger: { each: 0.4 } 
      });
  });
  gsap.set("[text-split]", { opacity: 1 });
});
