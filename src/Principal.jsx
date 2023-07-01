import video from './assets/Vid-princ.mp4'
import freatico from './assets/freatico.jpg'
import artesiano from './assets/artesiano.jpg'
const Principal = () => {
  return (
    <>
    <div  className="video-container ">
    <video className="video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </div>
    <h1 className='tittle slide-in-left'>Transformación de la materia en el ambiente acuatico residual</h1>
    <p data-aos="flip-right"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2500" className='paragraph'>
    La transformación de la materia en el ambiente acuático residual se refiere a la caracterización de las aguas residuales y la demanda bioquímica de oxígeno. <br /> El agua subterránea es una fracción importante de la masa de agua en los continentes y se aloja en los acuíferos bajo la superficie de la Tierra.
    </p>
    <div className='Content'>
      <div data-aos="zoom-in-left" data-aos-duration="2800"  className='Content-p Content-p_one'>
<p>
El uso de las aguas subterráneas puede <br /> resultar en aguas duras debido a los <br /> constituyentes lavados de los cuerpos mineralizados. <br /> Los acuíferos pueden ser freáticos o artesianos, <br /> y se accede a ellos a través de pozos y galerías.
</p>
      </div>
      <div data-aos="fade-up" data-aos-duration="3300" className='Content-p Content-p_two'>
<p>
Los humedales y bofedales desempeñan un papel crucial en los ciclos de la materia y la calidad del agua, <br /> ya que recargan los acuíferos y ayudan a mitigar inundaciones y erosión costera.
</p>
      </div>
      <div data-aos="zoom-in-right" data-aos-duration="2800"  className='Content-p Content-p_three'>
        <p>
        La eutrofización, que es el enriquecimiento de nutrientes en un ecosistema acuático, <br /> puede provocar un aumento de la biomasa y una disminución de la diversidad. <br /> y los contaminantes de las aguas residuales pueden tener un origen natural o antropogénico.
        </p>
      </div>
    </div>
    <p className='paragraph'>
    Se emplean diversas técnicas para medir la concentración y evaluar el daño que pueden causar las aguas residuales, como la demanda bioquímica de oxígeno y la demanda química de oxígeno.
    </p>
    <div data-aos="zoom-in-up" data-aos-duration="2700" className='ContentBox'>
      <div className='positionBox'>
         <div className='box'><div className='box box_position'>
          <p>
          Los dos tipos de acuíferos son el freático y el artesiano. <br /> El acuífero freático se encuentra a presión atmosférica o normal. Mientras que el acuífero artesiano se encuentra a una presión mayor que la atmosférica.
          </p></div></div>                
      </div>
      <div className='ImgContent'>
          <div>
            <h2>Freatico</h2>
             <img width={270} src={freatico} alt="" />  
          </div>
          <div>
            <h2>Artesiano</h2>
             <img width={270} src={artesiano} alt="" />  
          </div>
      </div>
    </div>
    <p className='paragraph'>
    Para acceder a los acuíferos, se utilizan pozos y galerías. Los pozos permiten desalojar la tierra que rodea al agua, permitiendo que en el hoyo se acumulen grandes cantidades de agua para ser aprovechadas por el ser humano. Algunos pozos se hacen sobre un acuífero en el que el agua circula desde un punto más alto a un punto más bajo. 
    <br />
    Si el punto más alto está lo suficientemente elevado y cerca, al perforar el pozo el agua asciende hasta el nivel de base del punto alto. A este se le llama pozo artesiano, y en él el nivel piezométrico está por encima de la superficie de la tierra.
    </p>
    </>
  )
}

export default Principal