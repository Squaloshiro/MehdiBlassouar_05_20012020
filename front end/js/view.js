const error = () => {
    //window.location.href = "server.html"
    location.replace("server.html")
}


const produitIndispo = () => {
    window.alert('Produit indisponible')
    let pageError = document.querySelector("#agencement_structure")
    pageError.style.display = "none"
}




const afficheProduit = (camera) => {
    camera.price = priceFormat(camera.price)
    //lien avec la page HTML

    let produit = document.getElementById("enssembles_produits");

    //probele id page




    // creation structur html


    let ficheProduit = document.createElement("section");
    let elementClick = document.createElement("a");
    let elemntProduit = document.createElement("div");
    let photoProduit = document.createElement("img");
    let textProduit = document.createElement("div");
    let nameProduit = document.createElement("h2");
    let informationProduit = document.createElement("a");
    let priceProduit = document.createElement("span");

    //attribut produit

    ficheProduit.setAttribute("class", "fiche_produit");
    elementClick.setAttribute("href", "produit.html?id=" + camera._id)

    elemntProduit.setAttribute("class", "elements_produits");
    ficheProduit.setAttribute("id", camera._id);
    textProduit.setAttribute("class", "text_produits");
    photoProduit.setAttribute("src", camera.imageUrl);
    photoProduit.setAttribute("alt", "image du produit");
    photoProduit.setAttribute("class", "image_produit");
    nameProduit.setAttribute("class", "nom_du_produit");
    informationProduit.setAttribute("class", "information_produit");
    informationProduit.setAttribute("href", "produit.html?id=" + camera._id)
    priceProduit.setAttribute("class", "prix_produit");






    //agencement html

    produit.appendChild(ficheProduit);
    ficheProduit.appendChild(elementClick)
    //contentAllProduct.appendChild(ficheProduit);
    elementClick.appendChild(elemntProduit);
    elementClick.appendChild(textProduit);
    elemntProduit.appendChild(photoProduit);
    textProduit.appendChild(nameProduit);
    textProduit.appendChild(informationProduit);
    textProduit.appendChild(priceProduit);

    //contenue produit
    nameProduit.textContent = camera.name;
    informationProduit.textContent = "Fiche produit";
    priceProduit.textContent = camera.price;

    let local = JSON.parse(localStorage.getItem("user"))

}




const detailProduit = (myCamera) => {

    //lien avec la page HTML

    let produitPrincipal = document.getElementById("fiche_princhipal");
    let titleProduit = document.querySelector("#title_Page_Produit");
    let titreProduit = document.querySelector("#titre_Produit")

    // creation structur html


    let divPrincipale = document.createElement("div");
    let divImage = document.createElement("div");
    let photoSoloProduit = document.createElement("img");
    let renseignementProduit = document.createElement("div");
    let descriptionPrincipal = document.createElement("p")
    let selecteurOption = document.createElement("div");
    let selectObjectif = document.createElement("select");
    let selectQuantite = document.createElement("select");
    let affichePrix = document.createElement("span");
    let ajoutPanier = document.createElement("input");



    //attribut produit


    divPrincipale.setAttribute("class", "agencement_structure")
    divImage.setAttribute("class", "div_photo");
    photoSoloProduit.setAttribute("src", myCamera.imageUrl);
    photoSoloProduit.setAttribute("alt", "photo_produit");
    photoSoloProduit.setAttribute("class", "image_produit");
    renseignementProduit.setAttribute("class", "fiche_descriptif");
    descriptionPrincipal.setAttribute("class", "");
    selecteurOption.setAttribute("class", "")
    selectObjectif.setAttribute("class", "")
    selectQuantite.setAttribute("class", "")
    affichePrix.setAttribute("class", "");
    ajoutPanier.setAttribute("id", "commande");
    selectObjectif.setAttribute("id", "select")
    selectQuantite.setAttribute("id", "select_option")
    ajoutPanier.setAttribute("class", "ajout au panier")
    ajoutPanier.setAttribute("type", "button")
    ajoutPanier.setAttribute("value", "Ajouter au panier" + priceFormat(myCamera.price))





    //agencement html
    produitPrincipal.appendChild(divPrincipale)
    divPrincipale.appendChild(divImage);
    divPrincipale.appendChild(renseignementProduit);
    divImage.appendChild(photoSoloProduit);
    renseignementProduit.appendChild(descriptionPrincipal);
    renseignementProduit.appendChild(selecteurOption);
    renseignementProduit.appendChild(ajoutPanier);

    selecteurOption.appendChild(selectObjectif);
    selecteurOption.appendChild(selectQuantite);
    selecteurOption.appendChild(affichePrix);

    //contenue produit

    titleProduit.textContent = myCamera.name;
    titreProduit.textContent = myCamera.name;
    descriptionPrincipal.textContent = myCamera.description;
    affichePrix.textContent = priceFormat(myCamera.price);


    myCamera.lenses.forEach((lenses) => {
        let choixDeLobjectif = document.createElement("option");
        document
            .getElementById("select")
            .appendChild(choixDeLobjectif).innerHTML = lenses;
    });


    let quantiter = [...Array(25).keys()].map(i => i + 1);

    quantiter.forEach((qte) => {

        let tableauQuantite = document.createElement("option");
        tableauQuantite.setAttribute("value", qte)
        document
            .getElementById("select_option")
            .appendChild(tableauQuantite).innerHTML = qte;
    })




    selectQuantite.addEventListener('change', (event) => {

        ajoutPanier.value = "Ajouter au panier " + priceFormat(myCamera.price * event.target.value)

    });

    let choixObjectif = document.getElementById("select")
    let ajoutAuPanier = document.querySelector('#nombre_element_panier');


    let local = JSON.parse(localStorage.getItem("panier"))

    ajoutPanier.addEventListener('click', (e) => {

        const newajoutPanier = {
            ref: myCamera,//._id,
            objectif: choixObjectif.value,
            quantiter: selectQuantite.value,
            //nom: myCamera.name,
            //description: myCamera.description,
            //image: myCamera.imageUrl,
            //prix: myCamera.price = priceFormat(myCamera.price)
        }
        if (local?.length) {
            local = [...local, newajoutPanier]
            localStorage.setItem("panier", JSON.stringify(local))
        } else {
            localStorage.setItem("panier", JSON.stringify([newajoutPanier]))
        }
        //local?.length ? local.length : 0
        if (local?.length) {
            ajoutAuPanier.textContent = local.length
        } else {
            ajoutAuPanier.textContent = 1
            document.location.reload()

        }
    })
}


const affichePanierTableau = () => {
    let local = JSON.parse(localStorage.getItem("panier"))
    let tablePanier = document.getElementById("element_a_sup")

    let bouttonSupPanier = document.createElement("input")
    let totalPanier = document.createElement("span")



    bouttonSupPanier.setAttribute("type", "button")
    bouttonSupPanier.setAttribute("class", "button_sup_pan")
    bouttonSupPanier.setAttribute("value", "Supprimer le panier")
    totalPanier.setAttribute("class", "Somme_Totale")


    let sommeTotale = 0
    local.forEach((panier) => {
        sommeTotale += panier.ref.price * panier.quantiter
    })

    totalPanier.textContent = "Somme total : " + priceFormat(sommeTotale)

    tablePanier.appendChild(bouttonSupPanier)
    tablePanier.appendChild(totalPanier)



    bouttonSupPanier.addEventListener('click', (e) => {
        localStorage.removeItem("panier")
        window.location.reload();
    })

}

const affichePanier = (panier, index) => {



    let tablePanier = document.getElementById("tableau_panier")






    // creation structur html

    let ligneTitre = document.createElement("tr")



    let ligneProduit = document.createElement("tr")
    let elementImg = document.createElement("td")
    let imgPanier = document.createElement("img")
    imgPanier.setAttribute("src", panier.ref.imageUrl);
    imgPanier.setAttribute("class", "image_Panier");
    ligneProduit.setAttribute("class", "change_place_produit")

    let elementTitre = document.createElement("td")
    let titrePanier = document.createElement("h2")
    ligneTitre.setAttribute("class", "change_place_titre")

    let elementObjectif = document.createElement("td")
    let objectifPanier = document.createElement("p")

    let elementQuantite = document.createElement("td")
    let quantiterProduit = document.createElement("span")

    let elementPrixUnitaire = document.createElement("td")
    let prixUnitaire = document.createElement("span")

    let elementPrixTotal = document.createElement("td")
    let prixTotal = document.createElement("span")

    let elementSupUnitaire = document.createElement("td")
    let bouttonSupPanierUnitaire = document.createElement("input")
    bouttonSupPanierUnitaire.setAttribute("type", "button")
    bouttonSupPanierUnitaire.setAttribute("id", "button_sup_elmt")
    bouttonSupPanierUnitaire.setAttribute("value", "Supprimer ce produit")





    tablePanier.appendChild(ligneProduit)
    ligneProduit.appendChild(elementImg)
    elementImg.appendChild(imgPanier)

    ligneProduit.appendChild(elementTitre)
    elementTitre.appendChild(titrePanier)
    ligneProduit.appendChild(elementObjectif)
    elementObjectif.appendChild(objectifPanier)
    ligneProduit.appendChild(elementQuantite)
    elementQuantite.appendChild(quantiterProduit)
    ligneProduit.appendChild(elementPrixUnitaire)
    elementPrixUnitaire.appendChild(prixUnitaire)
    ligneProduit.appendChild(elementPrixTotal)
    elementPrixTotal.appendChild(prixTotal)
    ligneProduit.appendChild(elementSupUnitaire)
    elementSupUnitaire.appendChild(bouttonSupPanierUnitaire)


    titrePanier.textContent = panier.ref.name
    quantiterProduit.textContent = "Quantiter : " + panier.quantiter
    objectifPanier.textContent = "objectif : " + panier.objectif
    prixUnitaire.textContent = "Prix total : " + priceFormat(panier.ref.price * panier.quantiter)


    bouttonSupPanierUnitaire.addEventListener('click', (e) => {
        supprimerUnArticle(index)
    })

    const supprimerUnArticle = (i) => {
        let local = JSON.parse(localStorage.getItem("panier"));
        local.splice(i, 1);
        localStorage.clear();
        localStorage.setItem("panier", JSON.stringify(local));
        window.location.reload();
    };
}

const formmulaire = () => {

    document.getElementById("email").addEventListener("input", () => {
        let parragrapheErreur = document.getElementById('error');
        if (document.getElementById("email").value != document.getElementById("email2").value) {
            parragrapheErreur.innerHTML = "Les deux adresses emails ne corespondent pas";
        } else {
            parragrapheErreur.innerHTML = "";
        }
    })

    /* document.getElementById("mdp2").addEventListener("input", (e) => {
         let parragrapheErreur = document.getElementById('error')
         if (this.value != document.getElementById("mdp").value) {
             parragrapheErreur.innerHTML = "Les deux mots de passe ne corespondent pas"
         } else {
             parragrapheErreur.innerHTML = ""
         }
     })*/

    document.forms["inscription"].addEventListener("submit", (e) => {
        e.preventDefault()
        let erreure
        let inputs = this.document.getElementsByTagName("input")

        for (let i = 0; i < inputs.length; i++) {
            console.log('------------------------------------');
            console.log(inputs[i]);
            console.log('------------------------------------');
            if (!inputs[i].value) {
                erreure = "Veulliez renseigner tous les champs !!!"
            }

        }

        if (erreure) {
            //e.preventDefault()
            document.getElementById('error').innerHTML = erreure
            return false
        } else {
            alert("Votre formulair a bien été envoyer")
        }

        /* let nom = document.getElementById("nom")
         let prenom = document.getElementById("prenom")
         let email = document.getElementById("email")
         let emailConf = document.getElementById("email2")
         let mdp = document.getElementById("mdp")
         let mdpConf = document.getElementById("mdp2")
     
         if (!mdpConf.value) {
             erreure = " votre mdp conf "
         }
         if (!mdp.value) {
             erreure = " votre mdp "
         }
     
         if (!emailConf.value) {
             erreure = " votre email conf "
         }
         if (!email.value) {
             erreure = " votre email "
         }
         if (!prenom.value) {
             erreure = " votre prenom "
         }
         if (!nom.value) {
             erreure = " votre nom "
         }*/

        /*for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                erreure = "Veulliez renseigner tous les éléments"
            }
            else if (error) {
                e.preventDefault()
                document.getElementById('error').innerHTML = erreure
                return false
            } else {
                alert("Votre formulair a bien été envoyer")
            }
     
        }*/







    })
}