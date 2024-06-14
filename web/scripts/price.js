let prices = document.querySelectorAll(".price")


prices.forEach(price => {
  price.addEventListener("mouseover", e => {
    if(Array.from(e.target.classList).includes("price")) {
      let active_price = document.querySelector(".active-price")
      active_price?.classList.remove("active-price")
      e.target.classList.add("active-price")
    }
  })
})
