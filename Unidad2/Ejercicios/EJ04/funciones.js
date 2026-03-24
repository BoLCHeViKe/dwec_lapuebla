  		/*
        KC_EJ04
        Crea un programa que solicite tres notas y muestre su media.
  		*/

function average3marks() {
    let marksArray=new Array(); //O igualar a []
    marksArray.push(parseFloat(document.getElementById("markOne").value),parseFloat(document.getElementById("markTwo").value),parseFloat(document.getElementById("markThree").value));
    console.log(marksArray);
    let sumaMarks=0;
    for (let i = 0; i < marksArray.length; i++) {//for para sumar todos los valores del array en vez de sumaMarks = marksArray[0]+marksArray[1]+marksArray[2];
         sumaMarks+=marksArray[i];
    }

    console.log(sumaMarks);
    averageCal=sumaMarks/marksArray.length;

    document.getElementById("average").innerHTML = ` La media de ${marksArray[0]} , ${marksArray[1]} , ${marksArray[2]} es de: <span style="color: red;">` +parseFloat(averageCal).toFixed(2)+ ' Puntos de media</span>';
}