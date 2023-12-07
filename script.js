gsap.registerPlugin(ScrollTrigger);

let getRatio = (el) =>
  window.innerHeight / (window.innerHeight + el.offsetHeight);

gsap.utils.toArray("section").forEach((section, i) => {
  section.bg = section.querySelector(".bg");

  // the first image (i === 0) should be handled differently because it should start at the very top.
  // use function-based values in order to keep things responsive
  gsap.fromTo(
    section.bg,
    {
      backgroundPosition: () =>
        i ? `10% ${-window.innerHeight * getRatio(section)}px` : "60% 0px"
    },
    {
      backgroundPosition: () =>
        `70% ${window.innerHeight * (1 - getRatio(section))}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: () => (i ? "top bottom" : "top top"),
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true // to make it responsive
      }
    }
  );
});
