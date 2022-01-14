import React from "react";

//importando a função de um arquivo JS
import { childrenWithProps } from "../../utils/mapChildren";

// function childrenWithProps(props) {
//     return React.Children.map(props.children, child => {
//         return React.cloneElement(child, {...props, ...child.props})
//     })
// }

const Pai = (props) => {
    return (
        <div>
            <h1>{props.nome} {props.sobrenome}</h1>
            <h2>Filhos</h2>
            <ul>
                {/* aqui renderia o que tiver dentro da tag <Pai > aqui </Pai> */}
                {
                    childrenWithProps(props)
                }
            </ul>
        </div>
    )
}

export default Pai