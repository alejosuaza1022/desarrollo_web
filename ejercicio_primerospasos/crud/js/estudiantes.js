
let estudiantes = [{
    id: "001", nombre: "alejandro", apellido: "suaza", edad: 50,
    email: "alejandrosuaza.1022@gmail.com", carreras: "Ingeniería de sistemas"
}];
let id = document.getElementById("id").value;
console.log("mi id:", id);


function obtenerValores() {
    let id = document.getElementById("id").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let email = document.getElementById("email").value;
    let carreras = document.getElementById("carreras").value;
    console.log("mi id:", id, " mi nombre:", nombre, " apellido :", apellido,
        " edad :", edad, " email :  ", email, " carreras : ", carreras);

    //forma uno
    let miestudiante = {}
    miestudiante.id = id
    miestudiante.nombre = nombre
    console.log("mi estudiante forma 1 : ", miestudiante)
    let miestudiante2 = { id, nombre, apellido, edad, email, carreras }

    console.log("mi estudiante forma 2 : ", miestudiante2)

    return miestudiante2;

}
function crear_estudiantes() {

    let estudiante = obtenerValores();
    estudiantes.push(estudiante)
    listarEstudiante()

}
function listarEstudiante() {
    let lista = document.getElementById("listaEstudiantes");
    let data = ""
    /*estudiantes.array.forEach(element => {
        data += "<tr>"  
        data += `<td>${element}</td>`
        data += "</tr>"
    });*/
    for (let i = 0; i < estudiantes.length; i++) {
        let element = estudiantes[i];
        data += "<tr>"
        data += `<td>${element.id}</td>`
        data += `<td>${element.nombre}</td>`
        data += `<td>${element.email}</td>`
        data += `<td>${element.carreras}</td>`
        data += `<td> <button class="btn btn-primary"  onclick="cargarInfo(${i})" type="button" >Editar</button></td>`
        data += '<td> <button class="btn btn-primary"  onclick="eliminar(' + i + ')" type="button" >eliminar</button></td>'
        data += "</tr>"
    }
    lista.innerHTML = data;

}

function eliminar(index) {
    estudiantes.splice(index, 1)
    listarEstudiante()
}
let aux;
let index1;
function cargarInfo(index) {
    index1 = index;
    aux = estudiantes[index];
    document.getElementById("id").value = aux.id;
    document.getElementById("nombre").value = aux.nombre;
    document.getElementById("apellido").value = aux.apellido;
    document.getElementById("edad").value = aux.edad;
    document.getElementById("email").value = aux.email;
    document.getElementById("carreras").value = aux.carreras;
    // document.getElementById("crearEstudiate").disabled = true;    
    document.getElementById("crearEstudiate").style.display = "none";
    document.getElementById("btnActualizar").style.display = "inline";
}
function editarInfo() {
    aux.id = document.getElementById("id").value;
    aux.nombre = document.getElementById("nombre").value;
    aux.apellido = document.getElementById("apellido").value;
    aux.edad = document.getElementById("edad").value;
    aux.email = document.getElementById("email").value;
    aux.carreras = document.getElementById("carreras").value;
    document.getElementById("crearEstudiate").style.display = "inline";
    document.getElementById("btnActualizar").style.display = "none";
    listarEstudiante();

}
function editarInfo2() {
    estudiantes.splice(index1, 1, obtenerValores());
    document.getElementById("crearEstudiate").style.display = "inline";
    document.getElementById("btnActualizar").style.display = "none";
    limpiarCampos()
    listarEstudiante();
}
function limpiarCampos(params) {
    document.getElementById("id").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("email").value ="";
    document.getElementById("carreras").value ="";
    listarEstudiante();
}
listarEstudiante()

