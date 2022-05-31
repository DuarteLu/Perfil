
interface Persona {
    Nombre: string;
    Apellido: string;
    AcercaDe: string;
    Titulos: [string, string];
}

let porfolio: Persona={
    Nombre:"",
    Apellido:"",
    AcercaDe:"",
    Titulos:["", ""],
}

function GetNombre(nombre:string):void{
    const nombre1 = document.getElementById("Nombre");
    nombre1.textContent=nombre;
}

function GetApellido(apellido:string):string{
    const a = document.getElementById("Apellido");
    a.textContent=apellido;
    return porfolio.Apellido = apellido; 
}

function GetAcercaDe(acercaDe:string):string{
    const a = document.getElementById("text-acercade");
    a.textContent=acercaDe;
    return porfolio.AcercaDe = acercaDe; 
}

function GetTitulos(titulo1:string, titulo2:string):string{
    const a = document.getElementById("apellido");
    a.textContent=titulo1, titulo2;
    return porfolio.Titulos[0] = titulo1, porfolio.Titulos[1] = titulo2; 
}

function showFile1(input): void {
    let file = input.files[0];

    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload= function(progressEvent){
    var s=reader.result.toString();
    console.log(s);
    var arr = s.split('/n');
    GetAcercaDe(arr[0]);
    GetNombre(arr[1]);
    GetApellido(arr[2]);
    GetTitulos(arr[3],arr[4]);
    };
};
