const getCamera = () => {

    let id = new URLSearchParams(window.location.search)

    id = id.get('id')

    const theCamera = request(`http://localhost:3000/api/cameras/${id}`);

    theCamera.then((myCamera, index) => {
        if (myCamera === "Probleme server") {
            load()
        } /*else if (load() === myCamera) {
            error()
        }*/ else if (!myCamera._id) {
            produitIndispo()
        } else {
            detailProduit(myCamera, index);


        }
    })
    affichePanierNombre()
}
getCamera()

