  		/*
			KC_EJ11
      Crear un programa que reciba 3 números e indique cuál es el mayor y el menor.
  		*/

function mayorMenorArray(){
  let miArray = new Array();
    miArray.push(parseInt(document.getElementById("numberOne").value),parseInt(document.getElementById("numberTwo").value),parseInt(document.getElementById("numberThree").value));

    let menor = miArray.sort().shift();
    let mayor = miArray.sort().pop();
    showMenorMayor(mayor,menor);
}

function mayorMenor() {
    let numberOne =parseInt(document.getElementById("numberOne").value);
    let numberTwo =parseInt(document.getElementById("numberTwo").value);
    let numberThree =parseInt(document.getElementById("numberThree").value);
    let mayor, menor;
    mayor = calcMayor(numberOne,numberTwo,numberThree);
    menor = calcMenor(numberOne,numberTwo,numberThree);
    showMenorMayor(mayor,menor);

}
function showMenorMayor(mayor, menor) {
      document.getElementById("mostrarMayorMenor").innerHTML = ` <span style="color: red;">Mayor: ${mayor} 'Menor: ${menor}</span>`;
  
}

function calcMayor(num1,num2,num3) {
      if (num1>=num2) {
      if (num1>=num3) {
        return num1;        
      }else {
        return num3;
      }
    } else {
      if (num2>=num3) {
        return num2;   
      } else {
        return num3;
      }
    }
}
function calcMenor(num1,num2,num3) {
      if (num1<=num2) {
      if (num1<=num3) {
        return num1;        
      }else {
        return num3;
      }
    } else {
      if (num2<=num3) {
        return num2;   
      } else {
        return num3;
      }
    }
}