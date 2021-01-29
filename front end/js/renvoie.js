const structure = () => {
    document.body.appendChild(document.createElement('main'))
    document.querySelector('main').appendChild(document.createElement('h1'))
    document.querySelector('main').appendChild(document.createElement('div')).setAttribute("id", "divStructure");

        const cloneStructure = () => {
            //document.querySelector('div').insertBefore(document.getElementsById('templateArticle'));
            document.querySelector('template').appendChild(document.createElement('section'))
            document.querySelector('section').appendChild(document.createElement('a.')).setAttribute("id", "image");
            document.querySelector('section').appendChild(document.createElement('a')).setAttribute("id", "content");
            document.querySelector('a').appendChild(document.createElement('h2')).setAttribute("id", "titleArticle");
            document.querySelector('a').appendChild(document.createElement('p')).setAttribute("id", "description");
            document.querySelector('a').appendChild(document.createElement('span')).setAttribute("id", "price");
        }
    cloneStructure();
    let test3 = cloneStructure;


}




structure();

let footElt = document.querySelector('footer');
let eltOfMain = document.querySelector('main');
document.body.insertBefore(eltOfMain,footElt);


