//document addEventListener
document.addEventListener('DOMContentLoaded',function(){

    //Content
    const form=document.getElementById('frmEmployee');
    const nameInput = document.getElementById('txtFullName');
    const emailInput=document.getElementById('txtemail');
    const phoneNumberInput=document.getElementById('phoneNumber');
    const passwordInput=document.getElementById('txtpassword');
    const confirmpasswordInput=document.getElementById('txtconfirmpassword');

    //Error message
    const nameError=document.getElementById('fullNameError');
    const emailError=document.getElementById('emailError');
    const phoneError=document.getElementById('phoneError');
    const passwordError=document.getElementById('passwordError');
    const confirmPasswordError=document.getElementById('confirmPasswordError');


    //for password checking
    confirmpasswordInput.addEventListener('input',confirmPassWord);
    //function for password confirmation
    function confirmPassWord(){
        var pwd=passwordInput.value;
        var cfmPwd=confirmpasswordInput.value;
        if(pwd!=cfmPwd){
            confirmPasswordError.textContent='Both password should be same';
        }
        else{
            confirmPasswordError.textContent='';
        }
    };

    //phone number checking for 10 digit

    phoneNumberInput.addEventListener('input',checkPhone);
    function checkPhone(){
    const phInput = phoneNumberInput.value.toString(); // 
    const length = phInput.length;
    console.log(length);
    if(length!=10){
        phoneError.textContent='Number should be 10 digit';
    }
    else{
        phoneError.textContent='';
    }
   }
   
   //for checking password contain atleat 4 characters
   passwordInput.addEventListener('input',function(){
    const phInput = passwordInput.value.toString(); // 
    const length = phInput.length;
    if(length<=4){
        passwordError.textContent='Atleast 4 character required';
    }
    else{
        passwordError.textContent='';
    }
   });


    //form addEventListener
    form.addEventListener('submit',function(event){
        //prevent form submission
        event.preventDefault();

        //perform validation
        //validation-fullname
        if(!nameInput.value.trim()){
            nameError.textContent="Name is required";
        }else{
            nameError.textContent='';
        }

        //validation-email
        if(!emailInput.value.trim()){
            emailError.textContent="Email is required";
        }else{
            emailError.textContent='';
        }

        //validate phone number
        if(!phoneNumberInput.value.trim()){
            phoneError.textContent='Phone is required';

        }
        else{
            phoneError.textContent='';
        }

        // validate password
        if(!passwordInput.value.trim()){
            passwordError.textContent='Enter password';

        }
        else{
            passwordError.textContent='';
        }
        

        // validate confrim password
        if(!confirmpasswordInput.value.trim()){
            confirmPasswordError.textContent='Enter password confrimation';

        }
        else{
            confirmPasswordError.textContent='';
        }



        //
        });
    });

//form addEventListener