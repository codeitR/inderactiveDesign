let openBtn = document.querySelector(".bi-list")
let closeBtn = document.querySelector(".bi-x")
let menu = document.querySelector(".navbar_menu_items")

let basketGlobal = JSON.parse(localStorage.getItem("basket")) || []; // array of strings

const cartAmount = document.getElementById("cartAmount");

const updateCartNumber = () => {
  cartAmount.innerHTML = basketGlobal.length;
};

updateCartNumber();


openBtn.addEventListener("click", ()=>{
  openBtn.classList.toggle("hide")
  closeBtn.classList.toggle("hide")
  menu.classList.toggle("mobile-menu")
})

closeBtn.addEventListener("click", ()=>{
  openBtn.classList.toggle("hide")
  closeBtn.classList.toggle("hide")
  menu.classList.toggle("mobile-menu")
})