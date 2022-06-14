import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/1021306/pexels-photo-1021306.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 25px;
  text-align: center;
  background-color: white;
  ${mobile({ width: "80%"})}
`;
const Form = styled.form`
  font-size: 24px;
  font-weight: 300;
  align-items: center;
  flex-wrap: wrap;
  ${mobile({ fontSize: "10px" })}
`;
const Title = styled.h1`
  text-align: center;
  ${mobile({ fontSize: "22px", marginTop:"5px" })}
`;
const Input = styled.input`
  flex: 1;
  min-width: 42%;
  flex-direction:column;
  margin: 20px 10px 2px 10px;
  padding: 10px;
  ${mobile({ minWidth: "245px", minHeight:"18px",
  fontSize: "12px" , padding:"5px"})}
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  ${mobile({ margin: "5px 0px" })}
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin-top: 15px;
  background-color: teal;
  color: white;
  cursor: pointer;
  ${mobile({ width: "30%", padding:"10px 10px"})}
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN UP</Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="E-mail" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm password" /><br/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY.</b>
          </Agreement><br/>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register