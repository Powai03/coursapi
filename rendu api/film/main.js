/* fetch('https://api.themoviedb.org/3/movie/25961?api_key=00a9da85d2cbe5645149bedd416ed927')
.then((response) => response.json())
.then((data)=> {
    console.log(data)
})  */


function fetchPoke(){
    return fetch('https://api.themoviedb.org/3/movie/25961?api_key=00a9da85d2cbe5645149bedd416ed927&language=fr-FR')
    .then((response)=> response.json())
}

async function displayPoke(){
    const data = await fetchPoke()
    document.getElementById("pokemon").innerHTML = `
    <h1>${data.title}</h1>
    <img src="https://www.themoviedb.org/t/p/w500/${data.poster_path}" alt="${data.title}" />
`
}

displayPoke()