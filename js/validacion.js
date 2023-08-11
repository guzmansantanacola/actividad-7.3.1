
function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");    
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const button = document.getElementById("regBtn");

button.addEventListener("click", () => {
    //console.log("boton clickeado");

    let nombre = document.getElementById("nombre").value;
    //console.log(nombre);
    let apellido = document.getElementById("apellido").value;
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let email = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (nombre && apellido && password1.length >= 6 && password1 === password2 && terminos.checked && email.match(emailRegex)){ 
        showAlertSuccess();
        const borrar = document.getElementsByTagName("input");
        for(i=0; i<borrar.length - 1 ; i ++) {
            borrar[i].value="";
        }   
        terminos.checked = false;
    } else {showAlertError()}
})   // Jonathan Piriz, Nicolas Villar, Facundo Hernandez, Facundo Travers, Diego Fumeaux, Florencia Berrondo, Matias Passerini, Guzmán Santana, Karen Ferreira

