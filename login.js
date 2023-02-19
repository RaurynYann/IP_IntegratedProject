let login = document.getElementById('login');
let register = document.getElementById('register');
let form = document.getElementsByClassName('form')[0];
let register_box = document.getElementsByClassName('register-box')[0];
let login_box = document.getElementsByClassName('login-box')[0];

register.addEventListener('click', () => {
  form.style.transform = 'translateX(100%)';
  login_box.classList.add('hidden');
  register_box.classList.remove('hidden');
});

login.addEventListener('click', () => {
  form.style.transform = 'translateX(0%)';
  register_box.classList.add('hidden');
  login_box.classList.remove('hidden');
});

if (window.matchMedia('(max-width: 420px)').matches) {
  form.style.transform = 'translateX(100%)';
} else {
  form.style.transform = 'translateX(0%)';
}





var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://yukiproject-13a3.restdb.io/rest/infomation",
  "method": "GET",
  "headers": {
      "content-type": "application/json",
      "x-apikey": "63e5ddad478852088da67fd1",
      "cache-control": "no-cache"
  }
};

$.ajax(settings).done(function (response) {
  console.log(response);

  for (account of response) {
      console.log(account);
      if (jsondata.Email == account.Email) {
          if (jsondata.Password == account.Password) {
              console.log("match");
          }
      } else {
          console.log('not match');
      }
  }
});

var attempt = 3; // Variable to count number of attempts.

// Below function Executes on click of login button.
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var jsondata = {
      "Email": username,
      "Password": password
  };

  var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://yukiproject-13a3.restdb.io/rest/infomation",
      "method": "POST",
      "headers": {
          "content-type": "application/json",
          "x-apikey": "63e5ddad478852088da67fd1",
          "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(jsondata)
  };

  $.ajax(settings).done(function (response) {
      console.log(response);
  });

  if (username == "Formget" && password == "formget#123") {
      alert("Login successfully");
      window.location = "success.html"; // Redirecting to other page.
      return false;
  } else {
      attempt--; // Decrementing by one.
      alert("You have left " + attempt + " attempt;");

      // Disabling fields after 3 attempts.
      if (attempt == 0) {
          document.getElementById("username").disabled = true;
          document.getElementById("password").disabled = true;
          document.getElementById("submit").disabled = true;
          return false;
      }
  }
}
