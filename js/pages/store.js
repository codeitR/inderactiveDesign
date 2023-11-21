const shop_display = document.getElementById("shop_display");

const baseURL = "https://api.noroff.dev/api/v1/";
const endpoint = "square-eyes";

const displayProducts = async () => {
  const response = await fetch(baseURL + endpoint)
    .then((response) => response.json())
    .catch((error) => errorDisplay(error));

  return (shop_display.innerHTML = await response
    .map(
      (item) => `<div class="video_shopping_card video_card">
    <img src="${item.image}" alt="cart img" />
    <h6 class="shopping_cart_title">${item.title}</h6>
    <h6 class="shopping_cart_price">$${item.price}</h6>
    <div class="buttons flex">
      <a href="video_info_page_2.html?id=${
        item.id
      }" class="shopping_cart_btn info_btn button">Info</a>
      ${updateUI(item.id)}
    </div>
  </div>`
    )
    .join(""));
};

displayProducts();

const errorDisplay = (error) => {
  console.log(error);

  return (shop_display.innerHTML = "something went wrong, please try again ?");
};

let basket = JSON.parse(localStorage.getItem("basket")) || []; // array of strings

const addToCart = (item) => {
  if (basket.includes(item)) return;
  else {
    basket.push(item);
    localStorage.setItem("basket", JSON.stringify(basket));
    displayProducts();
  }
};

const removeFromCart = (id) => {
  basket = basket.filter((item) => item != id);
  localStorage.setItem("basket", JSON.stringify(basket));
  displayProducts();
};

const updateUI = (id) => {
  if (basket.includes(id)) {
    return `
    <div onClick=removeFromCart('${id}') class="shopping_cart_btn button flex">
      Remove
    </div>
  `;
  } else {
    return `
    <div onClick=addToCart('${id}') class="shopping_cart_btn button flex">
      <img src="images/shopping_cart_icon.svg" alt="" />
      Add to Cart
    </div>
    `
  }
};

