let basket = JSON.parse(localStorage.getItem("basket")) || []; // array of strings

const cartAmount = document.getElementById("cartAmount");

const updateCartNumber = () => {
  cartAmount.innerHTML = basket.length;
};

updateCartNumber();
