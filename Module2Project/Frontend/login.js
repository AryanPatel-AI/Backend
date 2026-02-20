const userNameElement = document.getElementById("userName");

const emailElement = document.getElementById("email");

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click",()=>{
    const userNameValue = userNameElement.value;
    const emailValue = email.value;
    console.log(userNameValue,emailValue);
});