// 1. Selecteer de button waarmee ik mijn menu open
let Button = document.querySelector('.menuButton')
// 2. Wacht tot iemand erop klikt
Button.addEventListener('click',function() {
// 3. Verander de class van mijn <nav>, zodat deze zichtbaar wordt
document.querySelector('nav').classList.toggle('menuOpen')
})