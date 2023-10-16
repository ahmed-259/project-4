/* global  $ */

$(function () {
    
    "use strict";
    
    // Setting Variables
    const form = document.getElementById('form'),
          username = document.getElementById('username'),
          email = document.getElementById('email'),
          password = document.getElementById('password'),
          checkPassword = document.getElementById('checkpassword');

    form.addEventListener('submit', (e) => {
        
        e.preventDefault();
        
        checkInputs();
        
        
        
    });
    
    
    // Check Function
    function checkInputs() {
        
        // Get The Values From The Inputs
        const usernameValue = username.value,
              emailValue = email.value,
              passwordValue = password.value,
              checkPasswordValue = checkPassword.value;
        
        if (usernameValue === '') { setErrorFor(username, 'هذا الحقل لايمكن ان يكون فارغ'); }
        else { setSuccesFor(username); }
        
        if (emailValue === '') { setErrorFor(email, 'هذا الحقل لايمكن ان يكون فارغ'); }
        else { setSuccesFor(email); }
        
        if (passwordValue === '') { setErrorFor(password, 'هذا الحقل لايمكن ان يكون فارغ'); }
        else { setSuccesFor(password); }
        
        if (checkPasswordValue === '') { setErrorFor(checkPassword, 'هذا الحقل لايمكن ان يكون فارغ'); }
        else { setSuccesFor(checkPassword); }
        
        // Check If The Two Password Is Matched
        if (passwordValue !== checkPasswordValue) {
            
            setErrorFor(checkPassword, 'Passwords does not match');
        }
        
    }
        
 
    
    
    // Error Function
    function setErrorFor(input, MSG) {
        
        const formControl = input.parentElement, // form-controll div
              small = formControl.querySelector('small');
        
        // Add Error Message
        small.innerText = MSG;
        
        // Add Class Error
        formControl.className = 'Form-control error';
        
        
    }
    
    // Success Function
    function setSuccesFor(input) {
        
        const formControl = input.parentElement; // form-controll div
        
        // Add Class Error
        formControl.className = 'Form-control success';
            
        }
    
    
    
    
});