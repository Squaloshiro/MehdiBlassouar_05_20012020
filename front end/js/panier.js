
const lePanier = () => {

    let local = JSON.parse(localStorage.getItem("panier"));

    local?.length && local.forEach((panier, index) => {
        affichePanier(panier, index);

    })


    affichePanierTableau();
    affichePanierNombre();
    formmulaire()
    affichePanierVide()
    sommeTotaleFonction()
}


lePanier()


