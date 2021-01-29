const myFunction = () => {
    const produits = request('http://localhost:3000/api/teddies')
        produits.then((teddies) => {
            teddies.forEach((teddie) => {
            afficheProduit(teddie)
                                            })
                                    })
}
myFunction();

