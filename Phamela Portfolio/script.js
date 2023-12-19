/*=========toggle icon navbar=========*/ 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
/*========scroll selections========*/ 
let selections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window,onscroll = () => {
    selections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            /*====active navbar links====*/
            navLink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    /*=====sticky header====*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    /*===remove toggle icon==*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const form = document.querySelector("form")

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "famiemitra207@gmail.com",
        Password : "0901D8E0F62F9C28AD67B255785066D982E5F311C2B3D2F74B5F3739F76690CC2AC7BF75C0EEBC939890F7F73AE42F69",
        To : 'famiemitra207@gmail.com',
        From : "famiemitra207@gmail.com",
        Subject : "This is the subject",
        Body : "This is the body"
    }).then(
        message => alert(message)
    );
}

form.addEventListener("submit",(e)=> {
    e.preventDefault();

    sendEmail();
});
