
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
});

function checkInput() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
//username
    if(usernameValue === '') {
        setError(username, 'نام خود را وارد کنید!');
    }else {
        setSuccess(username);
    }
//email
    if(emailValue === '') {
        setError(email, 'ایمیل خود را وارد کنید!');
    }else if(!isEmail(emailValue)) {
        setError(email, 'ایمیل وارد شده صحیح نیست!');
    }else {
        setSuccess(email);
    }
//password
    if(passwordValue === '') {
        setError(password, 'مقدار پسوورد خالی است!');
    }else {
        setSuccess(password);
    }
//password2
    if(password2Value === '') {
        setError(password2, 'مقدار پسوورد خالی است!');
    }else if(passwordValue !== password2Value) {
        setError(password2, 'پسوورد ها با هم برابر نیستند!');
    }else {
        setSuccess(password2);
    }


}

function setError(input, message) {
    const formConterol = input.parentElement;
    const span = formConterol.querySelector('span');

    span.innerHTML = message;

    formConterol.className = "form-control error";
    
}


function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}


const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function isEmail(email) {
    return pattern.test(email);
}


