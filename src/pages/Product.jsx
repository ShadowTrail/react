import { Add, Remove } from "@mui/icons-material"
import styled from "styled-components"
import Footer from "../components/Footer"
import Newsletter from "../components/Newsletter"
import dress from "../components/dress1.jpg"
import { mobile } from "../responsive"

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;
const ImgContainer = styled.div`
      flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "30%" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
       font-weight: 300;
`;
const Desc = styled.p`
       margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  ${mobile({ fontSize: "25px" })}
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
      display: flex;
      align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right: 8px;
  ${mobile({ fontSize: "18px" })}
`;
const FilterColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 2px;
  cursor: pointer;
  ${mobile({ height: "20px",width:"20px" })}
`;
const FilterSize = styled.select`
  display: flex;
  padding: 8px;
  font-size: 18px;
  ${mobile({ fontSize: "14px", padding: "5px" })}
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;

`;
const Button = styled.button`
  padding: 8px;
  font-size: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f6f6;
  }
`;
const A= styled.a`
  text-decoration: none;
  color:black;
`
const Product = ({item}) => {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={dress} />
        </ImgContainer>
        <InfoContainer>
          <Title>Pretty In Pink Dress</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            doloribus vero ratione nobis necessitatibus obcaecati, eveniet
            veniam sapiente, accusamus facere qui. Sed enim eveniet provident
            recusandae, ipsum deleniti aut blanditiis repellendus quia at
            laborum quibusdam dolore incidunt quos eum temporibus excepturi.
            Totam fuga animi voluptatum quia beatae quam officiis ex?
          </Desc>
          <Price>Rs. 1200</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle> Size </FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>
              <A href="/Cart"> ADD TO CART </A>
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Product