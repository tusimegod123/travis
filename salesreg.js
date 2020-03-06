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

function validate(a,b) {
    const nin = document.getElementById(a)
    const pass = document.getElementById(b)
    if (nin.value.length < 5 && nin.value.length < 13) {
        alert('The NIN should be between 5 to 35 characters ')
    }

    if (pass.value.length == 0 || pass.value.length < min || pass.value.length < max) {
        alert('Password should be between 6 to 12 characters')


    }
    
}
