export async function login(){
    const url ="https://api.noroff.dev/api/v1/auth/login"
    const response = await fetch(url,
        {
            method: "POST",
            body:JSON.stringify({
                username: ""}),
                headers: {
                    "content-Type": "application/json"
                }
        });
    const data = await response.json();
    localStorage.setItem("token", data.accessToken)
    alert("You are now logged in")


    // console.log(data.accessToken)
    //do something with data
    //save token to local storage
    //return token
}

//login is unpredicatable, so we need to use async/await