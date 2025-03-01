import styled from 'styled-components';

// Container do Header
export const HeaderContainer = styled.header`
  background-color: #fef6e4;
  color: #001858;
  padding: 20px 0;
  text-align: center;
  border-bottom: 3px solid #8bd3dd;
`;

// Título do Header
export const Title = styled.h1`
  color: #172c66;
  letter-spacing: 1px;
`;

// Container para os links ou botões de navegação
export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 15px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #f582ae;
  font-weight: bold;
  font-size: 1rem;
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: #001858;
    transform: scale(1.2);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Minha To-Do List</Title>
      <NavContainer>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Sobre</NavLink>
        <NavLink href="#c">Contato</NavLink>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
