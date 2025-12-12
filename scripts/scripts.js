// 1. Selecteer de button waarmee ik mijn menu open
let menuButton = document.querySelector('.menuButton')
// 2. Wacht tot iemand erop klikt
menuButton.addEventListener('click',function() {
// 3. Verander de class van mijn <nav>, zodat deze zichtbaar wordt
document.querySelector('nav').classList.toggle('menuOpen')
document.querySelector('.menuButton').classList.toggle('open')
})

//1. selecteer het element dat moet bewegen
//2. voeg de click eventlistener toe
//3. toggle de class