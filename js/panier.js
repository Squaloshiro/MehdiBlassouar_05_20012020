
const lePanier = () => {

    let local = JSON.parse(localStorage.getItem("panier"));

    local?.length && local.forEach((panier) => {
        affichePanier(panier);

    })


    affichePanierTableau();
    affichePanierNombre();
    formmulaire()
    affichePanierVide()
    sommeTotaleFonction()


}


lePanier()


