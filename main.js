'use strict'

const buttons = document.querySelectorAll('.open-plan')
const modals = document.querySelectorAll('.modal-plan')
const overlay = document.querySelector('.overlay')

const body = document.querySelector('body')

buttons.forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
  
      // Fecha todos os modais antes
      modals.forEach(m => m.classList.remove('active'));
      body.classList.add('.active')
  
      // Abre o modal correspondente
      modal.classList.toggle('active');
      overlay.classList.toggle('active')
      body.classList.toggle('active')

      function toggleModal() {
        modal.classList.remove('active')
        overlay.classList.remove('active')
        body.classList.remove('active')
      }

      overlay.addEventListener('click', function(){
        toggleModal();
    })
    });
  });