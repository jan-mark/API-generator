async function getDog(){
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    document.getElementById('dogImage').src = data.message;
}

async function getCat(){
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    document.getElementById('catImage').src = data[0].url;
}

async function getQuotes() {
    const response = await fetch('https://inspirobot.me/api?generate=true');
    const data = await response.text();
    document.getElementById('qoutesImage').src = data;
}
