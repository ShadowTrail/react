import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.555),
      rgba(253, 247, 247, 0.395)
    ),
    url("https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  height: 40%;
  padding: 25px;
  text-align: center;
  background-color: white;
  ${mobile({width : "75%"})}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  text-align: center;
  margin-bottom: 10px;
`;
const Input = styled.input`
  min-width: 350px;
  font-size: 15px;
  margin: 10px 0px;
  padding: 10px;
  ${mobile({ minWidth: "245px", fontSize:"12px"})}
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin: 15px 0px;
  background-color: teal;
  color: white;
  cursor: pointer;
  ${mobile({ width: "30%" })}
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>LOG IN</Button>
            <Link>Forgot Password?</Link>
            <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login