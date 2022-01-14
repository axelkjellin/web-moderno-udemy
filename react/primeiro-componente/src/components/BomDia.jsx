import React, {Fragment} from "react";

// export default (props) => <h1>Bom Dia {props.nome}, {props.idade} anos.</h1>
const BomDia = (props) =>
    <Fragment>
        <h1>Bom Dia {props.nome}</h1>
        <h1>{props.idade} anos.</h1>
        <h1>até breve.</h1>
    </Fragment>

export default BomDia