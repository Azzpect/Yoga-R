const faq = document.querySelector(".faq>div>.bar");
const features_line = document.querySelector(".features>.line");
function addFaqAnimation(observer) {
  faq.classList.add("bar-animation");
  observer.unobserve(faq);
}
function addFeaturesLine(observer) {
  features_line.classList.add("growline-animation");
  observer.unobserve(features_line);
}
handleIntersection(document.querySelector(".faq"), addFaqAnimation);
handleIntersection(document.querySelector(".features"), addFeaturesLine);


//features bar position

let bar = document.querySelector(".line")
let circle = document.querySelector(".circle")
let pos = circle.getBoundingClientRect()

bar.style.left = pos.x-20 + 'px'
bar.style.top = pos.height/2 + 'px'
