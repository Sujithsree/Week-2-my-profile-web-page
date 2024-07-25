
const form = document.querySelector('form')
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let fnameError = document.getElementById("fnameError")
    fnameError.innerHTML='';

    let lnameError = document.getElementById("lnameError")
    lnameError.innerHTML ='';

    let Erroremail = document.getElementById("emailError")
    Erroremail.innerHTML ='';

    let ErrorSubject = document.getElementById("errorSubject")
    ErrorSubject.innerHTML = '';

    let errorMessage = document.getElementById("errorMessage")
    errorMessage.innerHTML = '';
     



    const fuserName = document.getElementById('fname').value
    const luserName = document.getElementById("lname").value

    const userEmail = document.getElementById("email").value
    const emailValidate=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

    const errorSub = document.getElementById("subject").value
    const message = document.getElementById("message").value

    if (fuserName === ''){
        
        fnameError.innerHTML = "Enter the your firstname!.."     
    }
    else if(luserName === ''){
        lnameError.innerHTML = "Enter the your lastname!.."
    }

    else if(!emailValidate.test(userEmail)){
        Erroremail.innerHTML = "invalid Email"
    }

    else if(errorSub === ''){
        ErrorSubject.innerHTML = "Please Enter your subject!.."
    }

    else if(message === ''){
        errorMessage.innerHTML = "Please Enter your Message!.."
    }

    else {
        form.submit()
    }


    


})


