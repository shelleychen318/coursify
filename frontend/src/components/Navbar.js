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

const StyledLink = styled(Link)`
  color: var(--primary);
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLink to="/">
        <h1>coursify</h1>
      </StyledLink>
    </StyledNavbar>
  );
};

export default Navbar;
