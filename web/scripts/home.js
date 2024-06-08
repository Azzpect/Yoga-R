const faq = document.querySelector(".faq>div>.bar");
const features_line = document.querySelector(".features>div>.line");
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
