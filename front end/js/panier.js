
const lePanier = () => {
    const thePanier = request('http://localhost:3000/api/cameras');
    thePanier.then((test) => {
        if (test === "Probleme server") {
            error();
        } else {
            let local = JSON.parse(localStorage.getItem("panier"));

            local?.length && local.forEach((panier, index) => {

                affichePanier(panier, index);
            })
        }

    })
    affichePanierTableau();
    affichePanierNombre();
    formmulaire()
    affichePanierVide()
}


lePanier()




