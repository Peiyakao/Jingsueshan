const paybtn = document.querySelector('#pay-btn');
const paypage = document.querySelector('.pay-infor-page');
const firstpage = document.querySelector('.first-page');
const foot = document.querySelector('footer');
const buynextbtn = document.querySelector('#buy-next');
const paycheck = document.querySelector('.pay-check-page');
const writepage = document.querySelector('.write-page');
const STEP1 = document.querySelector('.STEP1');
const STEP2 = document.querySelector('.STEP2');
const STEP3 = document.querySelector('.STEP3');
const paycheckbtn = document.querySelector('.pay-check-page-bottom');
const paymoneybtn = document.querySelector('#pay-money-btn');
const paypagend = document.querySelector('.pay-page');
const paym1btn = document.querySelector('#pay-m-1');
const paycomplete = document.querySelector('.pay-complete');
const paybackbtn = document.querySelector('#pay-back-btn');
paybtn.addEventListener('click', () => {
    firstpage.style.display = 'none';
    paypage.style.display = 'block';
    foot.style.top = '1331px';
});
buynextbtn.addEventListener('click', () => {
    writepage.style.display = 'none';
    paycheck.style.display = 'block';
    paycheckbtn.style.display = 'block';
    foot.style.top = '1200px';
    // STEP1.style.{ `$background-image` } = 'url("../image/shoppingcargo/arrow1-2-3.png")';
    // STEP2.style.{ `$background-image` } = 'url("../image/shoppingcargo/arrow1-1.png")';
});
paymoneybtn.addEventListener('click', () => {
    paypagend.style.display = 'block';
    paycheck.style.display = 'none';
    paycheckbtn.style.display = 'none';
    // STEP1.style.{ `$background-image` } = 'url("../image/shoppingcargo/arrow1-2-3.png")';
    // STEP2.style.{ `$background-image` } = 'url("../image/shoppingcargo/arrow1-1.png")';
});
paym1btn.addEventListener('click', () => {
    paycomplete.style.display = 'block';
});
paybackbtn.addEventListener('click', () => {
    firstpage.style.display = 'block';
    paypage.style.display = 'none';
    foot.style.top = '945px';
});

