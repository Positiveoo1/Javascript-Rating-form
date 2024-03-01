const stars= document.querySelectorAll('.fa-star');
const hearts= document.querySelectorAll('.fa-heart');
const smiles = document.querySelectorAll('.fa-face-smile, .fa-face-smile-wink, .fa-face-frown-open, .fa-face-frown');


stars.forEach(star => {
    star.addEventListener('click', (event) => {
        star.classList.toggle('change1');
        
    })
})

hearts.forEach(heart => {
    heart.addEventListener('click', () => {
        heart.classList.toggle('change2');
    })
})

smiles.forEach(smile => {
    smile.addEventListener('click', () => {
        smile.classList.toggle('change1');
        })

});
