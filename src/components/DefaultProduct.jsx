import styled from "styled-components";
import { blouses, dresses, shirts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const DefaultProducts = () => {
  return (
    <Container>
      {shirts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
      {dresses.map((item) => (
        <Product item={item} key={item.id} />
      ))}
      {blouses.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default DefaultProducts;
