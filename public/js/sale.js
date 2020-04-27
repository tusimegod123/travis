function validating() {
    var username = document.sales.fname

    function allLetter(fname) {
        var letters = /^[a-zA-Z][a-zA-Z\s]*$/;
        if (fname.value.match(letters)) {
            fname.style.border = '2px solid green'
            return true;
        }
        else {
            alert('Name must have alphabet characters only');
            fname.style.border = '2px solid red'
            fname.focus();
            return false;
        }
    }

    function passwordValidation(min, max) {

        if (password.value.length == 0 || password.value.length < min || password.value.length > max) {
            alert('Password should be between 6 to 12 characters')
            password.style.border = '2px solid red'
            return false
        } else {
            password.style.border = '2px solid green'
            return true
        }
    }

    // var ValidateEmail = (email) => {
    //     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    //     if (email.value.match(mailformat)) {
    //         email.style.border = '2px solid green'
    //         return true
    //     }
    //     else {
    //         alert("Invalid email address")
    //         email.style.border = '2px solid red'
    //         email.focus()
    //         return false
    //     }
    // }

    function uid(min, max) {

        if (userid.value.length == 0 || userid.value.length < min ||userid.value.length > max) {
            alert('User Id should be between 5 to 35 characters')
            userid.style.border = '2px solid red'
            return false
        } else {
            userid.style.border = '2px solid green'
            return true
        }
    }

    if (allLetter(username)) {

    }

    if (passwordValidation(6, 12)) {
    }

    
    // if (ValidateEmail(email)) {

    // }
    if (uid(5, 35)) {


    }
}