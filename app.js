const cart = document.querySelector('.cart')

const buybtn = document.querySelectorAll('.buyhere')

const container1 = document.querySelector('.container1')






buybtn.forEach(btn => {
     btn.addEventListener('click', function(){
          cart.style.display = 'block';
          container1.style.display = 'none';
          
          


          cart.innerHTML = `<div class="inner">

          <img class="back" src="arrow-back-regular-36.png" alt="" srcset="">
          <img  class="cartimg" src=${btn.parentElement.parentElement.querySelector('img').src} alt="">
          <div class="text">
          <h1>${btn.parentElement.parentElement.querySelector('.book-name').innerHTML}</h1>
          <h2>${btn.parentElement.parentElement.querySelector('.author').innerHTML}</h2>
          <p>${btn.parentElement.parentElement.querySelector('.deskription').innerHTML}</p>
      
          <p class="price">Price: <span>12.00$</span> </p>     
      
          <button id="buy">BUY</button>
      
          </div>
      </div>`


      const back = document.querySelector('.back')


      back.addEventListener('click', close)

     function close(){
     cart.style.display = 'none';
     container1.style.display = 'block';

}


const buy = document.querySelector('#buy');

const pay = document.querySelector('.pay');


buy.addEventListener('click', openPay)

function openPay(){
     cart.style.display = 'none'
     pay.style.display = 'block'
}


const backArr = document.querySelector('.back-arr');




backArr.addEventListener('click', goBack)

function goBack(){
     cart.style.display = 'block'
     pay.style.display = 'none'

     const inputs = document.querySelectorAll('input');
     inputs.forEach(input => {
       input.value = '';
     });
     const warn = document.querySelector('.warningpay');

     warn.style.display ='none'

     const submitPay = document.querySelector('.submit');
     submitPay.style.background = 'rebeccapurple'
     submitPay.innerHTML = 'Submit payment'

}


const payMethod = document.querySelectorAll('.payment');

payMethod.forEach(method => {
     method.addEventListener('click', function(){
          method.classList.toggle('active')
     })
})

const submitPay = document.querySelector('.submit');

submitPay.addEventListener('click', submit);

function submit() {
  const inputs = document.querySelectorAll('input');
  let isEmpty = false;
  inputs.forEach(input => {
    if (!input.value) {
      isEmpty = true;
    }
  });

  if (isEmpty) {
    const warning = document.createElement('p');
    warning.innerHTML = 'Please fill all the necessary blanks!';
    warning.style.color = 'red';
    warning.setAttribute('class', 'warningpay')
    const form = document.querySelector('form');
    form.appendChild(warning);
  } else {
    submitPay.style.background = 'green';
    submitPay.innerHTML = 'Submited';
  }
}






     })
})



