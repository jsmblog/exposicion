import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

import pantano from './assets/pantano.png'
import volumen from './assets/volumen.png'
const SwiperCard = () => {
    
  return (
    <>
      <Swiper data-aos="zoom-in-up" data-aos-duration="2700"
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="ContentSwiperCard">
                <p className="coFirstRed">
                Además, los humedales y bofedales contribuyen a mitigar las inundaciones y la erosión costera. Al actuar como áreas de almacenamiento temporal de agua, ayudan a regular el flujo de agua y a absorber el exceso de agua durante períodos de lluvias intensas. Esto evita que el agua fluya rápidamente y cause inundaciones en zonas bajas.
                </p>
                <div className="pantano">
                    <img width={320} src={pantano} alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="ContentSwiperCard">
            <p className="coTwoGreen">
            En resumen, los humedales y bofedales son ecosistemas clave para mantener la calidad del agua, ya que actúan como filtros naturales y reguladores del flujo de agua. Su preservación y conservación son importantes para garantizar un suministro de agua limpia y saludable.
                </p>
                <div className="pantano pantano_vol">
                    <img width={280} src={volumen} alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="ContentSwiperCard ContentSwiperCard_ParagraphCo">
                <p>
                Para medir la concentración y evaluar el daño de las aguas residuales se utilizan diversas técnicas. Entre las técnicas más comunes se encuentran:
                </p>
                <br />
                <br />
                <p>
                Demanda teórica de oxígeno (DTeO): Esta técnica determina la cantidad de oxígeno requerido para oxidar completamente la fracción orgánica de un desecho hasta dióxido de carbono y agua
                </p>
                <br />
                <br />
                <p>
                Demanda química de oxígeno (DQO): Esta técnica mide el contenido de materia orgánica del agua mediante la oxidación de los compuestos orgánicos utilizando un agente químico oxidante, como el dicromato de potasio.
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="ContentSwiperCard ContentSwiperCard_CoOrange">
            <p>
            Demanda bioquímica de oxígeno (DBO): Esta técnica mide la cantidad de oxígeno requerido para la oxidación aerobia de la materia orgánica biodegradable presente en una muestra de agua. Se utiliza como indicador de la cantidad de oxígeno necesario para degradar la materia orgánica.
                </p>
                <br />
                <br />
                <p>
                Demanda total de oxígeno (DTO): Esta técnica determina la cantidad total de oxígeno requerido para oxidar tanto la fracción orgánica como la inorgánica de un desecho.
                </p>
                <br />
                <br />
                <p>
                Además de estas técnicas, también se emplean métodos analíticos para evaluar la concentración de carbono orgánico presente en las aguas residuales. Estas técnicas permiten evaluar el daño que las aguas residuales pueden causar al medio ambiente y determinar la calidad del agua.
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="ContentSwiperCard ContentSwiperCard_CoBlue">
            <p>
            Las principales causas de la eutrofización en los ecosistemas acuáticos son:
                </p>
                <br />
                <br />
                <p>
                El efecto de las aguas residuales ricas en fósforo y nitrógeno.
                </p>
                <br />
                <br />
                <p>
                La contaminación atmosférica por óxidos de azufre y nitrógeno que reaccionan con el agua atmosférica para formar iones de sulfato y nitrato.
                </p>
                <p>
                La contaminación agropecuaria por los fertilizantes o excrementos.
                </p>
                <br />
                <br />
                <p>
                La contaminación forestal por abandono en los ríos de residuos forestales.
                </p>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default SwiperCard