let login=document.getElementById('login');
let register=document.getElementById('register');
<<<<<<< HEAD
let form=document.getElementsByClassName('form')[0];
=======
let form_box=document.getElementsByClassName('form')[0];
>>>>>>> 3ee29b6c48dd57a3cea7b6455ee4c5098497d2fe
let register_box=document.getElementsByClassName('register-box')[0];
let login_box=document.getElementsByClassName('login-box')[0];
register.addEventListener('click',()=>{
    form.style.transform='translateX(100%)';
    login_box.classList.add('hidden');
    register_box.classList.remove('hidden');
})
login.addEventListener('click',()=>{
    form.style.transform='translateX(0%)';
    register_box.classList.add('hidden');
    login_box.classList.remove('hidden');
})