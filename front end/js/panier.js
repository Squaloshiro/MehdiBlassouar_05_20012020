let local = JSON.parse(localStorage.getItem("user"));

local.forEach((panier) => {
    

    affichePanier(panier)
});

