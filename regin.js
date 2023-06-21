function shwLogin(){
    document.getElementById("form2").style.display = "block";
    document.getElementById("form1").style.display = "none";
  }
  
  function reg() {
    var userName = document.querySelector('#username');
    var userEmail = document.querySelector('#email');
    var passWord = document.querySelector('#password');
    var passWords = document.querySelector('#passwords');
    var usernameError = document.querySelector('#username-error');
    var emailError = document.querySelector('#eml-error');
    var passwordError = document.querySelector('#pwd-error');
    var passwordsError = document.querySelector('#pwds-error');
    var message = document.querySelector('#error-message');
  
    const vname = /^[a-zA-Z]+$/;
    const vemail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const vpassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  
  
    // Reset error messages
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
  
    // Validate username
    if (userName.value.trim() === '') {
    usernameError.innerText = '\u26A0 Username is required!';
    usernameError.classList.add('error');
    userName.style.border = '2px solid red';
    
    
    }else if (userName.length < 3){
        usernameError.textContent = 'Minimum length required is 3.';
        usernameError.classList.add('error');
        userName.style.border = '2px solid red';
  
    }else if(!userName.value.match(vname)){
        usernameError.textContent = 'Username is not valid!';
        usernameError.classList.add('error');
        userName.style.border = '2px solid red';
    
    } else {
      var u = userName.value;
      usernameError.textContent = '';
      userName.style.border = '2px solid green';
    }
  
    // Validate email
    if (userEmail.value.trim() === '') {
    emailError.textContent = '\u26A0 Email is required!';
    emailError.classList.add('error');
    userEmail.style.border = '2px solid red';
    
    }else if(!userEmail.value.match(vemail)){
        emailError.textContent = 'Email Address is not valid';
        emailError.classList.add('error');
        userEmail.style.border = '2px solid red';
    }else if(!userEmail.value.match(vemail)){
      emailError.textContent = 'Email Address is not valid';
      emailError.classList.add('error');
      userEmail.style.border = '2px solid red';
  
    } else {
      var ue = userEmail.value;
      userEmail.style.border = '2px solid green';
    }
  
    // Validate password
    if (passWord.value.trim() === '') {
    passwordError.textContent = '\u26A0 Please input password!';
    passwordError.classList.add('error');
    passWord.style.border = '2px solid red';
  
    }else if(!passWord.value.match(vpassword)){
        passwordError.textContent = 'Minimum length required is 6, at least one capital letter, \n one number, and one special character.';
        passwordError.classList.add('error');
        passWord.style.border = '2px solid red';
    
    } else {
      passWord.style.border = '2px solid green';
    }
  
    if (passWords.value.trim() === '') {
        passwordsError.textContent = '\u26A0 Please input password!';
      passwordsError.classList.add('error');
      passWords.style.border = '2px solid red';
    
      }else if(!passWords.value.match(vpassword)){
          passwordsError.textContent = 'Minimum length required is 6, at least one letter, \n one number, and one special character.';
          passwordsError.classList.add('error');
          passWords.style.border = '2px solid red';
      
      } else {
        var p = passWords.value;
        passWords.style.border = '2px solid green';
      }
    
    // Registration logic
    var user = {
      username: u,
      email: ue,
      password: p,
    };
  
    if(userName.value == '' && userEmail.value == '' && passWord.value == '' && passWords.value == ''){
      message.textContent = 'Missing all entries!';
    } else if(user.username != null || user.email != null || user.password != null){
      message.textContent = '';
    }
    if(user.username != null && user.email != null && user.password != null){
      var json = JSON.stringify(user);
      localStorage.setItem('user', json);
      console.log('User Added');
      alert('You are now registered!');
      window.location.href = 'login.html';
  
      document.querySelector('#email').value = '';
      document.querySelector('#password').value = '';
     
    }
  
    
  
   
    }
    
  
    // function validName(name) {
      
    //   return re.test(name);
    // }
    
    // function validEmail(email) {
      
    //   return re.test(email);
    // }
    
    // function validPassword(password) {
    //   return re.test(password);
    // }
  
  
  let email = document.getElementById("eml")
  let password = document.getElementById("pwd")
  
  
  function auth() {
      const key = JSON.parse(localStorage.getItem('user'));
      if (email.value == '' && password.value == '') {
          alert("Input email and password!")
      } else if (email.value == '') {
          alert("Email Required")
      } else if (password.value == '') {
          alert("Password Required")
      } else if (email.value == key.email&& password.value == key.password) {
          alert("Logged In Successfully")
          location.replace('service.html');
      } else {
          alert("User Account not Found!")
      }
  [
       
  ]
  }