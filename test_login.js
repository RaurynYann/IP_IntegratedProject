let login = document.getElementById('login');
let register = document.getElementById('register');
let form = document.getElementsByClassName('form')[0];
let register_box = document.getElementsByClassName('register-box')[0];
let login_box = document.getElementsByClassName('login-box')[0];

register.addEventListener('click', () => {
  form.style.transform = 'translateY(-100%)';
  login_box.classList.add('hidden');
  register_box.classList.remove('hidden');
});

login.addEventListener('click', () => {
  form.style.transform = 'translateY(0%)';
  register_box.classList.add('hidden');
  login_box.classList.remove('hidden');
});

if (window.matchMedia('(max-width: 420px)').matches) {
  form.style.transform = 'translateY(100%)';
} else {
  form.style.transform = 'translateX(0%)';
}

const formEl = document.quarySelector('.form');

formEl.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);

    fetch('https://yukiproject-13a3.restdb.io/rest/infomation',{
        method:'POST',
        header:{
            'Content-Type': 'application/json'
        }
        body: JSON.stringify(data)
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))

});