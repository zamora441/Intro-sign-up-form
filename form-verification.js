const inputs = document.querySelectorAll(".input");
const btnClaim = document.querySelector(".btn-claim");

const showErrorMessage = (input) => {
    const inputContainer = input.parentElement;
    const errorMessage = inputContainer.querySelector(".error-message");
    errorMessage.classList.add("show-error-message");
};

const hiddenErrorMessage = (input) => {
    const inputContainer = input.parentElement;
    const errorMessage = inputContainer.querySelector(".error-message");
    errorMessage.classList.remove("show-error-message");
};

const emailVerification = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

const inputVerification = () => {
    inputs.forEach((input) => {
        if (input.value === "" && input.name !== "email") {
            input.classList.add("input--error");
            input.placeholder = "";
            showErrorMessage(input);
        } else if (input.name === "email" && !emailVerification(input.value)) {
            input.classList.add("input--error");
            showErrorMessage(input);
            input.placeholder = "emain@example.com";
        } else {
            input.classList.remove("input--error");
            hiddenErrorMessage(input);
        }
    });
};

btnClaim.addEventListener("click", (e) => {
    e.preventDefault();
    inputVerification();
});
