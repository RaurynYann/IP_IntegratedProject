let login=document.getElementById('login');
let register=document.getElementById('register');
let form=document.getElementsByClassName('form')[0];
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



var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://yukiproject-13a3.restdb.io/rest/infomation",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "<your CORS apikey here>",
      "cache-control": "no-cache"
    }
  }
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

  var jsondata = {"field1": "xyz","field2": "abc"};
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://yukiproject-13a3.restdb.io/rest/infomation",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "<your CORS apikey here>",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify(jsondata)
}
$.ajax(settings).done(function (response) {
    console.log(response);
  });