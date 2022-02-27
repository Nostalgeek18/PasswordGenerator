const passwordsInput    = document.querySelectorAll(".password");
const generateBtn       = document.querySelector(".password-btn");
const copyTxt           = document.querySelector(".msgUser");
const passLengthDisplay = document.querySelector(".password-length");

const arrowUp      = document.querySelector(".fa-circle-up");
const arrowDown    = document.querySelector(".fa-circle-down");

let lengthPassword = parseInt(passLengthDisplay.textContent);
/*************************FUNCTIONS ********************************/

function randomPassword() {
    let length = lengthPassword;
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%?&*()_+@{[]}|°/.:^<>";
    let retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }

    passLengthDisplay.textContent = length;
    return retVal;
}

//Fill inputs
function fillPasswordInput(){
    passwordsInput.forEach(password => {
        password.value = randomPassword();
    })
}

//************************EVENT LISTENERS ******************************/

window.addEventListener('load', ()=> {
    fillPasswordInput()
})

generateBtn.addEventListener('click', ()=> {
    fillPasswordInput();
    copyTxt.style.display = 'none';
})

passwordsInput.forEach(input => {
    input.addEventListener('click', ()=> {
        input.readOnly = true;
        navigator.clipboard.writeText(input.value);
        copyTxt.textContent = 'Password copied.'
        copyTxt.style.display = 'block';
    })
})

arrowDown.addEventListener('click', ()=> {
    if(lengthPassword >4){
        lengthPassword--;
        fillPasswordInput();
        copyTxt.textContent = "";
    }else {
        copyTxt.textContent = "Can't have password below 4 characters !";
        copyTxt.style.display = 'block';
    }
})


arrowUp.addEventListener('click', ()=> {
    copyTxt.textContent = "";
    lengthPassword++;
    fillPasswordInput();
})

