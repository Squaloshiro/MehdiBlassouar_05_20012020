const request = async (url) => {
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;;

    } catch (error) {
        return "Probleme server"
    }

}
