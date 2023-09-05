document.addEventListener("DOMContentLoaded",() => {
    const registerButton = document.getElementById("register");

    registerButton.addEventListener("click",() => {
        const usernameInput = document.getElementById("name");
        const passwordInput = document.getElementById("password");

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === "" || password === "") {
            alert("Пожалуйста, заполните все поля.");
        } else {
            alert("Регистрация успешна!");
        }

        function req(){
            const request = new XMLHttpRequest();
            request.open('GET', '');
        }

    });
});

