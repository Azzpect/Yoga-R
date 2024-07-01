let prices = document.querySelectorAll(".price")
let priceBtn = document.querySelectorAll(".price>button")

console.log(priceBtn)

prices.forEach(price => {
  price.addEventListener("mouseover", e => {
    if(Array.from(e.target.classList).includes("price")) {
      let active_price = document.querySelector(".active-price")
      active_price?.classList.remove("active-price")
      e.target.classList.add("active-price")
    }
  })
})

priceBtn.forEach(btn => {
  btn.addEventListener("click", e => {
    window.open("https://calendly.com/vr4exim/sales_discussion")
  })
})
