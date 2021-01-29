
const afficheProduit =  (teddie) => {
    
    /*document.getElementById("image").innerHTML += '<img src="'+teddie.imageUrl+'" />'
    document.getElementById("title").textContent += teddie.name
    document.getElementById("description").textContent += teddie.description
    document.getElementById("price").textContent += "prix : " + teddie.price */
    
    
    
    const templateElt = document.getElementById("templateArticle")
    const cloneElt = document.importNode(templateElt.content, true)
    
    document.getElementById("image").innerHTML += '<img src="'+teddie.imageUrl+'" />';
    cloneElt.getElementById("title").textContent = teddie.name
    cloneElt.getElementById("description").textContent = teddie.description
    cloneElt.getElementById("price").textContent = "prix : " + teddie.price
    document.getElementById("divParent").appendChild(cloneElt)

    }

    /*document.body.appendChild(document.createElement('main'))
    document.querySelector('main').appendChild(document.createElement('h1'))
    document.querySelector('main').appendChild(document.createElement('div')).setAttribute("id", "divParent");

    document.querySelector('div').appendChild(document.createElement('section')).setAttribute("id", "templateArticle");
    //document.querySelector('template').appendChild(document.createElement('section'))
    document.querySelector('section').appendChild(document.createElement('a.')).setAttribute("id", "image");
    document.querySelector('section').appendChild(document.createElement('a')).setAttribute("id", "content");
    document.querySelector('a').appendChild(document.createElement('h2')).setAttribute("id", "title");
    document.querySelector('a').appendChild(document.createElement('p')).setAttribute("id", "description");
    document.querySelector('a').appendChild(document.createElement('span')).setAttribute("id", "price");*/

const structure = () => {
    document.body.appendChild(document.createElement('main'))
    document.querySelector('main').appendChild(document.createElement('h1'))
    document.querySelector('main').appendChild(document.createElement('div')).setAttribute("id", "divParent");

        const cloneStructure = () => {
            document.querySelector('div').appendChild(document.createElement('template')).setAttribute("id", "templateArticle");
            document.querySelector('template').appendChild(document.createElement('section'))
            document.querySelector('section').appendChild(document.createElement('a')).setAttribute("id", "image");
            document.querySelector('section').appendChild(document.createElement('a')).setAttribute("id", "content");
            document.querySelector('a').appendChild(document.createElement('h2')).setAttribute("id", "titleArticle");
            document.querySelector('a').appendChild(document.createElement('p')).setAttribute("id", "description");
            document.querySelector('a').appendChild(document.createElement('span')).setAttribute("id", "price");
        }
    cloneStructure();
    
 } 




structure();

let footElt = document.querySelector('footer');
let eltOfMain = document.querySelector('main');
document.body.insertBefore(eltOfMain,footElt);

