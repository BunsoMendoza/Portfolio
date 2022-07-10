import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  padding-top: calc(20% + 4vmin);
  background: #222831;
  height: 100vh;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  width: 18%;

  
  @media (max-width: 1402px) {
    width: 100%;
  }

  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 2rem 0rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #EEEEEE;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 1402px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #FFD369;
    }
  }
`;