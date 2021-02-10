const getCamera = () => {
    //const id = location.search.substring(4);
let id = new URLSearchParams(window.location.search)
id = id.get('id')


    const theCamera = request(`http://localhost:3000/api/cameras/${id}`);

    theCamera.then((myCamera) => {
        
        if(!myCamera._id){
            window.alert('Produit indisponible')
            let pageError = document.querySelector("#agencement_structure")
            pageError.style.display = "none"
          
           }
          

           detailProduit(myCamera);

})
}
getCamera()

