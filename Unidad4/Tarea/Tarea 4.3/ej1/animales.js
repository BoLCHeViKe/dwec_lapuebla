function Animal(nombre){
    this.nombre=nombre;
};

Animal.prototype.hacerRuido = function(){ //Nunca arrow function
    console.log(`Soy ${this.nombre} y soy un animal y hago…`);
}



