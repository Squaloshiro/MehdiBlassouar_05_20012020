
const afficheProduit = (camera) => {


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
    priceProduit.textContent = camera.price / 100 + " euros";
    
    let local = JSON.parse(localStorage.getItem("user"))
  
    let indexPanier = document.querySelector('#nombre_element_panier')
  
    indexPanier.textContent = local?.length?local.length:0
    
}




const detailProduit = (myCamera) => {
   let idPage = window.location.href.indexOf('?')
   console.log('------------------------------------');
    console.log(idPage);
    console.log('------------------------------------');
    //if(idPage != -1){
       let id =  myCamera._id
       console.log('------------------------------------');
       console.log(id);
       console.log('------------------------------------');
       let finUrl = window.location.href.substring(idPage + 1)
       console.log('------------------------------------');
       console.log(finUrl);
       console.log('------------------------------------');
   // }
   if(finUrl != ('id=' + myCamera._id)){
    window.alert('oooooooooooo')
    let pageError = document.querySelector("#fiche_princhipal")
    pageError.style.display = "none"
   }
  
    
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
    ajoutPanier.setAttribute("value", "Ajouter au panier" + myCamera.price / 100 + " euros")





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
    affichePrix.textContent = myCamera.price / 100 + " euros";


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

        selectQuantite.addEventListener('change', (event) => {

            ajoutPanier.value = "Ajouter au panier" + myCamera.price / 100 * event.target.value + " euros"

        });

    })



    let boutonPanier = document.querySelector('#commande') + myCamera._id
    let choixObjectif = document.getElementById("select")
    let ajoutAuPanier = document.querySelector('#nombre_element_panier');


    let local = JSON.parse(localStorage.getItem("user"))
    
    ajoutPanier.addEventListener('click', (e) => {
    
        const newajoutPanier = [{
            ref: myCamera._id,
            objectif: choixObjectif.value,
            //quantiter : selectQuantite.value,
            nom: myCamera.name,
            description: myCamera.description,
            image : myCamera.imageUrl,
            prix : myCamera.price
        }]
        if (local?.length) {
            local = [...local, newajoutPanier]
            localStorage.setItem("user", JSON.stringify(local))
        } else {
            localStorage.setItem("user", JSON.stringify(newajoutPanier))
        }
        //ajoutAuPanier.textContent = local?.length?local.length:1
        if(local?.length){
        ajoutAuPanier.textContent = local.length
        }else{
        ajoutAuPanier.textContent = 0
        document.location.reload()
        }
    })
    ajoutAuPanier.textContent = local?.length?local.length:0
}


const affichePanier = (panier) => {
    let local = JSON.parse(localStorage.getItem("user"))



    for(let i = 0 ;i < panier.length; i++){
        
    let produitPanier = document.getElementById('element_principal_Panier')


// creation structur html


let sectionPrincipal = document.createElement("section");
let divImagePanier = document.createElement("div");
let photoPanier = document.createElement("img");
let renseignementProduitPanier = document.createElement("div");
let nameProduitPanier = document.createElement("h2");
let descriptionProduitPanier = document.createElement("p")
let afficheObjectif = document.createElement("span");
let affichePrixPanier = document.createElement("span");
photoPanier.setAttribute("src", panier[i].image);
//agencement html

produitPanier.appendChild(sectionPrincipal);
sectionPrincipal.appendChild(divImagePanier);
sectionPrincipal.appendChild(renseignementProduitPanier);
sectionPrincipal.appendChild(afficheObjectif);
sectionPrincipal.appendChild(affichePrixPanier);
divImagePanier.appendChild(photoPanier);
renseignementProduitPanier.appendChild(nameProduitPanier);
renseignementProduitPanier.appendChild(descriptionProduitPanier);

//contenue produit
nameProduitPanier.textContent = panier[i].nom
descriptionProduitPanier.textContent = panier[i].description
afficheObjectif.textContent = panier[i].objectif
affichePrixPanier.textContent = panier[i].prix
}


  
    let indexPanier = document.querySelector('#nombre_element_panier')
  
    indexPanier.textContent = local?.length?local.length:0

}