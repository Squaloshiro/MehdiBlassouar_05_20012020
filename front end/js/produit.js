const getCamera = () => {
    //const id = location.search.substring(4);
let id = new URLSearchParams(window.location.search)
id = id.get('id')


    const theCamera = request(`http://localhost:3000/api/cameras/${id}`);

    theCamera.then((myCamera) => {

        

        detailProduit(myCamera);

})
}
getCamera()

