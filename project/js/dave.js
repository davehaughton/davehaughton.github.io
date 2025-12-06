document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll(".plus_icon").forEach(icon => {
        icon.addEventListener('click', () => {
            icon.classList.toggle('active');
        });
    });
    
});


window.addEventListener('scroll', function() {
    var header = document.querySelector('.navbar-container');
    if (window.scrollY >= 300) {
        header.classList.add('nav-normal');
    } else {
        header.classList.remove('nav-normal');
    }
});

// product page, flip cards in Cuts block
function flipCard(event){
    const card = event.target.closest('.cut_type');
    card.classList.add('flipped');
}
function unFlipCard(event){
    const card = event.target.closest('.cut_type');
    card.classList.remove('flipped');
}

// form validation
function processBrochureForm(event){
    event.preventDefault();
    const nameValue = document.getElementById('name').value;
    const emailValue = document.getElementById('email').value;
    const businessValue = document.getElementById('business').value;
    const nameValidation = document.getElementById('name_validation');
    const emailValidation = document.getElementById('email_validation');
    const businessValidation = document.getElementById('business_validation');
    const brochureForm = document.getElementById('brochure_form');

    if(!nameValue){
        nameValidation.innerHTML = 'Please enter your name';
        return;
    } else {
        nameValidation.innerHTML = '';
    }
    if(!businessValue){
        businessValidation.innerHTML = 'Please enter your business';
        return;
    } else {
        businessValidation.innerHTML = '';
    }
    if(!emailValue){
        emailValidation.innerHTML = 'Please enter your email';
        return;
    } else {
        emailValidation.innerHTML = '';
    }
    

    brochureForm.innerHTML = 'Thanks you for your interest. You can download your brochure <a href="images/brochure.pdf" download>here</a>';


}