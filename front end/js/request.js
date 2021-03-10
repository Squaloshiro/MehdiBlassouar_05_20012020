const request = async (url) => {
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    } catch (error) {
        return "Probleme server"
    }
}





const post = (data) => {

    const promise = fetch("http://localhost:3000/api/cameras/order", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
    })

    promise.then(async (response) => {
        try {
            const contenue = await response.json();
            localStorage.setItem("panier", JSON.stringify(contenue))
            window.location = "./confirmation.html"
        } catch (e) {
        }
    })
}






