const signin_username = document.getElementById("signin_username");
const signin_form_id = document.getElementById("signin_form_id");

signin_form_id.addEventListener("submit", async (e) => {
  e.preventDefault();

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    username: signin_username.value
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  await fetch("https://api.noroff.dev/api/v1/auth/login", requestOptions)
    .then((res) => res.json())
    .then((res) => localStorage.setItem("token", res?.accessToken));
});
