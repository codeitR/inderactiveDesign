## Fetch all movies page(store.js).

 const baseURL = "https://api.noroff.dev/api/v1/";
 const endpoint = "square-eyes";

 const displayProducts = async () => {
  const response = await fetch(baseURL + endpoint)
    .then((response) => response.json())
    .catch((error) => errorDisplay(error));
}

### fetch each info page (videoinfopage.js)

const baseURL = "https://api.noroff.dev/api/v1/";
const endpoint = "square-eyes";
const displayResult = async () => {
  const data = await fetch(baseURL + endpoint + `/${id}`)
    .then((res) => res.json())
    .catch((err) => displayError(err))}

### fetch on cart page (cart.js)

const baseURL = "https://api.noroff.dev/api/v1/";
const endpoint = "square-eyes/";

const displayBasket = () => {
  return basket?.map(async (item) => {
    let data = await fetch(baseURL + endpoint + item)
      .then((res) => res.json())
      .then((res) => res)})}
      

   
## logic to display and store in local storage.

## remove & add on both store & videoinfo page.

## cart page to see added movies and remove from cart.



# responsiveness
# functional cart
# cart increment
# overall design and typogr 
# login 
# payment cheack out