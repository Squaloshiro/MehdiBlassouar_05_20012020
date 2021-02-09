
const myFunction = () => {


    const produits = request('http://localhost:3000/api/cameras')
    produits.then((cameras) => {
        cameras.forEach((camera) => {
            afficheProduit(camera)
        })
    })

}
myFunction();

