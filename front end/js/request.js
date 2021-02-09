const request = async (url) => {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}
console.log('------------------------------------');
console.log(request);
console.log('------------------------------------');