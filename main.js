'use strict'

const btns = document.querySelectorAll('.open-plan')

const modal = document.getElementById('modal-plan')

const overlay = document.querySelector('.overlay')

const body = document.querySelector('body')

btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        modal.classList.toggle('active')
        overlay.classList.toggle('active')
        body.classList.toggle('active')
    })
})

overlay.addEventListener('click', function(){
    modal.classList.toggle('active')
    overlay.classList.toggle('active')
    body.classList.toggle('active')
})