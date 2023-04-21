import '../styles/FormularioInicio.css'

function FormularioInicio() {
  return(
    <div className='busqueda-contenedor-barra'>
      <div className='busqueda-barra'>
      <form >
        <input 
          className='barra-input barra-input-escribir'
          type='text'
          placeholder='Escribe aquí...'              
        />
        <input
          className='barra-input barra-input-ubicacion'
          type='text'
          placeholder='Ubicación'  
        />
        <select className='barra-input barra-input-'>
          <option value="pagaFalse">Todas</option>
          <option value="pagaTrue" selected>Pagada</option>
        </select>
        <select className='barra-input'>
          <option value="pagaFalse" selected>5</option>
          <option value="pagaTrue">4</option>
          <option value="pagaTrue">3</option>
          <option value="pagaTrue">2</option>
          <option value="pagaTrue">1</option>
        </select>
        <button className='boton-buscar'>Buscar</button>
      </form>
      </div>
    </div>
  );
}

export default FormularioInicio;