import styled from "styled-components";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div``
const Title = styled.h1`
       margin: 40px;
`;
const FilterContainer = styled.div`
       display: flex;
       justify-content: space-between;
`;
const Filter = styled.div`
  margin: 40px;
  ${mobile({ width: "0px 20px",display:"flex",flexDirection:"column" })}
`;
const FilterText = styled.span`
  font-size: 22px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  font-size: 18px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option`
       font-size: 18px;
`;
const ProductList = () => {
  return (
    <Container>
      <Title>Our Products</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (des)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductList