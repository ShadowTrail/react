import { ArrowBackIosNew, ArrowForwardIos} from "@mui/icons-material"
import { useState } from "react";
import styled from "styled-components"
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: lightgray;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  &:hover{
    opacity: 1;
  }
  right: ${(props) => props.direction === "right" && "10px"};
  left: ${(props) => props.direction === "left" && "10px"};
  margin: auto;
  cursor: pointer;
  z-index: 2;
`;
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=> props.slideIndex * -100}vw);
`;
const Slide = styled.div`
    background-color: #${props=>props.bg};
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`;
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    height: 80%;
    padding: 50px;
    margin-top: 200px;
`;
const Title = styled.h1`
    font-size: 70px;
`;
const Desc = styled.p`
    font-size: 25px;
    margin: 40px 0px 100px 0px;
    letter-spacing: 3px;
    font-weight: 500;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;
const Slider = () => {
    const [ slideIndex, setSlideIndex ] = useState(0);
    const handleClick = (direction) => {
       if(direction==="left"){
          setSlideIndex(slideIndex > 0? slideIndex -1 : 2);
       } else{
          setSlideIndex(slideIndex < 2? slideIndex +1 : 0);
       }
    };
const A=styled.a`
    text-decoration: none;
    color: black;
`
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosNew />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>
               {item.desc}
              </Desc>
              <Button><A href="/ProductList">SHOP NOW</A></Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIos />
      </Arrow>
    </Container>
  );
}

export default Slider;