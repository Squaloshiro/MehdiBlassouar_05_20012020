const getCamera = () => {

    let id = new URLSearchParams(window.location.search)

    id = id.get('id')


    const theCamera = request(`http://localhost:3000/api/cameras/${id}`);

    theCamera.then((myCamera) => {
        if (myCamera === "Probleme server") {
            error()
        } else if (!myCamera._id) {
            produitIndispo()
        } else {
            detailProduit(myCamera);
        }
    })
    affichePanierNombre()
}
getCamera()

