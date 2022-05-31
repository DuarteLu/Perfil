
var porfolio = {
    Nombre: "",
    Apellido: "",
    AcercaDe: "",
    Titulos: ["", ""]
};
function GetNombre(nombre) {
    var nombre1 = document.getElementById("Nombre");
    nombre1.textContent = nombre;
}
function GetApellido(apellido) {
    var a = document.getElementById("Apellido");
    a.textContent = apellido;
    return porfolio.apellido = apellido;
}
function GetAcercaDe(acercaDe) {
    var a = document.getElementById("text-acercade");
    a.textContent = acercaDe;
    return porfolio.acercaDe = acercaDe;
}
function GetTitulos(titulo1, titulo2) {
    var a = document.getElementById("Titulos");
    a.textContent = titulo1, titulo2;
    return porfolio.titulos[0] = titulo1, porfolio.titulos[1] = titulo2;
}
function showFile1(input) {
    var file = input.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (progressEvent) {
        var s = reader.result.toString();
        console.log(s);
        var arr = s.split('\n');
        GetAcercaDe(arr[0]);
        GetNombre(arr[1]);
        GetApellido(arr[2]);
        GetTitulos(arr[3],arr[4]);
    };
}
