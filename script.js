const baseURL = 'https://www.songsterr.com/a/ra/songs.json';
let url;

const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('.form');
const submitBtn = document.querySelector('.submit');

const section = document.querySelector('section');

searchForm.addEventListener('submit', fetchResults);

function fetchResults(e){
    e.preventDefault();
    url = `${baseURL}?pattern=${searchTerm.value}`;
console.log(url);
    fetch(url)
        .then(function(result){
            console.log(result)
            return result.json()
        })
        .then(function(json){
            console.log(json);
            displayResults(json);
        })
}

function displayResults(json){
    console.log('Response:', json)

    while(section.firstChild){
        section.removeChild(section.firstChild);
    }
    
    let eachArtist = json.forEach(r =>{
        console.log(r);

        

    let artist = document.createElement('h2');
    let song = document.createElement('p')

    artist.innerText = r.artist.name;
    song.innerText = r.title;
    
    artist.className = "artist";
    song.className = "song";

    artist.appendChild(song);
    section.appendChild(artist);
    })

    
    } 

    
    
 
