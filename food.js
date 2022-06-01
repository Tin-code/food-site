// let galImage = document.querySelectorAll("#imageTest img");

// for (i = 0; i < galImage.length; i++) {
//   let image = galImage[i];
//   image.addEventListener("click", showSinglePict, false);
// }

// function showSinglePict (e){
//     let image = e.target;
//     let imageContenair = document.getElementById('galleryContainer')
//     let bigImage = imageContenair.querySelector('img')
//     bigImage.src = image.src;
//     imageContenair.classList.toggle('visible');
//     imageContenair.addEventListener("click", closeSinglePict, false);
// }

// function closeSinglePict (){
//     let imageContenair = document.getElementById('galleryContainer')
//     imageContenair.classList.toggle('visible');

// }


let galImages = document.querySelectorAll('#imageTest img');

for(let i = 0; i < galImages.length; i++){
    let image = galImages[i];
    image.addEventListener('click', showSinglePict, false);
}

function showSinglePict(e){
    let image = e.target;
    let imageContainer = document.getElementById('galleryContainer');
    let bigImage = imageContainer.querySelector('img');
    bigImage.src = image.src;
    imageContainer.classList.toggle('visible');
    imageContainer.addEventListener('click', closeSinglePict, false);
}

function closeSinglePict(){
    let imageContainer = document.getElementById('galleryContainer');
    imageContainer.classList.toggle('visible');
}
