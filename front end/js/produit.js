const myIdCamera = location.search.substring(4);




const getCamera = (id) => {


    
    const theCamera = request(`http://localhost:3000/api/cameras/${id}`);

    theCamera.then((myCamera) =>{
    
//lien avec la page HTML

let produitPrincipal = document.getElementById("fiche_princhipal");


// creation structur html



let divImage = document.createElement("div");
let photoSoloProduit = document.createElement("img");
let renseignementProduit = document.createElement("div");
let intitulerProduit = document.createElement("h2");
let descriptionPrincipal = document.createElement("p")
let selecteurOption = document.createElement("div");
let selectObjectif = document.createElement("form");
let selectQuantite = document.createElement("form");
let affichePrix = document.createElement("span");
let ajoutPanier = document.createElement("button");


//attribut produit



divImage.setAttribute("class", "elements_produits");
photoSoloProduit.setAttribute("src", myCamera.imageUrl);
photoSoloProduit.setAttribute("alt", "image du produit");
photoSoloProduit.setAttribute("class", "image_produit");
renseignementProduit.setAttribute("class", "");
intitulerProduit.setAttribute("class", "");
descriptionPrincipal.setAttribute("class", "");
selecteurOption.setAttribute("class", "")
selectObjectif.setAttribute("class", "")
selectQuantite.setAttribute("class", "")
affichePrix.setAttribute("class", "");
ajoutPanier.setAttribute("class", "");

//agencement html

produitPrincipal.appendChild(divImage);
produitPrincipal.appendChild(renseignementProduit);
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


    });
    
        };
        getCamera(myIdCamera)