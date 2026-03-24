class RegistroAlumnos {

    //Array de objetos literales (Alumnos)
    #alumnos = [];

    constructor(alumnos) {
        this.alumnos=alumnos; 
    }
    //OJO sin alumnos declarado     #alumnos = [];
    // constructor(){
    //     this.alumnos=[];
    // }
    // insertAlumno(alumno){

    // }



    get alumnos(){
        return this.#alumnos;
    }
    //No es necesario
    set alumnos(alumnos) {
        //this.#alumnos = alumnos ? JSON.parse(JSON.stringify(alumnos)):[]; //Si no recibe ningun array (que no puede transformar en JSON, pasará un array vacio)
        let alumnosString = JSON.stringify(alumnos);
        try {
            this.#alumnos = JSON.parse(alumnosString); //Con Almo
        } catch (error) {
            throw new Error("Error al establecer los alumnos");
        }
     }
    // Insertar un alumno comprobando que no existe su dni o email. En caso contrario, lanza una excepción
    insertAlumno(alumno) {
        let alumnoEncontradoDni = this.#alumnos.find((item) => item.dni === alumno.dni);
        let alumnoEncontradoEmail = this.#alumnos.find((item) => item.email === alumno.email);
        if (!alumnoEncontradoDni&&!alumnoEncontradoEmail) {
            this.#alumnos.push(alumno);
        } else {
            throw new Error("Ya existe un alumno con el mismo DNI o EMAIL");
        }
    }
    getAlumno(dni) { //obtenemos alumno por DNI
        return this.alumnos.find((item) => item.dni === dni);
    }
    getAlumnosCurso(curso){ //Obtenemos array alumnos por curso
        return this.alumnos.filter((item) => item.curso === curso);
    }
    //  Ordenar de menor a mayor
    sortByEdadAsc() {
        this.alumnos.sort((a, b) => a.age - b.age);
    }
    //  Ordenar de mayor a menor
    sortByEdadDes() {
        this.alumnos.sort((a, b) => b.age - a.age);
    }
    getAlumnoOlder(){
        this.sortByEdadDes();
        return this.alumnos[0]; //Al estar protegido, debe ser via get
    }
}

