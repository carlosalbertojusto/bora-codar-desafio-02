import React from "react"
import { ButtonContainer, ButtonText } from "./styles"
function Button({ title }) {
  return (
    <>
      <ButtonContainer>
        <ButtonText>{title}</ButtonText>
      </ButtonContainer>
    </>
  )
}

export default Button
