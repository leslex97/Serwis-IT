document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Dziękujemy za wiadomość, ' + name + '! Odpowiemy na Twój email: ' + email + ' wkrótce.');
        document.getElementById('contactForm').reset();
    } else {
        alert('Proszę wypełnić wszystkie pola.');
    }
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            const targetID = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetID);
    
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Przesunięcie od góry (możesz dostosować dla nagłówka)
                behavior: 'smooth'
            });
        });
    });
});