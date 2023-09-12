const handleSubmit = (event) => {
    event.preventDefault()
    const signUp = new FormData(event.target)

    let userData = {
        username : signUp.get("username"),
        email : signUp.get("email"),
        password : signUp.get("password"),
        confirmpassword : signUp.get("confirmPassword")
    }

    localStorage.setItem(userData.email, JSON.stringify(userData))

    window.location = "signin.html"

    // console.log(userData)

    // console.log(signUp.get("userName"))

}