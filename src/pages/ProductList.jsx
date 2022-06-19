import styled from "styled-components";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";
import { useEffect, useState } from "react";
import DefaultProducts from "../components/DefaultProduct";
import DescProducts from "../components/DescProducts";

const Container = styled.div``;
const Title = styled.h1`
  margin: 40px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 40px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
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
  const [sorted, setSorted] = useState("default");
  const [defaulte, setdefaulte] = useState(false);
  const [des, setDes] = useState(false);

  const [asc, setAsc] = useState(false);
  useEffect(() => {
   

    sorted === "default" ? setdefaulte(true) : setdefaulte(false);
    sorted === "asc" ? setAsc(true) : setAsc(false);
    sorted === "des" ? setDes(true) : setDes(false);
  }, [sorted]);
  const handleOnChange = (e) => {
    setSorted(e.target.value);
  };

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
          <Select value={sorted} onChange={handleOnChange}>
            <Option value="default" selected>
              Newest
            </Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="des">Price (des)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      {/* if asc then render in asc*/}
      {defaulte && <DefaultProducts />}
      {asc && <Products />}
      {des && <DescProducts />}

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
