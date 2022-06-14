import styled from "@emotion/styled"
import { EmailOutlined, Facebook, Instagram, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
     flex: 1;
     display: flex;
     flex-direction: column;
     padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
     margin-bottom: 30px;
`;
const List= styled.ul`
     margin: 0;
     padding: 0;
     list-style: none;
     display: flex;
     flex-wrap:wrap;
`;
const ListItem = styled.a`
     width: 50%;
     margin-bottom: 10px;
     color: black;
     text-decoration: none;
     cursor: pointer;
`;
const Logo = styled.h1``;
const Desc = styled.p`
     margin: 20px 0px;
`;
const SocialContainer = styled.div`
     display: flex;
`;
const SocialIcon = styled.a`
     width: 40px;
     height: 40px;
     border-radius: 50%;
     color: white;
     background-color: #${props=> props.color};
     display: flex;
     align-items: center;
     justify-content: center;
     margin-right: 20px;
     text-decoration: none;
     color: white;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;
const ContactItem = styled.div`
     align-items: center;
     display: flex;
     margin-bottom: 20px;
`;
const Payment = styled.img`
     width: 50%;
`
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>L'AMOUR</Logo>
        <Desc>
          Powerful and unconventional — L'Amour is here to redefine fashion and
          its tactics. Whether you are the aspirational go-getter, the classy
          working professional, or the devil introvert, we are here to style you
          from top-to-bottom, as you take the lead of crafting your life, like a
          complete stunner. At L'Amour, we dare you to be your own style icon!
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999" href="https://www.facebook.com/">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F" href="https://www.instagram.com/">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEC" href="https://twitter.com/">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023" href="https://in.pinterest.com/">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem href="/Home"> Home </ListItem>
          <ListItem href="/Cart"> Cart </ListItem>
          <ListItem href="/Products"> Women's Fashion </ListItem>
          <ListItem href="/Login"> My Account </ListItem>
          <ListItem> Order Tracking </ListItem>
          <ListItem href="/Register"> Register </ListItem>
          <ListItem> Wishlist </ListItem>
          <ListItem> Terms </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 602, Shishir House, 21,
          Mahatma Gandhi Marg, Some Palace, New Delhi - 110001
        </ContactItem>
        <ContactItem>
          {" "}
          <Phone style={{ marginRight: "10px" }} /> +91 12345 67890{" "}
        </ContactItem>
        <ContactItem>
          <EmailOutlined style={{ marginRight: "10px" }} /> contact@amour.com{" "}
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
}

export default Footer