import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../Data'
import Product from '../Product'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const Products = () => {
  return (
    <Container>
        {popularProducts.map((item)=>(
            <Product item={item} key={item.id}></Product>
        ))}
    </Container>
  )
}

export default Products;