const recupDonner = () => {
    if (localStorage.getItem("panier") != null) {
        let local = JSON.parse(localStorage.getItem("panier"));
        local.products.forEach((commande) => {
            recupPanier(commande);

        })
        prixTotalconf()
        sommeTotaleConfirmation(local)
        creatConfirmation(local)


        localStorage.removeItem("panier");

    }

    else {
        alert("Merci pour vote commande. A bientôt");
        window.location = "./index.html";
    }
};

recupDonner()


