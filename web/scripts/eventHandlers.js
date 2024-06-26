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

document.querySelector("footer>.email").addEventListener("click", (e) => {
  const recipient = "sales@vr4exim.com";
  const subject = "Hello!";
  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}`;
  window.location.href = mailtoLink;
});
document.querySelector("footer>.phone").addEventListener("click", (e) => {
  const number = 6379088867;
  const telLink = `https://api.whatsapp.com/send?phone=${number}`;
  window.open(telLink, "_blank");
});

let ham = document.querySelector(".hamburger");
let nav = document.querySelector(".navbar");
ham.addEventListener("click", (e) => {
  document.querySelectorAll(".ham-line").forEach((line) => {
    line.classList.toggle("active-ham-line");
  });
  ham.classList.toggle("active-ham");
  nav.classList.toggle("active-nav");
});
