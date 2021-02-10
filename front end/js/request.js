const request = async (url) => {
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;;
        
    } catch (error) {
        window.location.href = "server.html"
    }
    
}
console.log('------------------------------------');
console.log(request);
console.log('------------------------------------');