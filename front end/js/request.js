const request = async (url) => {
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;;

    } catch (error) {
        return "Probleme server"
    }

}
const affichePanierNombre = () => {
    let local = JSON.parse(localStorage.getItem("panier"))
    let indexPanier = document.querySelector('#nombre_element_panier')
    indexPanier.textContent = local?.length ? local.length : 0
}