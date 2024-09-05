const userForm = document.querySelector("form.login-form");
userForm.addEventListener("submit", eventForm);

class User {
    constructor(email, pwd) {
        this.email = email;
        this.password = pwd;
    }
}

function eventForm(event) {
    event.preventDefault();
    const form = event.target;
    const userEmail = (form.elements.email.value).trim();
    const userPwd = (form.elements.password.value).trim();
    if(!userEmail || !userPwd) alert('All form fields must be filled in');
    const newUser = new User(userEmail, userPwd);
    console.log(newUser)
    form.reset();
    return newUser;
}