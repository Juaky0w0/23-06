import React, { useState } from "react";
import './Formulario.css';
import { ContenedorTerminos, BotonVolver, BotonEnviar, CajaRecla1 } from "./ElementForm";
import { Descrip } from "./input";
import { FaInfoCircle } from 'react-icons/fa';

const Reclamos3 = () => {

    const [detalle, cambiarDetalle] = useState({ campo: '', valido: null });
    const [pedido, cambiarPedido] = useState({ campo: '', valido: null });

    const expresiones = {
        detalle: /^[a-zA-ZA-ÿ\s]{1,40}$/, // Letrasyespacios,pueden llevar acentos.
        pedido: /^[a-zA-ZA-ÿ\s]{1,40}$/, // Letrasyespacios,pueden llevar acentos.

    }


    return (
        <from>
            <main>
                
                    <div className="radioBu">
                        <label className="radioTitle">Motivo</label><br />
                        <div className="radioSelec1">
                            <input type="radio" name="valor" value="reclamo" />
                            <label className="radioV">Reclamo </label> <span data-tooltip="Expresar, oralmente o por escrito, su oposición,inconformidad o disgusto por un asunto que considera injusto o insatisfactorio." data-tooltip-location="bottom"><FaInfoCircle /> </span>


                        </div>
                        <div className="radioSelec2">
                            <input type="radio" name="valor" value="queja" />
                            <label className="radioV" >Queja </label> <span data-tooltip="Queja: Disconformidad no relacionada a los productos o servicios; o, malestar o descontento respecto a la atención al público." data-tooltip-location="bottom"><FaInfoCircle /> </span>


                        </div>
                    </div>
                    <Descrip
                        estado={detalle}
                        cambiarEstado={cambiarDetalle}
                        tipo="text"
                        label="Detalle"
                        placeholder=""
                        name="detalle"
                        leyendaError="Se requiere datos"
                        expresionRegular={expresiones.detalle}
                    />
                    <Descrip
                        estado={pedido}
                        cambiarEstado={cambiarPedido}
                        tipo="text"
                        label="Pedido"
                        placeholder=""
                        name="pedido"
                        leyendaError="Se requiere datos"
                        expresionRegular={expresiones.pedido}
                    />
                    <br />
                    <ContenedorTerminos>
                        <p>Sus datos personales se encuentran protegidos y solo serán utilizados para comunicarnos con usted, según la Ley de Protección de Datos Personales – Ley 29733 que tiene por objeto garantizar el derecho fundamental de las personas a la protección de su privacidad, para lo cual prescribe que el tratamiento de sus datos personales sea proporcional y seguro, de acuerdo con finalidades consentidas por tales personas o habilitadas por ley, previniendo así que tales datos sean objeto de tráfico y/o uso ilícito.</p>
                    </ContenedorTerminos>

                    <CajaRecla1 >
                        <div className="botonVolver">
                            <BotonVolver type="submit">Volver</BotonVolver>
                        </div>
                        <br />
                        <div className="botonEnviar">
                            <BotonEnviar type="submit">Enviar</BotonEnviar>
                        </div>
                    </CajaRecla1>
                    <br /> <br />
                
            </main>
            
     </from>
    );
}

export default Reclamos3;