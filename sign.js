document.getElementById("signupForm").addEventListener("submit", function (e) {
e.preventDefault();

const nombres = document.getElementById("nombres").value;
const apellidos = document.getElementById("apellidos").value;
const email = document.getElementById("email").value;
const telefono = document.getElementById("telefono").value;
const estrato = document.getElementById("estrato").value;
const fecha = document.getElementById("fecha").value;
const sangre = document.getElementById("sangre").value;
const genero = document.querySelector('input[name="genero"]:checked')?.value || "No seleccionado";
const actividades = [];
document.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
    actividades.push(cb.value);
});
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telRegex = /^[0-9]{7,10}$/;
if (!emailRegex.test(email)) {
    alert("Correo no válido");
    return;
}
if (!telRegex.test(telefono)) {
    alert("Teléfono no válido (7 a 10 dígitos)");
    return;
}

alert(`
    Registro exitoso:
    Nombre: ${nombres} ${apellidos}
    Email: ${email}
    Teléfono: ${telefono}
    Estrato: ${estrato}
    Fecha Nac: ${fecha}
    Sangre: ${sangre}
    Género: ${genero}
    Actividades: ${actividades.join(", ")}
);
});
