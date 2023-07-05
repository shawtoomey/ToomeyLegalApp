import styled from 'styled-components';
   
export const Box = styled.div`
  background: black;
  padding-bottom:60px;
  width: 100%;
  height: auto;
   
  @media (max-width: 1024px) {
    padding-bottom: 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    max-width: 1024px;
    margin: 0 auto;
`;
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 10px;

  
`;

   
export const Row = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }

`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
   
  &:hover {
      color: #5a3a9a;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  margin-bottom: 40px;
`;