'use strict';
// Using Js to manipulate html elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Function to remove the hidden class and open the modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Function to add the hidden class and close the modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Create a for loop to be able to access all 3 modals having same class name
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Listen for keyboard event
document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  // Using the Escape key to closeModal when the hidden class isn't contained
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
