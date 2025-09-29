// function sum() {
//     // Leemos del input con id "numero_one"
//     let numberOne = parseInt(document.getElementById("numberOne").value);
//     let numberTwo = parseInt(document.getElementById("numberTwo").value);
//     //prompt lee como texto pero la función pow asume que es número, no requiere conversión
//     let sum = numberOne+numberTwo;
//     document.getElementById("resultSum").innerHTML = numberOne+" + "+numberTwo+' = <span style="color: red;">' +sum+ '</span>';
// }
// function rest() {
//     let numberOne = parseInt(document.getElementById("numberOne").value);
//     let numberTwo = parseInt(document.getElementById("numberTwo").value);
//     let rest = numberOne-numberTwo;
//     document.getElementById("resultRest").innerHTML = numberOne+" - "+numberTwo+' = <span style="color: red;">' +rest+ '</span>';    
// }
// Formas individuales

//Forma conjunta una unica función
function fullOperations() {

    let numberOne = parseInt(document.getElementById("numberOne").value);
    let numberTwo = parseInt(document.getElementById("numberTwo").value);

    let sum = numberOne+numberTwo;
    let rest = numberOne-numberTwo;
    let plus = numberOne*numberTwo;
    let div = numberOne/numberTwo;    
    let poten = Math.pow(numberOne,numberTwo);    

    document.getElementById("resultSum").innerHTML = numberOne+" + "+numberTwo+' = <span style="color: red;">' +sum+ '</span>';
    document.getElementById("resultRest").innerHTML = numberOne+" - "+numberTwo+' = <span style="color: red;">' +rest+ '</span>'; 
    document.getElementById("resultPlus").innerHTML = numberOne+" * "+numberTwo+' = <span style="color: red;">' +plus+ '</span>'; 
    document.getElementById("resultDiv").innerHTML = numberOne+" / "+numberTwo+' = <span style="color: red;">' +div+ '</span>'; 
    document.getElementById("resultPot").innerHTML = numberOne+" ^ "+numberTwo+' = <span style="color: red;">' +poten+ '</span>';  
}