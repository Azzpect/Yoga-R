function handleIntersection(element, func) {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        func(observer, element);
      }
    });
  }, options);
  observer.observe(element);
}

let ham = document.querySelector(".hamburger")
let nav = document.querySelector(".navbar")
ham.addEventListener("click", e => {
  document.querySelectorAll(".ham-line").forEach(line => {
    line.classList.toggle("active-ham-line")
  })
  ham.classList.toggle("active-ham")
  nav.classList.toggle("active-nav")
})
