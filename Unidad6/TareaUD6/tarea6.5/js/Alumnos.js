export class RegistroAlumnos {
  constructor() {
    this.alumnos = [];
    this.alumnos = [{ id: 1, dni: "aaaa", email: "bbbb", curso: "DAW" }, { id: 2, dni: "aaa1", email: "bbb1", curso: "DAM" }]
  }

  insertarAlumno(alumno) {
    let alumnoEncontrado = this.alumnos.find((item) => item.dni === alumno.dni);
    let correoEncontrado = this.alumnos.find(
      (item) => item.email === alumno.email
    );
    if (alumnoEncontrado) {
      throw new Error("Existe un alumno con el mismo DNI");
    } else if (correoEncontrado) {
      throw new Error("Existe un alumno con ese correo");
    } else {
      let id = 0;
      if(this.alumnos.length !== 0) {
        id = this.alumnos[this.alumnos.length-1].id;
      }
      alumno.id = ++id;
      this.alumnos.push(alumno);
    }
  }

  alumnosMatriculados() {
    const personasMap = this.alumnos.map(((item, index) => {
      return {
        nombreCompleto: item.nombre + " " + item.apellidos,
        edad: item.edad + " " + item.nacimiento,
        direccionCompleta: item.direccion + "(" + item.provincia + ")." + item.telefono + " " + item.email,
        sexo: item.sexo,
        fechaAlta: item.alta,
        cursoInscrito: item.curso
      }
    }));
    return personasMap;
  }

  alumnosByCursos(curso) {
    return this.alumnos.filter((alumno) => {
      return alumno.curso === curso;
    })
  }

  estadisticas() {
    // Sacar los cursos existentes
    const cursos = [];
    this.alumnos.forEach((alumno) => {
      if(!cursos.includes(alumno.curso)) {
        cursos.push(alumno.curso);
      }
    });
    // Sacar estadísticas
    // Esto es pq se pierde contexto del this dentro del callback
    let that = this;
    const estadisticasMap = cursos.map(function (curso) {
      return {
        curso: curso,
        total: that.alumnosByCursos(curso).length
      }
    });
    return estadisticasMap;
  } 


}
