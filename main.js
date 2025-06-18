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
      modal.classList.add('active');
      overlay.classList.add('active')
      body.classList.add('active')

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


  // aqui vem a parte do carrossel, chatino mas entendivel se pa

  
    let indiceAtual = 0;

function atualizarCarrossel() {
  const carrossel = document.getElementById('feedbacks');
  carrossel.style.transform = `translateX(-${indiceAtual * 100}vw)`;
}

function proximo() {
  const total = document.getElementById('feedbacks').children.length;
  indiceAtual = (indiceAtual + 1) % total;
  atualizarCarrossel();
}

function anterior() {
  const total = document.getElementById('feedbacks').children.length;
  indiceAtual = (indiceAtual - 1 + total) % total;
  atualizarCarrossel();
}
