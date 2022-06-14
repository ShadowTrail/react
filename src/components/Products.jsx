import styled from "styled-components";
import { blouses, dresses, shirts} from "../data";
import Product from "./Product";

const Container = styled.div`
       padding: 20px;
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
`
const Products = () => {
  return (
    <Container>
      {dresses.map((item) => (
        <Product item={item} key={item.id} />
      ))}
      {shirts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
      {blouses.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
