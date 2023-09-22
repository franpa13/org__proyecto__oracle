import { useState } from 'react';
import './App.css';
import { v4 as uuid } from "uuid"
import Header from './components/Header/Header';
import Formulario from './components/formulario/Formulario.js';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/footer';
function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }])
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programacion",
      colorPrimario: "#57c278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorSecundario: "#E8F8FF",
      colorPrimario: "#82CFFA"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorSecundario: "#F0F8E2",
      colorPrimario: "#A6D157"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorSecundario: "#FDE7E8",
      colorPrimario: "#E06EBF"
    },
    {
      id: uuid(),
      titulo: "UX,UI",
      colorSecundario: "#FAE9F5",
      colorPrimario: "#DB6EBF"
    },
    {
      id: uuid(),
      titulo: "Movil",
      colorSecundario: "#FFF5D9",
      colorPrimario: "#FFBA05"
    },
    {
      id: uuid(),
      titulo: "Innovacion y Gestion",
      colorSecundario: "#FFEEDF",
      colorPrimario: "#FF8A29"
    },
  ])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }
  //registrar  colaborador
  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador", colaborador);
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //ELIMINAR COLABORADOR 
  const eliminarColaborador = (id) => {
    console.log("eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colabo) => colabo.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }
  //ACTUALIZAR COLOR DE EQUIPO 
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }
  //CREAR EQUIPO 
  const crearEquipo = (nuevoEquipo)=>{
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos,{...nuevoEquipo,id : uuid()}])
  }
  const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }

  return (


    <div>
      <Header />
      {/* {mostrarFormulario === true ? <Formulario equipos ={equipos.map((eq) => eq.titulo)} /> : <div></div>} */}
      {mostrarFormulario && <Formulario
        equipos={equipos.map((eq) => eq.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo = {crearEquipo}
      />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter((colaborador) => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor} 
          like = {like} />

        )
      }
      <Footer />
    </div>
  );

}


export default App;
