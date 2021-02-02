const myIdCamera = location.search.substring(4);




const getCamera = (id) => {


    
    const theCamera = request(`http://localhost:3000/api/cameras/${id}`);

    theCamera.then((myCamera) =>{
    
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
ficheProduit.setAttribute("id", myCamera._id);
//ficheProduit.setAttribute("onclick","getCamera(this.id)")
textProduit.setAttribute("class", "text_produits");
photoProduit.setAttribute("src", myCamera.imageUrl);
photoProduit.setAttribute("alt", "image du produit");
photoProduit.setAttribute("class", "image_produit");
nameProduit.setAttribute("class", "nom_du_produit");
informationProduit.setAttribute("class", "information_produit");
informationProduit.setAttribute("href", "produit.html?id=" + myCamera._id)
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
nameProduit.textContent = myCamera.name;
informationProduit.textContent = "Fiche produit";
priceProduit.textContent = myCamera.price / 100 + " euros";


    });
    
        };
        let contentAllProduct = document.createElement("div");

        //attribut produit
        
        contentAllProduct.setAttribute("class", "enssembles_produits" );
        getCamera(myIdCamera)