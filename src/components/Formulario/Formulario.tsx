import React from "react"
import { StyledInput } from "./styles"

const Formulario = () => {
    return (<form>
        <StyledInput type="text" placeholder="Insira os nomes dos participantes"/>
        <button disabled={true}>Adicionar</button>
    </form>)
}

export default Formulario