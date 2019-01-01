import React, { Component } from 'react'
import Layout from '../components/layout'
import styled from "styled-components"

import PalmettoGold from '../images/PalmettoGold.jpg'
import Pucker from '../images/Pucker.jpg'
import SpicyPucker from '../images/SpicyPucker.jpg'
import AppleButter from '../images/AppleButter.jpg'
import SpicyAppleButter from '../images/SpicyAppleButter.jpg'

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-gap: 10px;
`
const Product = styled.div`
  img {
    margin: 0;
  }
  
`

export default class Products extends Component {
  render() {
    return (
      <Layout>
        <div className='content'>
          <ProductsWrapper>
            <Product>
              <img src={PalmettoGold} alt="Palmetto Gold" />
            </Product>
            <Product>
              <img src={Pucker} alt="Pucker" />
            </Product>
            <Product>
              <img src={SpicyPucker} alt="Spicy Pucker" />
            </Product>
            <Product>
              <img src={AppleButter} alt="Apple Butter" />
            </Product>
            <Product>
              <img src={SpicyAppleButter} alt="Spicy Apple Butter" />
            </Product>
          </ProductsWrapper>
        </div>
      </Layout>
    )
  }
}
