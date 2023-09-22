import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo/index.js"
import listaOpciones from "../ListaOpciones"
import Boton from "../boton"
const Lista = listaOpciones

const Formulario = (props) => {
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const [titulo,actualizarTitulo] = useState("")
    const [color,actualizarColor] = useState("")
    const { registrarColaborador , crearEquipo } = props
    const manejarEnvio = (event) => {
        event.preventDefault()
        console.log("manejar el envio")
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo

        }
        registrarColaborador(datosAEnviar);
    }
    const manejarNuevoEquipo = (e)=>{
        e.preventDefault(
        crearEquipo({titulo,colorPrimario : color}))
    }
    return <section className="formulario" >
        <form onSubmit={manejarEnvio}>
            <h2> Rellena el formualario para crear el colaborador. </h2>
            <Campo
                titulo="Nombre"
                placeholder="Ingresa tu nombre"
                required
                valor={nombre}
                actualizarValor={actualizarNombre} />
            <Campo titulo="Puesto"
                placeholder="Ingresar puesto"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto} />
            <Campo
                titulo="Foto(usar url de foto de perfil de linkdedin o github)"
                placeholder="Ingresa enlace de foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto} />
            <Lista 
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2> Rellena el formualario para crear el Equipo. </h2>
            <Campo
                titulo="titulo"
                placeholder="Ingresar titulo"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo} />
            <Campo titulo="color"
                placeholder="Ingresar el color en hexadecimal"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type = "color"/>
            <Boton>
                Registrar equipo
            </Boton>
        </form>
    </section>
}

export default Formulario