const card = document.querySelectorAll('.card')
card.forEach(element => {
    element.addEventListener('click', () => {
        // removeActiveClasses();
        element.classList.toggle('active')
    })

});


function removeActiveClasses() {
    card.forEach(element => {
        element.classList.remove('active')
    });
}