document.addEventListener('DOMContentLoaded', () => {
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const email = document.getElementById('email');
    const direccion = document.getElementById('direccion');
    const telefono = document.getElementById('telefono');
    const password = document.getElementById('password');
    const confirmar = document.getElementById('confirmar');
    const btnRegistrar = document.getElementById('btnRegistrar');
    const btnLimpiar = document.getElementById('btnLimpiar');
    const datosUsuario = document.getElementById('datosUsuario');

    // Validación en tiempo real
    nombre.addEventListener('input', validarNombre);
    apellido.addEventListener('input', validarApellido);
    email.addEventListener('input', validarEmail);
    direccion.addEventListener('input', validarDireccion);
    telefono.addEventListener('input', validarTelefono);
    password.addEventListener('input', validarPassword);
    confirmar.addEventListener('input', validarConfirmar);

    btnRegistrar.addEventListener('click', (e) => {
        e.preventDefault();
        if (validarFormulario()) {
            datosUsuario.innerHTML = `
                <h3>Datos Registrados:</h3>
                <p>Nombre: ${nombre.value}</p>
                <p>Apellido: ${apellido.value}</p>
                <p>Email: ${email.value}</p>
                <p>Direccion: ${direccion.value}</p>
                <p>Telefono: ${telefono.value}</p>
            `;
        }
    });

    btnLimpiar.addEventListener('click', () => {
        nombre.value = apellido.value = email.value = direccion.value = telefono.value = password.value = confirmar.value = '';
        datosUsuario.innerHTML = '';
        document.querySelectorAll('.mensaje-error').forEach(el => el.textContent = '');
        resetearEstilos();
    });

    function validarNombre() {
        const error = document.getElementById('errorNombre');
        if (nombre.value.trim() === '') {
            error.textContent = 'El nombre es obligatorio.';
            nombre.classList.add('invalido');
            return false;
        } else {
            error.textContent = '';
            nombre.classList.remove('invalido');
            nombre.classList.add('valido');
            return true;
        }
    }
    function validarApellido() {
        const error = document.getElementById('errorApellido');
        if (apellido.value.trim() === '') {
            error.textContent = 'El apellido es obligatorio.';
            apellido.classList.add('invalido');
            return false;
        } else {
            error.textContent = '';
            apellido.classList.remove('invalido');
            apellido.classList.add('valido');
            return true;
        }
    }


    function validarEmail() {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const error = document.getElementById('errorEmail');
        if (!regex.test(email.value)) {
            error.textContent = 'Ingrese un email válido.';
            email.classList.add('invalido');
            return false;
        } else {
            error.textContent = '';
            email.classList.remove('invalido');
            email.classList.add('valido');
            return true;
        }
    }

    function validarDireccion() {
        const error = document.getElementById('errorDireccion');
        if(direccion.value.trim() === '') {
            error.textContent = 'La direccion es obligatoria';
            direccion.classList.add('invalido');
            return false;
        }else {
            error.textContent = '';
            direccion.classList.remove('invalido');
            direccion.classList.add('valido');
            return true;

        }
        }

    function validarTelefono() {
        const error = document.getElementById('errorTelefono');
        if(telefono.value.trim() === '') {
            error.textContent = 'El telefono es obligatorio';
            telefono.classList.add('invalido');
            return false;
        }else {
            error.textContent = '';
            telefono.classList.remove('invalido');
            telefono.classList.add('valido');
            return true;

        }
        }
    
    function validarPassword() {
        const error = document.getElementById('errorPassword');
        if (password.value.length < 8) {
            error.textContent = 'La contraseña debe tener al menos 8 caracteres.';
            password.classList.add('invalido');
            return false;
        } else {
            error.textContent = '';
            password.classList.remove('invalido');
            password.classList.add('valido');
            return true;
        }
    }

    function validarConfirmar() {
        const error = document.getElementById('errorConfirmar');
        if (confirmar.value !== password.value) {
            error.textContent = 'Las contraseñas no coinciden.';
            confirmar.classList.add('invalido');
            return false;
        } else {
            error.textContent = '';
            confirmar.classList.remove('invalido');
            confirmar.classList.add('valido');
            return true;
        }
    }

    function validarFormulario() {
        return validarNombre() && validarApellido() && validarEmail() && validarDireccion() && validarTelefono() && validarPassword() && validarConfirmar();
    }

    function resetearEstilos() {
        [nombre, apellido, email, direccion, telefono, password, confirmar].forEach(input => {
            input.classList.remove('valido', 'invalido');
        });
    }
});
