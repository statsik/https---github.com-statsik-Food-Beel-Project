const registernavigation = document.getElementById('register-navigation');
registernavigation.addEventListener('click', function() {
  window.location.href = 'index-register.html';
});

const signinnavigation = document.getElementById('signin-navigation');
signinnavigation.addEventListener('click', function() {
  window.location.href = 'index-signin.html';
});

const scrollButton = document.getElementById('scroll-getstarted');
const targetSection = document.getElementById('menu');
scrollButton.addEventListener('click', function() {
  targetSection.scrollIntoView({ behavior: 'smooth' });
});

const scrollButtonTime = document.getElementById('scroll-timetable');
const targetSectionPage7Time = document.getElementById('page-7');
scrollButtonTime.addEventListener('click', function() {
  targetSectionPage7Time.scrollIntoView({ behavior: 'smooth' });
});

const scrollButtonAdress = document.getElementById('scroll-adress');
const targetSectionPage7Adress = document.getElementById('page-7');
scrollButtonAdress.addEventListener('click', function() {
targetSectionPage7Adress.scrollIntoView({ behavior: 'smooth' });
});

const scrollButtonTelefon = document.getElementById('scroll-telefon');
const targetSectionPage7Telefon = document.getElementById('page-7');
scrollButtonTelefon.addEventListener('click', function() {
targetSectionPage7Telefon.scrollIntoView({ behavior: 'smooth' });
});

const goToOtherSiteButton = document.getElementById('learn-more');
goToOtherSiteButton.addEventListener('click', () => {
  window.location.href = 'https://www.biologyonline.com/dictionary/balanced-diet'; 
});

const scrollButtonService = document.getElementById('serevices-button-slider');
const targetSectionService = document.getElementById('services');
scrollButton.addEventListener('click', function() {
  targetSection.scrollIntoView({ behavior: 'smooth' });
});

const readmorenavigation = document.querySelector('.see-more-products');
readmorenavigation.addEventListener('click', function() {
  window.location.href = 'index-read-more.html';
});

const readmorenavigat = document.querySelector('.button3');
readmorenavigat.addEventListener('click', function() {
  window.location.href = 'index-read-more.html';
});

const goToFacebookButton = document.querySelector('.facebook-icon');
goToFacebookButton.addEventListener('click', () => {
  window.location.href = 'https://www.facebook.com/billsrestaurants/'; 
});

const goToInstagramButton = document.querySelector('.instagram-icon');
goToInstagramButton.addEventListener('click', () => {
  window.location.href = 'https://www.instagram.com/billsrestaurant/'; 
});

const goToTwitterButton = document.querySelector('.twitter-icon');
goToTwitterButton.addEventListener('click', () => {
  window.location.href = 'https://twitter.com/i/flow/login?redirect_after_login=%2FBills_Food'; 
});

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('button-menu-id').addEventListener('click', function() {
    document.querySelector('.header').classList.toggle('open');
  })
})

const scrollButtonMenuTime = document.querySelector('.button2-products');
const targetSectionMenuTime = document.querySelector('.list2');
scrollButtonMenuTime.addEventListener('click', function() {
targetSectionPage7Telefon.scrollIntoView({ behavior: 'smooth' });
});

const scrollButtonMenuContacts = document.querySelector('.button2-contacts');
const targetSectionMenuContacts = document.querySelector('.list2');
scrollButtonMenuContacts.addEventListener('click', function() {
targetSectionPage7Telefon.scrollIntoView({ behavior: 'smooth' });
});