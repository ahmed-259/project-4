

    
   // Setting Variables
    const form = document.getElementById('form'),
          email = document.getElementById('email'),
          password = document.getElementById('password');


    form.addEventListener('submit', (e) => {
        
        e.preventDefault();
        
        checkInputs();
        
        
        
    });
    

    
    
    // Check Function
    function checkInputs() {
        
        // Get The Values From The Inputs
        const emailValue = email.value,
              passwordValue = password.value;
        
        if (emailValue === '') { setErrorFor(email, 'هذا الحقل لايمكن ان يكون فارغ'); }
        else { setSuccesFor(email); }
        
        if (passwordValue === '') { setErrorFor(password, 'هذا الحقل لايمكن ان يكون فارغ'); }
        else { setSuccesFor(password); }
        
   
        
        
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
            
        };


