
import image from '../../assets/BuildPlan/ImageBanner.svg'

const InfoUser = () => {
  return (
    <div className="InfoUser">
      <h2 className="InfoUser__h2">Mira las coberturas</h2>
      <p className="InfoUser__p">Conoce las coberturas para tu plan</p>

      <div className="InfoUser__container">
        <div className='InfoUser__text'>
          <p className='InfoUser__placa'>Placa: C2U-114</p>
          <h1 className='InfoUser__car'>Wolkswagen 2019 Golf</h1>
        </div>
        <div>
          <img src={image} alt="Imagen de la información" />
        </div>
      </div>
    </div>
  )
}

export default InfoUser