let navbar = document.querySelector('.header .flex .navbar');
let profile = document.querySelector('.header .flex .profile');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   profile.classList.remove('active');
}

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   navbar.classList.remove('active');
}
/**
It selects the navigation bar (.navbar) and profile elements in the header.
It adds click event listeners to the menu button (#menu-btn) and user button (#user-btn).
When the menu button is clicked, it toggles the 'active' class on the navbar and removes the 'active' class from the profile.
When the user button is clicked, it toggles the 'active' class on the profile and removes the 'active' class from the navbar.
 */

window.onscroll = () =>{
   navbar.classList.remove('active');
   profile.classList.remove('active');
}
/**
It adds a scroll event listener to the window.
When the user scrolls, it removes the 'active' class from both the navbar and profile, effectively hiding them.
 */

let mainImage = document.querySelector('.update-product .image-container .main-image img');
let subImages = document.querySelectorAll('.update-product .image-container .sub-image img');

subImages.forEach(images =>{
   images.onclick = () =>{
      src = images.getAttribute('src');
      mainImage.src = src;
   }
});
/*It selects the main image and an array of sub-images in an image container.
It iterates through each sub-image and adds a click event listener to each.
When a sub-image is clicked, it retrieves its source (src) attribute and sets it as the source for the main image, effectively changing the displayed image. */