import React from 'react';
import { Announcement } from '../Components/Announcement';
import Navbar from '../Components/Navbar';
import styled from 'styled-components';
import Footer from '../Components/Footer';
import bg from "../Assets/PngItem_2409185.png";

const Container =styled.div``

const Wrapper =styled.div`
    padding: 20px;
`

const Title =styled.div`
    font-weight: 300;
    text-align: center;
`

const Top =styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const Bottom =styled.div`
    display: flex;
    justify-content: space-between;
`

const TopButton =styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type=== "filled" && "none"};
    background-color:${props=>props.type ==="filled" ? "black" : "transparent"};
    color: ${props=>props.type=== "filled" && "white"};
    `
const TopTexts = styled.div`
    
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px ;
`

const Info = styled.div`
    flex: 3;
`

const Summary = styled.div`
    flex: 1;
    
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`

const ProductDetail = styled.div`
    flex: 2;
`
const Image = styled.img`
   width: 400px;
   height: 200px;
`
const Details = styled.div``
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div``
const ProductSize  = styled.span``
const PriceDetail = styled.div`
    flex: 1;
`



const Cart = () => {
  return (
    <Container>
        <Navbar></Navbar>
        <Announcement></Announcement>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src={bg}></Image>
                            <Details>
                                <ProductName><b>Product:</b> JESSIE THUNDER SHOES </ProductName>
                                <ProductId><b>ID:</b>80983092183</ProductId>
                                <ProductColor></ProductColor>
                                <ProductSize><b>Size:</b> 37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            price
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>summary</Summary>
            </Bottom>
        </Wrapper>
        <Footer></Footer>
    </Container>
  )
}

export default Cart