$('.slick').slick({
 
    centerMode: true,
    arrows: true,
    focusOnSelect: true,
    slidesToScroll: 5,
    centerPadding: '30px',
    autoplay: true,

    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
                  //script

                  
// Get the modal 

$(document).ready(function() {

  // required elements
  var imgPopup = $('.img-popup');
  var imgCont  = $('.container__img-holder');
  var popupImage = $('.img-popup img');
  var closeBtn = $('.close-btn');

  // handle events
  imgCont.on('click', function() {
    var img_src = $(this).children('img').attr('src');
    imgPopup.children('img').attr('src', img_src);
    imgPopup.addClass('opened');
  });

  $(imgPopup, closeBtn).on('click', function() {
    imgPopup.removeClass('opened');
    imgPopup.children('img').attr('src', '');
  });

  popupImage.on('click', function(e) {
    e.stopPropagation();
  });
  
});


//validation
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()



// Other important pens.
    // Map: https://codepen.io/themustafaomar/pen/ZEGJeZq
    // Dashboard: https://codepen.io/themustafaomar/pen/jLMPKm

    let dropdowns = document.querySelectorAll('.navbar .dropdown-toggler')
    let dropdownIsOpen = false

    // Handle dropdown menues
    if (dropdowns.length) {
      // Usually I don't recommend doing this (adding many event listeners to elements have the same handler)
      // Instead use event delegation: https://javascript.info/event-delegation
      // Why: https://gomakethings.com/why-event-delegation-is-a-better-way-to-listen-for-events-in-vanilla-js
      // But since we only have two dropdowns, no problem with that. 
      dropdowns.forEach((dropdown) => {
        dropdown.addEventListener('click', (event) => {
          let target = document.querySelector('#${event.target.dataset.dropdown}')

          if (target) {
            if (target.classList.contains('show')) {
              target.classList.remove('show')
              dropdownIsOpen = false
            } else {
              target.classList.add('show')
              dropdownIsOpen = true
            }
          }
        })
      })
    }

    // Handle closing dropdowns if a user clicked the body
    window.addEventListener('mouseup', (event) => {
      if (dropdownIsOpen) {
        dropdowns.forEach((dropdownButton) => {
          let dropdown = document.querySelector('#${dropdownButton.dataset.dropdown}')
          let targetIsDropdown = dropdown == event.target

          if (dropdownButton == event.target) {
            return
          }

          if ((!targetIsDropdown) && (!dropdown.contains(event.target))) {
            dropdown.classList.remove('show')
          }
        })
      }
    })

    // Open links in mobiles
    function handleSmallScreens() {
      document.querySelector('.navbar-toggler')
        .addEventListener('click', () => {
          let navbarMenu = document.querySelector('.navbar-menu')

          if (navbarMenu.style.display === 'flex') {
            navbarMenu.style.display = 'none'
            return
          }

          navbarMenu.style.display = 'flex'
        })
    }

    handleSmallScreens();



    let up=document.querySelector(".up");
    window.onscroll=function(){
      if(window.scrollY>=1000)
      {
        up.classList.add("show")
      }
      else{
        up.classList.remove("show")

      }
    };
    up.onclick=function(){
      window.scrollTo({
        top:0,
        behavior:"smooth"
      })
    }