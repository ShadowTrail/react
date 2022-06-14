import {Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
  height: 60px;
  width: 100%;
  ${mobile({ height:"50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  display: flex;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ flex: 1, justifyContent: "center" })}
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.1px solid;
  border-color: #5d5a5ab7;
  display: flex;
  align-items: center;
  margin-left: 15px;
  padding: 5px;
  ${mobile({display:"none"})}
`;
const Input = styled.input`
  border: none;
  outline:none;
  ${mobile({ width: "50px", height:"10px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ flex: 1, justifyContent: "center" })}
`;
const Logo = styled.a`
  font-weight: bolder;
  font-size: 28px;
  text-decoration: none;
  color: black;
  ${mobile({ fontSize: "24px", margin:"0px 2px 0px 35px"})}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex:1, justifyContent: "center", })}
`;
const MenuItem = styled.a`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  color: black;
  ${mobile({ fontSize: "8px" , marginLeft:"5px"})}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo href="/Home">L'AMOUR</Logo>
        </Center>
        <Right>
          <MenuItem href="/Register">
            REGISTER
          </MenuItem>
          <MenuItem href="Login">SIGN IN
          </MenuItem>
          <MenuItem href="Cart">
              <Badge badgeContent={2} color="primary">
                <ShoppingCartOutlined />
              </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
