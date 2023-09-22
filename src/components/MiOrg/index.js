import{ useState } from "react"
import "./miOrg.css"
const MiOrg = (props)=>{
 
    // const [mostrar,actualizarMostrar] = useState(true)
    // const manejarClick = ()=>{
    //     console.log("mostar/ocultar",mostrar);
    //     actualizarMostrar("oholaslas")
    // }
    return <section className = "orgSection">
        <h3 className="title">Mi Organizacion</h3>
        <img src="/img/boton.png" alt="add" onClick = {props.cambiarMostrar} />
    </section>
}
export default MiOrg