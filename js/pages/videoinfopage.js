const result = document.getElementById("result");

const currentUrl = window.location.href;

const id = new URL(currentUrl).searchParams.get("id");
console.log("URL ID is ", id);

const baseURL = "https://api.noroff.dev/api/v1/";
const endpoint = "square-eyes";

const displayResult = async () => {
  const data = await fetch(baseURL + endpoint + `/${id}`)
    .then((res) => res.json())
    .catch((err) => displayError(err));

  return (result.innerHTML = `<div class="section video_page_info_section">
    <div class="container video_page_info_container">
      <button class="button section_title gradient_bg">

        <span>Information About : ${data?.title}</span>
      </button>

      <div class="row flex second_row">
        <div class="right_column">
          <img src="${data.image}" alt="creatorImg" />
        </div>
        <div class="left_column">
          <p>
            ${data.description}
            <br />
            <br />
            Price: $${data.price}
          </p>
          <div class="buttons flex">
            <button class="shopping_cart_btn shopping_cart_button button flex">
              ${updateUI(data.id)}
            </button>

            <span class="star_icons">
              <img src="images/star_icon.svg" alt="" class="star_icon" />
              <img src="images/star_icon.svg" alt="" class="star_icon" />
              <img src="images/star_icon.svg" alt="" class="star_icon" />
              <img src="images/star_icon.svg" alt="" class="star_icon" />
              <img src="images/star_icon.svg" alt="" class="star_icon" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>`);
};

let basket = JSON.parse(localStorage.getItem("basket")) || []; // array of strings

const addToCart = (item) => {
  if (basket.includes(item)) return;
  else {
    basket.push(item);
    localStorage.setItem("basket", JSON.stringify(basket));
    displayResult();
  }
};

const removeFromCart = (id) => {
  basket = basket.filter((item) => item != id);
  localStorage.setItem("basket", JSON.stringify(basket));
  displayResult();
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
    `;
  }
};

const displayError = (err) => {
  console.log(err);
  return (result.innerHTML = `no result/ product found`);
};

if(id){
  displayResult()
}
else{
  console.log("no id found")
}