export function logout(){
    localStorage.removeItem("token");
    alert("You are now logged out !")
}