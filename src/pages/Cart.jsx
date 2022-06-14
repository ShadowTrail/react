import { Add, Remove } from "@mui/icons-material"
import styled from "styled-components"
import Footer from "../components/Footer"
import { mobile } from "../responsive"

const Container = styled.div`

`
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-size: 16px;
  font-weight: 300;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => props.type === "filled"? "black":"transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const A = styled.a`
  text-decoration: none;
  color: black;
`
const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
    text-decoration:underline;
    margin: 0px 10px;
    cursor: pointer;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
    flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
    flex:2;
    display: flex;
`;
const Image = styled.img`
    width: 200px;
`;
const Details = styled.div`
    padding: 0px 30px;    
    display: flex;
    flex-direction: column;
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 25px;
`;
const ProductName = styled.span``;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    border: 0.3px solid gray;
`;
const ProductID = styled.span``;
const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  ${mobile({ margin: "15px 0px" })}
`;
const ProductQty = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1.5px;
    margin: 25px 2px;
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 33px 20px;
    height: 50vh;
    font-size: 18px;
`;
const SummaryTitle = styled.h1`
    font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    margin-top: 35px;
`;

const Cart = () => {
  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>
            <A href="/ProductList">Continue Shopping</A>
          </TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://images.pexels.com/photos/1936854/pexels-photo-1936854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <Details>
                  <ProductName>
                    <b>Product: </b> Le Soleil Dress
                  </ProductName>
                  <ProductID>
                    <b>ID: </b> 123456
                  </ProductID>
                  <ProductColor color="Yellow" />
                  <ProductSize>
                    <b>Size: </b> S
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductQty>2</ProductQty>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>Rs. 1590</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://images.pexels.com/photos/5444971/pexels-photo-5444971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <Details>
                  <ProductName>
                    <b>Product: </b> La Brise Dress
                  </ProductName>
                  <ProductID>
                    <b>ID: </b> 234567
                  </ProductID>
                  <ProductColor color="aliceblue" />
                  <ProductSize>
                    <b>Size: </b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductQty>1</ProductQty>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>Rs. 1299</ProductPrice>
                <br />
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle> ORDER SUMMARY </SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>Rs. 2889</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>Rs. 500</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>Rs. -500</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText> Total</SummaryItemText>
              <SummaryItemPrice>Rs. 2889</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart