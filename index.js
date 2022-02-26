const passwordsInput = document.querySelectorAll(".password");
const generateBtn    = document.querySelector(".password-btn");
const copyTxt        = document.querySelector(".copied");


/*************************FUNCTIONS ********************************/

function randomPassword() {
    let length = 10;
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%?&*()_+@{[]}|°/.:^<>";
    let retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

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
        copyTxt.style.display = 'block';
    })
})

