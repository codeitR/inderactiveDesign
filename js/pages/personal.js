const signout_btn = document.getElementById("signout_btn")

const token = localStorage.getItem("token") || "";
console.log("token", token)

 if (token == "") {
   window.location.href = "signin.html";
 }


 signout_btn.addEventListener("click", ()=>{
    localStorage.setItem("token", "")
    window.location.href="signin.html"
 })