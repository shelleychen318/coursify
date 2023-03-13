import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0.5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
