import styled from "styled-components";
import { blouses, dresses, shirts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
var dataa=[];
dresses.map((item)=>{
  dataa.push(item)
})
blouses.map((item)=>{
  dataa.push(item)
})
shirts.map((item)=>{
  dataa.push(item)
})
dataa.sort((a, b) => a.price - b.price);
console.log(dataa);

const Products = () => {
  return (
    <Container>
      {dataa.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};


export default Products;
