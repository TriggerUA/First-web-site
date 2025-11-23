document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    let valid = true;

    // Очищення попередніх помилок
    document.querySelectorAll(".error").forEach(e => e.textContent = "");

    // Перевірка імені
    if (name === "") {
        document.getElementById("nameError").textContent = "Введіть ім’я";
        valid = false;
    }

    // Перевірка Email (Regex)
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Некоректний Email";
        valid = false;
    }

    // Перевірка пароля
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Мінімум 6 символів";
        valid = false;
    }

    // Перевірка повтору пароля
    if (password !== confirmPassword) {
        document.getElementById("confirmError").textContent = "Паролі не збігаються";
        valid = false;
    }

    if (valid) {
        alert("Форма успішно відправлена!");
    }
});