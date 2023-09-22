import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';
const Equipo = (props) => {
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor,like } = props
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.7)
    }
    const estiloTitulo = { borderColor: colorPrimario }

    return <>
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input value={obj} className="input__color" type="color" onChange={(e) => {
                    return actualizarColor(e.target.value, id);
                }} />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores" >
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                            datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like = {like}
                        />)
                    }


                </div>
            </section >
        }
    </>
}
export default Equipo