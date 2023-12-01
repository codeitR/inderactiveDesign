const basketItems = document.getElementById("basketItems");

const cartAmountID = document.getElementById("cartAmount");

let basket = JSON.parse(localStorage.getItem("basket")) || []; // array of strings

console.log(basket);

const baseURL = "https://api.noroff.dev/api/v1/";
const endpoint = "square-eyes/";

const displayBasket = () => {
  return basket?.map(async (item) => {
    let data = await fetch(baseURL + endpoint + item)
      .then((res) => res.json())
      .then((res) => res);

   

    return (basketItems.innerHTML += `
      <div class="">
          <img class="cart-image" src=${data?.image} alt="">
          <div class="title cart-title">${data?.title}</div>
          <button class="shopping_cart_btn button flex" onClick=removeFromCart('${data?.id}')>Remove</button>
      </div>
     `);
  });
};

displayBasket();

const removeFromCart = (id) => {
  basket = basket.filter((item) => item != id);
  localStorage.setItem("basket", JSON.stringify(basket));
  basketItems.innerHTML = "";
  cartAmountID.innerHTML = basket.length
  displayBasket();
};
