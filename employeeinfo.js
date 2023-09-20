//document addEventListener
document.addEventListener('DOMContentLoaded',function(){

    //Content
    const form=document.getElementById('frmEmployee');
    const nameInput = document.getElementById('txtFullName');
    const dobInput=document.getElementById('txtdob');
    const ageInput=document.getElementById('numAge');
    const rdoGender=document.querySelectorAll('input[name="gender"]');
    const salaryInput=document.getElementById('numSalary');
    const chkHobby=document.querySelectorAll('input[name="hobby"]');

    // //Error message
    const nameError=document.getElementById('fullNameError');
    const dobError=document.getElementById('dobError');
    const ageError=document.getElementById('ageError');
    const genderError=document.getElementById('genderError');
    const salaryError=document.getElementById('salaryError');
    const hobbyError=document.getElementById('hobbyError');
    
    //Age between 18 and 65
    const today = new Date();
    const maxDate= new Date(today.getFullYear()-18,today.getMonth(),today.getDate());
    const minDate= new Date(today.getFullYear()-65,today.getMonth(),today.getDate());

    dobInput.max=formattedDates(maxDate);
    dobInput.min=formattedDates(minDate);
    //formatted date
    function formattedDates(date){

        //yyyy-mm-dd
        const year=date.getFullYear();
        let month=(date.getMonth()+1).toString().padStart(2,"0");
        let day=date.getDate().toString().padStart(2,"0");
        return `${year}-${month}-${day}`;

    }

    function calculateAge(){
        if (!dobInput.value.trim()) {
            dobError.textContent = "Enter date of birth";
        }
        else {
            const dob = new Date(dobInput.value);
            const today = new Date();
            const age = today.getFullYear() - dob.getFullYear();
            numAge.value = age;
            //Age must be greater than 18 years
            if (age < 18) {
                ageError.textContent = "Age must be greater than 18 years old";
            }else{
                ageError.textContent='';
            }
        }
    }
    dobInput.addEventListener('change',calculateAge);



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

        // //validate age
        if (!dobInput.value.trim()) {
            dobError.textContent = "Enter date of birth";
        }

        //validate gender
        let genderSelected = false;
        for (const radio of rdoGender) {
            
            if (radio.checked) {
                genderSelected = true;
                break; // Exit the loop if a radio button is selected
            }
        }
        if (!genderSelected) {
            genderError.textContent='Enter one option'; 
        } else {
            genderError.textContent='';
        }


        //validate salary
        if(!salaryInput.value.trim()){
            salaryError.textContent="Salary is required";
        }
        else{
            salaryError.textContent='';
        }

        //validate hobby

        let hobbySelected = false;
        for (const checkbox of chkHobby) {
            
            if (checkbox.checked) {
                hobbySelected = true;
                break; // Exit the loop if a radio button is selected
            }
        }
        if (!hobbySelected) {
            hobbyError.textContent='Select one option'; 
        } else {
            hobbyError.textContent='';
        }
    });
});

//form addEventListener