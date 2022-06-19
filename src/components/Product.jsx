import {
  ShoppingCartOutlined,
  Search,
  FavoriteBorder,
} from "@mui/icons-material";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Image = styled.img`
  height: 98%;
  width: 90%;
  z-index: 2;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 300px;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Icon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <div>
      <Container>
        <Image src={item.img} />
        <Info>
          <Icon href="/Product">
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <Search />
          </Icon>
          <Icon>
            <FavoriteBorder />
          </Icon>
        </Info>
      </Container>
      <div>
        <h3>Item {item.id}</h3>
        <h3>₹{item.price}</h3>
      </div>
    </div>
  );
};

export default Product;
