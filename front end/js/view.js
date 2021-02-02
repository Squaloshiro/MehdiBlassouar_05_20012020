
const afficheProduit =  (camera) => {
    

//lien avec la page HTML

let produit = document.getElementById("element_principal");


// creation structur html


let ficheProduit = document.createElement("section");
let elemntProduit = document.createElement("div");
let photoProduit = document.createElement("img");
let textProduit = document.createElement("div");
let nameProduit = document.createElement("h2");
let informationProduit = document.createElement("a");
let priceProduit = document.createElement("span");

//attribut produit

ficheProduit.setAttribute("class", "fiche_produit");
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

produit.appendChild(contentAllProduct);
contentAllProduct.appendChild(ficheProduit);
ficheProduit.appendChild(elemntProduit);
ficheProduit.appendChild(textProduit);
elemntProduit.appendChild(photoProduit);
textProduit.appendChild(nameProduit);
textProduit.appendChild(informationProduit);
textProduit.appendChild(priceProduit);

//contenue produit
nameProduit.textContent = camera.name;
informationProduit.textContent = "Fiche produit";
priceProduit.textContent = camera.price / 100 + " euros";




}

let contentAllProduct = document.createElement("div");

//attribut produit

contentAllProduct.setAttribute("class", "enssembles_produits" );



