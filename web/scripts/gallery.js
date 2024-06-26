let tags = document.querySelectorAll(".tag");
let images = { charcoal: 9, coir: 26, granite: 5 };
loadImage("charcoal", 9);
tags.forEach((tag) => {
  tag.addEventListener("click", (e) => {
    document.querySelector("#active").setAttribute("id", "");
    e.target.setAttribute("id", "active");
    loadImage(
      e.target.innerHTML.toLowerCase(),
      images[e.target.innerHTML.toLowerCase()],
    );
  });
});

function loadImage(type, len) {
  let temp = [];
  let container = document.querySelector(".img-container");
  for (let i = 1; i <= len; i++)
    temp.push(
      `<div class="img"><img src="/public/images/gallery/${type}/${i}.jpeg"></div>`,
    );
  container.innerHTML = temp.join("");
}
