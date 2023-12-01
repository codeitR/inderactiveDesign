const basketItm = document.getElementById("basketItems");
const totalPrice = document.getElementById("total_price")

let baskets = JSON.parse(localStorage.getItem("basket")) || []; // array of strings

const cartAmountID = document.getElementById("cartAmount");

console.log(baskets)

const baseURL = "https://api.noroff.dev/api/v1/";
const endpoint = "square-eyes/";

let totalAmount = 0

const displayBasket = () => {
    totalAmount = 0
  const productData =  baskets.map(async (item) => {
    let data = await fetch(baseURL + endpoint + item)
      .then((res) => res.json())
      .then((res) => res);

      totalAmount += data?.price
    totalPrice.innerHTML = `Total Price $ ${totalAmount}`

    return (basketItm.innerHTML += `
    <div class="about_buy_2_img flex">
        <img src=${data.image} alt="about_buyImg" />
        <span class="about_buy_2_data">
        ${data.title} <br />$ ${data.price}<br />
        <br />
        <button onClick=removeFromCart('${data?.id}') class="button">Remove</button>
        </span>
    </div>
     `);
  });
};

displayBasket()

const removeFromCart = (id) => {
    baskets = baskets.filter((item) => item != id);
    localStorage.setItem("basket", JSON.stringify(baskets));
    basketItm.innerHTML = "";
    cartAmountID.innerHTML = baskets.length
    displayBasket();
  };
  