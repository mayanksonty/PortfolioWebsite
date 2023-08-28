const toggleButton = document.getElementsByClassName('navbar-toggle')[0];

const navbarLinks = document.getElementsByClassName('navbar-links');

toggleButton.addEventListener('click', function () {
    for (var i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].classList.toggle('active');
    }
});


function emailSend() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "mayanksonty@gmail.com",
        Password: "3DEC8EF53A750581C78E14856756FB5A4A6E",
        To: 'mayank.verma310797@gmail.com',
        From: "mayanksonty@gmail.com",
        Subject: "Someone wants to get in touch with you",
        Body: "jai mata di"
    }).then(
        message => alert(message)
    );
}