class Gimnasio {

    //Array de objetos literales (socios)
    #socios = [];

    constructor(socios) {
        this.socios=socios; 
    }
    //OJO sin socios declarado     #socios = [];
    // constructor(){
    //     this.socios=[];
    // }
    // insertsocio(socio){

    // }



    get socios(){
        return this.#socios;
    }
    //No es necesario
    set socios(socios) {
        //this.#socios = socios ? JSON.parse(JSON.stringify(socios)):[]; //Si no recibe ningun array (que no puede transformar en JSON, pasará un array vacio)
        let sociosString = JSON.stringify(socios);
        try {
            this.#socios = JSON.parse(sociosString); //Con Almo
        } catch (error) {
            throw new Error("Error al establecer los socios");
        }
     }


    mostrarAllSocios(){
    const sociosMap = this.#socios.map(((item, index) => {
        return {
            nombreCompleto: item.nombre+item.apellidos,
            edad: item.age+"años, "+item.fechaNac,
            direccionCompleta: item.direccion+". "+item.telefono+". "+item.email,
            sexo: item.sexo,
            fechaAlta: item.fechaAlta,
            deporteInscrito: item.deporte
        }
    }));
    return sociosMap;
    }

    // Insertar un socio comprobando que no existe su dni o email. En caso contrario, lanza una excepción
    insertsocio(socio) {
        let socioEncontradoDni = this.#socios.find((item) => item.dni === socio.dni);
        let socioEncontradoEmail = this.#socios.find((item) => item.email === socio.email);
        if (!socioEncontradoDni&&!socioEncontradoEmail) {
            this.#socios.push(socio);
        } else {
            throw new Error("Ya existe un socio con el mismo DNI o EMAIL");
        }
    }
    getsocio(dni) { //obtenemos socio por DNI
        return this.socios.find((item) => item.dni === dni);
    }
    getSociosDeporte(deporte){ //Obtenemos array socios por curso
        return this.socios.filter((item) => item.deporte === deporte);
    }
    //  Ordenar de menor a mayor
    sortByEdadAsc() {
        this.socios.sort((a, b) => a.age - b.age);
    }
    //  Ordenar de mayor a menor
    sortByEdadDes() {
        this.socios.sort((a, b) => b.age - a.age);
    }
    getsocioOlder(){
        this.sortByEdadDes();
        return this.socios[0]; //Al estar protegido, debe ser via get
    }
}

