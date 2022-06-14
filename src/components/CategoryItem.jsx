import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
        justify-content: space-between;
        flex: 1;
        margin: 6px;
        height: 70vh;
        position: relative;
`
const Image = styled.img`
  width: 100%;
  max-height: 120%;
  object-fit: cover;
  ${mobile({ height: "20vh"})}
`;
const Info = styled.div`
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;
`;
const Title = styled.h1`
        color: #191717;
        padding: 10px;
        font-size: 35px;
`;
const Button = styled.button`
       padding: 10px;
       border: 0.1px solid black;
       font-size: 17px;
       background-color: white;
       opacity: 0.8;
       color: black;
       font-weight: 600;
       cursor: pointer;
       margin-top: 15px;
`;
const A = styled.a`
  text-decoration: none;
  color: black;
`;
const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button><A href="/ProductList">SHOP NOW!</A></Button>
      </Info>
    </Container>
  );};

export default CategoryItem