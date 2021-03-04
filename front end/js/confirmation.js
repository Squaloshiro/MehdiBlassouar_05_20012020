const recupDonner = () => {

    let newLocal = JSON.parse(localStorage.getItem("newPanier"))

    let local = JSON.parse(localStorage.getItem("panier"));

    if (localStorage.getItem("panier") === null) {
        alert("Merci pour vote commande. A bientôt");
        window.location = "./index.html";
    }
    else if (undefined === local?.products) {
        alert("cette page n'éxiste pas");
        window.location = "./index.html";
    }


    else if (localStorage.getItem("panier") !== null) {

        /*local.products.forEach((commande) => {
            recupPanier(commande);

        })*/
        newLocal?.length && newLocal.forEach((panierRecup) => {
            recupPanier(panierRecup);

        })

        prixTotalconf()
        sommeTotaleConfirmation(newLocal)
        creatConfirmation(local)
        affichePanierNombre()


        localStorage.removeItem("panier");
        localStorage.removeItem("newPanier");

    }


};


recupDonner()

