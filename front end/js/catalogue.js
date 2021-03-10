
const myFunction = () => {

    const produits = request('http://localhost:3000/api/cameras')
    produits.then((cameras) => {
        if (cameras === "Probleme server") {
            load()
        } else {
            cameras.forEach((camera) => {
                afficheProduit(camera)
            })
        }
    })
    affichePanierNombre()
}
myFunction();

