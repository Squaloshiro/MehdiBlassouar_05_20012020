const priceFormat = (cameraPrice) => {

    let formatage = cameraPrice / 100;
    formatage = (new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(formatage));
    return formatage
}



