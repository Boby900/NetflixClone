const originals = document.getElementById("originals")
const trending = document.getElementById("trending")
const wishlist = document.getElementById("wishlist")
const topRated = document.getElementById("top")



const getOriginals = async()=>{
        try{
            const response = await fetch("https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213")
            const data = await response.json()
            originals.innerHTML = `<img src='${data.results[0].poster_path}'>`
        }

        catch(error){
            console.error(error)
        }
        }

getOriginals()
