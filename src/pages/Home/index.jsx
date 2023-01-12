import React, { useState } from "react"
import Button from "../../components/Button"

import ProductImage from "../../assets/sofa.png"
import SofaGif from "../../assets/sofaGif.gif"

import XIcon from "../../assets/X.png"
import Icon360 from "../../assets/Icon360.png"

import { Column, Container, PriceText, Subtitle, Title, Image } from "./styles"

export default function Home() {
  const [image, setImage] = useState(ProductImage)
  const [icon, setIcon] = useState(Icon360)

  const [widthIcon, setWidthIcon] = useState(33)
  const [heigthIcon, setHeightIcon] = useState(22)

  const HandleChange = () => {
    setImage((stateImg) => (stateImg === ProductImage ? SofaGif : ProductImage))
    setIcon((stateIcon) => (stateIcon === Icon360 ? XIcon : Icon360))
    setWidthIcon((width) => (width === 33 ? 16 : 33))
    setHeightIcon((height) => (height === 22 ? 16 : 22))
  }

  return (
    <>
      <Container>
        <Image>
          <img
            id="product_image"
            src={image}
            width={449}
            height={253}
            alt="Imagem de um sofá rosa"
          />
          <img
            id="icon"
            src={icon}
            width={widthIcon}
            height={heigthIcon}
            onClick={HandleChange}
            alt="ícone de 360°"
          />
        </Image>
        <Column>
          <Subtitle>Código: 42404</Subtitle>
          <Title>Sofá Margot II - Rosé</Title>
          <PriceText>R$ 4.000 </PriceText>
          <div>
            <Button title="ADICIONAR À CESTA" />
          </div>
        </Column>
      </Container>
    </>
  )
}
