    /*Metodo para repetir apellido*/
function repetirNombre(){
    let nombre = (document.getElementById("nombre").value);
    let n = parseInt((document.getElementById("repes").value));
    let resultNombre="";
    //4.A       bucle FOR
    resultNombre+=`<p>Utilizando FOR repitiendo ${n} veces el nombre ${nombre}</p>`
    for (let i = 0; i < n; i++) {
        resultNombre+="<p>"+nombre+"</p>";
    }
    //4B       bucle WHILE
    resultNombre+=`<p>Utilizando WHILE repitiendo ${n} veces el nombre ${nombre}</p>`
    let nPrimo =n;
    while (nPrimo>0) {
        resultNombre+="<p>"+nombre+"</p>";
        nPrimo--;
    }
    //4B       bucle DO-WHILE
    resultNombre+=`<p>Utilizando DO-WHILE repitiendo ${n} veces el nombre ${nombre}</p>`
    let nPrimo2 =n;    
    do {
        resultNombre+="<p>"+nombre+"</p>";
        nPrimo2--;        
    } while (nPrimo2>0);

    //Utilizamos template literal para mostrarlo
    document.getElementById("resultado").innerHTML = `${resultNombre}`;
}
