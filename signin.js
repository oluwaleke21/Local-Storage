const handleSubmit = (event) => {
    event.preventDefault()
    const signUp = new FormData(event.target)

    let userData = {
        username: signUp.get("email"),
        password: signUp.get("password"),
    }

    let fetchUser = localStorage.getItem(userData.email)



    console.log({email : userData.email})

    
}