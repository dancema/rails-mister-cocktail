/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import 'bootstrap';


import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Well done !"],
    typeSpeed: 100,
    loop: true
  });
}

let count = 0
let oneTime = true
document.addEventListener('keyup', (event) => {
  if (event.key === "ArrowRight"){
    document.getElementById('game').children[count].classList.toggle("active")
    count += 1
    document.getElementById('game').children[count].classList.toggle("active")
  }
  count = count % 15
  if (count == 0  && oneTime === true) {
    document.getElementById('game').children[15].classList.toggle("active")
    document.getElementById('game').children[0].classList.toggle("active")
    loadDynamicBannerText();
    oneTime = false
  }
})

