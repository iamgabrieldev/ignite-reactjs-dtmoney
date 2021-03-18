import styled from 'styled-components';

export const Container = styled.div`
  margin-top: -10rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem; 
  
  div {
    padding: 1.5rem 2rem;
    
    color: var(--text-title);
    
    border-radius: 0.25rem;
    
    background: var(--shape);
    
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    strong {
      margin-top: 1rem;
      
      display: block;
      
      font-size: 2rem;
      font-weight: 500;
      
      line-height: 3rem;
    }
    
    &:last-child {
      color: #FFF;
      
      background: var(--green);      
    }
  }   
`;
