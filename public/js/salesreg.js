/*function validate() {
    var nin = document.sales.validationDefault05
    if (nin.value.length < 5 && nin.value.length < 13) {
        alert('The NIN should be between 5 to 35 characters ')
    }
}
    function password(min, max) {
        var pass = document.sales.validationDefault02
        if (pass.value.length == 0 || pass.value.length < min || pass.value.length < max) {
            alert('Password should be between 6 to 12 characters')


        }
        
    }
}*/
/*
function alphabet() {
    var letter = /^[A-Za-z]+$/

    if (userid.value.match(letter)) {
        return true
    }
    else {
        alert('not aletters')
    }
}
if (alphabet()) {

    if (pass(6, 16)) {

    }
}
}*/

function validate(a, b, c) {
    var nin = document.getElementById(a)
    var pass = document.getElementById(b)
    var uname = document.getElementById(c)
    if (nin.value.length < 5 && nin.value.length < 13) {
        alert('The NIN ids should be between 5 to 35 characters ')
        nin.style.border = '2px solid red'
    }

    if (pass.value.length == 0 || pass.value.length < min || pass.value.length < max) {
        alert('Password should be between 6 to 12 characters')
        pass.style.border = '2px solid red'


    }

    var letters = /^[A-Za-z]+$/;
    if (uname.value.match(letters)) {
        return true;
    }
    else {
        alert('Full Name must have alphabet characters only');
        uname.style.border = '2px solid red'
        uname.focus();
        return false;
    }



}
