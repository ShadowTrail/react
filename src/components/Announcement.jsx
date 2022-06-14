import styled from "styled-components";

const Container = styled.div`
  height: 40px;
  background-color: #07abab;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping On Orders Above Rs.1200
    </Container>
  )
}

export default Announcement