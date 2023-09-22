import "./Colaborador.css"
import { AiFillCloseCircle,AiOutlineHeart,AiFillHeart } from "react-icons/ai"
const Colaborador = (props) => {
    const { nombre, foto, puesto, equipo ,id,fav} = props.datos

    const { colorPrimario, eliminarColaborador,like} = props
    return <div className="colaborador" style={{ backgroundColor:  colorPrimario  }}>


        <AiFillCloseCircle className="icono__eliminar" onClick={()=> eliminarColaborador(id)} />



        <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color="red" onClick={()=> like(id)}/> : <AiOutlineHeart onClick={()=> like(id)}/>}
            
       

        </div>
      

    </div>
}
export default Colaborador