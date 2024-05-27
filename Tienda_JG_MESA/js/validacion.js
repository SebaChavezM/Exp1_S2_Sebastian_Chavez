document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (validateForm()) {
            alert("Formulario enviado correctamente!");
        }
    });

    function validateForm() {
        const fullName = document.getElementById("fullName").value.trim();
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();
        const birthdate = document.getElementById("birthdate").value;
        const address = document.getElementById("address").value.trim();

        if (!fullName || !username || !email || !password || !confirmPassword || !birthdate) {
            alert("Todos los campos excepto la dirección de despacho son obligatorios.");
            return false;
        }

        if (!validateEmail(email)) {
            alert("El correo electrónico no tiene un formato válido.");
            return false;
        }

        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return false;
        }

        if (!validatePassword(password)) {
            alert("La contraseña debe tener al menos un número, una letra mayúscula y tener entre 6 y 18 caracteres.");
            return false;
        }

        if (!validateAge(birthdate)) {
            alert("Debe tener al menos 13 años para registrarse.");
            return false;
        }

        return true;
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }

    function validatePassword(password) {
        const re = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,18}$/;
        return re.test(password);
    }

    function validateAge(birthdate) {
        const today = new Date();
        const birthDate = new Date(birthdate);
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            return age - 1 >= 13;
        }

        return age >= 13;
    }
});
