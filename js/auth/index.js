
// This is one way to do it but it's not the best way
/* import { login } from "login.js";
 import { logout } from "logout.js";
 import { signup } from "signup.js";

 export { login, logout, signup }; */

// This is the best way to do it

export * from "./logout.js"
export * from "./login.js"


// export * from "./register.js"

