
// Setting Variables
    const form = document.getElementById('form'),
          code = document.getElementById('code');


    form.addEventListener('submit', (e) => {
        
        e.preventDefault();
        
        checkInputs();
        
        
        
    });
    

    
    
    // Check Function
    function checkInputs() {
        
        // Get The Values From The Inputs
        const codeValue = code.value;
        
        if (codeValue === '') { setErrorFor(code, 'اكتب كود الشحنة'); }
        else { setSuccesFor(code); }
      
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