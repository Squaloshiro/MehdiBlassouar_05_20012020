const myIdCamera = location.search.substring(4);




const getCamera = (id) => {
    const theCamera = request(`http://localhost:3000/api/cameras/${id}`);
    theCamera.then((myCamera) =>{
    
//lien avec la page HTML

let produitPrincipal = document.getElementById("fiche_princhipal");


// creation structur html


let divPrincipale = document.createElement("div");
let divImage = document.createElement("div");
let photoSoloProduit = document.createElement("img");
let renseignementProduit = document.createElement("div");
let intitulerProduit = document.createElement("h2");
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
intitulerProduit.setAttribute("class", "");
descriptionPrincipal.setAttribute("class", "");
selecteurOption.setAttribute("class", "")
selectObjectif.setAttribute("class", "")
selectQuantite.setAttribute("class", "")
affichePrix.setAttribute("class", "");
ajoutPanier.setAttribute("class", "commande");
selectObjectif.setAttribute("id", "select")
selectQuantite.setAttribute("id", "select_option")
ajoutPanier.setAttribute("class", "ajout au panier")
ajoutPanier.setAttribute("type", "button")
ajoutPanier.setAttribute("value", "Ajouter au panier" +  myCamera.price / 100  +  " euros")





//agencement html
produitPrincipal.appendChild(divPrincipale)
divPrincipale.appendChild(divImage);
divPrincipale.appendChild(renseignementProduit);
divImage.appendChild(photoSoloProduit);
renseignementProduit.appendChild(intitulerProduit);
renseignementProduit.appendChild(descriptionPrincipal);
renseignementProduit.appendChild(selecteurOption);
renseignementProduit.appendChild(ajoutPanier);

selecteurOption.appendChild(selectObjectif);
selecteurOption.appendChild(selectQuantite);
selecteurOption.appendChild(affichePrix);

//contenue produit
intitulerProduit.textContent = myCamera.name;
descriptionPrincipal.textContent = myCamera.description;
affichePrix.textContent = myCamera.price / 100 + " euros";


myCamera.lenses.forEach((lenses) => {
    let choixDeLobjectif = document.createElement("option");
    document
    .getElementById("select")
    .appendChild(choixDeLobjectif).innerHTML = lenses;
});

const quantiter = ['1','2','3','4','5','6','7','8','9','10'];

quantiter.forEach((qte) => {
let tableauQuantite = document.createElement("option");
tableauQuantite.setAttribute("value",qte )
document
.getElementById("select_option")
.appendChild(tableauQuantite).innerHTML = qte;

selectQuantite.addEventListener('change', (event) =>{
    
    ajoutPanier.value  = "Ajouter au panier" +  myCamera.price / 100 * event.target.value   +  " euros"

});







})



    });
    
        };
        getCamera(myIdCamera)