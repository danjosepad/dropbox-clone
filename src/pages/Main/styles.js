import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: ${props => (props.error ? 'red' : '#7159c1')};

  small {
    display: block;
    font-size: 16px;
    color: #333;
  }
`;
