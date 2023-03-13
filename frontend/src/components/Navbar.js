import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
`;

const StyledLogo = styled.h1`
  font-weight: 600;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/">
        <StyledLogo>coursify</StyledLogo>
      </Link>
    </StyledNavbar>
  );
};

export default Navbar;
