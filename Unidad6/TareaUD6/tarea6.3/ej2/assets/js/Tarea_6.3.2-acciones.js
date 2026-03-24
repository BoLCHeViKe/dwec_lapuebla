//Declaracion Variables SELECT
const tamanio = document.querySelector("#cboSize");
const colour = document.querySelector("#cboColorFuente");

const miTexto = document.querySelector("#miTexto");

//Transformacion a ClassList (del texto a editar)
const miTextoCS = miTexto.classList;

//Eventos de los select
tamanio.addEventListener("change", function () {
  // Hacemos un array asociativo/diccionario con los valores
  const fontSizeStyles = {
    //KEY = SelectvaluesHTML
    //VALUES = Class Styles en CSS
    "xx-small": "fontSizeXXS",
    "x-small": "fontSizeXS",
    "small": "fontSizeS",
    "medium": "fontSizeM",
    "large": "fontSizeL",
    "x-large": "fontSizeXL",
    "xx-large": "fontSizeXXL",
  };
  //Primero, eliminamos estilos de letra ya existentes que puedan existir!!(Evitando problemas de superposicion den estilos!!!)
  for (const key in fontSizeStyles) {
    //Eliminamos todos los estilos "values" del array asociativo
    miTextoCS.remove(fontSizeStyles[key]);
  }

  //Y ahora seteamos nuevo estilo:
  miTextoCS.add(fontSizeStyles[this.options[this.selectedIndex].value]);

  //Metodo primario: Hacerlo con variable y switch (DESECHADO, mejorado arriba que me facilita el "remove()")

  //let tamanioSelect=this.options[this.selectedIndex].value;

  // switch (tamanioSelect) {
  //     case "xx-small":
  //     miTextoCS.add("fontSizeXXS");
  //         break;
  //     case "x-small":
  //         miTextoCS.remove();
  //         miTextoCS.add("fontSizeXS");
  //         break;
  //     case "small":
  //         miTextoCS.add("fontSizeS");
  //         break;
  //     case "medium":
  //         miTextoCS.add("fontSizeM");
  //         break;
  //     case "large":
  //         miTextoCS.add("fontSizeL");
  //         break;
  //     case "x-large":
  //         miTextoCS.add("fontSizeXL");
  //         break;
  //     case "xx-large":
  //         miTextoCS.add("fontSizeXXL");
  //         break;
  //     default:
  //         break;
  // }
  //Planteamiento posterior de hacer un diccionario e ir mejor para poder hacer remove() y luego add()
});

colour.addEventListener('change',function(){
    //KEY = SelectvaluesHTML
    //VALUES = Class Styles en CSS
    const fontColorStyles={
    "green":"fontColorGreen",
    "red":"fontColorRed",
    "blue":"fontColorBlue",
    };
  //Primero, eliminamos colors estilos anteriores)
  for (const key in fontColorStyles) {
    //Eliminamos todos los estilos "values" del array asociativo
    miTextoCS.remove(fontColorStyles[key]);
  }

  //Y ahora seteamos nuevo color estilo:
  miTextoCS.add(fontColorStyles[this.options[this.selectedIndex].value]);

})
//Para bajar el acoplamento, podriamos utilizar una funcion generica creada... en un futuro.