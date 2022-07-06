function consultar(){
    var Id = document.getElementById("validationDefault01").value.toUpperCase();

    if (nombre.length<3)
    {
        alert("Nombre debe tener al menos 3 caracteres");
        document.formulario.validationDefault01.focus();
        return false;
    }

}