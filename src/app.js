import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let stateInput = document.getElementById('stateSelection');
  let paymentContainer = document.getElementById('paymentMethodContainer');
  let fullForm = document.getElementById('form');
  let filled = document.getElementsByName('isFilled')
  let payment = document.querySelectorAll('input[name = "payment"]') //trae las opciones 
  let cancelBtn = document.getElementById('cancelBtn');

  //prevenir que se envie el form
  fullForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isWrong = false;

    if (stateInput.value == '') {
      stateInput.classList.add('border-danger');
      stateInput.style.backgroundColor = '#fadbd8';

    } else {
      stateInput.classList.remove('border-danger');
      stateInput.style.backgroundColor = '#fff';

    }

    let paymentChecked = document.querySelector('input[name="payment"]:checked')
    if (!paymentChecked) {
      paymentContainer.classList.add('border');
      paymentContainer.classList.add('border-2');
      paymentContainer.classList.add('border-danger');
      paymentContainer.classList.add('border-danger');
      isWrong = true;
    } else {
      paymentContainer.classList.remove('border');
      paymentContainer.classList.remove('border-2');
      paymentContainer.classList.remove('border-danger');

    }


    for (let input of filled) {
      if (input.value.trim() === '') {
        input.classList.add('border-danger');
        input.placeholder = 'Info required'
        input.style.backgroundColor = '#fadbd8'
        isWrong = true
      } else {
        input.classList.remove('border-danger');
        input.style.backgroundColor = '#fff'

      }
    }



    if (!isWrong) {
      alert('Formulario enviado con éxito!!')
    }

  });





  for (let input of filled) {
    //evento
    input.addEventListener('input', () => {
      //validacion y actualizacion
      if (input.value.trim() !== '') {
        input.classList.remove('border-danger');
        input.style.backgroundColor = '#fff'
      }
    })
  }

  stateInput.addEventListener('input', () => {
    if (stateInput.value !== '') {
      stateInput.classList.remove('border-danger');
      stateInput.style.backgroundColor = '#fff';
    }
  })

  payment.forEach(radio => {
    radio.addEventListener('change', () => {
      paymentContainer.classList.remove('border', 'border-2', 'border-danger');
    })
  })


  function onCancel() {
    alert('Operacion cancelada')
  }
  cancelBtn.addEventListener('click', onCancel)



};

