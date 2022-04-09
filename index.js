//this is to call the inital api 
async function start() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()
    createBreedList(data.message)
}

start()

//this function is to populate the dropdown list with the api dog breed list
function createBreedList(breedList) {
    document.getElementById("breed").innerHTML = `
    <select onchange="loadByBreed(this.value)">
        <option>Choose a dog breed</option>
        ${Object.keys(breedList).map(function (breed) {
        return `<option>${breed}</option>`
    }).join('')}
    </select>
    `
}

//this function is for fetching the dog images from api
async function loadByBreed(breed) {
    if (breed != "Choose a dog breed") {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
        const data = await response.json()
        console.log(data)
        createSlideshow(data.message)
    }
}

// create the html for empty slideshpe div
function createSlideshow(images) {
    document.getElementById("slideshow").innerHTML = `<div class="slide"
    style="background-image: url('${images[0]}')"></div>`
}