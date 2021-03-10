const error = () => {
    window.location.replace("server.html")
}

const load = () => {
    let spinner = document.querySelector(".loadcontent");
    spinner.className += " load_server";
};




const afficheProduit = (camera) => {
    camera.price = priceFormat(camera.price)
    //lien avec la page HTML

    let produit = document.getElementById("enssembles_produits");

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
    descriptionPrincipal.setAttribute("class", "description_fiche");
    selecteurOption.setAttribute("class", "element_selection")
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

    // choix de l'objectif

    myCamera.lenses.forEach((lenses) => {
        let choixDeLobjectif = document.createElement("option");
        document
            .getElementById("select")
            .appendChild(choixDeLobjectif).innerHTML = lenses;
    });

    // choix des quantitées

    let quantiter = [...Array(25).keys()].map(i => i + 1);

    quantiter.forEach((qte) => {

        let tableauQuantite = document.createElement("option");
        tableauQuantite.setAttribute("value", qte)
        document
            .getElementById("select_option")
            .appendChild(tableauQuantite).innerHTML = qte;
    })

    // ecoute du selction quantitée

    selectQuantite.addEventListener('change', (event) => {
        ajoutPanier.value = "Ajouter au panier " + priceFormat(myCamera.price * event.target.value)
    });

    // Creation  objet local storage

    let choixObjectif = document.getElementById("select")

    ajoutPanier.addEventListener('click', (e) => {
        let local = JSON.parse(localStorage.getItem("panier"))
        let newLocal = JSON.parse(localStorage.getItem("newPanier"))
        let id =
            Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);

        let newajoutPanier = {
            ref: myCamera,
            objectif: choixObjectif.value,
            quantiter: selectQuantite.value,
            unikid: id
        }
        newAppelLocal(newajoutPanier, newLocal)
        appelLocal(newajoutPanier, local)
        affichePanierNombre()
        ajoutQuantiterAnimation()
    })
    animationBoutonAjoutPanier(renseignementProduit)
    ajoutQuantiterAnimation()
}

//affichage de mention "vous avez ajout 1 produits dans votre panier"

const animationBoutonAjoutPanier = (renseignementProduit) => {
    let animation = document.createElement("p")
    animation.setAttribute("class", "animation_Ajout")
    renseignementProduit.appendChild(animation)
}

const ajoutQuantiterAnimation = () => {
    let local = JSON.parse(localStorage.getItem("panier"))
    let animation = document.querySelector(".animation_Ajout")
    let localQuantiterAnimation = local?.length ? local.length : 0
    if (localQuantiterAnimation === 1) {

        animation.style.display = "block"
        animation.textContent = " Vous avez " + localQuantiterAnimation + " produit dans votre panier "

    } else if (localQuantiterAnimation >= 2) {

        animation.textContent = " Vous avez " + localQuantiterAnimation + " produits dans votre panier "

    } else if (localQuantiterAnimation === 0) {
        animation.style.display = "none"
    }
}

// Envoie de l'objet dans le local storage 

const appelLocal = (newajoutPanier, local) => {
    if (local?.length) {
        local = [...local, newajoutPanier]
        localStorage.setItem("panier", JSON.stringify(local))
    } else {
        localStorage.setItem("panier", JSON.stringify([newajoutPanier]))
    }
}

// Envoie de l'objet dans le 2eme local storage

const newAppelLocal = (newajoutPanier, newLocal) => {
    if (newLocal?.length) {
        newLocal = [...newLocal, newajoutPanier]
        localStorage.setItem("newPanier", JSON.stringify(newLocal))
    } else {
        localStorage.setItem("newPanier", JSON.stringify([newajoutPanier]))
    }
}

// afficher le nombre de produit a côté du logo panier

const affichePanierNombre = () => {
    let local = JSON.parse(localStorage.getItem("panier"))
    let indexPanier = document.querySelector('#nombre_element_panier')
    indexPanier.textContent = local?.length ? local.length : 0
}
// creation du supprimer le panier

const affichePanierTableau = () => {

    let tablePanier = document.getElementById("element_a_sup")
    let bouttonSupPanier = document.createElement("input")
    let totalPanier = document.createElement("span")

    bouttonSupPanier.setAttribute("type", "button")
    bouttonSupPanier.setAttribute("class", "button_sup_pan")
    bouttonSupPanier.setAttribute("value", "Supprimer le panier")
    totalPanier.setAttribute("class", "Somme_Totale")
    tablePanier.appendChild(bouttonSupPanier)
    tablePanier.appendChild(totalPanier)

    bouttonSupPanier.addEventListener('click', () => {
        localStorage.removeItem("panier")
        localStorage.removeItem("newPanier")
        affichePanierNombre()
        affichePanierVide()
    })
}

// creation d'une fonction calcul pour la page du panier

const sommeTotaleFonction = () => {
    let local = JSON.parse(localStorage.getItem("panier"))
    let sommeTotale = 0
    let totalPanier = document.querySelector(".Somme_Totale")
    local?.length && local.forEach((panier) => {
        sommeTotale += panier.ref.price * panier.quantiter
    })
    totalPanier.textContent = "Somme totale : " + priceFormat(sommeTotale)
}

// creation page panier 

const affichePanier = (panier) => {
    const unikid = panier.unikid
    let tablePanier = document.getElementById("tableau_panier")

    // creation structur html

    let ligneTitre = document.createElement("tr")
    let ligneProduit = document.createElement("tr")
    let elementImg = document.createElement("td")
    elementImg.setAttribute('class', 'element_image')

    let imgPanier = document.createElement("img")
    imgPanier.setAttribute("src", panier.ref.imageUrl);
    imgPanier.setAttribute("class", "image_Panier");
    ligneProduit.setAttribute("class", "change_place_produit")

    let elementTitre = document.createElement("td")
    let titrePanier = document.createElement("h2")
    ligneTitre.setAttribute("class", "change_place_titre")
    ligneProduit.setAttribute("id", unikid)


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
    quantiterProduit.textContent = "Quantité : " + panier.quantiter
    objectifPanier.textContent = "objectif : " + panier.objectif
    prixUnitaire.textContent = "Prix total : " + priceFormat(panier.ref.price * panier.quantiter)


    bouttonSupPanierUnitaire.addEventListener('click', (e) => {

        supprimerUnArticle(panier.unikid)
        ligneProduit.parentNode.removeChild(ligneProduit)
        affichePanierNombre()
        sommeTotaleFonction()
        affichePanierVide()

    })
}

//Fonction supprimer un article

const supprimerUnArticle = (unikid) => {

    const newLocal = JSON.parse(localStorage.getItem("newPanier"))
    const newNewlocal = newLocal.filter(produit => produit.unikid !== unikid)
    localStorage.setItem("newPanier", JSON.stringify(newNewlocal));
    const local = JSON.parse(localStorage.getItem("panier"));
    const newlocal = local.filter(produit => produit.unikid !== unikid)
    localStorage.setItem("panier", JSON.stringify(newlocal));

};

//afficher le panier vide

const affichePanierVide = () => {

    let pan = document.getElementById("nombre_element_panier")
    let blockPage = document.getElementById("bloc_page")
    if (pan.textContent == 0) {

        let main = document.getElementById("element_principal_Panier")
        main.style.display = "none"

        let newTitle = document.createElement("h1")
        newTitle.textContent = "Votre panier est vide"
        blockPage.appendChild(newTitle)

        let footer = document.getElementById("footer")
        blockPage.insertBefore(newTitle, footer);
    }
}

//Creation du formulaire

const formmulaire = () => {

    let verifNombre = /[0-9]/;
    let verifMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let verifCharacter = /[§!@#$%^&*().?":{}|<>]/;
    let autreVerifchara = /[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?/

    let nom = document.getElementById("nom");
    let prenom = document.getElementById("prenom");
    let emailError = document.getElementById("email_manquant");
    let adresseError = document.getElementById("adresse_manquante");
    let cityError = document.getElementById("ville_manquante");
    let inputs = this.document.getElementsByTagName("input")


    document.forms["inscription"]["Nom"].addEventListener("input", (e) => {
        if (
            autreVerifchara.test(inputs["Nom"].value) === false ||
            verifNombre.test(inputs["Nom"].value) === true ||
            verifCharacter.test(inputs["Nom"].value) === true ||
            inputs["Nom"].value === ""
        ) {
            e.preventDefault();
            nom.textContent = "Format incorect";
            nom.style.color = "orange"
            return false
        } else {
            nom.textContent = ""
        }
    })

    document.forms["inscription"]["Prenom"].addEventListener("input", (e) => {
        if (
            autreVerifchara.test(inputs["Prenom"].value) === false ||
            verifNombre.test(inputs["Prenom"].value) === true ||
            verifCharacter.test(inputs["Prenom"].value) === true ||
            inputs["Prenom"].value === ""
        ) {
            e.preventDefault();
            prenom.textContent = "Format incorect";
            prenom.style.color = "orange"
            return false
        } else {
            prenom.textContent = ""
        }
    })

    document.forms["inscription"]["email"].addEventListener("input", (e) => {
        if (
            verifMail.test(inputs["email"].value) === false) {
            emailError.textContent = "Format incorect";
            emailError.style.color = "orange"
            return false
        } else {
            emailError.textContent = ""
        }
    })

    document.forms["inscription"]["adresse"].addEventListener("input", (e) => {
        if (verifNombre.test(inputs["adresse"].value) === false || autreVerifchara.test(inputs["adresse"].value) === false ||
            verifCharacter.test(inputs["adresse"].value) === true || inputs["adresse"].value === ""
        ) {
            adresseError.textContent = "Format incorect";
            adresseError.style.color = "orange"
            return false
        } else {
            adresseError.textContent = ""
        }
    })

    document.forms["inscription"]["ville"].addEventListener("input", (e) => {
        if (autreVerifchara.test(inputs["ville"].value) === false ||
            verifNombre.test(inputs["ville"].value) === true ||
            verifCharacter.test(inputs["ville"].value) === true ||
            inputs["ville"].value === "") {
            cityError.textContent = "Format incorect";
            cityError.style.color = "orange"
            return false
        } else {
            cityError.textContent = ""
        }
    })

    document.forms["inscription"].addEventListener("submit", (e) => {
        e.preventDefault()
        let erreur
        let inputs = this.document.getElementsByTagName("input")
        let verif = document.getElementsByClassName("verification")

        for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                erreur = "Veulliez renseigner tous les champs !!!"
            }
        }
        for (let i = 0; i < verif.length; i++) {
            if (verif[i].innerHTML === "Format incorect") {
                erreur = "Veulliez renseigner corectement les champs !!!"
            }
        }
        if (erreur) {
            e.preventDefault()
            document.getElementById('error').innerHTML = erreur
            document.getElementById('error').style.color = "red"
            return false
        } else {
            alert("Votre formulaire a bien été envoyé")
            erreur = ""
            let contact = {
                firstName: inputs["Nom"].value,
                lastName: inputs["Prenom"].value,
                address: inputs["adresse"].value,
                city: inputs["ville"].value,
                email: inputs["email"].value,
            }
            envoieDonne(contact)
        }
    })
}

// envoie de l'objet data
const envoieDonne = (contact) => {

    let local = JSON.parse(localStorage.getItem("panier"))

    let products = []
    local.forEach((product) => {
        products.push(product.ref._id);
    })
    let data = {
        contact,
        products,
    }
    post(data)
}

// recup order id et lastnam pour message d'introduction a la confirmation de commande

const creatConfirmation = (local) => {
    document.getElementById("firstName").innerHTML = local.contact.lastName;
    document.getElementById("orderId").innerHTML = local.orderId;
}

//creation page confirmation

const recupPanier = (panierRecup) => {

    let afficheCommande = document.getElementById("recup_commande")
    let ligneConf = document.createElement("tr")
    ligneConf.setAttribute("class", "ligne_panier_conf")
    let confImg = document.createElement("td")
    let imgConf = document.createElement("img")
    imgConf.setAttribute("src", panierRecup.ref.imageUrl);
    imgConf.setAttribute("class", "image_confirmation");

    let confTitre = document.createElement("td")
    let titreConf = document.createElement("h2")

    let eltQuantiterConf = document.createElement("td")
    let quantiterConf = document.createElement("span")

    let prixConf = document.createElement("td")
    let prixFinal = document.createElement("span")

    afficheCommande.appendChild(ligneConf)
    ligneConf.appendChild(confImg)
    ligneConf.appendChild(confTitre)
    ligneConf.appendChild(eltQuantiterConf)
    ligneConf.appendChild(prixConf)
    confImg.appendChild(imgConf)
    confTitre.appendChild(titreConf)
    eltQuantiterConf.appendChild(quantiterConf)
    prixConf.appendChild(prixFinal)

    quantiterConf.textContent = "Quantité : " + panierRecup.quantiter
    titreConf.textContent = panierRecup.ref.name
    prixFinal.textContent = "Prix : " + priceFormat(panierRecup.ref.price * panierRecup.quantiter)
}

//Creation Fonction calcul page de confirmation

const prixTotalconf = () => {

    let divPrix = document.getElementById("prix_conf_total")
    let totalConfirmation = document.createElement("span")

    totalConfirmation.setAttribute("class", "Somme_Totale_confirmation")
    divPrix.appendChild(totalConfirmation)
}

const sommeTotaleConfirmation = (newLocal) => {

    let sommeTotale = 0
    let totalConfirmation = document.querySelector(".Somme_Totale_confirmation")
    newLocal.forEach((commande) => {
        sommeTotale += commande.ref.price * commande.quantiter
    })
    totalConfirmation.textContent = "Somme totale : " + priceFormat(sommeTotale)
}







