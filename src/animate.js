/*-------------member center------------------*/
const btn1 = document.querySelector('.login-button');
const input1 = document.querySelector('.login-input');
const closebtn = document.querySelector('.close');
const loginanimate = document.querySelector('.login-animate');
const forgotbtn = document.querySelector('.forgot');
const logforgot = document.querySelector('.login-forgot');
const logbtn = document.querySelector('#btn-3');
const addbtn = document.querySelector('#btn-4');
const addmembermail = document.querySelector('.add-member');
const addbackbtn = document.querySelector('#add-back-btn');
const addnextbtn = document.querySelector('#add-next-btn');
const adddata = document.querySelector('.member-add-data');
const writedatabtn = document.querySelector('#write-data-btn');
const writedata = document.querySelector('.member-data-add-content-member');
const writepsw = document.querySelector('.member-data-look-content-password-add');
const addmemsus = document.querySelector('#add-member-success');
const bklogbtn = document.querySelector('#input-back-btn');
const snpswbtn = document.querySelector('#send-psw-btn');
const firpg = document.querySelector('.first-page');
const memberCenter = document.querySelector('.member-center');
const foot = document.querySelector('footer');
const a1 = document.querySelector('.member-center-top-left a');
const linkbtn1 = document.querySelector('.link-btn1');
const memberdata = document.querySelector('.member-data-look');
const memberdatacotn = document.querySelector('.member-data-look-content-member');
const memberdataout = document.querySelector('.member-data-look-content');
const linkbtn2 = document.querySelector('.link-btn2');
const memberpswbtn = document.querySelector('.member-data-side-button .button-notmain-4');
const memberdatapsw = document.querySelector('.member-data-look-content-password');
const fixpswbtn = document.querySelector('.member-data-look-content-password button');
const fixpsw = document.querySelector('.member-data-look-content-password-fix');

const memberOrder = document.querySelector('.member-order');
const orderbtn = document.querySelector('.member-order-content button');
const orderdetail = document.querySelector('.member-order-content-detail');
const btnback = document.querySelector('#btn-back');
const btncolsedeial = document.querySelector('.close-detail');
btn1.addEventListener('click', () => {
    input1.style.display = 'block';
    btn1.style.display = 'none';
    loginanimate.style.display = 'none';
});
closebtn.addEventListener('click', () => {
    input1.style.display = 'none';
    btn1.style.display = 'block';
    loginanimate.style.display = 'block';
});
addbackbtn.addEventListener('click', () => {
    addmembermail.style.display = 'none';
    btn1.style.display = 'block';
    loginanimate.style.display = 'block';
});

logbtn.addEventListener('click', () => {
    memberCenter.style.display = 'block';
    firpg.style.display = 'none';
    foot.style.top = '1000px';
});
addnextbtn.addEventListener('click', () => {
    adddata.style.display = 'block';
    firpg.style.display = 'none';
    foot.style.top = '1050px';
});
writedatabtn.addEventListener('click', () => {
    writedata.style.display = 'block';
    writepsw.style.display = 'none';
});
addmemsus.addEventListener('click', () => {
    firpg.style.display = 'block';
    adddata.style.display = 'none';
    addmembermail.style.display = 'none';
    btn1.style.display = 'block';
    loginanimate.style.display = 'block';
});


a1.addEventListener('click', () => {
    firpg.style.display = 'block';
    memberCenter.style.display = 'none';
    foot.style.top = '1050px';
});
forgotbtn.addEventListener('click', () => {
    logforgot.style.display = 'block';
    input1.style.display = 'none';
});
addbtn.addEventListener('click', () => {
    addmembermail.style.display = 'block';
    input1.style.display = 'none';
});

bklogbtn.addEventListener('click', () => {
    logforgot.style.display = 'none';
    input1.style.display = 'block';
});
snpswbtn.addEventListener('click', () => {
    logforgot.style.display = 'none';
    input1.style.display = 'block';
});
linkbtn1.addEventListener('click', () => {
    memberdata.style.display = 'block';
    memberCenter.style.display = 'none';
    foot.style.top = '1100px';
});
memberpswbtn.addEventListener('click', () => {
    memberdatapsw.style.display = 'block';
    memberdatacotn.style.display = 'none';
    memberdataout.style.height = '331px';
});
fixpswbtn.addEventListener('click', () => {
    fixpsw.style.display = 'block';
    memberdatapsw.style.display = 'none';
    memberdataout.style.height = '700px';
});
linkbtn2.addEventListener('click', () => {
    memberOrder.style.display = 'block';
    memberCenter.style.display = 'none';
    foot.style.top = '1235px';
});
orderbtn.addEventListener('click', () => {
    orderdetail.style.display = 'block';
});
btnback.addEventListener('click', () => {
    memberCenter.style.display = 'block';
    memberOrder.style.display = 'none';
    foot.style.top = '1000px';
});
btncolsedeial.addEventListener('click', () => {
    orderdetail.style.display = 'none';
});


